// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

type IntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  loadImmediately?: boolean; // New option
};

type IntersectionResult = [React.RefObject<HTMLElement>, boolean];

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {}
): IntersectionResult {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (options.loadImmediately) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: options.root ?? null,
        rootMargin: options.rootMargin ?? '0px',
        threshold: options.threshold ?? 0
      }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isVisible];
}