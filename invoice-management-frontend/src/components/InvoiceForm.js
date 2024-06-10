import React, { useState } from 'react';
import { createInvoice } from '../api/api';

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    organizationId: '',
    customerId: '',
    sowId: '',
    issueDate: '',
    dueDate: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInvoice(formData);
      alert('Invoice created successfully');
    } catch (error) {
      console.error('Error creating invoice', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="invoiceNumber" placeholder="Invoice Number" onChange={handleChange} />
      <input type="text" name="organizationId" placeholder="Organization ID" onChange={handleChange} />
      <input type="text" name="customerId" placeholder="Customer ID" onChange={handleChange} />
      <input type="text" name="sowId" placeholder="SOW ID" onChange={handleChange} />
      <input type="date" name="issueDate" placeholder="Issue Date" onChange={handleChange} />
      <input type="date" name="dueDate" placeholder="Due Date" onChange={handleChange} />
      <input type="text" name="amount" placeholder="Amount" onChange={handleChange} />
      <button type="submit">Create Invoice</button>
    </form>
  );
};

export default InvoiceForm;
