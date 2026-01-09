/* eslint-disable no-unused-vars */
/* cspell:disable */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, PenTool, Users, ArrowRight, Star, ExternalLink, 
  Play, Code, Smartphone, Zap, Layout, Heart, Volume2, MessageCircle, Eye, Share2, ThumbsUp, Instagram, History
} from 'lucide-react';
import { devProjects, creativeProjects } from '../data';

// --- IMPORT ASSETS ---
// PPIF Assets
import plenoImg from '../assets/PPIF/pleno1.jpg';
import random2 from '../assets/PPIF/random2.jpg';
import random3 from '../assets/PPIF/random3.jpg';
import random4 from '../assets/PPIF/random4.jpg';
import random5 from '../assets/PPIF/random5.jpg';
import random6 from '../assets/PPIF/random6.jpg';

// Mentoring Assets
import random7 from '../assets/Mentoring/random1.jpg';
import random8 from '../assets/Mentoring/random2.jpg';
import random9 from '../assets/Mentoring/random3.jpg';
import random10 from '../assets/Mentoring/random4.jpg';
import random11 from '../assets/Mentoring/random5.jpg';
import random12 from '../assets/Mentoring/random6.jpg';
import random13 from '../assets/Mentoring/random7.jpg';
import random14 from '../assets/Mentoring/random8.jpg';
import random15 from '../assets/Mentoring/random9.jpg';

// Videos
import recapVideo from '../assets/videos/aftermovie.mp4'; 
import recapVideom from '../assets/videos/aftermoviem.mp4'; 
import topc from '../assets/videos/topcontent.mp4'; 
import bestc from '../assets/videos/bestcontent.mp4'; 
import popc from '../assets/videos/popularcontent.mp4'; 

// Profiles
import infiniteProfile from '../assets/Infinite/pp.jpg'; 
import ppifProfile from '../assets/PPIF/pp.png';     

// --- VIDEO PLAYER COMPONENT ---
const SegmentedVideo = ({ src, start, end }) => {
  const videoRef = useRef(null);
  useEffect(() => { if (videoRef.current) videoRef.current.currentTime = start; }, [start]);
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= end) {
      videoRef.current.currentTime = start;
      videoRef.current.play();
    }
  };
  return (
    <video ref={videoRef} src={src} className="w-full h-full object-cover" autoPlay muted loop playsInline onTimeUpdate={handleTimeUpdate} />
  );
};

