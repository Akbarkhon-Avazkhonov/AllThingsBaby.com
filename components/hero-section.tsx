'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !glowRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update glow position
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;

      // Calculate cradle tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const diffX = (x - centerX) / centerX;
      const diffY = (y - centerY) / centerY;

      const rotateX = diffY * 5;
      const rotateY = diffX * 5;

      const cradle = containerRef.current.querySelector('[data-cradle]') as HTMLElement;
      if (cradle) {
        cradle.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`;
      }
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-background via-background to-background/80 overflow-hidden flex items-center justify-center"
    >
      {/* Animated Glow */}
      <div
        ref={glowRef}
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{ marginLeft: '-192px', marginTop: '-192px' }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Butterfly 1 */}
        <div className="absolute top-20 left-10 float-slow">
          <svg width="48" height="48" viewBox="0 0 48 48" className="text-accent">
            <path
              fill="currentColor"
              d="M24 24c-2 0-4-1-5-3l-3-6c-1-2 0-4 2-5s4 0 5 2l3 6c1 2 0 4-2 5zm0 0c2 0 4-1 5-3l3-6c1-2 0-4-2-5s-4 0-5 2l-3 6c-1 2 0 4 2 5z"
            />
          </svg>
        </div>

        {/* Floating Leaf 1 */}
        <div className="absolute top-1/3 right-16 float-slower opacity-60">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary/40">
            <path
              fill="currentColor"
              d="M20 2c0 0-10 8-10 18c0 10 8 18 10 18s10-8 10-18c0-10-8-18-10-18z"
            />
          </svg>
        </div>

        {/* Floating Leaf 2 */}
        <div className="absolute bottom-1/4 left-1/4 float-slow opacity-50">
          <svg width="36" height="36" viewBox="0 0 40 40" className="text-primary/30">
            <path
              fill="currentColor"
              d="M20 2c0 0-10 8-10 18c0 10 8 18 10 18s10-8 10-18c0-10-8-18-10-18z"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Cradle */}
        <div
          data-cradle
          className="mb-8 mx-auto w-48 h-48 sm:w-64 sm:h-64 mb-12 transition-transform duration-200"
        >
          <svg
            viewBox="0 0 240 200"
            className="w-full h-full filter drop-shadow-lg"
          >
            {/* Cradle Base */}
            <ellipse cx="120" cy="160" rx="80" ry="20" fill="#E8D4C4" opacity="0.3" />

            {/* Cradle Frame */}
            <path
              d="M 60 100 Q 60 80 80 70 L 160 70 Q 180 80 180 100"
              stroke="#8BBF9F"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />

            {/* Cradle Rockers */}
            <path
              d="M 50 140 Q 60 160 80 165"
              stroke="#C4A57B"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 190 140 Q 180 160 160 165"
              stroke="#C4A57B"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />

            {/* Cradle Fabric */}
            <rect
              x="70"
              y="85"
              width="100"
              height="60"
              rx="8"
              fill="#FFB7C5"
              opacity="0.8"
            />

            {/* Bumper */}
            <circle cx="120" cy="110" r="8" fill="#F4A261" opacity="0.6" />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4 leading-tight text-balance">
          Pure Beginnings.
          <span className="text-primary"> Naturally.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
          Eco-friendly baby products designed with love for your little one's journey. Organic, sustainable, and beautifully crafted.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl font-display text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Shop
          </button>
          <button className="bg-primary/10 hover:bg-primary/20 text-primary px-8 py-4 rounded-xl font-display text-lg transition-all duration-300 border-2 border-primary">
            Learn Our Story
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="text-primary font-display text-xl">✓</span>
            <span>100% Organic Cotton</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-display text-xl">✓</span>
            <span>Eco-Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-display text-xl">✓</span>
            <span>Non-Toxic Dyes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
