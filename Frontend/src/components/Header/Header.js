// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Title */}
        <Link to="/" className="text-2xl font-bold">
          Get Your Guide
        </Link>

        {/* Navigation Menu */}
        <nav className="flex space-x-6 font-bold">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/features" className="hover:text-gray-300">
            Features
          </Link>
          <Link to="/blog" className="hover:text-gray-300">
            Blog
          </Link>
          <Link to="/admin" className="hover:text-gray-300">
           Admin Panel
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
