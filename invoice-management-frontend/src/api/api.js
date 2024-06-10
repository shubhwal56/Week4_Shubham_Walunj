import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; 


// organization
export const createOrganization = (data) => axios.post(`${API_URL}/organizations`, data);
export const getOrganizations = () => axios.get(`${API_URL}/organizations`);

// customers
export const getCustomers = () => axios.get(`${API_URL}/customers`);
export const createCustomer = (data) => axios.post(`${API_URL}/customers`, data);

// sows
export const getSOWs = () => axios.get(`${API_URL}/sows`);
export const createSOW = (data) => axios.post(`${API_URL}/sows`, data);

// payments plan
export const getPaymentPlan = () => axios.get(`${API_URL}/payment-plan`);
export const createPaymentPlan = (data) => axios.post(`${API_URL}/payment-plan`, data);

// payments plan item
export const createPaymentPlanItem = (data) => axios.post(`${API_URL}/payment-plan-item`, data);

// invoices
export const getInvoices = () => axios.get(`${API_URL}/invoices/generate-from-sows`);
export const createInvoice = (data) => axios.post(`${API_URL}/invoices`, data);

// payments
export const getPayments = () => axios.get(`${API_URL}/payments`);

export const createPayment = (data) => axios.post(`${API_URL}/payments`, data);


