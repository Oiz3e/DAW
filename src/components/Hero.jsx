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
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden font-sans bg-[#050505]">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-600/20 to-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-orange-500/20 to-pink-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-8 md:px-20 grid lg:grid-cols-12 gap-12 items-center relative z-10 h-full">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 font-bold tracking-widest text-sm uppercase drop-shadow-sm">
              Portfolio 2025
            </span>
          </motion.div>

          <div className="relative z-20">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
              Visual <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient-x bg-[length:200%_auto]">
                Storyteller.
              </span>
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent leading-[0.9] mt-2 relative" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)", textShadow: "0 0 30px rgba(255,255,255,0.1)" }}>
              & Developer
            </motion.h1>
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-xl text-gray-300 mt-8 max-w-lg leading-relaxed font-normal">
            I build <span className="text-white border-b-2 border-orange-500 font-medium">digital products</span> with a focus on motion, interactivity, and pixel-perfect engineering.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-6 mt-10">
            <a href="#multiverse" className="group flex items-center gap-3 text-white font-semibold transition-all hover:translate-x-2">
              <span className="bg-gradient-to-tr from-orange-500 to-pink-600 p-4 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all">
                <ArrowRight size={24} />
              </span>
              <span className="border-b border-transparent group-hover:border-white transition-all">
                View My Journey
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual/Image */}
        <motion.div style={{ y: y1, opacity }} className="lg:col-span-5 relative h-[600px] flex items-center justify-center lg:justify-end">
          {/* Abstract Shapes */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[40px] backdrop-blur-md -rotate-3 scale-90 z-0 shadow-[0_0_40px_rgba(0,0,0,0.5)]" />
          <div className="absolute top-10 right-10 w-40 h-40 border-2 border-orange-500/30 rounded-full z-0 animate-[spin_10s_linear_infinite]" />
          <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-blue-500/30 rounded-full z-0 animate-[spin_15s_linear_infinite_reverse]" />

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="relative z-10 w-full h-full flex items-end justify-center">
            <img src={profileImg} alt="Profile" className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }} />
            
            {/* Status Card */}
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-8 top-1/4 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-[220px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 relative z-10" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Current Status</span>
              </div>
              <p className="text-sm font-medium text-white leading-snug">
                Building <span className="text-green-400">accessible</span> web apps & exploring <span className="text-purple-400">WebGL</span>.
              </p>
            </motion.div>

            {/* Tech Stack Floating Chips */}
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-4 bottom-20 flex flex-col gap-3">
              {[
                { name: 'React', color: 'border-blue-500/30 text-blue-300 bg-blue-500/10' },
                { name: 'Framer', color: 'border-purple-500/30 text-purple-300 bg-purple-500/10' },
                { name: 'UI/UX', color: 'border-orange-500/30 text-orange-300 bg-orange-500/10' }
              ].map((tech, i) => (
                <div key={i} className={`border backdrop-blur-md px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg ${tech.color}`}>
                  {tech.name}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-8 md:left-20 flex items-center gap-3 text-gray-500">
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        <span className="text-xs font-mono uppercase tracking-widest vertical-rl transform rotate-180 text-gray-400">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;