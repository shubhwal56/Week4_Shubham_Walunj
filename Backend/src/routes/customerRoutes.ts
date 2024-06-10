import express from 'express';
import { addCustomer, getCustomerList, updateCustomerRecord, removeCustomer } from '../controller/customerController';

const router = express.Router();

router.post('/', addCustomer);
router.get('/', getCustomerList);
router.put('/:id', updateCustomerRecord);
router.delete('/:id', removeCustomer);


export default router;
