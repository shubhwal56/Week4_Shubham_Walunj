import React, { useEffect, useState } from 'react';
import { getInvoices } from '../api/api';
import InvoiceForm from '../components/InvoiceForm';
import ListTable from '../components/ListTable';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await getInvoices();
      setInvoices(response.data);
    } catch (error) {
      console.error('Error fetching invoices', error);
    }
  };

  return (
    <div>
      <h1>Invoices</h1>
      <InvoiceForm />
      <ListTable data={invoices} />
    </div>
  );
};

export default Invoices;
