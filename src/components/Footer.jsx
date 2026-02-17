// src/components/Footer.jsx
/* eslint-disable no-unused-vars */
/* cspell:disable */
import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Instagram, Copy, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socials = [
    { name: 'WhatsApp', icon: <MessageCircle size={20} />, href: 'https://wa.me/081398566669', color: 'hover:text-green-500 hover:border-green-500/30' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/izddhr_/', color: 'hover:text-pink-500 hover:border-pink-500/30' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/izdihar-dhawy', color: 'hover:text-blue-500 hover:border-blue-500/30' },
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/Oiz3e', color: 'hover:text-white hover:border-white/30' }
  ];

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('izdidhawy@gmail.com');
    alert('Email copied to clipboard!'); 
  };

  return (
    <footer id="contact" className="relative bg-[#050505] font-sans border-t border-white/5 pt-20 pb-10 overflow-hidden">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        
        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12 mb-16 md:mb-20">
          
          {/* Left Side: Statement */}
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-gray-400 text-[10px] md:text-xs font-mono uppercase tracking-widest">Available for Freelance</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Got a project? <br />
              <span className="text-gray-500">Let's build it together.</span>
            </h2>
            
            {/* Email Contact Box */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-[#111] border border-white/10 p-2 rounded-2xl md:rounded-full mt-4 w-full sm:w-max relative z-20">
              <div className="flex items-center justify-center gap-3 px-4 py-3 sm:py-2 w-full sm:w-auto border-b border-white/5 sm:border-none">
                <Mail size={18} className="text-orange-500" />
                <span className="text-white font-medium text-sm md:text-base truncate">izdidhawy@gmail.com</span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button onClick={handleCopyEmail} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl md:rounded-full transition-colors text-xs md:text-sm font-bold">
                  <Copy size={14} /> Copy
                </button>
                <a href="mailto:izdidhawy@gmail.com" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-xl md:rounded-full transition-colors text-xs md:text-sm font-bold group">
                  Send <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Social Grid */}
          <div className="w-full md:w-auto mt-6 md:mt-0 relative z-20">
            <p className="text-gray-500 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-4">Connect</p>
            {/* Ditambahin flex-wrap biar kalau ada 4 kotak di layar HP sempit nggak gepeng */}
            <div className="flex flex-wrap gap-3">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  title={social.name}
                  className={`flex items-center justify-center flex-1 sm:flex-none w-auto sm:w-14 h-12 sm:h-14 bg-[#111] border border-white/10 rounded-xl md:rounded-2xl text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* --- BOTTOM ROW --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-gray-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Izdihar Dhawy Tasdid.</p>
          <div className="flex items-center gap-6">
            <span>Based in ID</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;