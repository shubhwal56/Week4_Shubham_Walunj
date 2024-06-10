import { Payment } from '../models/paymentModel';

const createPayment = async (data: any) => {
  return await Payment.create(data);
};

const getPayments = async () => {
  return await Payment.findAll();
};

const updatePayment = async (data: any) => {
  const { id, ...paymentData } = data;
  await Payment.update(paymentData, { where: { id } });
  return 'Payment updated successfully';
};

const deletePayment = async (id: string) => {
  await Payment.destroy({ where: { id } });
  return 'Payment deleted successfully';
};

export { createPayment, getPayments, updatePayment, deletePayment };
