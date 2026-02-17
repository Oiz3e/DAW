// src/components/CreativeJourney.jsx
/* eslint-disable no-unused-vars */
/* cspell:disable */
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { timelineData } from '../data';
import { Briefcase, GraduationCap, Calendar, Filter, Code, Users } from 'lucide-react';

const CreativeJourney = () => {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('all');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const filteredData = timelineData.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="multiverse" className="py-24 md:py-32 relative font-sans bg-[#050505] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-1/4 right-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-[80px] md:blur-[120px]" />
         <div className="absolute bottom-1/4 left-10 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-orange-500/5 rounded-full blur-[60px] md:blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10" ref={containerRef}>
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-5 py-2 mb-4 md:mb-6"
              >
                <Calendar size={14} className="text-blue-500" />
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-400">Mission Log</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Multiverse</span>
              </h2>
              <p className="text-gray-400 mt-4 text-sm md:text-lg max-w-md">A chronological record of milestones, projects, and roles.</p>
            </div>

            {/* FILTER FIX: Statis, 100% responsif, nggak jebol ke kanan */}
            <div className="w-full lg:w-auto mt-4 lg:mt-0 z-20">
              <div className="flex flex-wrap items-center bg-white/5 p-1.5 rounded-2xl md:rounded-full border border-white/10 w-full gap-1 sm:gap-0">
                {[
                  { id: 'all', icon: <Filter size={14} />, label: 'All History' },
                  { id: 'engineering', icon: <Code size={14} />, label: 'Engineering' },
                  { id: 'leadership', icon: <Users size={14} />, label: 'Leadership' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`
                      relative flex items-center justify-center gap-1.5 md:gap-2 px-2 sm:px-4 py-2.5 md:py-3 rounded-xl md:rounded-full text-[10px] sm:text-xs md:text-sm font-bold transition-colors duration-300 flex-1 min-w-[30%]
                      ${filter === tab.id ? 'text-black' : 'text-gray-400 hover:text-white'}
                    `}
                  >
                    {filter === tab.id && (
                      <motion.div layoutId="filterTabPill" className="absolute inset-0 bg-white rounded-xl md:rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] z-[-1]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                    )}
                    {tab.icon}
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-white/10 ml-2 sm:ml-4 md:ml-8 pb-20 min-h-[500px]">
            <motion.div style={{ height: lineHeight }} className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-0" />
            
            <div className="space-y-10 md:space-y-12">
              <AnimatePresence mode="popLayout">
                {filteredData.map((item, idx) => {
                  const gradientColor = item.color.replace('bg-', 'from-');
                  const textColor = item.color.replace('bg-', 'text-');

                  return (
                    <motion.div 
                      key={item.title + item.year}
                      layout
                      initial={{ opacity: 0, scale: 0.8, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="relative pl-6 sm:pl-10 md:pl-16 group"
                    >
                      <div className="absolute left-[-16px] md:left-[-25px] top-2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
                        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`} />
                      </div>

                      <div className="relative p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md group-hover:bg-white/[0.04] group-hover:border-white/20 transition-all duration-300 group-hover:translate-x-1 md:group-hover:translate-x-2 overflow-hidden flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                        
                        <div className="md:w-1/3 shrink-0">
                          <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-3 border bg-white/5 ${textColor} border-white/10`}>
                            {item.year}
                          </span>
                          <h3 className="text-lg md:text-2xl font-bold text-white leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                            {item.title}
                          </h3>
                        </div>

                        <div className="md:w-2/3">
                          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium mb-2 md:mb-3">
                            <span className={`p-1.5 rounded-md bg-white/5 ${textColor}`}>
                              {item.category === 'leadership' ? <Users size={14} /> : <Briefcase size={14} />}
                            </span>
                            {item.role}
                          </div>
                          <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
                            {item.desc}
                          </p>
                        </div>

                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${gradientColor}/10 to-transparent pointer-events-none`} />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeJourney;