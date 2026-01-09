/* eslint-disable no-unused-vars */
/* cspell:disable */
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import CreativeJourney from './components/CreativeJourney';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-[#050505] text-white min-h-screen selection:bg-orange-500/30 font-sans">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[100]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <AmbientBackground />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Capabilities /> 
        <CreativeJourney />
        <Footer />
      </div>
    </div>
  );
}

export default App;