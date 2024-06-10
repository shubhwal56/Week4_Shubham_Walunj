import React, { useEffect, useState } from 'react';
import { getSOWs } from '../api/api';
import SOWForm from '../components/SOWForm';
import ListTable from '../components/ListTable';

const SOWs = () => {
  const [sows, setSows] = useState([]);

  useEffect(() => {
    fetchSOWs();
  }, []);

  const fetchSOWs = async () => {
    try {
      const response = await getSOWs();
      setSows(response.data);
    } catch (error) {
      console.error('Error fetching SOWs', error);
    }
  };

  return (
    <div>
      <h1>SOWs</h1>
      <SOWForm />
      <ListTable data={sows} />
    </div>
  );
};

export default SOWs;
