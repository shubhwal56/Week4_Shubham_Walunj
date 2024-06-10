import { Request, Response } from 'express';
import { generateInvoices, getInvoices, createInvoiceLineItem, makePayment,createInvoice } from '../service/invoiceService';


export const generateInvoicesController = async (req: Request, res: Response) => {
    try {
        const invoices = await generateInvoices();
        res.status(201).json(invoices);
    } catch (error: any) {
        res.status(500).send({ error: error.message });
    }
};

export const getInvoicesController = async (req: Request, res: Response) => {
    try {
        const invoices = await getInvoices();
        res.status(200).json(invoices);
    } catch (error: any) {
        res.status(500).send({ error: error.message });
    }
};

export const createInvoiceLineItemController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const invoiceLineItem = await createInvoiceLineItem(data);
        res.status(201).json(invoiceLineItem);
    } catch (error: any) {
        res.status(500).send({ error: error.message });
    }
};

export const makePaymentController = async (req: Request, res: Response) => {
    try {
        const { invoiceId, amount } = req.body;
        await makePayment(invoiceId, amount);
        res.status(200).send({ message: 'Payment successful' });
    } catch (error: any) {
        res.status(500).send({ error: error.message });
    }
};

export const createInvoiceController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const invoice = await createInvoice(data);
        res.status(201).json(invoice);
    } catch (error: any) {
        res.status(500).send({ error: error.message });
    }
};