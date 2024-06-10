

import { SOW } from '../models/sowModel';
import { Invoice } from '../models/invoiceModel';
import { InvoiceLineItem } from '../models/invoiceLineItemModel';
import { ItemModel } from '../models/sowPaymentPlanItemModel';
import { Sequelize } from 'sequelize';
import { Customer } from '../models/customerModel';

export const generateInvoices = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const sows = await SOW.findAll({
        where: Sequelize.where(
            Sequelize.fn('DATE', Sequelize.col('invoiceGenerationDate')),
            today.toISOString().split('T')[0] 
        ),
    });

    const invoices = [];
    for (const sow of sows) {
        const invoice = await Invoice.create({
            id: `INV_${sow.id}_${new Date().getTime()}`,
            customerId: sow.customerId,
            sowId: sow.id,
            status: 'Drafted',
            totalInvoiceValue: 0, 
            invoiceGenerationDate: today,
        });
        invoices.push(invoice);
    }

    return invoices;
};



export const getInvoices = async () => {
    return await Invoice.findAll({ include: [{ model: InvoiceLineItem, as: 'invoiceLineItems' }] });
};


export const createInvoiceLineItem = async (data: any) => {
    const invoiceLineItem = await InvoiceLineItem.create(data);
    const invoice = await Invoice.findByPk(data.invoiceId);
    if (invoice) {
        invoice.totalInvoiceValue += data.amount;
        await invoice.save();
    }
    return invoiceLineItem;
};

export const makePayment = async (invoiceId: string, amount: number) => {
    const invoice = await Invoice.findByPk(invoiceId);
    if (!invoice) {
        throw new Error('Invoice not found');
    }

    invoice.totalInvoiceValue -= amount;
    if (invoice.totalInvoiceValue <= 0) {
        invoice.status = 'Paid';
    }
    await invoice.save();

    return invoice;
};

export const createInvoice = async (data: any) => {
    try {
        const invoice = await Invoice.create(data);
        return invoice;
    } catch (error) {
        throw new Error('Error creating invoice');
    }
};
