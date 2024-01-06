// NoProductInCart.js

import React from 'react';
import { Link } from 'react-router-dom';

const NoProductCart = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-12 w-12 mx-auto text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <h2 className="mt-4 text-xl font-semibold text-gray-700">
          Your cart is empty
        </h2>
        <p className="mt-2 text-gray-500">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link
          to="/products"
          className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default NoProductCart;
