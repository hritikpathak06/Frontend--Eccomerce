// Error.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const Error = () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/" className="home-button">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
