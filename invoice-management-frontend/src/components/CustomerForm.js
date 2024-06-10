import React, { useState } from 'react';
import { createCustomer } from '../api/api';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    gstNo: '',
    panNo: '',
    legalCustomerName: '',
    invoiceTemplateId: '',
    shortName: '',
    contactName: '',
    displayName: '',
    email: '',
    addressId: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomer(formData);
      alert('Customer created successfully');
    } catch (error) {
      console.error('Error creating customer', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="gstNo" placeholder="GST No" onChange={handleChange} />
      <input type="text" name="panNo" placeholder="PAN No" onChange={handleChange} />
      <input type="text" name="legalCustomerName" placeholder="Legal Customer Name" onChange={handleChange} />
      <input type="text" name="invoiceTemplateId" placeholder="Invoice Template ID" onChange={handleChange} />
      <input type="text" name="shortName" placeholder="Short Name" onChange={handleChange} />
      <input type="text" name="contactName" placeholder="Contact Name" onChange={handleChange} />
      <input type="text" name="displayName" placeholder="Display Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="addressId" placeholder="Address ID" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CustomerForm;
