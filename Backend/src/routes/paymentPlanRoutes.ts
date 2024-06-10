import express from 'express';
import { addPaymentPlan, getPaymentPlanList } from '../controller/paymentPlanController';

const router = express.Router();

router.post('/', addPaymentPlan);
router.get('/', getPaymentPlanList);

export default router;
