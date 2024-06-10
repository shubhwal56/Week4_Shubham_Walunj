import { Router } from 'express';
import { createPaymentPlanItemController } from '../controller/sowPaymentPlanController';

const router = Router();

router.post('/', createPaymentPlanItemController);

export default router;
