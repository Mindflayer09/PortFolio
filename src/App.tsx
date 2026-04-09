/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { PROJECTS, SKILLS } from './constants';
import { 
  Terminal, 
  Code, 
  ArrowOutward, 
  Javascript, 
  DeployedCode, 
  Palette, 
  Database, 
  CloudQueue
} from './components/Icons';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); 
    setIsOpen(false); 

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150); 
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(145,94,255,0.15)] border-b border-white/5">
      <div className="flex justify-between items-center w-full px-5 md:px-8 py-4 max-w-full mx-auto relative z-50">
        <a 
          href="#"
          onClick={scrollToTop}
          className="text-lg md:text-xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-container cursor-pointer hover:opacity-80 transition-opacity italic"
        >
          Mern Stack Developer
        </a>
        
        <div className="hidden md:flex items-center gap-8 font-sans tracking-tight text-sm uppercase font-semibold">
          <a className="text-on-surface-variant hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a className="text-on-surface-variant hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'tech-stack')}>Tech Stack</a>
          <a className="text-on-surface-variant hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'work')}>Work</a>
          <a className="text-on-surface-variant hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          
          <a 
            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[#c4a5ff] hover:bg-white/10 hover:border-[#c4a5ff]/30 transition-all duration-300 cursor-pointer" 
            onClick={(e) => handleNavClick(e, 'resume')}
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-4 text-on-surface-variant">
          <div className="hidden sm:flex items-center gap-4">
            <Terminal className="cursor-pointer hover:text-[#c4a5ff] w-5 h-5 md:w-6 md:h-6 transition-colors" />
            <Code className="cursor-pointer hover:text-[#c4a5ff] w-5 h-5 md:w-6 md:h-6 transition-colors" />
          </div>

          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl z-40"
          >
            <div className="flex flex-col items-center py-8 gap-5 font-sans tracking-widest text-sm uppercase font-bold">
              <a className="text-slate-300 hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              <a className="text-slate-300 hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'tech-stack')}>Tech Stack</a>
              <a className="text-slate-300 hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'work')}>Work</a>
              <a className="text-slate-300 hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
              <a className="mt-2 px-8 py-3 bg-[#c4a5ff] text-slate-950 font-black rounded-full" onClick={(e) => handleNavClick(e, 'resume')}>Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-5 md:px-8 bg-slate-950 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          background: `
            radial-gradient(circle at 20% 35%, rgba(196, 165, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 65%, rgba(93, 230, 255, 0.08) 0%, transparent 50%)
          `
        }}
      ></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center mt-10 md:mt-0"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6 md:mb-8 leading-tight flex flex-col md:flex-row flex-wrap items-center justify-center gap-2 md:gap-5"
        >
          <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-[#68a063] via-[#61dafb] to-[#68a063] bg-size-[200%_auto] animate-gradient whitespace-nowrap">
            SOURABH SINGH
          </span>
          <span className="w-1.25 h-12 bg-white rounded-full opacity-90 hidden md:block"></span>
          <span className="font-medium text-primary whitespace-nowrap">FULL STACK DEVELOPER.</span>
        </motion.h1>

        <p className="text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto font-light leading-relaxed mb-10 md:mb-12">
          I build responsive, high-performance web applications using the <span className="italic text-white">MERN STACK.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 md:py-5 bg-linear-to-r from-primary to-primary-container text-on-primary font-bold text-base md:text-lg rounded-full shadow-[0_0_30px_rgba(161,120,255,0.3)] text-center"
            href="mailto:singhsourav090305@gmail.com"
          >
            Contact Me
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 md:py-5 bg-white/5 backdrop-blur-md border border-white/10 text-primary font-bold text-base md:text-lg rounded-full hover:bg-white/10 transition-all text-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('work');
              if(el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({top: y, behavior: 'smooth'});
              }
            }}
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
};

