/* eslint-disable no-unused-vars */
/* cspell:disable */
import React from 'react';
import { Code, PenTool, Zap, Briefcase, GraduationCap, Users, Award, Heart } from 'lucide-react';

import rekt from '../assets/rekt/high.jpg'
import ushare from '../assets/Ushare/Landing.jpg'
import holix from '../assets/holix/Holix.webp'
import pace from '../assets/pace/pace.png'
import materdei from '../assets/materdei/materdei.png'
import wq from '../assets/wq/wq.jpg'
import sodik from '../assets/sodik/sodik.png'
import video1 from '../assets/videos/repanzz.mp4';
import video2 from '../assets/videos/plunix.mp4';
import video3 from '../assets/videos/handeriku.mp4';

export const categories = [
  { id: 'dev', label: 'Developer', icon: <Code size={18} /> },
  { id: 'creative', label: 'Creative & Design', icon: <PenTool size={18} /> },
  { id: 'life', label: 'Timeline', icon: <Zap size={18} /> },
];

// ==========================================
// 1. DEVELOPER DATA (Engineering & Logic)
// ==========================================
export const devProjects = [
  {
    id: 'd0',
    title: 'PT Rekatama Pola Sejahtera',
    role: 'Full Stack Developer',
    desc: "Designed and developed a comprehensive company profile website from scratch. Handled both front-end interfaces and back-end services to establish a strong digital presence.",
    image: rekt, 
    tech: ['React', 'Tailwind CSS', 'Fullstack'],
    link: 'https://kc.umn.ac.id/id/eprint/43703/',
  },
  {
    id: 'd1',
    title: 'EduVerse',
    role: 'UI/UX & Frontend Implementer',
    desc: "Created intuitive interfaces for students/teachers. Developed interactive prototypes in Figma and worked closely with the dev team to ensure smooth design implementation.",
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop', 
    tech: ['Figma', 'Prototyping'],
    link: 'file:///D:/Tugas/Semester%205/EDUVERSE_Proposal.docx',
  },
  {
    id: 'd2',
    title: 'USHARE',
    role: 'Full Stack Developer',
    desc: "Developed a functional Android app (Frontend & Backend). Designed backend services using Firebase and optimized app performance with efficient API calls.",
    image: ushare,
    tech: ['Android Studio', 'Firebase', 'Kotlin'],
    link: 'https://www.figma.com/proto/qiWHgKArZHIXRXi85ahIcL/USHARE---MAP?node-id=0-1',
    github: 'https://github.com/rxx-umn/utslec'
  },
  {
    id: 'd3',
    title: 'Holix Jump',
    role: 'Full Stack Game Dev',
    desc: "Designed and developed a 3D game in Unity. Implemented core game logic, physics, and gameplay mechanics using C#.",
    image: holix,
    tech: ['Unity', 'C#', 'Game Mechanics'],
    link: 'https://docs.google.com/document/d/1jttn9m1dGuRMjFuUieVp_rY6roLt8YKgaStPQDDUmqA/edit?usp=sharing',
    github: 'https://github.com/Oiz3e/helixjump'
  },
  {
    id: 'd4',
    title: 'Pace Delivery',
    role: 'UI/UX & Logic Flow',
    desc: "Developed interactive Figma prototypes demonstrating order flows. Collaborated with the development team to iterate features based on feedback.",
    image: pace,
    tech: ['System Logic', 'Flow Analysis'],
    link: 'https://www.figma.com/proto/jBnRYGv9Sv9W8VpQg7qmvg/PaCeFood?node-id=34-18&starting-point-node-id=34%3A18',
  },
  {
    id: 'd5',
    title: 'SMPK Mater Dei E-Learning',
    role: 'Front End Developer',
    desc: "Developed responsive front-end components for online learning. Implemented designs into a functional interface focusing on accessibility.",
    image: materdei,
    tech: ['Frontend Developer'],
    link: 'https://docs.google.com/document/d/1kfKh0KIiEiokehM7fDtL4J-prYEJVvchycYTFXi2bdE/edit?tab=t.0',
    github: 'https://github.com/michaeltio/elearning-materdei'
  },
  {
    id: 'd6',
    title: 'WorkQuest',
    role: 'Software Eng & PM',
    desc: "Managed project timeline and coordinated tasks across teams. Oversaw feature planning, documentation, and alignment between stakeholders and developers.",
    image: wq,
    tech: ['Project Management', 'Documentation', 'SDLC'],
    link: 'https://www.figma.com/proto/RD10dbJkPqFYwM2VSRqdAF/UI-UX-SOFTWARE-ENGINERING?node-id=0-1&p=f&t=KsnviETqqevWiwcB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  {
    id: 'd7',
    title: 'Sodik Jalan-Jalan',
    role: 'Full Stack Developer',
    desc: "Designed front-end and back-end systems for a flight ticketing platform. Built and deployed the service using Vercel.",
    image: sodik,
    tech: ['React', 'Vercel','Frontend Developer'],
    link: 'https://online-ticket-fpu8igsvm-sidqigamers.vercel.app/', // Ganti dengan link Vercel Live Demo
    github: 'https://github.com/sidqigamers/online-ticket' // Ganti dengan link Github Sodik
  }
];

