import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/organizations">Organizations</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/sows">SOWs</Link></li>
          <li><Link to="/invoices">Invoices</Link></li>
          <li><Link to="/payments">Payments</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
