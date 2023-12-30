import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container m-auto py-8 flex items-center flex-wrap justify-evenly sm:justify-center">
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="mb-2">123 Main St, City</p>
          <p className="mb-2">Email: info@example.com</p>
          <p>Phone: +1 234-567-8901</p>
        </div>

        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
