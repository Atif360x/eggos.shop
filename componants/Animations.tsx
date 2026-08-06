'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Animations() {
  useEffect(() => {
    // yahan apna wahi animation code likh jo animation.js mein likhna chahta tha
    gsap.from('#hero-heading', { opacity: 0, y: 20, duration: 1 });
    gsap.from('#card-1', { opacity: 0, y: 30, duration: 1, delay: 0.3 });
  }, []);

  return null;
}