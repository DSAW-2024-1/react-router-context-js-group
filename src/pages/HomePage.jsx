// pages/HomePage.js

import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome, {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
