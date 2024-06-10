import { ItemModel } from '../models/sowPaymentPlanItemModel';

export const createInvoiceLineItem = async (data: any) => {
    try {
        const invoiceLineItem = await ItemModel.create(data);
        return invoiceLineItem;
    } catch (error : any) {
        throw new Error(`Error creating invoice line item: ${error.message}`);
    }
};
