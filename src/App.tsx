/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
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
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(145,94,255,0.15)] border-b border-white/5">
      <div className="flex justify-between items-center w-full px-5 md:px-8 py-4 max-w-full mx-auto relative z-50">
        
        {/* Logo */}
        <a 
          href="#"
          onClick={scrollToTop}
          className="text-lg md:text-xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-container cursor-pointer hover:opacity-80 transition-opacity italic"
        >
          Mern Stack Developer
        </a>
        
        {/* DESKTOP NAVIGATION */}
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

        {/* Action Icons & Mobile Menu Button */}
        <div className="flex items-center gap-4 text-on-surface-variant">
          <div className="hidden sm:flex items-center gap-4">
            <Terminal className="cursor-pointer hover:text-[#c4a5ff] w-5 h-5 md:w-6 md:h-6 transition-colors" />
            <Code className="cursor-pointer hover:text-[#c4a5ff] w-5 h-5 md:w-6 md:h-6 transition-colors" />
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
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

      {/* COMPACT MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl z-40"
          >
            <div className="flex flex-col items-center py-8 gap-5 font-sans tracking-widest text-sm uppercase font-bold">
              <a className="text-slate-300 hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              <a className="text-slate-300 hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'tech-stack')}>Tech Stack</a>
              <a className="text-slate-300 hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'work')}>Work</a>
              <a className="text-slate-300 hover:text-[#c4a5ff] transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
              
              <a 
                className="mt-2 px-8 py-3 bg-[#c4a5ff] text-black font-black rounded-full hover:bg-[#d6c1ff] transition-all shadow-[0_0_15px_rgba(196,165,255,0.3)] cursor-pointer" 
                onClick={(e) => handleNavClick(e, 'resume')}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-5 md:px-8 bg-black overflow-hidden">
      
      {/* PURE CSS GRADIENTS FOR MOBILE COMPATIBILITY */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          background: 'radial-gradient(circle at 15% 30%, rgba(209, 188, 255, 0.08) 0%, transparent 40%), radial-gradient(circle at 85% 70%, rgba(93, 230, 255, 0.05) 0%, transparent 40%)' 
        }}
      ></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center mt-10 md:mt-0"
      >
        
        <motion.h1 
          animate={{
            filter: [
              "drop-shadow(0px 0px 10px rgba(209, 188, 255, 0.1))", 
              "drop-shadow(0px 0px 25px rgba(209, 188, 255, 0.5))", 
              "drop-shadow(0px 0px 10px rgba(209, 188, 255, 0.1))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6 md:mb-8 leading-tight flex flex-col md:flex-row flex-wrap items-center justify-center gap-2 md:gap-5"
        >
          <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-[#68a063] via-[#61dafb] to-[#68a063] bg-size-[200%_auto] animate-gradient whitespace-nowrap">
            SOURABH SINGH
          </span>
          
          <span className="w-1.25 h-12 bg-white rounded-full opacity-90 shadow-[0_0_10px_rgba(255,255,255,0.5)] hidden md:block"></span>
          
          <span className="font-medium text-primary whitespace-nowrap text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            FULL STACK DEVELOPER.
          </span>
        </motion.h1>

        <p className="text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto font-light leading-relaxed mb-10 md:mb-12 px-2 md:px-4">
          I build responsive, high-performance web applications using the <span className="italic text-white">MERN STACK.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 md:py-5 bg-linear-to-r from-primary to-primary-container text-on-primary font-bold text-base md:text-lg rounded-full shadow-[0_0_30px_rgba(161,120,255,0.3)] text-center"
            href="mailto:singhsourav090305@gmail.com?subject=Opportunity%20via%20Portfolio&body=Hi%20Sourabh,%0A%0AI%20was%20looking%20at%20your%20portfolio%20and%20wanted%20to%20connect%20regarding..."
          >
            Contact Me
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 md:py-5 bg-white/5 backdrop-blur-md border border-white/10 text-primary font-bold text-base md:text-lg rounded-full hover:bg-white/10 transition-all duration-300 text-center cursor-pointer"
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
    <section className="py-24 md:py-40 px-5 md:px-8 bg-black" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block mb-10 md:mb-12"
        >
          <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full"></div>
          <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter relative text-white">
            <span className="italic font-light">Architectural</span> <br/>
            <span className="text-primary">Full-Stack Mindset</span>
          </h2>
        </motion.div>
        
        <div className="h-1 w-16 md:w-24 bg-linear-to-r from-primary to-secondary mb-10 md:mb-12 mx-auto"></div>
        
        <div className="space-y-10">
          <p className="text-xl md:text-4xl text-on-surface font-light leading-normal md:leading-[1.3] tracking-tight">
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
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative p-8 md:p-10 rounded-xl glass-panel border border-outline-variant/5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(145,94,255,0.15)]"
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 md:mb-6`}>
        <Icon />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{skill.title}</h3>
      <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[9px] md:text-[10px] font-black tracking-wider uppercase mb-4">
        {skill.category}
      </span>
      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">{skill.description}</p>
      
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-black" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-3 md:mb-4 block italic">Engineered Skills</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">Core Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
      className="group relative premium-card-border rounded-3xl md:rounded-[2rem] overflow-hidden"
      style={{ '--angle': `${angle}deg` } as any}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        
        <div className={`lg:col-span-7 relative min-h-48 md:min-h-50 lg:min-h-75 overflow-hidden bg-black border-b lg:border-b-0 lg:border-r border-white/5 ${!isEven ? 'lg:order-2 lg:border-l lg:border-r-0' : ''}`}>
          <img 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover object-top-left transition-transform duration-1000 group-hover:scale-105" 
            src={project.image}
            referrerPolicy="no-referrer"
          />
          <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-black via-black/20 to-transparent hidden lg:block`}></div>
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent lg:hidden"></div>
        </div>
        
        <div className={`lg:col-span-5 p-6 md:p-8 flex flex-col justify-center relative z-10 ${!isEven ? 'lg:order-1' : ''}`}>
          
          <div className="flex items-center gap-3 mb-3">
            <span className={`w-6 md:w-8 h-px bg-${project.color}`}></span>
            <span className={`text-${project.color} text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase italic`}>{project.category}</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 tracking-tighter text-white">{project.title}</h3>
          
          <p className="text-on-surface-variant mb-6 text-sm md:text-base lg:text-lg leading-relaxed font-light">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-bold tracking-widest text-primary uppercase backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-3 md:gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-${project.color} text-on-background font-black text-[10px] md:text-xs tracking-widest uppercase rounded-full overflow-hidden shadow-[0_5px_20px_rgba(209,188,255,0.2)] flex-1 sm:flex-none`}
              href={project.liveUrl}
            >
              <span className="relative z-10">Live Site</span>
              <ArrowOutward className="relative z-10 text-sm md:text-base" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border border-outline-variant/30 text-white font-black text-[10px] md:text-xs tracking-widest uppercase rounded-full hover:bg-white/5 transition-all flex-1 sm:flex-none"
              href={project.githubUrl}
            >
              <span>GitHub</span>
              <Code className="text-sm md:text-base opacity-50" />
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="absolute -inset-px bg-[conic-gradient(from_var(--angle),transparent,var(--color-primary),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-[2rem]"></div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-black" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4 italic text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
            Featured <span className="font-light">Deployments</span>
          </h2>
          <div className="h-0.5 w-32 md:w-48 bg-linear-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>
        
        <div className="space-y-16 md:space-y-32 lg:space-y-40">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

  useEffect(() => {
    if (!PUBLIC_KEY) {
      console.warn('Missing EmailJS public key. Set VITE_EMAILJS_PUBLIC_KEY in your .env file.');
      return;
    }
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('Missing EmailJS configuration. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sourabh Singh', // Your name
        }
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-black relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: Text & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center relative z-10"
        >
          <span className="text-[#c4a5ff] text-xs md:text-sm font-black tracking-[0.5em] uppercase mb-4 md:mb-6 drop-shadow-[0_0_8px_rgba(196,165,255,0.5)]">
            04 / COLLABORATION
          </span>
          
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 md:mb-8 text-white italic leading-[0.9]">
            LET'S BUILD <br/>PROJECTS.
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 md:mb-12 leading-relaxed max-w-lg">
            I am currently available for freelance opportunities and full-time engineering roles. Let's build something technically superior.
          </p>
          
          <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-12">
            {/* Email */}
            <div className="flex items-center gap-5 md:gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex shrink-0 items-center justify-center text-[#c4a5ff] shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-1">Email</p>
                <a className="text-base md:text-lg font-bold text-white hover:text-[#c4a5ff] transition-colors break-all md:break-normal" href="mailto:singhsourav090305@gmail.com">
                  singhsourav090305@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 md:gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex shrink-0 items-center justify-center text-[#c4a5ff] shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-1">Location</p>
                <p className="text-base md:text-lg font-bold text-white">
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://github.com/Mindflayer09" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#c4a5ff] hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M 9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/sourabh-singh09" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#c4a5ff] hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </motion.div>
        
        {/* RIGHT COLUMN: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="bg-white/3 p-6 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
              
              <div className="group">
                <label htmlFor="name" className="block text-[10px] font-black tracking-widest text-[#c4a5ff] mb-2 uppercase opacity-80 group-focus-within:opacity-100 transition-opacity">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#c4a5ff]/50 focus:ring-1 focus:ring-[#c4a5ff]/50 transition-all shadow-inner text-sm md:text-base"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-[10px] font-black tracking-widest text-[#c4a5ff] mb-2 uppercase opacity-80 group-focus-within:opacity-100 transition-opacity">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#c4a5ff]/50 focus:ring-1 focus:ring-[#c4a5ff]/50 transition-all shadow-inner text-sm md:text-base"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-[10px] font-black tracking-widest text-[#c4a5ff] mb-2 uppercase opacity-80 group-focus-within:opacity-100 transition-opacity">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#c4a5ff]/50 focus:ring-1 focus:ring-[#c4a5ff]/50 transition-all resize-none shadow-inner text-sm md:text-base"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#c4a5ff] text-black font-black text-base md:text-lg py-3 md:py-4 rounded-xl hover:bg-[#d6c1ff] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(196,165,255,0.3)] disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-400 text-xs md:text-sm font-medium text-center mt-2">Message sent successfully! I'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-xs md:text-sm font-medium text-center mt-2">Something went wrong. Please try again later.</p>
              )}

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- NEW COMPONENT: Embedded Resume Viewer ---
const ResumeViewer = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-black relative" id="resume">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-16 text-center">
          <span className="text-secondary text-xs md:text-sm font-black tracking-[0.5em] uppercase mb-3 md:mb-4 block neon-overline">05 / QUALIFICATIONS</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white italic">MY <span className="text-primary font-light">RESUME.</span></h2>
        </div>
        
        <div className="hidden md:block w-full h-[80vh] min-h-100 md:min-h-200 rounded-2xl md:rounded-[2rem] overflow-hidden premium-card-border shadow-[0_20px_50px_rgba(145,94,255,0.1)] relative z-10 p-1 md:p-2 bg-white/5">
          <iframe 
            src="/resume.pdf" 
            title="Sourabh Singh Resume"
            className="w-full h-full rounded-xl md:rounded-3xl bg-white"
            style={{ border: 'none' }}
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noreferrer"
            className="md:hidden flex items-center justify-center gap-2 px-8 py-4 bg-[#c4a5ff] text-black font-black text-sm tracking-widest uppercase rounded-full shadow-[0_0_15px_rgba(196,165,255,0.3)] hover:scale-105 transition-all"
          >
            Open Resume
          </a>
          
          <a 
            href="/resume.pdf" 
            download="Resume.pdf"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black w-full py-8 md:py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 md:gap-6">
        <span className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-slate-500 text-center md:text-left leading-relaxed">
          © 2026 Sourabh Singh. Built with Ethereal Precision.
        </span>
        
        <div className="flex gap-6 items-center text-slate-500">
          <a 
            className="hover:text-[#c4a5ff] hover:-translate-y-1 transition-all duration-300 p-2 md:p-0" 
            href="https://github.com/Mindflayer09" 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/>
              <path d="M 9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          
          <a 
            className="hover:text-[#c4a5ff] hover:-translate-y-1 transition-all duration-300 p-2 md:p-0" 
            href="https://www.linkedin.com/in/sourabh-singh09" 
            target="_blank" 
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
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
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden font-sans">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#c4a5ff] z-60 origin-left"
        style={{ scaleX }}
      />
      
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
      
      {/* THE FIX: Replaced global blurred divs with pure CSS radial gradients to stop mobile rendering wash-out */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 90% 10%, rgba(209, 188, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 10% 90%, rgba(93, 230, 255, 0.05) 0%, transparent 40%)
          `
        }}
      ></div>
    </div>
  );
}