import express from 'express';
import { addPayment, getPaymentList, updatePaymentRecord, removePayment } from '../controller/paymentController';

const router = express.Router();

router.post('/payment', addPayment);
router.get('/payment', getPaymentList);
router.put('/payment/:id', updatePaymentRecord);
router.delete('/payment/:id', removePayment);

export default router;
