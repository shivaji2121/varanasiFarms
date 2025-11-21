import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ShopHub
              </span>
            </Link>
          </div>

          <nav className="flex items-center space-x-8">
            <Link to="/home" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
             
            </div>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-br from-indigo-500 to-purple-600  text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
