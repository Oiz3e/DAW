// src/components/Navbar.jsx
/* eslint-disable no-unused-vars */
/* cspell:disable */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  
  // STATE BARU BUAT HAMBURGER MENU DI HP
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // MATIIN SCROLL BODY KALO MENU LAGI KEBUKA
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Origin', href: '#home' },  
    { name: 'Core', href: '#capabilities' },
    { name: 'Multiverse', href: '#multiverse' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 z-[100] flex justify-center w-full px-4 pt-4 md:pt-6 pointer-events-none">
        
        <motion.nav 
          layout
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className={`
            pointer-events-auto flex items-center justify-between font-sans transition-all duration-500
            ${scrolled || isMobileMenuOpen
              // Kalau scroll ATAU menu lagi kebuka, bentuknya jadi pil
              ? 'bg-[#0a0a0a]/95 md:bg-[#0a0a0a]/80 md:backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full py-3 px-5 md:px-8 w-full max-w-4xl' 
              : 'bg-transparent border-transparent py-2 px-2 md:px-14 w-full max-w-[1440px]'} 
          `}
        >
          
          {/* KIRI: LOGO */}
          <a href="#home" className="flex items-center gap-3 group relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors shadow-inner">
               <Hexagon size={16} className="text-orange-500 fill-orange-500/20 group-hover:fill-orange-500 transition-colors" />
            </div>
            <span className="text-sm md:text-base font-bold text-white tracking-widest uppercase hidden sm:block">
              DAW!<span className="text-orange-500">.</span>
            </span>
          </a>

          {/* TENGAH: MENU DESKTOP */}
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

          {/* KANAN: LET'S TALK & HAMBURGER (MOBILE ONLY) */}
          <div className="flex items-center gap-3 relative z-50">
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative inline-flex items-center gap-2 bg-white text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10">Let's Talk</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform hidden sm:block" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* TOMBOL HAMBURGER (MUNCUL DI HP DOANG) */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </motion.nav>
      </motion.div>

      {/* OVERLAY BACKGROUND MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-lg md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* LACI MENU MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-24 left-4 right-4 z-[95] bg-[#111] border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden overflow-hidden"
          >
            {/* Hiasan background di dalem menu */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="flex flex-col gap-2 relative z-10">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-gray-300 hover:text-white py-3 border-b border-white/5 last:border-0 flex items-center justify-between group"
                >
                  {item.name}
                  <ArrowRight size={16} className="text-orange-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 pt-6 border-t border-white/5 text-center"
            >
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Izdihar Dhawy Tasdid &copy; 2026</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;