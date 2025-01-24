"use client";

import Vanta from 'vanta/dist/vanta.birds.min';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import MainContent from './components/MainContent';

export default function Home() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = Vanta({
      el: vantaRef.current,
      THREE: THREE,
      backgroundColor: "var(--background)",
     
      color1: 0xff1e56,         // Rosa vibrante
      color2: 0xff8383,         // Rosa mais suave
      birdSize: 1.5,            // Tamanho dos pássaros
      wingSpan: 20,             // Alcance das asas
      speedLimit: 5,   
      
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        ref={vantaRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <MainContent />
    </div>
  );
}
