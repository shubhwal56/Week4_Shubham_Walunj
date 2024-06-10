import { Request, Response } from 'express';
import { createPaymentPlan, getPaymentPlans } from '../service/paymentPlanService';

export const addPaymentPlan = async (req: Request, res: Response) => {
  try {
    const plan = await createPaymentPlan(req.body);
    res.json(plan);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getPaymentPlanList = async (req: Request, res: Response) => {
  try {
    const plans = await getPaymentPlans();
    res.json(plans);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
