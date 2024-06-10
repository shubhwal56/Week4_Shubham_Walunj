import React, { useState } from 'react';
import { createPayment } from '../api/api';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    paymentNumber: '',
    invoiceId: '',
    amount: '',
    paymentDate: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPayment(formData);
      alert('Payment recorded successfully');
    } catch (error) {
      console.error('Error recording payment', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="paymentNumber" placeholder="Payment Number" onChange={handleChange} />
      <input type="text" name="invoiceId" placeholder="Invoice ID" onChange={handleChange} />
      <input type="text" name="amount" placeholder="Amount" onChange={handleChange} />
      <input type="date" name="paymentDate" placeholder="Payment Date" onChange={handleChange} />
      <input type="text" name="paymentMethod" placeholder="Payment Method" onChange={handleChange} />
      <button type="submit">Record Payment</button>
    </form>
  );
};

export default PaymentForm;
