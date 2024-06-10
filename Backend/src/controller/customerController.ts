import { Request, Response } from 'express';
import { createCustomer, getCustomers, updateCustomer, deleteCustomer } from '../service/customerService';

export const addCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await createCustomer(req.body);
    res.json(customer);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCustomerList = async (req: Request, res: Response) => {
  try {
    const customers = await getCustomers();
    res.json(customers);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCustomerRecord = async (req: Request, res: Response) => {
  try {
    const message = await updateCustomer(req.body);
    res.json({ message });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const removeCustomer = async (req: Request, res: Response) => {
  try {
    const message = await deleteCustomer(req.params.id);
    res.json({ message });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
