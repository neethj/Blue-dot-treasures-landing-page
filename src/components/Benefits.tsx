import React from 'react';
import {
  Heart,
  Brain,
  Sprout,
  Shield,
  Battery,
  Leaf
} from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Rich in antioxidants that support cardiovascular health'
  },
  {
    icon: Brain,
    title: 'Cognitive Function',
    description: 'Contains nutrients that support brain health and memory'
  },
  {
    icon: Sprout,
    title: 'Anti-Inflammatory',
    description: 'Natural anti-inflammatory properties'
  },
  {
    icon: Shield,
    title: 'Immune Support',
    description: 'Packed with vitamins A, C, and E to boost immunity'
  },
  {
    icon: Battery,
    title: 'Energy Boost',
    description: 'Natural energy enhancement without caffeine'
  },
  {
    icon: Leaf,
    title: 'Digestive Health',
    description: 'High in fiber for optimal digestive function'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The Power of Moringa</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Moringa is nature's multivitamin, packed with over 90 nutrients, 46 antioxidants,
            and all 9 essential amino acids. Discover why it's called the "Miracle Tree."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-xl border border-gray-200 hover:border-emerald-500 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}