// ==========================================
// 2. CREATIVE DATA (Visual, UI/UX, Content)
// ==========================================
export const creativeProjects = [
  {
    id: 'c1',
    title: 'Professional 2D Intro',
    role: 'Motion Designer',
    desc: "High-energy 2D animated intro with dynamic transitions tailored specifically to hook viewers for a YouTube gaming channel.",
    video: video1,
    type: 'YouTube Intro',
    tech: ['After Effects'],
    link: 'https://www.instagram.com/p/DNf5CmWt2OX/',
    start: 8
  },
  {
    id: 'c2',
    title: 'Professional 2D Intro',
    role: 'Motion Designer',
    desc: "Clean and modern 2D typography animation designed to establish a strong and professional visual identity for tech reviewers.",
    video: video2, // <-- Ganti pakai variabel video2
    type: 'YouTube Intro',
    tech: ['After Effects'],
    link: 'https://www.instagram.com/p/DN25cxi2gjT/',
    start: 5
  },
  {
    id: 'c3',
    title: 'Professional 2D Intro',
    role: 'Motion Designer',
    desc: "High-energy 2D animated intro with dynamic transitions tailored specifically to hook viewers for a YouTube gaming channel.",
    video: video3, // <-- Ganti pakai variabel video3
    type: 'YouTube Intro',
    tech: ['After Effects'],
    link: 'https://www.instagram.com/p/DOORddSFNLf/',
    start: 6
  }
];

// ==========================================
// 3. TIMELINE DATA (All History)
// ==========================================
export const timelineData = [
  {
    year: "Sept 2025 - Jan 2026",
    title: "PT Rekatama Pola Sejahtera",
    role: "Full Stack Developer",
    desc: "Built a comprehensive company profile website to enhance the company's digital presence.",
    icon: <Code size={16} />,
    color: "bg-blue-500",
    category: "engineering" // <-- Tambahin ini
  },
  {
    year: "Jun 2025 - Jul 2025",
    title: "Hotwheels Event",
    role: "PIC Event",
    desc: "Provided assistance at designated event stations, managed attendee inquiries, and supported smooth event operations through coordination with the organizing team.",
    icon: <Users size={16} />,
    color: "bg-red-500",
    category: "leadership"
  },
  {
    year: "Sept 2024 - Dec 2024",
    title: "EduVerse",
    role: "Developer & Designer",
    desc: "Simultaneously developed UI/UX for EduVerse.",
    icon: <Code size={16} />,
    color: "bg-pink-500",
    category: "engineering" 
  },
  {
    year: "Sept 2024 - Dec 2024",
    title: "USHARE",
    role: "Developer & Designer",
    desc: "Full Stack Android for USHARE.",
    icon: <Code size={16} />,
    color: "bg-blue-500",
    category: "engineering" 
  },
  {
    year: "Sept 2024 - Dec 2024",
    title: "Holix Jump",
    role: "Game Developer",
    desc: "Designed and developed a 3D Unity game with custom mechanics.",
    icon: <Zap size={16} />,
    color: "bg-orange-500",
    category: "engineering"
  },
  {
    year: "Sept 2024 - Nov 2024",
    title: "Infinite UMN 2024",
    role: "Public Relations",
    desc: "Designed engaging content and acted as key liaison. Maintained positive relationships with participants.",
    icon: <Users size={16} />,
    color: "bg-pink-500",
    category: "leadership"
  },
  {
    year: "Jan 2024 - Sept 2024",
    title: "Perkenalan Prodi Informatika",
    role: "Vice President",
    desc: "Led Visual & PR divisions. Trained leaders in public speaking and guided documentation teams.",
    icon: <Award size={16} />,
    color: "bg-purple-500",
    category: "leadership"
  },
  {
    year: "Feb 2024 - May 2024",
    title: "Pace Delivery",
    role: "UI/UX Designer",
    desc: "Created intuitive UI/UX and interactive prototypes for food ordering app.",
    icon: <PenTool size={16} />,
    color: "bg-yellow-500",
    category: "engineering"
  },
  {
    year: "Jan 2023 - Dec 2024",
    title: "Mentoring UMN",
    role: "Mentor Division",
    desc: "Guided new students' transition to university life for two consecutive periods.",
    icon: <Heart size={16} />,
    color: "bg-green-500",
    category: "leadership"
  },
  {
    year: "Apr 2023 - Jul 2023",
    title: "SMPK Mater Dei E-Learning",
    role: "Front End Developer",
    desc: "Designed and implemented user interfaces for online learning platform.",
    icon: <Code size={16} />,
    color: "bg-blue-500",
    category: "engineering"
  },
  {
    year: "Feb 2023 - Jul 2023",
    title: "WorkQuest",
    role: "Software Eng & PM",
    desc: "Managed project timeline and designed high-fidelity prototypes.",
    icon: <Briefcase size={16} />,
    color: "bg-indigo-500",
    category: "engineering"
  },
  {
    year: "Feb 2022 - Jul 2022",
    title: "Sodik Jalan-Jalan",
    role: "Full Stack Developer",
    desc: "Built ticketing platform for booking flights services using Vercel.",
    icon: <Code size={16} />,
    color: "bg-blue-500",
    category: "engineering"
  }
];