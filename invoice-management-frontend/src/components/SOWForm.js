import React, { useState } from 'react';
import { createSOW } from '../api/api';

const SOWForm = () => {
  const [formData, setFormData] = useState({
    sowName: '',
    description: '',
    customerId: '',
    startDate: '',
    endDate: '',
    totalAmount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSOW(formData);
      alert('SOW created successfully');
    } catch (error) {
      console.error('Error creating SOW', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="sowName" placeholder="SOW Name" onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} />
      <input type="text" name="customerId" placeholder="Customer ID" onChange={handleChange} />
      <input type="date" name="startDate" placeholder="Start Date" onChange={handleChange} />
      <input type="date" name="endDate" placeholder="End Date" onChange={handleChange} />
      <input type="text" name="totalAmount" placeholder="Total Amount" onChange={handleChange} />
      <button type="submit">Create SOW</button>
    </form>
  );
};

export default SOWForm;
