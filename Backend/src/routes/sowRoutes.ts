import express from 'express';
import { addSOW, getSOWList, updateSOWRecord, removeSOW } from '../controller/sowController';

const router = express.Router();

router.post('/', addSOW); 
router.get('/', getSOWList); 
router.put('/', updateSOWRecord); 
router.delete('/:id', removeSOW); 

export default router;
