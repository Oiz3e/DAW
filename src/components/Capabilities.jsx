/* eslint-disable no-unused-vars */
/* cspell:disable */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, PenTool, Users, ArrowRight, Star, ExternalLink, 
  Play, Code, Smartphone, Zap, Layout, Heart, Volume2, MessageCircle, Eye, Share2, ThumbsUp, Instagram, History,
  Database, Gamepad2, Figma, Globe, Github, Palette
} from 'lucide-react';
import { devProjects, creativeProjects } from '../data';

// --- IMPORT ASSETS ---
import plenoImg from '../assets/PPIF/pleno1.webp';
import random2 from '../assets/PPIF/random2.webp';
import random3 from '../assets/PPIF/random3.webp';
import random4 from '../assets/PPIF/random4.webp';
import random5 from '../assets/PPIF/random5.webp';
import random6 from '../assets/PPIF/random6.webp';

import random7 from '../assets/Mentoring/random1.webp';
import random8 from '../assets/Mentoring/random2.webp';
import random9 from '../assets/Mentoring/random3.webp';
import random10 from '../assets/Mentoring/random4.webp';
import random11 from '../assets/Mentoring/random5.webp';
import random12 from '../assets/Mentoring/random6.webp';
import random13 from '../assets/Mentoring/random7.webp';
import random14 from '../assets/Mentoring/random8.webp';
import random15 from '../assets/Mentoring/random9.webp';

import hot1 from '../assets/HW/hot1.webp'
import hot2 from '../assets/HW/hot2.webp'

import recapVideo from '../assets/videos/aftermovie.mp4'; 
import recapVideom from '../assets/videos/aftermoviem.mp4'; 
import topc from '../assets/videos/topcontent.mp4'; 
import bestc from '../assets/videos/bestcontent.mp4'; 
import popc from '../assets/videos/popularcontent.mp4'; 

import infiniteProfile from '../assets/Infinite/pp.webp'; 
import ppifProfile from '../assets/PPIF/pp.webp';     

// --- HELPER FUNCTION: TECH ICONS ---
const getTechIcon = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes('react') || t.includes('web') || t.includes('vercel')) return <Globe size={16} className="text-cyan-400" />;
  if (t.includes('firebase') || t.includes('database') || t.includes('sql')) return <Database size={16} className="text-yellow-500" />;
  if (t.includes('android') || t.includes('kotlin') || t.includes('mobile')) return <Smartphone size={16} className="text-green-400" />;
  if (t.includes('figma') || t.includes('design') || t.includes('ui') || t.includes('prototyping') || t.includes('photoshop') || t.includes('illustrator')) return <Figma size={16} className="text-pink-400" />;
  if (t.includes('unity') || t.includes('game') || t.includes('c#')) return <Gamepad2 size={16} className="text-gray-300" />;
  if (t.includes('tailwind') || t.includes('css')) return <Palette size={16} className="text-teal-400" />;
  if (t.includes('after effects') || t.includes('premiere') || t.includes('video')) return <Play size={16} className="text-purple-400" />;
  if (t.includes('fullstack')) return <Code size={16} className="text-indigo-400" />;
  return <Code size={16} className="text-blue-400" />;
};

