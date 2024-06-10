// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Organizations from './pages/Organizations';
import Customers from './pages/Customers';
import SOWs from './pages/SOWs';
import Invoices from './pages/Invoices';
import Payments from './pages/Payments';
import Header from './components/Header';
import './styles/styles.css';
import OrganizationForm from './components/OrganizationForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/organizations/add" element={<OrganizationForm />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/sows" element={<SOWs />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Router>
  );
}

export default App;