const About = () => {
  return (
    <section className="py-24 md:py-40 px-5 md:px-8 bg-slate-950" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block mb-10 md:mb-12"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter text-white">
            <span className="italic font-light">Architectural</span> <br/>
            <span className="text-primary">Full-Stack Mindset</span>
          </h2>
        </motion.div>
        <div className="h-1 w-16 md:w-24 bg-linear-to-r from-primary to-secondary mb-10 md:mb-12 mx-auto"></div>
        <p className="text-xl md:text-4xl text-slate-300 font-light leading-relaxed tracking-tight">
          I am a Full-Stack Developer specializing in the <span className="text-glow-gradient font-bold italic">MERN STACK</span>, engineering responsive, <span className="text-glow-gradient font-bold italic">user-centric applications</span>.
        </p>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: any }) => {
  const Icon = () => {
    switch(skill.icon) {
      case 'javascript': return <Javascript className={`text-${skill.color} text-2xl md:text-3xl`} />;
      case 'deployed_code': return <DeployedCode className={`text-${skill.color} text-2xl md:text-3xl`} />;
      case 'palette': return <Palette className={`text-${skill.color} text-2xl md:text-3xl`} />;
      case 'terminal': return <Terminal className={`text-${skill.color} text-2xl md:text-3xl`} />;
      case 'database': return <Database className={`text-${skill.color} text-2xl md:text-3xl`} />;
      case 'cloud_queue': return <CloudQueue className={`text-${skill.color} text-2xl md:text-3xl`} />;
      default: return null;
    }
  };

  return (
    <motion.div whileHover={{ y: -8 }} className="p-8 rounded-xl bg-white/5 border border-white/10 transition-all">
      <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center mb-5"><Icon /></div>
      <h3 className="text-xl font-bold mb-2 text-white">{skill.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-slate-950" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILLS.map((skill, index) => <SkillCard key={index} skill={skill} />)}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-64 lg:h-auto overflow-hidden bg-slate-900">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{project.title}</h3>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">{project.description}</p>
          <div className="flex gap-4">
            <a href={project.liveUrl} className="px-6 py-3 bg-[#c4a5ff] text-slate-950 font-bold rounded-full text-sm">Live Site</a>
            <a href={project.githubUrl} className="px-6 py-3 border border-white/20 text-white rounded-full text-sm">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-slate-950" id="work">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-black text-white italic text-center mb-20">Featured Deployments</h2>
        <div className="space-y-16 md:space-y-32">
          {PROJECTS.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(true);
    setTimeout(() => setSubmitStatus(false), 3000);
  };

  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-slate-950" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#c4a5ff] text-xs font-black tracking-widest uppercase mb-4 block">04 / Collaboration</span>
          <h2 className="text-5xl md:text-8xl font-black text-white italic mb-8">START A PROJECT.</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">Available for freelance and engineering roles. Build something technically superior.</p>
          <a className="text-xl font-bold text-[#c4a5ff]" href="mailto:singhsourav090305@gmail.com">singhsourav090305@gmail.com</a>
          
          <div className="flex gap-4 mt-10">
            <a href="https://github.com/Mindflayer09" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10 hover:border-[#c4a5ff] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M 9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/sourabh-singh09" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10 hover:border-[#c4a5ff] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        
        <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input placeholder="Name" className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3 text-white" />
            <input placeholder="Email" className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3 text-white" />
            <textarea placeholder="Message" rows={4} className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3 text-white" />
            <button className="bg-[#c4a5ff] text-slate-950 font-bold py-4 rounded-xl hover:bg-[#d6c1ff] transition-all">Send Message</button>
            {submitStatus && <p className="text-green-400 text-center">Message sent!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

const ResumeViewer = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-slate-950" id="resume">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-black text-white italic mb-10">MY RESUME.</h2>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/resume.pdf" target="_blank" className="px-10 py-4 bg-[#c4a5ff] text-slate-950 font-bold rounded-full">Open Resume</a>
          <a href="/resume.pdf" download className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full">Download PDF</a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 w-full py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <span className="text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">© 2026 Sourabh Singh. Built with Ethereal Precision.</span>
        <div className="flex gap-6">
          <a href="https://github.com/Mindflayer09" className="text-slate-500 hover:text-[#c4a5ff] transition-all"><Terminal /></a>
          <a href="https://www.linkedin.com/in/sourabh-singh09" className="text-slate-500 hover:text-[#c4a5ff] transition-all"><Code /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-[#c4a5ff] z-60 origin-left" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ResumeViewer />
      </main>
      <Footer />
    </div>
  );
}