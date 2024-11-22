// src/components/ImageWithLoading.tsx
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithLoading({ src, alt, className }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}