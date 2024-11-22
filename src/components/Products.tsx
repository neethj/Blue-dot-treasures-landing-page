import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Pure Moringa Powder',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
    description: 'Organic moringa leaf powder, perfect for smoothies and cooking.'
  },
  {
    name: 'Moringa Capsules',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80',
    description: 'Convenient capsules for daily nutrition on the go.'
  },
  {
    name: 'Moringa Tea Blend',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80',
    description: 'Refreshing blend of moringa leaves with natural herbs.'
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="text-lg font-bold text-emerald-600">
                    ${product.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}