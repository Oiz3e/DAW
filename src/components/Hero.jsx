// src/components/Hero.jsx
/* eslint-disable no-unused-vars */
/* cspell:disable */
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.png'; 

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); 
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-28 md:pt-20 overflow-hidden font-sans bg-[#050505]">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-b from-blue-600/20 to-purple-600/20 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-t from-orange-500/20 to-pink-500/20 rounded-full blur-[80px] md:blur-[100px] translate-y-1/3 -translate-x-1/4 mix-blend-screen" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 grid lg:grid-cols-12 gap-10 md:gap-12 items-center relative z-10 h-full">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left pt-10 lg:pt-0">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-8">
            <div className="h-[2px] w-8 md:w-12 bg-gradient-to-r from-orange-500 to-pink-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 font-bold tracking-widest text-xs md:text-sm uppercase drop-shadow-sm">
              Portfolio 2026  
            </span>
          </motion.div>

          <div className="relative z-20">
            {/* --- NAMA DITAMBAHKAN DI SINI --- */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.25 }} 
              className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mb-3 md:mb-4"
            >
              Hi, I'm <span className="text-white">Izdihar Dhawy Tasdid</span>.
            </motion.h2>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter text-white leading-[1.1] md:leading-[0.9]">
              Visual <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient-x bg-[length:200%_auto]">
                Storyteller.
              </span>
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-4xl sm:text-6xl lg:text-9xl font-bold tracking-tighter text-transparent leading-[1.1] md:leading-[0.9] mt-2 relative" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)", textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>
              & Developer
            </motion.h1>
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-base md:text-xl text-gray-300 mt-6 md:mt-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
            I build <span className="text-white border-b-2 border-orange-500 font-medium">digital products</span> with a focus on motion, interactivity, and pixel-perfect engineering.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex justify-center lg:justify-start gap-6 mt-8 md:mt-10">
            <a href="#multiverse" className="group flex items-center gap-3 text-white font-semibold transition-all hover:translate-x-2">
              <span className="bg-gradient-to-tr from-orange-500 to-pink-600 p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all">
                <ArrowRight size={20} className="md:w-6 md:h-6" />
              </span>
              <span className="border-b border-transparent group-hover:border-white transition-all text-sm md:text-base">
                View My Journey
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual/Image */}
        <motion.div style={{ y: y1, opacity }} className="lg:col-span-5 relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Abstract Shapes */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] md:rounded-[40px] backdrop-blur-md -rotate-3 scale-90 md:scale-95 z-0 shadow-[0_0_40px_rgba(0,0,0,0.5)]" />
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="relative z-10 w-full h-full flex items-end justify-center">
            <img src={profileImg} alt="Profile" className="w-[85%] md:w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
            
            {/* Status Card */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute left-2 sm:left-4 lg:-left-8 top-10 sm:top-1/4 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/20 p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-[160px] sm:max-w-[220px]">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="relative">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 relative z-10" />
                  <div className="absolute inset-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-gray-300 uppercase tracking-wider">Status</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-white leading-snug">
                Building <span className="text-green-400">accessible</span> web apps.
              </p>
            </motion.div>

            {/* Tech Stack Floating Chips */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute right-2 sm:right-4 lg:-right-4 bottom-10 sm:bottom-20 flex flex-col gap-2 sm:gap-3">
              {[
                { name: 'React', color: 'border-blue-500/30 text-blue-300 bg-blue-500/10' },
                { name: 'Framer', color: 'border-purple-500/30 text-purple-300 bg-purple-500/10' },
                { name: 'UI/UX', color: 'border-orange-500/30 text-orange-300 bg-orange-500/10' }
              ].map((tech, i) => (
                <div key={i} className={`border backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold shadow-lg ${tech.color}`}>
                  {tech.name}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;