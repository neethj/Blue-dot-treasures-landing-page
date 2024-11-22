import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about-us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, we're passionate about bringing the incredible benefits
              of Moringa to people worldwide. Our journey began in the lush farms
              of India, where we discovered the miracle of this extraordinary plant.
            </p>
            <p className="text-gray-600 mb-8">
              Today, we work directly with sustainable farmers to ensure the highest
              quality Moringa while supporting local communities and maintaining
              environmentally friendly practices.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect With Us</h3>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-emerald-100 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest updates, recipes, and exclusive offers.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}