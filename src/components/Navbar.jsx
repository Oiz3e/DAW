// src/components/Navbar.jsx
/* eslint-disable no-unused-vars */
/* cspell:disable */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 right-0 z-50 w-full font-sans transition-all duration-500
        ${scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-4' 
          : 'bg-transparent border-b border-transparent py-6'} 
      `}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-lg font-semibold flex items-center gap-2 text-white tracking-tight z-20">
          <Sparkles size={18} className="text-orange-500 fill-orange-500" />
          Hire me!
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300 absolute left-1/2 -translate-x-1/2">
          {['Home', 'Multiverse', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="z-20">
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
            Let's Talk!
          </a>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;