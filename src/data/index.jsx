/* eslint-disable no-unused-vars */
/* cspell:disable */
import React from 'react';
import { Code, PenTool, Zap, Briefcase, GraduationCap, Users, Award} from 'lucide-react';

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
    id: 'd1',
    title: 'EduVerse',
    role: 'UI/UX & Frontend Implementer',
    desc: "Created intuitive interfaces for students/teachers. Developed interactive prototypes in Figma and worked closely with the dev team to ensure smooth design implementation.",
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop', 
    tech: ['Figma', 'Prototyping', 'Frontend Logic'],
    link: '#'
  },
  {
    id: 'd2',
    title: 'USHARE',
    role: 'Full Stack Developer',
    desc: "Developed a functional Android app (Frontend & Backend). Designed backend services using Firebase and optimized app performance with efficient API calls.",
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop',
    tech: ['Android Studio', 'Firebase', 'Kotlin'],
    link: '#'
  },
  {
    id: 'd3',
    title: 'Holix Jump',
    role: 'Full Stack Game Dev',
    desc: "Designed and developed a 3D game in Unity. Implemented core game logic, physics, and gameplay mechanics using C#.",
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=900&auto=format&fit=crop',
    tech: ['Unity', 'C#', 'Game Mechanics'],
    link: '#'
  },
  {
    id: 'd4',
    title: 'Pace Delivery',
    role: 'UI/UX & Logic Flow',
    desc: "Developed interactive Figma prototypes demonstrating order flows. Collaborated with the development team to iterate features based on feedback.",
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=900&auto=format&fit=crop',
    tech: ['System Logic', 'Flow Analysis'],
    link: '#'
  },
  {
    id: 'd5',
    title: 'SMPK Mater Dei E-Learning',
    role: 'Front End Developer',
    desc: "Developed responsive front-end components for online learning. Implemented designs into a functional interface focusing on accessibility.",
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=900&auto=format&fit=crop',
    tech: ['React', 'Responsive Web', 'Accessibility'],
    link: '#'
  },
  {
    id: 'd6',
    title: 'WorkQuest',
    role: 'Software Eng & PM',
    desc: "Managed project timeline and coordinated tasks across teams. Oversaw feature planning, documentation, and alignment between stakeholders and developers.",
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop',
    tech: ['Project Management', 'Documentation', 'SDLC'],
    link: '#'
  },
  {
    id: 'd7',
    title: 'Sodik Jalan-Jalan',
    role: 'Full Stack Developer',
    desc: "Designed front-end and back-end systems for a flight ticketing platform. Built and deployed the service using Vercel.",
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop',
    tech: ['React', 'Vercel', 'Fullstack'],
    link: '#'
  }
];

// ==========================================
// 2. CREATIVE DATA (Visual, UI/UX, Content)
// ==========================================
export const creativeProjects = [
  {
    id: 'c1',
    title: 'WorkQuest UI',
    role: 'Product Designer',
    desc: "Designed full high-fidelity prototype in Figma, defining user flows and UI structure for a professional networking platform.",
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=900&auto=format&fit=crop',
    type: 'design',
    tech: ['Figma', 'High-Fidelity', 'User Flow'],
  },
  {
    id: 'c2',
    title: 'Pace Delivery UI',
    role: 'UI/UX Designer',
    desc: "Designed clear wireframes with efficient navigation. Selected cohesive color schemes and readable typography for a professional look.",
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=900&auto=format&fit=crop',
    type: 'design',
    tech: ['Wireframing', 'Color Theory', 'Typography'],
  },
  {
    id: 'c3',
    title: 'USHARE Interface',
    role: 'UI Designer',
    desc: "Maintained consistent, user-friendly UI/UX across Android devices. Focused on layouting and interactive mobile elements.",
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop',
    type: 'design',
    tech: ['Mobile UI', 'Material Design'],
  },
  {
    id: 'c4',
    title: 'EduVerse Experience',
    role: 'UI/UX Designer',
    desc: "Designed interactive virtual classrooms and customizable avatars. Tailored interfaces for specific needs of students and teachers.",
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop',
    type: 'design',
    tech: ['EdTech Design', 'Gamification'],
  },
  {
    id: 'c5',
    title: 'Visual Identity & Feeds',
    role: 'Graphic Designer',
    desc: "Collection of posters, banners, and Instagram feeds created for various events and organizations.",
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=900&auto=format&fit=crop',
    type: 'gallery',
    tech: ['Photoshop', 'Illustrator', 'Branding'],
  },
  {
    id: 'c6',
    title: 'Motion Graphics',
    role: 'Video Editor',
    desc: "Engaging motion graphics and video intros for YouTube and social media content.",
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=900&auto=format&fit=crop',
    type: 'video',
    tech: ['After Effects', 'Premiere', 'Animation'],
  }
];

// ==========================================
// 3. TIMELINE DATA (All History)
// ==========================================
export const timelineData = [
  {
    year: "Sept 2024 - Dec 2024",
    title: "EduVerse & USHARE",
    role: "Developer & Designer",
    desc: "Simultaneously developed UI/UX for EduVerse and Full Stack Android for USHARE.",
    icon: <Code size={16} />,
    color: "bg-blue-500"
  },
  {
    year: "Sept 2024 - Dec 2024",
    title: "Holix Jump",
    role: "Game Developer",
    desc: "Designed and developed a 3D Unity game with custom mechanics.",
    icon: <Zap size={16} />,
    color: "bg-orange-500"
  },
  {
    year: "Sept 2024 - Nov 2024",
    title: "Infinite UMN 2024",
    role: "Public Relations",
    desc: "Designed engaging content and acted as key liaison. Maintained positive relationships with participants.",
    icon: <Users size={16} />,
    color: "bg-pink-500"
  },
  {
    year: "Jan 2024 - Sept 2024",
    title: "Perkenalan Prodi Informatika",
    role: "Vice President",
    desc: "Led Visual & PR divisions. Trained leaders in public speaking and guided documentation teams.",
    icon: <Award size={16} />,
    color: "bg-purple-500"
  },
  {
    year: "Feb 2024 - May 2024",
    title: "Pace Delivery",
    role: "UI/UX Designer",
    desc: "Created intuitive UI/UX and interactive prototypes for food ordering app.",
    icon: <PenTool size={16} />,
    color: "bg-yellow-500"
  },
  {
    year: "Jan 2023 - Dec 2024",
    title: "Mentoring UMN",
    role: "Mentor Division",
    desc: "Guided new students' transition to university life for two consecutive periods.",
    icon: <Users size={16} />,
    color: "bg-green-500"
  },
  {
    year: "Apr 2023 - Jul 2023",
    title: "SMPK Mater Dei E-Learning",
    role: "Front End Developer",
    desc: "Designed and implemented user interfaces for online learning platform.",
    icon: <Code size={16} />,
    color: "bg-blue-500"
  },
  {
    year: "Feb 2023 - Jul 2023",
    title: "WorkQuest",
    role: "Software Eng & PM",
    desc: "Managed project timeline and designed high-fidelity prototypes.",
    icon: <Briefcase size={16} />,
    color: "bg-indigo-500"
  },
  {
    year: "2023",
    title: "Hotwheels Event Staff",
    role: "Event Crew",
    desc: "Handled crowd control and logistics at ICE BSD.",
    icon: <Users size={16} />,
    color: "bg-red-500"
  },
  {
    year: "Feb 2022 - Jul 2022",
    title: "Sodik Jalan-Jalan",
    role: "Full Stack Developer",
    desc: "Built ticketing platform for booking flights services using Vercel.",
    icon: <Code size={16} />,
    color: "bg-blue-500"
  }
];