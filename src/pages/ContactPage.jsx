// pages/ContactPage.js

import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ContactPage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Contact</h1>
      <p>Welcome, {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ContactPage;
