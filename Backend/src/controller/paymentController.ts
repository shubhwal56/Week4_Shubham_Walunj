import { Request, Response } from 'express';
import { createPayment, getPayments, updatePayment, deletePayment } from '../service/paymentService';

export const addPayment = async (req: Request, res: Response) => {
  try {
    const payment = await createPayment(req.body);
    res.json(payment);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getPaymentList = async (req: Request, res: Response) => {
  try {
    const payments = await getPayments();
    res.json(payments);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePaymentRecord = async (req: Request, res: Response) => {
  try {
    const message = await updatePayment(req.body);
    res.json({ message });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const removePayment = async (req: Request, res: Response) => {
  try {
    const message = await deletePayment(req.params.id);
    res.json({ message });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
