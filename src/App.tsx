// src/App.tsx
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import LoadingFallback from './components/LoadingFallback';

// Lazy loaded components with unique names
const LazyHero = lazy(() => import('./components/Hero'));
const LazyDragDropSection = lazy(() => import('./components/DragDropSection'));
const LazyBenefits = lazy(() => import('./components/Benefits')); 
const LazyProducts = lazy(() => import('./components/Products'));
const LazyAbout = lazy(() => import('./components/About'));

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <LazyHero />
        <LazyDragDropSection />
        <LazyBenefits />
        <LazyProducts />
        <LazyAbout />
      </Suspense>
    </div>
  );
}

export default App;