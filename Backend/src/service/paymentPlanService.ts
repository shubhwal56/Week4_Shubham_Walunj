import { PaymentPlan } from '../models/sowPaymentPlanModel';

async function createPaymentPlan(planData: any): Promise<PaymentPlan> {
  try {
    const newPlan = await PaymentPlan.create(planData);
    return newPlan;
  } catch (err: any) {
    throw err;
  }
}

async function getPaymentPlans(): Promise<PaymentPlan[]> {
  try {
    const plans = await PaymentPlan.findAll();
    return plans;
  } catch (err: any) {
    throw err;
  }
}

export { createPaymentPlan, getPaymentPlans };
