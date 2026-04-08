/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'framer-motion';
import { PROJECTS, SKILLS, SOCIALS } from './constants';
import { 
  Terminal, 
  Code, 
  ArrowOutward, 
  NorthEast, 
  Javascript, 
  DeployedCode, 
  Palette, 
  Database, 
  CloudQueue
} from './components/Icons';
import { useRef, useState } from 'react';
import React from 'react';

// --- Components ---

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(145,94,255,0.15)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto">
        <button 
          onClick={scrollToTop}
          className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-container cursor-pointer hover:opacity-80 transition-opacity italic"
        >
          Mern Stack Developer
        </button>
        <div className="hidden md:flex items-center gap-8 font-sans tracking-tight text-sm uppercase font-semibold">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#tech-stack">Tech Stack</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#work">Work</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#contact">Contact</a>
          
          {/* UPDATED: Now scrolls to the #resume section instead of downloading directly */}
          <a 
            className="px-6 py-2 bg-white/5 rounded-full text-primary hover:bg-white/10 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] scale-95 active:opacity-80" 
            href="#resume"
          >
            Resume
          </a>
        </div>
        <div className="flex items-center gap-4 text-on-surface-variant">
          <Terminal className="cursor-pointer hover:text-primary" />
          <Code className="cursor-pointer hover:text-primary" />
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative h-screen flex items-center justify-center pt-20 px-4 md:px-8 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        
        {/* NEW AESTHETIC HEADER */}
        <motion.h1 
          animate={{
            filter: [
              "drop-shadow(0px 0px 10px rgba(209, 188, 255, 0.1))", 
              "drop-shadow(0px 0px 25px rgba(209, 188, 255, 0.5))", 
              "drop-shadow(0px 0px 10px rgba(209, 188, 255, 0.1))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-8 leading-tight flex flex-wrap items-center justify-center gap-3 md:gap-5"
        >
          {/* 1. The Name (Bold, Animated MERN Gradient: Mongo Green to React Blue) */}
          <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-[#68a063] via-[#61dafb] to-[#68a063] bg-[length:200%_auto] animate-gradient whitespace-nowrap">
            SOURABH SINGH
          </span>
          
          {/* 2. The Thicker Anchor Bar (Hidden on mobile to allow clean wrapping) */}
          <span className="w-[3px] md:w-[5px] h-8 md:h-12 bg-white rounded-full opacity-90 shadow-[0_0_10px_rgba(255,255,255,0.5)] hidden md:block"></span>
          
          {/* 3. The Title (Lighter weight, matching your purple primary theme) */}
          <span className="font-medium text-primary whitespace-nowrap">
            FULL STACK DEVELOPER.
          </span>
        </motion.h1>

        <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto font-light leading-relaxed mb-12 px-4">
          I build responsive, high-performance web applications using the <span className="italic text-white">MERN STACK.</span>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-linear-to-r from-primary to-primary-container text-on-primary font-bold text-lg rounded-full shadow-[0_0_30px_rgba(161,120,255,0.3)]"
            href="mailto:singhsourav090305@gmail.com?subject=Opportunity%20via%20Portfolio&body=Hi%20Sourabh,%0A%0AI%20was%20looking%20at%20your%20portfolio%20and%20wanted%20to%20connect%20regarding..."
          >
            Contact Me
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-surface-bright/20 backdrop-blur-md border border-outline-variant/15 text-primary font-bold text-lg rounded-full hover:bg-surface-bright/40 transition-all duration-300"
            href="#work"
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>
      
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #2b273c 0%, transparent 70%)' }}></div>
    </header>
  );
};

const About = () => {
  return (
    <section className="py-40 px-8 bg-surface-container-low" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block mb-12"
        >
          <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full"></div>
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter relative">
            <span className="italic font-light">Architectural</span> <br/>
            <span className="text-primary">Full-Stack Mindset</span>
          </h2>
        </motion.div>
        
        <div className="h-1 w-24 bg-linear-to-r from-primary to-secondary mb-12 mx-auto"></div>
        
        <div className="space-y-10">
          <p className="text-2xl md:text-4xl text-on-surface font-light leading-[1.3] tracking-tight">
            I am a Full-Stack Developer driven by a passion for building seamless digital experiences. Specializing in the <span className="text-glow-gradient font-bold italic">MERN STACK</span> (MongoDB, Express.js, React, Node.js), I engineer responsive, <span className="text-glow-gradient font-bold italic">user-centric applications</span> from the ground up. 
          </p>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: typeof SKILLS[0];
  key?: React.Key;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const Icon = () => {
    switch(skill.icon) {
      case 'javascript': return <Javascript className={`text-${skill.color} text-3xl`} />;
      case 'deployed_code': return <DeployedCode className={`text-${skill.color} text-3xl`} />;
      case 'palette': return <Palette className={`text-${skill.color} text-3xl`} />;
      case 'terminal': return <Terminal className={`text-${skill.color} text-3xl`} />;
      case 'database': return <Database className={`text-${skill.color} text-3xl`} />;
      case 'cloud_queue': return <CloudQueue className={`text-${skill.color} text-3xl`} />;
      default: return null;
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -12 }}
      className="group relative p-10 rounded-xl glass-panel border border-outline-variant/5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(145,94,255,0.15)]"
    >
      <div className={`w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-6`}>
        <Icon />
      </div>
      <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
      <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-black tracking-wider uppercase mb-4">
        {skill.category}
      </span>
      <p className="text-on-surface-variant text-sm leading-relaxed">{skill.description}</p>
      
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-32 px-8" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4 block italic">Engineered Skills</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Core Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  key?: React.Key;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newAngle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI);
    setAngle(newAngle + 90);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative premium-card-border rounded-[2rem] overflow-hidden"
      style={{ '--angle': `${angle}deg` } as any}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        
        <div className={`lg:col-span-7 relative min-h-[200px] lg:min-h-[300px] overflow-hidden bg-[#0c0a18] ${!isEven ? 'lg:order-2' : ''}`}>
          <img 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-1000 group-hover:scale-105" 
            src={project.image}
            referrerPolicy="no-referrer"
          />
          <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-background via-background/20 to-transparent hidden lg:block`}></div>
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent lg:hidden"></div>
        </div>
        
        <div className={`lg:col-span-5 p-6 md:p-8 flex flex-col justify-center relative z-10 ${!isEven ? 'lg:order-1' : ''}`}>
          
          <div className="flex items-center gap-3 mb-3">
            <span className={`w-8 h-[1px] bg-${project.color}`}></span>
            <span className={`text-${project.color} text-[10px] font-black tracking-[0.3em] uppercase italic`}>{project.category}</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter text-white">{project.title}</h3>
          
          <p className="text-on-surface-variant mb-6 text-base md:text-lg leading-relaxed font-light">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-primary uppercase backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 bg-${project.color} text-on-background font-black text-xs tracking-widest uppercase rounded-full overflow-hidden shadow-[0_5px_20px_rgba(209,188,255,0.2)]`}
              href={project.liveUrl}
            >
              <span className="relative z-10">Live Site</span>
              <ArrowOutward className="relative z-10 text-base" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border border-outline-variant/30 text-white font-black text-xs tracking-widest uppercase rounded-full hover:bg-white/5 transition-all"
              href={project.githubUrl}
            >
              <span>GitHub</span>
              <Code className="text-base opacity-50" />
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-[-1px] bg-[conic-gradient(from_var(--angle),transparent,var(--color-primary),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-[2rem]"></div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-32 px-4 md:px-0 bg-[#0c0a18]" id="work">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 italic text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
            Featured <span className="font-light">Deployments</span>
          </h2>
          <div className="h-[2px] w-48 bg-linear-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>
        
        <div className="space-y-40">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-32 px-8 bg-[#0a081a] relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <span className="text-secondary text-sm font-black tracking-[0.5em] uppercase mb-6 neon-overline">04 / COLLABORATION</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white italic">START A <br/>PROJECT.</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
            I am currently available for freelance opportunities and full-time engineering roles. Let's build something technically superior.
          </p>
          <a className="text-xl md:text-2xl lg:text-3xl font-bold text-white hover:text-secondary transition-colors break-all leading-tight" href="mailto:singhsourav090305@gmail.com">
            singhsourav090305@gmail.com
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center lg:pl-20"
        >
          <span className="text-secondary text-sm font-black tracking-[0.5em] uppercase mb-10 neon-overline">SOCIAL CONNECT</span>
          <div className="flex flex-col gap-8">
            {SOCIALS.map(social => (
              <a key={social.name} className="group flex justify-between items-center py-6 border-b border-slate-800 hover:border-secondary transition-all" href={social.url} target="_blank" rel="noreferrer">
                <span className="text-2xl font-black tracking-widest text-slate-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-300">{social.name}</span>
                <NorthEast className="text-secondary text-3xl opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- NEW COMPONENT: Embedded Resume Viewer ---
const ResumeViewer = () => {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#0a081a] relative" id="resume">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-secondary text-sm font-black tracking-[0.5em] uppercase mb-4 block neon-overline">05 / QUALIFICATIONS</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white italic">MY <span className="text-primary font-light">RESUME.</span></h2>
        </div>
        
        {/* The Embedded Viewer */}
        <div className="w-full h-[80vh] min-h-[800px] rounded-[2rem] overflow-hidden premium-card-border shadow-[0_20px_50px_rgba(145,94,255,0.1)] relative z-10 p-2 bg-surface-container-low/50">
          <iframe 
            src="/resume.pdf" 
            title="Sourabh Singh Resume"
            className="w-full h-full rounded-[1.5rem] bg-white"
            style={{ border: 'none' }}
          />
        </div>

        {/* Fallback Download Button (Crucial for mobile users) */}
        <div className="mt-8 flex justify-center">
          <a 
            href="/resume.pdf" 
            download="Resume.pdf"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
          >
            Download PDF
          </a>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10"></div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0f0b1f] w-full py-12 px-12 border-t border-outline-variant/15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-sans text-xs tracking-widest uppercase text-slate-500">© 2026 Sourabh Singh. Built with Ethereal Precision.</span>
        <div className="flex gap-8 font-sans text-xs tracking-widest uppercase text-slate-500">
          <a className="hover:text-tertiary transition-colors" href="https://github.com/Mindflayer09">GitHub</a>
          <a className="hover:text-tertiary transition-colors" href="https://www.linkedin.com/in/sourabh-singh09">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-linear-to-r from-secondary to-tertiary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        {/* INJECTED RIGHT HERE! */}
        <ResumeViewer />
      </main>
      
      <Footer />
      
      {/* Background Decoration */}
      <div className="fixed top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}