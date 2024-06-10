import { Request, Response } from 'express';
import { createOrganization, getOrganizations, updateOrganization, deleteOrganization } from '../service/organizationService';

export const addOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await createOrganization(req.body);
    res.json(organization);
  } catch (err: any) {
    console.error('Error adding organization:', err);
    res.status(500).json({ error: err.message });
  }
};


export const getOrganizationList = async (req: Request, res: Response) => {
  try {
    const organizations = await getOrganizations();
    res.json(organizations);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateOrganizationRecord = async (req: Request, res: Response) => {
  try {
    const message = await updateOrganization(req.body);
    res.json({ message });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const removeOrganization = async (req: Request, res: Response) => {
  try {
    const message = await deleteOrganization(req.params.id);
    res.json({ message });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