// --- OPTIMIZED VIDEO PLAYER (CINEMATIC FADE-IN, 0% GLITCH) ---
const SegmentedVideo = ({ src, start = 0, end = 9999, className }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // State baru: buat ngasih tau "Eh videonya udah mendarat di detik 8 belum?"
  const [isReady, setIsReady] = useState(false); 
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } 
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Cuma play kalau videonya udah kelihatan DAN udah siap di detik 8
    if (videoRef.current && isReady) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause(); 
      }
    }
  }, [isVisible, isReady]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      // 1. Video keload, langsung paksa pindah ke detik yang dituju
      videoRef.current.currentTime = start;
    }
  };

  const handleSeeked = () => {
    // 2. Event ini otomatis kepanggil KALAU video sukses mendarat di detik tersebut
    if (!isReady) setIsReady(true);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= end) {
      videoRef.current.currentTime = start;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = start;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <video 
      ref={videoRef} 
      src={src} 
      // 3. JURUSNYA DI SINI: Kalau belum ready (isReady = false), videonya transparan (opacity-0).
      // Begitu ready, dia fade in (opacity-100) pelan-pelan selama 0.7 detik (duration-700)
      className={`${className} transition-opacity duration-700 ease-out ${isReady ? 'opacity-100' : 'opacity-0'}`} 
      muted 
      playsInline 
      loop 
      preload="auto"
      onLoadedMetadata={handleLoadedMetadata}
      onSeeked={handleSeeked}
      onTimeUpdate={handleTimeUpdate} 
      onEnded={handleEnded}
    />
  );
};

