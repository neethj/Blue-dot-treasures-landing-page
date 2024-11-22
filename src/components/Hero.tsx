import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80"
          alt="Moringa leaves background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Nature's Superfood for a
            <span className="block text-emerald-400">Healthier You</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
            Discover the ancient wisdom of Moringa, packed with nutrients to enhance your daily wellness journey.
          </p>
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg hover:bg-emerald-600 transition-colors">
            Explore Benefits
          </button>
        </div>
      </div>
    </div>
  );
}