import { SOW } from '../models/sowModel';

async function createSOW(sowData: any): Promise<SOW> {
  try {
    const newSOW = await SOW.create(sowData);
    return newSOW;
  } catch (err: any) {
    throw err;
  }
}

async function getSOWs(): Promise<SOW[]> {
  try {
    const sows = await SOW.findAll();
    return sows;
  } catch (err: any) {
    throw err;
  }
}

async function updateSOW(sowData: any): Promise<string> {
  try {
    const sowEntity = await SOW.findByPk(sowData.id);
    if (!sowEntity) {
      return "SOW not found!";
    }
    await sowEntity.update(sowData);
    return "SOW updated successfully";
  } catch (err: any) {
    return `Error updating SOW due to ${err.message}`;
  }
}

async function deleteSOW(id: string): Promise<string> {
  try {
    const sowEntity = await SOW.findByPk(id);
    if (!sowEntity) {
      return "SOW not found!";
    }
    await sowEntity.destroy();
    return "SOW deleted successfully";
  } catch (err: any) {
    return `Error deleting SOW due to ${err.message}`;
  }
}

export { createSOW, getSOWs, updateSOW, deleteSOW };
