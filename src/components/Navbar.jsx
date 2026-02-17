// src/components/Navbar.jsx
/* eslint-disable no-unused-vars */
/* cspell:disable */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hexagon, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Multiverse', href: '#multiverse' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 md:pt-6 pointer-events-none">
      
      <motion.nav 
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className={`
          pointer-events-auto flex items-center justify-between font-sans transition-all duration-500
          ${scrolled 
            // OPTIMASI: Di HP, navbar nggak pake efek kaca blur (bg-[#0a0a0a]/95), tapi warna solid biar enteng
            ? 'bg-[#0a0a0a]/95 md:bg-[#0a0a0a]/80 md:backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full py-3 px-5 md:px-8 w-full max-w-4xl' 
            : 'bg-transparent border-transparent py-2 px-2 md:px-14 w-full max-w-[1440px]'} 
        `}
      >
        
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors shadow-inner">
             <Hexagon size={16} className="text-orange-500 fill-orange-500/20 group-hover:fill-orange-500 transition-colors" />
          </div>
          <span className="text-sm md:text-base font-bold text-white tracking-widest uppercase hidden sm:block">
            DAW!<span className="text-orange-500">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onMouseEnter={() => setHoveredPath(item.name)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
            >
              <span className="relative z-10">{item.name}</span>
              {hoveredPath === item.name && (
                <motion.div
                  layoutId="navHover"
                  className="absolute inset-0 bg-white/10 rounded-full z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="group relative inline-flex items-center gap-2 bg-white text-black px-5 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          <span className="relative z-10">Let's Talk</span>
          <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

      </motion.nav>
    </motion.div>
  );
};

export default Navbar;