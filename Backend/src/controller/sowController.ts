import { Request, Response } from 'express';
import { createSOW, getSOWs, updateSOW, deleteSOW } from '../service/sowService';
import { SOW } from '../models/sowModel';

const addSOW = async (req: Request, res: Response): Promise<void> => {
  try {
    const sowData: SOW = req.body;
    const newSOW = await createSOW(sowData);
    res.status(201).json(newSOW);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

const getSOWList = async (req: Request, res: Response): Promise<void> => {
  try {
    const sows = await getSOWs();
    res.status(200).json(sows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

const updateSOWRecord = async (req: Request, res: Response): Promise<void> => {
  try {
    const sowData: SOW = req.body;
    const result = await updateSOW(sowData);
    res.status(200).json({ message: result });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

const removeSOW = async (req: Request, res: Response): Promise<void> => {
  try {
    const sowId: string = req.params.id;
    const result = await deleteSOW(sowId);
    res.status(200).json({ message: result });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export { addSOW, getSOWList, updateSOWRecord, removeSOW };
