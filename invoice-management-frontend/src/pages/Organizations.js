import React, { useEffect, useState } from 'react';
import { getOrganizations } from '../api/api';
import ListTable from '../components/ListTable';
import { useNavigate } from 'react-router-dom';

const Organizations = () => {
  const [organizations, setOrganizations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      const response = await getOrganizations();
      setOrganizations(response.data);
    } catch (error) {
      console.error('Error fetching organizations', error);
    }
  };

  const handleAddClick = () => {
    navigate('/organizations/add');
  };

  return (
    <div>
      <h1>Organizations</h1>
      <button onClick={handleAddClick}>Add +</button>
      <ListTable data={organizations} />
    </div>
  );
};

export default Organizations;