// --- CAROUSEL 3D ---
const Carousel3D = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    { id: 0, title: "The Teaser", role: "Hype Builder", color: "text-blue-400", link: "https://www.instagram.com/reel/C_r0tGIPNn0/", src: topc },
    { id: 1, title: "Event Recap", role: "Main Highlight", color: "text-orange-400", link: "https://www.instagram.com/reel/DAFOH68PjF9/", src: bestc },
    { id: 2, title: "BTS Moments", role: "Engagement", color: "text-purple-400", link: "https://www.instagram.com/reel/DBArGA1PjhI/", src: popc },
  ];

  useEffect(() => {
    const interval = setInterval(() => { setActiveIndex((prev) => (prev + 1) % items.length); }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const getPosition = (index) => {
    if (index === activeIndex) return "center";
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    if (index === prevIndex) return "left";
    return "right";
  };

  const variants = {
    center: { x: 0, scale: isMobile ? 1 : 1.15, zIndex: 50, opacity: 1, filter: "blur(0px)", rotateY: 0, cursor: "pointer" },
    left:   { x: isMobile ? -80 : -220, scale: isMobile ? 0.75 : 0.9, zIndex: 10, opacity: 0.5, filter: "blur(4px)", rotateY: 25, cursor: "pointer" },
    right:  { x: isMobile ? 80 : 220, scale: isMobile ? 0.75 : 0.9, zIndex: 10, opacity: 0.5, filter: "blur(4px)", rotateY: -25, cursor: "pointer" },
  };

  return (
    <div className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center perspective-1000 overflow-hidden md:overflow-visible">
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px]" />
        </div>
      )}

      {items.map((item, index) => {
        const position = getPosition(index);
        return (
          <motion.div key={item.id} initial={false} animate={position} variants={variants} transition={{ type: "spring", stiffness: 120, damping: 20 }} onClick={() => { if (index === activeIndex) window.open(item.link, '_blank'); else setActiveIndex(index); }} className="absolute w-[200px] md:w-[280px] aspect-[9/16] bg-black rounded-3xl md:rounded-[3rem] border-4 md:border-[8px] border-gray-800 overflow-hidden shadow-2xl transition-colors">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-28 h-4 md:h-6 bg-gray-800 rounded-b-lg z-20" />
            
            {/* HARD PERFORMANCE FIX: Hanya load 1 video di tengah buat HP */}
            {(position === 'center' || !isMobile) ? (
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline><source src={item.src} type="video/mp4" /></video>
            ) : (
              <div className="w-full h-full bg-[#0a0a0a]" />
            )}

            <motion.div animate={{ opacity: position === 'center' ? 0 : 0.7 }} className="absolute inset-0 bg-black pointer-events-none" />
            {position === 'center' && (
              <div className="absolute bottom-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-12">
                <div className="mb-2 md:mb-4"><p className={`${item.color} text-[8px] md:text-[10px] font-bold uppercase tracking-wider mb-1`}>{item.role}</p><h4 className="text-white font-bold text-sm md:text-xl leading-tight">{item.title}</h4></div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// --- MAIN COMPONENT ---
const Capabilities = ({ setActiveTab }) => {
  const [activeMode, setActiveMode] = useState('leadership');
  
  // THE REAL PERFORMANCE HERO: State pendeteksi layar
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Cek awal
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigate = (tab) => {
    if (setActiveTab) setActiveTab(tab);
    const element = document.getElementById('timeline') || document.getElementById('multiverse');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const [floatingDebris] = useState(() => {
    const icons = [History, Code, Star, Zap, PenTool];
    return icons.map((Icon, i) => ({
      Icon, id: i,
      x: [Math.random() * 200 - 100, Math.random() * -200 + 100, Math.random() * 200 - 100],
      y: [Math.random() * 200 - 100, Math.random() * -200 + 100, Math.random() * 200 - 100],
      duration: 20 + Math.random() * 10,
      left: `${50 + (Math.random() * 40 - 20)}%`, top: `${50 + (Math.random() * 40 - 20)}%`,
      size: 24 + Math.random() * 20
    }));
  });

  return (
    <section className="py-24 relative font-sans bg-[#050505] min-h-screen selection:bg-orange-500/30 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-6 pt-10 pb-6 bg-gradient-to-b from-[#050505] to-transparent sticky top-0 md:relative backdrop-blur-xl z-50">
          <div className="relative flex-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
              {activeMode === 'leadership' && <span>Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Impact.</span></span>}
              {activeMode === 'dev' && <span>Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Log.</span></span>}
              {activeMode === 'creative' && <span>Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Gallery.</span></span>}
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              {activeMode === 'leadership' && "Leading teams, mentoring, and executing vision."}
              {activeMode === 'dev' && "Turning complex logic into scalable applications."}
              {activeMode === 'creative' && "Interfaces that work, visuals that speak."}
            </p>
          </div>
          
          <div className="w-full lg:w-auto mt-4 lg:mt-0 z-20">
            <div className="flex flex-wrap items-center bg-white/5 p-1.5 rounded-2xl md:rounded-full border border-white/10 w-full gap-1 sm:gap-0">
              {[
                { id: 'leadership', icon: <Users size={14} />, label: 'Leadership' },
                { id: 'dev', icon: <Code size={14} />, label: 'Engineering' },
                { id: 'creative', icon: <PenTool size={14} />, label: 'Creative' },
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`
                    relative flex items-center justify-center gap-1.5 md:gap-2 px-2 sm:px-4 py-2.5 md:py-3 rounded-xl md:rounded-full text-[10px] sm:text-xs md:text-sm font-bold transition-colors duration-300 flex-1 min-w-[30%]
                    ${activeMode === mode.id ? 'text-black' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {activeMode === mode.id && (
                    <motion.div layoutId="activeTabPill" className="absolute inset-0 bg-white rounded-xl md:rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] z-[-1]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                  {mode.icon}
                  <span className="whitespace-nowrap">{mode.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-[800px]">
          <AnimatePresence mode="wait">
            
            {/* === LEADERSHIP MODE === */}
            {activeMode === 'leadership' && (
              <motion.div key="leadership" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-40">
                
                <div className="relative group">
                  {!isMobile && <div className="absolute -left-10 top-20 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />}
                  <div className="grid md:grid-cols-12 gap-8 items-start mb-12 relative z-10">
                    <div className="md:col-span-5 md:sticky md:top-32 pr-4">
                      <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6 border border-purple-500/20"><Star size={14} fill="currentColor" /> VP & Creative Lead</div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Shaping the Culture of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Student Orientation.</span></h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">A dedicated two-year tenure leading the orientation ecosystem. I bridged the gap between <b>strategic leadership</b> and <b>creative execution</b>.</p>
                      <ul className="space-y-4 mb-8">
                        {['Creative & PR Ecosystem Director', 'Mentor & Public Speaking Trainer', '2-Year Strategic Stewardship'].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-gray-300 bg-white/[0.02] border border-white/5 p-3 rounded-2xl">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0"><div className="w-2.5 h-2.5 rounded-full bg-purple-400" /></div><span className="font-medium text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-7 flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-purple transition-colors pt-4">
                      {[plenoImg, random4, random2, random5, random3, random6].map((img, i) => (
                        <div key={i} className="min-w-[85%] md:min-w-[350px] aspect-[4/5] rounded-[2rem] bg-[#111] border border-white/10 overflow-hidden relative group/card snap-center shadow-2xl hover:border-purple-500/30 transition-all duration-500">
                          <img src={img} alt={`PPIF ${i}`} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 opacity-90 group-hover/card:opacity-100" />
                          {!isMobile && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 group bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)] mt-12 hover:border-purple-500/30 transition-colors duration-500">
                    <SegmentedVideo src={recapVideo} start={92} end={160} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
                      <div>
                        <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 px-3 py-1.5 rounded-full text-xs font-bold mb-4 border border-purple-500/20 backdrop-blur-md"><Volume2 size={12} /> OFFICIAL AFTERMOVIE</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">PPIF 2024 Recap</h3>
                      </div>
                      <a href="https://www.instagram.com/reel/DFM9v-wSOoU/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition-all text-sm group/btn hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                        <Play size={16} fill="black" /> <span className="hidden sm:inline">Watch Full</span><ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  {!isMobile && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />}
                  <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="order-2 md:order-1 md:col-span-7 py-10 relative flex justify-center"><Carousel3D /></div>
                    <div className="order-1 md:order-2 md:col-span-5 md:sticky md:top-32 pl-4">
                      <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]"><Users size={14} /> PR & Creative Lead</div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Orchestrating Hype at <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Infinite UMN.</span></h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">I served as the <b>Lead Content Creator & Strategist</b> for Infinite UMN. Designing the visual narrative from Teaser to Aftermovie.</p>
                      <ul className="space-y-4 mb-8">
                        {['End-to-End Content Production', 'Engagement Strategy & Analytics', 'Feed & Visual Identity'].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-gray-300 bg-white/[0.02] border border-white/5 p-3 rounded-2xl">
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0"><div className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)]" /></div><span className="font-medium text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  {!isMobile && <div className="absolute -right-10 top-20 w-[400px] h-[400px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />}
                  <div className="grid md:grid-cols-12 gap-8 items-start mb-12 relative z-10">
                    <div className="md:col-span-5 md:sticky md:top-32 pr-4">
                      <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.15)]"><Heart size={14} fill="currentColor" /> Mentor Division (2 Years)</div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Fostering the Next <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Generation.</span></h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">Dedicated <b>two years</b> to the Mentor Division with a consistent mission: Direct Student Guidance and soft-skill development.</p>
                      <ul className="space-y-4 mb-8">
                        {['Personal Guidance (2 Years)', 'Soft Skill Development', 'Academic Support'].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-gray-300 bg-white/[0.02] border border-white/5 p-3 rounded-2xl">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0"><div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" /></div><span className="font-medium text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-7 flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-green transition-colors pt-4">
                      {[random11, random7, random10, random13, random14, random15, random8, random9, random12].map((img, i) => (
                        <div key={i} className="min-w-[85%] md:min-w-[350px] aspect-[4/5] rounded-[2rem] bg-[#111] border border-white/10 overflow-hidden relative group/card snap-center shadow-2xl hover:border-green-500/30 transition-all duration-500">
                          <img src={img} alt="Mentoring" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 opacity-90 group-hover/card:opacity-100" />
                          {!isMobile && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 group bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-green-500/30 transition-colors duration-500 mt-12">
                    <SegmentedVideo src={recapVideom} start={0} end={45} /> 
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
                      <div>
                        <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold mb-4 border border-green-500/20 backdrop-blur-md"><Users size={12} /> JOURNEY HIGHLIGHT</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Mentoring Moments</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group pt-12">
                  {!isMobile && <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />}

                  <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
                    <div className="md:col-span-5 md:sticky md:top-32 pr-4">
                      <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                        <Users size={14} fill="currentColor" /> PIC Event
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Driving the Experience at <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Hotwheels Event.</span></h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">Stepped into the fast-paced world of offline event management. I was responsible for ensuring a positive participant experience by welcoming attendees, directing crowd flow, and coordinating seamlessly.</p>
                      <ul className="space-y-4 mb-8">
                        {['Station Assistance & Direction', 'Inquiry Management', 'Operational Support', 'Crowd Experience & Safety'].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-gray-300 bg-white/[0.02] border border-white/5 p-3 rounded-2xl">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0"><div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" /></div>
                            <span className="font-medium text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:col-span-7 flex gap-4 md:gap-8 relative z-10 pt-10 px-4 md:px-0">
                      <div className="w-1/2 rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] group/card shadow-[0_0_40px_rgba(239,68,68,0.1)] relative hover:border-red-500/30 hover:-translate-y-2 transition-all duration-500">
                        <img src={hot1} alt="Hotwheels 1" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" />
                        {!isMobile && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />}
                      </div>
                      <div className="w-1/2 rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] group/card shadow-[0_0_40px_rgba(239,68,68,0.1)] mt-16 md:mt-24 relative hover:border-red-500/30 hover:-translate-y-2 transition-all duration-500">
                        <img src={hot2} alt="Hotwheels 2" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" />
                        {!isMobile && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative py-24 md:py-32 mt-20 overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-[#0a0a0a]">
                  {!isMobile && (
                    <div className="absolute inset-0 pointer-events-none">
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.015] whitespace-nowrap select-none tracking-tighter">IMPACT</div>
                    </div>
                  )}

                  <div className="relative z-10 text-center mb-16 md:mb-20 px-4">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Managed Accounts</h3>
                    <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto">Explore the digital footprint and visual identity I built for these organizations.</p>
                  </div>
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto px-4 md:px-6">
                     <a href="https://www.instagram.com/infinite.umn/" target="_blank" rel="noreferrer" className="group relative bg-[#111] backdrop-blur-md border border-white/5 rounded-[2rem] p-6 md:p-10 hover:bg-white/[0.02] hover:border-orange-500/30 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-center hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)]">
                        <div className="absolute -top-10 -right-10 opacity-[0.02] group-hover:opacity-10 transition-opacity duration-500 rotate-12 group-hover:rotate-0"><Instagram size={200} /></div>
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#111] outline outline-2 outline-orange-500/50 shrink-0 shadow-[0_0_30px_rgba(249,115,22,0.2)] group-hover:outline-orange-500 transition-all duration-500">
                           <img src={infiniteProfile} alt="Infinite Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="text-center md:text-left relative z-10">
                           <span className="text-orange-400 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-2 bg-orange-500/10 inline-block px-3 py-1 rounded-md">PR & Creative Lead</span>
                           <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">@infinite.umn</h4>
                           <p className="text-gray-400 text-xs md:text-sm mb-4 leading-relaxed">The official account for UMN's biggest IT event. Focusing on high-energy visual content & branding.</p>
                           <span className="inline-flex items-center gap-2 text-white font-bold text-xs md:text-sm group-hover:gap-4 transition-all">Visit Profile <ArrowRight size={14} className="text-orange-500"/></span>
                        </div>
                     </a>

                     <a href="https://www.instagram.com/ppif_umn/" target="_blank" rel="noreferrer" className="group relative bg-[#111] backdrop-blur-md border border-white/5 rounded-[2rem] p-6 md:p-10 hover:bg-white/[0.02] hover:border-purple-500/30 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-center hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.1)]">
                        <div className="absolute -top-10 -right-10 opacity-[0.02] group-hover:opacity-10 transition-opacity duration-500 rotate-12 group-hover:rotate-0"><Users size={200} /></div>
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#111] outline outline-2 outline-purple-500/50 shrink-0 shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:outline-purple-500 transition-all duration-500">
                           <img src={ppifProfile} alt="PPIF Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="text-center md:text-left relative z-10">
                           <span className="text-purple-400 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-2 bg-purple-500/10 inline-block px-3 py-1 rounded-md">Vice President</span>
                           <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">@ppif_umn</h4>
                           <p className="text-gray-400 text-xs md:text-sm mb-4 leading-relaxed">The official orientation account. Ensuring clarity, welcoming vibes, and information flow.</p>
                           <span className="inline-flex items-center gap-2 text-white font-bold text-xs md:text-sm group-hover:gap-4 transition-all">Visit Profile <ArrowRight size={14} className="text-purple-500"/></span>
                        </div>
                     </a>
                  </div>
                </div>

              </motion.div>
            )}

            {/* === ENGINEERING MODE === */}
            {activeMode === 'dev' && (
              <motion.div key="dev" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-32 pb-20 mt-10">
                {devProjects.map((item, i) => (
                  <div key={i} className="flex flex-col group relative">
                    <div className="mb-8">
                       <div className="flex items-center gap-3 mb-3">
                          <div className="h-[2px] w-6 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase">{item.role}</span>
                       </div>
                       <h3 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                       <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">{item.desc}</p>
                    </div>

                    <div className="w-full rounded-[2rem] bg-gradient-to-br from-[#0c0e12] to-[#050505] border border-white/[0.05] p-2 md:p-4 relative overflow-hidden shadow-xl group-hover:border-blue-500/20 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500">
                       {!isMobile && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700 z-0" />}
                       <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5 bg-[#050505] flex items-center justify-center">
                         {!isMobile && <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-0" aria-hidden="true" />}
                         <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
                         <img src={item.image} alt={item.title} className="w-full h-full object-cover md:object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition-transform duration-700 ease-out relative z-10" />
                       </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-6">
                       <div>
                         <h4 className="text-white text-sm font-bold mb-4 flex items-center gap-2"><Code size={16} className="text-blue-500" />Tech Behind the Scenes</h4>
                         <div className="flex flex-wrap gap-3">
                           {item.tech.map((t, idx) => (
                              <div key={idx} className="flex items-center gap-2 bg-transparent border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 hover:border-blue-500/40 transition-colors cursor-default">
                                {getTechIcon(t)}<span className="text-gray-300 font-medium text-xs tracking-wide">{t}</span>
                              </div>
                           ))}
                         </div>
                       </div>
                       <div className="flex gap-3 self-end md:self-auto mt-4 md:mt-0">
                         {item.link && item.link !== '#' && (<a href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 bg-transparent border border-white/10 rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white"><Globe size={18} /></a>)}
                         {item.github && item.github !== '#' && (<a href={item.github} target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 bg-transparent border border-white/10 rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white"><Github size={18} /></a>)}
                       </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* === CREATIVE MODE === */}
            {activeMode === 'creative' && (
              <motion.div key="creative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-24 pb-20 mt-10">
                {creativeProjects.map((item, i) => (
                  <div key={i} className="flex flex-col group relative">
                    
                    <div className="mb-6">
                       <div className="flex items-center gap-3 mb-3">
                          <div className="h-[2px] w-6 bg-purple-600 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                          <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">{item.role}</span>
                       </div>
                       <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                       <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">{item.desc}</p>
                    </div>

                    <div className="w-full rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0A0A] border border-white/10 p-2 md:p-3 relative overflow-hidden shadow-xl group-hover:border-purple-500/30 transition-all duration-500">
                       {!isMobile && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700 z-0" />}
                       
                       <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/5 bg-black flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                         {item.video ? (
                           <>
                             {/* Double Video Shadow cuma diload di PC */}
                             {!isMobile && (
                               <SegmentedVideo 
                                 src={item.video} 
                                 start={item.start || 0} 
                                 end={item.end || 9999} 
                                 className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none z-0"
                               />
                             )}
                             <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
                             
                             <SegmentedVideo 
                               src={item.video} 
                               start={item.start || 0} 
                               end={item.end || 9999} 
                               className="w-full h-full object-cover md:object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-transform duration-700 relative z-10" 
                             />
                           </>
                         ) : (
                           <>
                             {!isMobile && <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none z-0" aria-hidden="true" />}
                             <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
                             <img src={item.image} alt={item.title} className="w-full h-full object-cover md:object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-transform duration-700 relative z-10" />
                           </>
                         )}
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-4">
                       <div className="flex flex-wrap gap-2 md:gap-3">
                         {item.tech.map((t, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 md:gap-2 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-white/10 transition-colors cursor-default">
                              {getTechIcon(t)}<span className="text-gray-300 font-medium text-[10px] md:text-xs tracking-wide">{t}</span>
                            </div>
                         ))}
                       </div>
                       
                       <div className="flex items-center gap-3 w-full sm:w-auto">
                         <div className="px-3 py-1.5 md:px-4 md:py-2 bg-transparent border border-purple-500/30 rounded-lg text-purple-400 font-bold tracking-widest uppercase text-[10px] md:text-xs text-center flex-1 sm:flex-none">
                            {item.type}
                         </div>
                         {item.link && item.link !== '#' && (
                           <a href={item.link} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-lg font-bold text-xs md:text-sm transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                             <Play size={14} fill="currentColor" /> Watch
                           </a>
                         )}
                       </div>
                    </div>

                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-20 md:mt-40 relative py-24 md:py-40 overflow-hidden w-full rounded-3xl md:rounded-none">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
             
             {/* OPTIMASI: Efek muter-muter raksasa dihapus total pas di HP */}
             {!isMobile && (
               <>
                 <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[150px] animate-pulse-slow" />
                 <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-orange-500/10 rounded-full blur-[60px] md:blur-[100px] mix-blend-overlay" />
                 <div className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] opacity-70" />
                 <div className="absolute w-[600px] md:w-[1100px] h-[600px] md:h-[1100px] border border-purple-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse] opacity-50" />
                 <div className="absolute w-[800px] md:w-[1400px] h-[800px] md:h-[1400px] border border-orange-500/5 rounded-full animate-[spin_80s_linear_infinite] opacity-30" />
               </>
             )}

             {!isMobile && floatingDebris.map((item) => {
               const { Icon, id, x, y, duration, left, top, size } = item;
               return (
                 <motion.div 
                   key={id} 
                   className="absolute text-white/20" 
                   initial={{ x: 0, y: 0, rotate: 0 }} 
                   animate={{ x: x, y: y, rotate: [0, 180, 360] }} 
                   transition={{ duration, repeat: Infinity, ease: "linear" }} 
                   style={{ left, top }}
                 >
                    <Icon size={size} />
                 </motion.div>
               );
             })}
          </div>

          <div className="relative z-20 flex flex-col items-center text-center px-4">
             <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-[#0A0A0A] flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.15)] relative">
                <History className="text-white w-8 h-8 md:w-10 md:h-10 relative z-10" />
             </div>
             <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-tight">
               UNLOCK THE <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">MULTIVERSE.</span>
             </h3>
             <p className="text-gray-400 max-w-sm md:max-w-lg text-sm md:text-xl mb-8 leading-relaxed">
               Every project, every role, connected in one dimension. Step in to see the full journey unfold.
             </p>
             <button onClick={() => handleNavigate('life')} className="group relative inline-flex items-center gap-3 px-8 py-4 md:px-14 md:py-6 bg-[#0A0A0A] border border-white/20 rounded-full text-sm md:text-xl font-bold text-white overflow-hidden transition-all hover:border-white/40 cursor-pointer">
               <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-purple-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
               <span className="relative z-10 flex items-center gap-2 md:gap-3">
                  Enter Portal <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
               </span>
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Capabilities;