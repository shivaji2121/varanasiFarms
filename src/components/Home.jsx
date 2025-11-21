import React from 'react';
import { ShoppingBag, TrendingUp, Users, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ShopHub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing products, enjoy seamless shopping, and experience the future of e-commerce.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">10K+</h3>
            <p className="text-gray-600">Products</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">50K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">99%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Electronics</h3>
              <p className="text-gray-600">Latest gadgets and tech accessories</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fashion</h3>
              <p className="text-gray-600">Trendy clothing and accessories</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Home & Garden</h3>
              <p className="text-gray-600">Everything for your home and garden</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sports & Fitness</h3>
              <p className="text-gray-600">Gear up for your active lifestyle</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Books & Media</h3>
              <p className="text-gray-600">Expand your knowledge and entertainment</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Beauty & Health</h3>
              <p className="text-gray-600">Care for yourself with premium products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
