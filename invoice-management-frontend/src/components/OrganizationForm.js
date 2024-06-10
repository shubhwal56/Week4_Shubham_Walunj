import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrganization } from '../api/api';

const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    gstNo: '',
    panNo: '',
    legalOrganizationName: '',
    invoiceTemplateId: '',
    shortName: '',
    contactName: '',
    displayName: '',
    email: '',
    addressId: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrganization(formData);
      navigate('/organizations');
    } catch (error) {
      console.error('Error creating organization', error);
    }
  };

  const handleCancel = () => {
    navigate('/organizations');
  };

  return (
    <div>
      <h1>Add Organization</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="gstNo" value={formData.gstNo} onChange={handleChange} placeholder="GST No" required />
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} placeholder="PAN No" required />
        <input type="text" name="legalOrganizationName" value={formData.legalOrganizationName} onChange={handleChange} placeholder="Legal Organization Name" required />
        <input type="text" name="invoiceTemplateId" value={formData.invoiceTemplateId} onChange={handleChange} placeholder="Invoice Template ID" required />
        <input type="text" name="shortName" value={formData.shortName} onChange={handleChange} placeholder="Short Name" required />
        <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} placeholder="Contact Name" required />
        <input type="text" name="displayName" value={formData.displayName} onChange={handleChange} placeholder="Display Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="addressId" value={formData.addressId} onChange={handleChange} placeholder="Address ID" required />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default OrganizationForm;
