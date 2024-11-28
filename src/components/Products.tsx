import { FaShoppingCart } from 'react-icons/fa';

const products = [
  {
    name: 'Moringa Powder',
    image: 'path/to/moringa-powder.jpg',
    price: 19.99,
    description: 'Refreshing blend of moringa leaves with natural herbs.'
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        
        <div className="flex justify-center">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 max-w-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <span className="text-xl font-bold text-emerald-600">
                    ${product.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-colors">
                  <FaShoppingCart className="w-5 h-5" />
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