/* eslint-disable no-unused-vars */
/* cspell:disable */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timelineData } from '../data';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const CreativeJourney = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-32 relative font-sans bg-[#050505] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6"
          >
            <Calendar size={14} className="text-orange-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">The Journey</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Milestones <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">& Chapters.</span>
          </h2>
        </div>

        <div className="relative">
          
          {/* --- CENTRAL LINE (STATIC) --- */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full" />
          
          {/* --- GLOWING LINE (ANIMATED) --- */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 -translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-0 rounded-full" 
          />
          
          <div className="space-y-24">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* --- CENTER NODE --- */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center z-20 shadow-xl group hover:border-orange-500 transition-colors duration-300">
                    <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`} />
                  </div>

                  {/* --- CONTENT CARD --- */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0">
                    <div className={`relative group ${isEven ? 'md:pr-20' : 'md:pl-20'}`}>
                      
                      {/* Horizontal Connector Line (Only Desktop) */}
                      <div className={`hidden md:block absolute top-6 h-[1px] w-20 bg-white/10 ${isEven ? 'right-0' : 'left-0'}`} />

                      {/* The Card */}
                      <div className="relative p-8 rounded-[2rem] bg-[#111]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:transform group-hover:-translate-y-1 overflow-hidden">
                        
                        {/* Background Watermark Year */}
                        <span className="absolute -right-4 -top-8 text-[8rem] font-bold text-white/[0.03] select-none pointer-events-none font-mono">
                          {item.year}
                        </span>

                        {/* Content */}
                        <div className="relative z-10">
                          <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 border bg-white/5 ${item.color.replace('bg-', 'text-').replace('border-', 'border-')}/20 border-white/10`}>
                            {item.year}
                          </span>
                          
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          
                          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mb-6">
                            {item.title.includes('Education') ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                            {item.role}
                          </div>
                          
                          <p className="text-gray-400 leading-relaxed text-sm">
                            {item.desc}
                          </p>
                        </div>

                        {/* Hover Gradient Glow */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${item.color.replace('bg-', 'from-')}/50 to-transparent`} />
                      </div>

                    </div>
                  </div>

                  {/* --- EMPTY SPACE (BALANCE) --- */}
                  <div className="hidden md:block md:w-1/2" />

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreativeJourney;