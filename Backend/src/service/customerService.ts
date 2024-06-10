import { Customer } from '../models/customerModel';

const createCustomer = async (data: any) => {
  return await Customer.create(data);
};

const getCustomers = async () => {
  return await Customer.findAll();
};

const updateCustomer = async (data: any) => {
  const { id, ...customerData } = data;
  await Customer.update(customerData, { where: { id } });
  return 'Customer updated successfully';
};

const deleteCustomer = async (id: string) => {
  await Customer.destroy({ where: { id } });
  return 'Customer deleted successfully';
};

export { createCustomer, getCustomers, updateCustomer, deleteCustomer };
