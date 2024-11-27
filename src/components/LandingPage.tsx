// src/components/LandingPage.tsx
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import About from './About';
import Benefits from './Benefits';
import DragDropSection from './DragDropSection';
import Header from './Header';
import Hero from './Hero';
import ImageWithLoading from './ImageWithLoading';
import LoadingFallback from './LoadingFallback';
import Products from './Products';

const LandingPage: React.FC = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ loadImmediately: true });
  const [heroRef, isHeroVisible] = useIntersectionObserver({ loadImmediately: true });
  const [aboutRef, isAboutVisible] = useIntersectionObserver({ loadImmediately: true });
  const [benefitsRef, isBenefitsVisible] = useIntersectionObserver({ loadImmediately: true });
  const [dragDropRef, isDragDropVisible] = useIntersectionObserver({ loadImmediately: true });
  const [productsRef, isProductsVisible] = useIntersectionObserver({ loadImmediately: true });
  const [imageWithLoadingRef, isImageWithLoadingVisible] = useIntersectionObserver({ loadImmediately: true });
  const [loadingFallbackRef, isLoadingFallbackVisible] = useIntersectionObserver({ loadImmediately: true });

  return (
    <div>
      <section ref={headerRef} style={{ opacity: isHeaderVisible ? 1 : 0 }}>
        <Header />
      </section>
      <section ref={heroRef} style={{ opacity: isHeroVisible ? 1 : 0 }}>
        <Hero />
      </section>
      <section ref={aboutRef} style={{ opacity: isAboutVisible ? 1 : 0 }}>
        <About />
      </section>
      <section ref={benefitsRef} style={{ opacity: isBenefitsVisible ? 1 : 0 }}>
        <Benefits />
      </section>
      <section ref={dragDropRef} style={{ opacity: isDragDropVisible ? 1 : 0 }}>
        <DragDropSection />
      </section>
      <section ref={productsRef} style={{ opacity: isProductsVisible ? 1 : 0 }}>
        <Products />
      </section>
      <section ref={imageWithLoadingRef} style={{ opacity: isImageWithLoadingVisible ? 1 : 0 }}>
        <ImageWithLoading src="path/to/image.jpg" alt="Description of image" />
      </section>
      <section ref={loadingFallbackRef} style={{ opacity: isLoadingFallbackVisible ? 1 : 0 }}>
        <LoadingFallback />
      </section>
    </div>
  );
};

export default LandingPage;