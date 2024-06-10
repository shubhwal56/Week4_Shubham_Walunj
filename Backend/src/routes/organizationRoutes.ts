import express from 'express';
import { addOrganization, getOrganizationList, updateOrganizationRecord, removeOrganization } from '../controller/organizationController';

const router = express.Router();

router.post('/', addOrganization);
router.get('/', getOrganizationList);
router.put('/organizations/:id', updateOrganizationRecord);
router.delete('/organizations/:id', removeOrganization);

export default router;