// --- CAROUSEL 3D ---
const Carousel3D = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const [ornaments] = useState([
    { id: 1, Icon: Heart, color: "text-red-500", x: "10%", y: "20%", size: 52, delay: 0 },
    { id: 2, Icon: MessageCircle, color: "text-blue-400", x: "85%", y: "15%", size: 48, delay: 1.5 },
    { id: 3, Icon: Zap, color: "text-yellow-400", x: "80%", y: "75%", size: 56, delay: 0.5 },
    { id: 4, Icon: Share2, color: "text-green-400", x: "15%", y: "80%", size: 44, delay: 2 },
    { id: 5, Icon: Star, color: "text-purple-500", x: "50%", y: "5%", size: 32, delay: 1 },
  ]);

  const items = [
    { 
      id: 0, title: "The Teaser", role: "Hype Builder", color: "text-blue-400",
      link: "https://www.instagram.com/reel/C_r0tGIPNn0/", views: "20.6k", likes: "188", 
      src: topc 
    },
    { 
      id: 1, title: "Event Recap", role: "Main Highlight", color: "text-orange-400",
      link: "https://www.instagram.com/reel/DAFOH68PjF9/", views: "16.3k", likes: "132", 
      src: bestc 
    },
    { 
      id: 2, title: "BTS Moments", role: "Engagement", color: "text-purple-400",
      link: "https://www.instagram.com/reel/DBArGA1PjhI/", views: "13.3k", likes: "128", 
      src: popc 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const getPosition = (index) => {
    if (index === activeIndex) return "center";
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    if (index === prevIndex) return "left";
    return "right";
  };

  const variants = {
    center: { x: 0, scale: 1.15, zIndex: 50, opacity: 1, filter: "blur(0px)", rotateY: 0, cursor: "pointer" },
    left:   { x: -220, scale: 0.9, zIndex: 10, opacity: 0.5, filter: "blur(4px)", rotateY: 25, cursor: "pointer" },
    right:  { x: 220, scale: 0.9, zIndex: 10, opacity: 0.5, filter: "blur(4px)", rotateY: -25, cursor: "pointer" },
  };

  const handleCardClick = (index, link) => {
    if (index === activeIndex) window.open(link, '_blank');
    else setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
        {ornaments.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute ${p.color} filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`} 
            style={{ left: p.x, top: p.y }}
            initial={{ y: 0 }}
            animate={{ 
              y: [-15, 15, -15], 
              rotate: [0, 10, -10, 0], 
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              duration: 4 + p.delay, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay 
            }}
          >
            <p.Icon size={p.size} fill="currentColor" className="opacity-90" />
          </motion.div>
        ))}
      </div>

      {items.map((item, index) => {
        const position = getPosition(index);
        return (
          <motion.div
            key={item.id}
            initial={false}
            animate={position}
            variants={variants}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            onClick={() => handleCardClick(index, item.link)}
            className="absolute w-[280px] aspect-[9/16] bg-black rounded-[3rem] border-[8px] border-gray-800 overflow-hidden shadow-2xl hover:border-gray-600 transition-colors"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-xl z-20" />
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src={item.src} type="video/mp4" />
            </video>
            <motion.div 
              animate={{ opacity: position === 'center' ? 0 : 0.7 }}
              className="absolute inset-0 bg-black pointer-events-none"
            />
            {position === 'center' && (
              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-20">
                <div className="mb-4">
                  <p className={`${item.color} text-[10px] font-bold uppercase tracking-wider mb-1`}>{item.role}</p>
                  <h4 className="text-white font-bold text-xl leading-tight">{item.title}</h4>
                </div>
                <div className="flex items-center gap-5 text-white/90 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Eye size={16} className="text-white" />
                    <span className="text-sm font-medium font-mono">{item.views}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={16} className="text-white" />
                    <span className="text-sm font-medium font-mono">{item.likes}</span>
                  </div>
                  <div className="ml-auto p-2 bg-white/10 rounded-full">
                    <ExternalLink size={14} className="text-white" />
                  </div>
                </div>
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

  // Navigate to Timeline Section
  const handleNavigate = (tab) => {
    if (setActiveTab) setActiveTab(tab);
    
    const element = document.getElementById('timeline') || document.getElementById('multiverse');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Section timeline/multiverse not found!");
    }
  };

  return (
    <section className="py-24 relative font-sans bg-[#050505] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 pt-10 pb-6 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 transition-all">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
              {activeMode === 'leadership' && "Leadership & Impact."}
              {activeMode === 'dev' && "Engineering Log."}
              {activeMode === 'creative' && "Visual Gallery."}
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              {activeMode === 'leadership' && "Leading teams, mentoring, and executing vision."}
              {activeMode === 'dev' && "Turning complex logic into scalable applications."}
              {activeMode === 'creative' && "Interfaces that work, visuals that speak."}
            </p>
          </div>
          <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10 overflow-x-auto">
            {[
              { id: 'leadership', icon: <Users size={18} />, label: 'Leadership' },
              { id: 'dev', icon: <Code size={18} />, label: 'Engineering' },
              { id: 'creative', icon: <PenTool size={18} />, label: 'Creative' },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap
                  ${activeMode === mode.id ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}
                `}
              >
                {mode.icon}
                <span className="hidden md:inline">{mode.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[800px]">
          <AnimatePresence mode="wait">
            
            {/* === LEADERSHIP MODE === */}
            {activeMode === 'leadership' && (
              <motion.div
                key="leadership"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-32"
              >
                
                {/* 1. PPIF (VP & Creative Lead) */}
                <div className="border-b border-white/5 pb-20">
                  <div className="grid md:grid-cols-12 gap-8 items-start mb-12">
                    <div className="md:col-span-5 md:sticky md:top-32">
                      <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/20">
                        <Star size={14} fill="currentColor" /> VP & Creative Lead
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Shaping the Culture of <br/> <span className="text-purple-500">Student Orientation.</span>
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        A dedicated two-year tenure leading the orientation ecosystem. I bridged the gap between <b>strategic leadership</b> and <b>creative execution</b>—managing the visual identity, public relations, and mentor development while ensuring a seamless regeneration of the creative team.
                      </p>

                      <ul className="space-y-3 mb-8">
                        {['Creative & PR Ecosystem Director', 'Mentor & Public Speaking Trainer', '2-Year Strategic Stewardship'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-purple-500" /> {item}
                          </li>
                        ))}
                      </ul>
                      <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 font-mono animate-pulse">
                        <ArrowRight size={14} /> Swipe photos right
                      </div>
                    </div>
                    
                    {/* GALLERY KANAN (SCROLLBAR UNGU) */}
                    <div className="md:col-span-7 flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-purple transition-colors">
                      {[plenoImg, random4, random2, random5, random3, random6].map((img, i) => (
                        <div key={i} className="min-w-[85%] md:min-w-[350px] aspect-[4/5] rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden relative group snap-center">
                          <img src={img} alt={`PPIF ${i}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cinematic Video (16:9) */}
                  <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 group bg-[#111] shadow-2xl">
                    <SegmentedVideo src={recapVideo} start={92} end={160} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
                      <div>
                        <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-purple-500/20 backdrop-blur-md">
                          <Volume2 size={12} /> AFTERMOVIE
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">PPIF 2024 Recap</h3>
                      </div>
                      <a href="https://www.instagram.com/reel/DFM9v-wSOoU/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold hover:scale-105 transition-transform text-sm">
                        <Play size={16} fill="black" /> Watch Full
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. PR & EVENT (Infinite UMN) */}
                <div className="grid md:grid-cols-12 gap-12 items-center py-10 border-b border-white/5">
                  <div className="order-2 md:order-1 md:col-span-7 py-10 relative flex justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
                    <Carousel3D />
                  </div>

                  <div className="order-1 md:order-2 md:col-span-5 md:sticky md:top-32">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-orange-500/20">
                      <Users size={14} /> PR & Creative Lead
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      Orchestrating Hype at <br/> <span className="text-orange-500">Infinite UMN.</span>
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">
                      I served as the <b>Lead Content Creator & Strategist</b> for Infinite UMN. I managed the official account <span className="text-orange-400 font-mono">@infinite.umn</span>, designing the visual narrative from Teaser to Aftermovie.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {['End-to-End Content Production', 'Engagement Strategy & Analytics', 'Feed & Visual Identity'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-orange-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3. MENTORING (SCROLLBAR HIJAU) */}
                <div className="border-b border-white/5 pb-20">
                  <div className="grid md:grid-cols-12 gap-8 items-start mb-12">
                    <div className="md:col-span-5 md:sticky md:top-32">
                      <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-green-500/20">
                        <Heart size={14} fill="currentColor" /> Mentor Division (2 Years)
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Fostering the Next <br/> <span className="text-green-500">Generation.</span>
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Dedicated <b>two years</b> to the Mentor Division with a consistent mission: <b>Direct Student Guidance</b>. I served as the primary bridge for new students, facilitating their adaptation to campus culture and soft-skill development.
                      </p>
                      <ul className="space-y-3 mb-8">
                        {['Personal Guidance (2 Years)', 'Soft Skill Development', 'Academic Support'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-green-500" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* GALLERY KANAN (SCROLLBAR HIJAU) */}
                    <div className="md:col-span-7 flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-green transition-colors">
                      {[random11, random7, random10, random13, random14, random15, random8, random9, random12].map((img, i) => (
                        <div key={i} className="min-w-[85%] md:min-w-[350px] aspect-[4/5] rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden relative group snap-center">
                          <img src={img} alt="Mentoring" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cinematic Video (16:9) */}
                  <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 group bg-[#111] shadow-2xl">
                    <SegmentedVideo src={recapVideom} start={0} end={45} /> 
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
                      <div>
                        <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-green-500/20 backdrop-blur-md">
                          <Users size={12} /> JOURNEY
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Mentoring Moments</h3>
                      </div>
                      <a href="https://www.instagram.com/reel/DF4GJc_vGJp/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold hover:scale-105 transition-transform text-sm">
                        <Play size={16} fill="black" /> Watch Highlight
                      </a>
                    </div>
                  </div>
                </div>

                {/* --- BOTTOM SECTION: MANAGED ACCOUNTS --- */}
                <div className="relative py-32 mt-20 overflow-hidden">
                  
                  {/* BACKGROUND DECORATION */}
                  <div className="absolute inset-0 pointer-events-none">
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-white/[0.02] whitespace-nowrap select-none">
                       SOCIAL IMPACT
                     </div>
                     <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
                     <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px]" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Managed Accounts</h3>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">Explore the digital footprint and visual identity I built for these organizations.</p>
                  </div>
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                     {/* CARD 1: INFINITE UMN */}
                     <a href="https://www.instagram.com/infinite.umn/" target="_blank" rel="noreferrer" className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/[0.03] hover:border-orange-500/40 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-2xl hover:shadow-[0_0_50px_rgba(249,115,22,0.1)]">
                        <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                           <Instagram size={200} />
                        </div>
                        <div className="relative w-28 h-28 rounded-full overflow-hidden border-[3px] border-orange-500/80 shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform duration-500">
                           <img src={infiniteProfile} alt="Infinite Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center md:text-left relative z-10">
                           <span className="text-orange-400 font-bold tracking-widest text-xs uppercase mb-2 block">PR & Creative Lead</span>
                           <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">@infinite.umn</h4>
                           <p className="text-gray-400 text-sm mb-6 leading-relaxed">The official account for UMN's biggest IT event. Focusing on high-energy visual content & branding.</p>
                           <span className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                             Visit Profile <ArrowRight size={16} className="text-orange-500"/>
                           </span>
                        </div>
                     </a>

                     {/* CARD 2: PPIF UMN */}
                     <a href="https://www.instagram.com/ppif_umn/" target="_blank" rel="noreferrer" className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/[0.03] hover:border-purple-500/40 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-2xl hover:shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                        <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                           <Users size={200} />
                        </div>
                        <div className="relative w-28 h-28 rounded-full overflow-hidden border-[3px] border-purple-500/80 shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform duration-500">
                           <img src={ppifProfile} alt="PPIF Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center md:text-left relative z-10">
                           <span className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-2 block">Vice President</span>
                           <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">@ppif_umn</h4>
                           <p className="text-gray-400 text-sm mb-6 leading-relaxed">The official orientation account. Ensuring clarity, welcoming vibes, and information flow.</p>
                           <span className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                             Visit Profile <ArrowRight size={16} className="text-purple-500"/>
                           </span>
                        </div>
                     </a>
                  </div>
                </div>

                {/* --- BOTTOM CTA (THE MULTIVERSE) --- */}
                <div className="mt-32 relative group pb-20">
                  {/* Background Blur - Pointer events none for clickthrough */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-12 text-center overflow-hidden max-w-3xl mx-auto hover:border-white/20 transition-all z-10">
                     <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                     <div className="relative z-10 flex flex-col items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2 border border-white/10">
                           <History size={32} className="text-white" />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                          Ready to explore the <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Full Timeline?</span>
                        </h3>
                        <p className="text-gray-400 max-w-md text-lg">
                          From early days to current projects. See how the dots connect in my life journey.
                        </p>
                        <button
                          onClick={() => handleNavigate('life')}
                          className="mt-4 px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] cursor-pointer relative z-50"
                        >
                          Enter The Multiverse <ArrowRight size={20} />
                        </button>
                     </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* === ENGINEERING MODE === */}
            {activeMode === 'dev' && (
              <motion.div
                key="dev"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* 1. INTERNSHIP */}
                <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-500/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Terminal size={300} />
                  </div>
                  <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
                        <Star size={12} fill="currentColor"/> CURRENT FOCUS
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-4">Software Engineer Intern</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        Responsible for integrating RESTful APIs, optimizing database queries, and collaborating with the product team.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {['React.js', 'Laravel', 'REST API', 'Agile'].map((t, i) => (
                          <span key={i} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-300 text-sm font-mono">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#050505]/50 rounded-2xl p-6 border border-white/10 font-mono text-sm text-gray-400 shadow-2xl backdrop-blur-sm">
                      <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="space-y-2">
                        <p><span className="text-purple-400">const</span> <span className="text-blue-400">internship</span> = <span className="text-yellow-400">await</span> Company.<span className="text-blue-300">join</span>();</p>
                        <p><span className="text-purple-400">if</span> (internship.<span className="text-blue-300">isSuccesful</span>) {'{'}</p>
                        <p className="pl-4">Career.<span className="text-blue-300">levelUp</span>();</p>
                        <p>{'}'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. OTHER PROJECTS */}
                <div className="grid gap-6">
                  {devProjects.map((item, i) => (
                    <div key={i} className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all hover:border-white/10 flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10" />
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                            <span className="text-gray-500 text-sm">{item.role}</span>
                          </div>
                          <a href={item.link} className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors"><ExternalLink size={20} className="text-white" /></a>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((t, idx) => (
                            <span key={idx} className="text-xs text-gray-400 border border-white/10 px-3 py-1.5 rounded-lg bg-white/5">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* === CREATIVE MODE === */}
            {activeMode === 'creative' && (
              <motion.div
                key="creative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-6 auto-rows-[300px]"
              >
                <div className="md:col-span-2 bg-[#111] rounded-[2.5rem] p-10 border border-white/10 flex flex-col justify-center items-start">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6"><PenTool size={32} /></div>
                  <h3 className="text-3xl font-bold text-white mb-4">Visual Gallery</h3>
                  <p className="text-gray-400 max-w-md">A curated collection of my design works.</p>
                </div>
                {creativeProjects.map((item, i) => (
                  <div key={i} className={`relative group rounded-[2.5rem] overflow-hidden border border-white/10 ${i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-1'} ${i === 1 ? 'md:row-span-2' : ''}`}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-purple-400 text-xs font-bold tracking-wider uppercase mb-2 block">{item.type}</span>
                        <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Capabilities;