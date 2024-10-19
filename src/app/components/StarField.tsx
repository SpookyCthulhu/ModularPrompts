'use client'

import React, { useEffect, useRef, useState } from 'react';

interface StarProps {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface StarFieldProps {
  starCount: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Star: React.FC<StarProps> = ({ x, y, size, opacity }) => (
  <div 
    className="absolute bg-white rounded-full" 
    style={{
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: opacity
    }}
  />
);

const StarField: React.FC<StarFieldProps> = ({ starCount, className, style, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    const generateStars = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const { width, height } = container.getBoundingClientRect();
        const centerX = width / 2;
        const centerY = height / 2;
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

        const newStars: StarProps[] = [];

        while (newStars.length < starCount) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );

          const probability = Math.pow(distanceFromCenter / maxDistance, 2);

          if (Math.random() < probability) {
            // Generate size between 1 and 10 pixels
            const size = Math.random() * 64 + 8;
            
            // Calculate opacity based on size (larger stars are more transparent)
            // Size 1 will have opacity 0.8, size 10 will have opacity 0.1
            const opacity = 0.9 - (size - 1) * 0.02;

            newStars.push({ x, y, size, opacity });
          }
        }

        setStars(newStars);
      }
    };

    generateStars();

    window.addEventListener('resize', generateStars);

    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, [starCount]);

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className || ''}`}
      style={{ ...style, overflow: 'hidden' }}
    >
      {/* Star layer */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <Star key={index} {...star} />
        ))}
      </div>
      
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StarField;
