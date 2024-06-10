import { Request, Response } from 'express';
import { createInvoiceLineItem } from '../service/PaymentPlanItemModelService';


export const createPaymentPlanItemController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const invoiceLineItem = await createInvoiceLineItem(data);
        res.status(201).json(invoiceLineItem);
    } catch (error : any) {
        res.status(500).send({ error: error.message });
    }
};