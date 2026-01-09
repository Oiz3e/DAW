import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer id="contact" className="py-32 border-t border-white/5 bg-black/40 font-sans">
    <div className="max-w-4xl mx-auto px-8 text-center">
      <h2 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight">
        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Work.</span>
      </h2>
      <p className="text-gray-400 text-xl mb-12 font-normal">
        Open for collaborations, freelance, or just a virtual coffee.
      </p>
      
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-16">
        {[
          { icon: <Github size={24} />, href: '#', color: 'hover:text-orange-400' },
          { icon: <Linkedin size={24} />, href: 'http://www.linkedin.com/in/izdihar-dhawy', color: 'hover:text-blue-400' },
          { icon: <Mail size={24} />, href: 'mailto:izdidhawy@gmail.com', color: 'hover:text-orange-400' }
        ].map((social, i) => (
          <a key={i} href={social.href} target="_blank" className={`bg-white/5 p-4 rounded-full text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}>
            {social.icon}
          </a>
        ))}
      </div>
      
      <div className="text-gray-600 text-sm font-medium">
        © 2025 Izdihar Dhawy Tasdid • Crafted with React
      </div>
    </div>
  </footer>
);

export default Footer;