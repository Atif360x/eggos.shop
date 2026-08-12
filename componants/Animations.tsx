'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Animations() {
  useEffect(() => {
    // yahan apna wahi animation code likh jo animation.js mein likhna chahta tha
    gsap.from('#animate',
      { opacity: 0,
        y: 20,
        duration: 1
      });

  }, []);

  return null;
}