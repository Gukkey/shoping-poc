import React, { useRef, useEffect, useState } from 'react';

function ScrollingCarousel({ 
  children, 
  direction = 'left', 
  speed = 1, 
  className = '' 
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    const animate = () => {
      if (isHovered || isTouched) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const containerWidth = container.offsetWidth;
      const contentWidth = content.scrollWidth;
      
      // Only animate if content exceeds container width
      if (contentWidth > containerWidth) {
        const moveDistance = speed * 0.5; // Adjust speed multiplier as needed
        
        if (direction === 'left') {
          scrollPositionRef.current += moveDistance;
          if (scrollPositionRef.current >= contentWidth / 2) {
            scrollPositionRef.current = 0;
          }
        } else {
          scrollPositionRef.current -= moveDistance;
          if (scrollPositionRef.current <= -(contentWidth / 2)) {
            scrollPositionRef.current = 0;
          }
        }
        
        content.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, speed, isHovered, isTouched]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = () => setIsTouched(true);
  const handleTouchEnd = () => setIsTouched(false);

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        ref={contentRef}
        className="flex gap-2 w-max"
        style={{ willChange: 'transform' }}
      >
        {/* Duplicate children for seamless loop */}
        {children}
        {children}
      </div>
    </div>
  );
}

export default ScrollingCarousel;