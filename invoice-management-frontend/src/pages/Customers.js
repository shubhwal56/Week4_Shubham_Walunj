import React, { useEffect, useState } from 'react';
import { getCustomers } from '../api/api';
import CustomerForm from '../components/CustomerForm';
import ListTable from '../components/ListTable';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await getCustomers();
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers', error);
    }
  };

  return (
    <div>
      <h1>Customers</h1>
      <CustomerForm />
      <ListTable data={customers} />
    </div>
  );
};

export default Customers;
