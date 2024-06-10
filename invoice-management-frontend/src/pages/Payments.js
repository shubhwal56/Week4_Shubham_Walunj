import React, { useEffect, useState } from 'react';
import { getPayments } from '../api/api';
import PaymentForm from '../components/PaymentForm';
import ListTable from '../components/ListTable';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await getPayments();
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments', error);
    }
  };

  return (
    <div>
      <h1>Payments</h1>
      <PaymentForm />
      <ListTable data={payments} />
    </div>
  );
};

export default Payments;
