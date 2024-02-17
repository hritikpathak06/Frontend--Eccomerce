import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:order-2 mb-4 md:mb-0">
          <nav className="flex flex-wrap justify-center md:justify-end">
            <a href="/" className="text-gray-300 hover:text-white px-2 py-1">
              Home
            </a>
            <a
              href="/products"
              className="text-gray-300 hover:text-white px-2 py-1"
            >
              Products
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white px-2 py-1"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="md:order-1 text-center md:text-left">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
        <div className="md:order-3 text-center md:text-right">
          <p className="text-gray-500">E-2, Mayur Vihar, Ashoka Garden</p>
          <p className="text-gray-500">phritik06@gmail.com</p>
          <p className="text-gray-500">+91 95083-18852</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
