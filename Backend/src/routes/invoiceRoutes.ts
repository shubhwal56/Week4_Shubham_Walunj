
import { Router } from 'express';
import { generateInvoicesController, getInvoicesController, createInvoiceLineItemController, makePaymentController, createInvoiceController } from '../controller/invoiceController';
import { getInvoices } from '../service/invoiceService';

const router = Router();

router.post('/', generateInvoicesController);
router.get('/', getInvoicesController);
router.post('/line-items', createInvoiceLineItemController); 
router.post('/payments', makePaymentController); 
router.post('/', createInvoiceController);

export default router;
