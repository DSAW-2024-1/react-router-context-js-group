// pages/OverviewPage.js

import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const OverviewPage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Overview</h1>
      <p>Welcome, {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default OverviewPage;
