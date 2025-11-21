import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ShopHub</span>
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted partner in online shopping
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At ShopHub, we strive to revolutionize the online shopping experience by providing a seamless,
                secure, and enjoyable platform for customers to discover and purchase premium products.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
                  <p className="text-gray-600">
                    Curated selection of top-rated products from trusted brands worldwide.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Lightning-fast shipping with real-time tracking for all your orders.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">
                    Dedicated customer service team ready to help you anytime, anywhere.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Shopping</h3>
                  <p className="text-gray-600">
                    Advanced security measures to protect your personal and payment information.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to make online shopping more accessible and enjoyable, ShopHub has grown
                from a small startup to a leading e-commerce platform. We believe in putting our customers first
                and continuously improving our services to meet their evolving needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
