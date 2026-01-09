// src/components/AmbientBackground.jsx
/* eslint-disable no-unused-vars */
/* cspell:disable */
import React from 'react';
import { motion } from 'framer-motion';

const AmbientBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {/* Orange Orb */}
    <motion.div
      className="absolute w-[900px] h-[900px] rounded-full opacity-20"
      style={{
        background: 'radial-gradient(circle, rgba(255,100,0,1) 0%, transparent 60%)',
        top: '-20%',
        left: '-10%',
        filter: 'blur(120px)',
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Blue Orb */}
    <motion.div
      className="absolute w-[900px] h-[900px] rounded-full opacity-20"
      style={{
        background: 'radial-gradient(circle, rgba(0,100,255,1) 0%, transparent 60%)',
        bottom: '-20%',
        right: '-10%',
        filter: 'blur(120px)',
      }}
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default AmbientBackground;