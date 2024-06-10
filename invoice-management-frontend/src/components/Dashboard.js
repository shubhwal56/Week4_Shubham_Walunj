// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/organizations" className="dashboard-link">Organization Management</Link>
        <Link to="/customers" className="dashboard-link">Customer Management</Link>
        <Link to="/sows" className="dashboard-link">SOW Management</Link>
        <Link to="/invoices" className="dashboard-link">Invoice Management</Link>
        <Link to="/payments" className="dashboard-link">Payment Tracking</Link>
      </div>
    </div>
  );
};

export default Dashboard;
