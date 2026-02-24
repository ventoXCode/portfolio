import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Layers, 
  Wrench,
  GraduationCap,
  Briefcase,
  MapPin
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Scene from './Scene';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data (Based on persona) ---

type Locale = 'de' | 'en';

const content = {
  de: {
    nav: ['Erfahrung', 'Projekte', 'Skills', 'Kontakt'],
    hireMe: 'Kontakt',
    hero: {
      badge: 'Verfügbar für neue Herausforderungen',
      title: 'Ich entwickle die nächste',
      titleAccent: 'Generation von Web-Apps.',
      intro: 'Ich entwickle moderne Web-Anwendungen mit Fokus auf saubere Frontends und robuste Backends. Meine Expertise liegt in der Integration von KI-Workflows, um echte Business-Probleme zu lösen.'
    },
    metrics: [
      { label: 'Praxiserfahrung', value: '1+ Jahr' },
      { label: 'Fokus', value: 'Fullstack' },
      { label: 'Standort', value: 'Deutschland' },
    ],
    experienceTitle: 'Berufliche Erfahrung',
    experienceSubtitle: 'Mein beruflicher Weg in der Softwareentwicklung.',
    experience: [
      {
        role: "Fullstack Developer (Praktikum)",
        company: "Groupera, Berlin",
        period: "Nov 2024 - Nov 2025",
        description: "Agile Produktentwicklung, Gamification und KI-gestützte Workflows.",
        stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"]
      },
      {
        role: "Junior Web Developer",
        company: "buildnext GmbH",
        period: "Jan 2023 - Okt 2023",
        description: "Responsive Frontend-Entwicklung mit React und TailwindCSS.",
        stack: ["React", "TailwindCSS"]
      }
    ],
    projectsTitle: 'Projekte',
    projectsSubtitle: 'Eine Auswahl meiner liebsten Entwicklungen und Forschungsprojekte.',
    projects: [
      {
        id: 'peptidebay',
        title: "PeptideBay",
        description: "Chemie-inspirierte Forschungsdatenbank mit fortschrittlichen Suchfunktionen.",
        tags: ["Astro", "TypeScript", "Tailwind CSS"],
        link: "https://ventoxcode.github.io/peptidebay/",
        repo: "https://github.com/ventoXCode/peptidebay",
        openSource: true,
      },
      {
        id: 'groupera',
        title: "Groupera",
        description: "Gamifiziertes Streak-System als Vollzeit-Praktikant. Teilnahme an wöchentlichen Gruppenanrufen (Selbsthilfe-Plattform) wurde getrackt. Bei 4 Wochen in Folge gab es einen Freeze-Token (Streak nicht sofort verlieren). Emojis, Animationen, Fortschrittssysteme.",
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
        link: "https://www.groupera.de/",
        openSource: false,
      }
    ],
    skillsTitle: 'Skills & Tools',
    skillsSubtitle: 'Mein technischer Werkzeugkasten und Spezialisierungen.',
    educationTitle: 'Ausbildung',
    education: {
      degree: "B.Sc. Wirtschaftsinformatik",
      institution: "Hochschule Emden/Leer",
      start: "Beginn März 2026",
      meta: "Fachhochschulreife mit praktischem Teil im Fullstack-Umfeld"
    },
    contactTitle: 'Kontakt aufnehmen',
    contactSubtitle: 'Ich bin immer offen für neue Projekte, kreative Ideen oder Möglichkeiten, Teil deiner Vision zu werden.'
  },
  en: {
    nav: ['Experience', 'Projects', 'Skills', 'Contact'],
    hireMe: 'Hire Me',
    hero: {
      badge: 'Available for new opportunities',
      title: 'Building the next',
      titleAccent: 'generation of web apps.',
      intro: 'I develop modern web applications with a focus on clean frontends and robust backends. My expertise lies in integrating AI workflows to solve real business problems.'
    },
    metrics: [
      { label: 'Hands-on Experience', value: '1+ Year' },
      { label: 'Focus', value: 'Fullstack' },
      { label: 'Location', value: 'Germany' },
    ],
    experienceTitle: 'Work Experience',
    experienceSubtitle: 'My professional journey in software engineering.',
    experience: [
      {
        role: "Fullstack Developer (Internship)",
        company: "Groupera, Berlin",
        period: "Nov 2024 - Nov 2025",
        description: "Agile product development, gamification, and AI-assisted workflows.",
        stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"]
      },
      {
        role: "Junior Web Developer",
        company: "buildnext GmbH",
        period: "Jan 2023 - Oct 2023",
        description: "Responsive frontend development with React and TailwindCSS.",
        stack: ["React", "TailwindCSS"]
      }
    ],
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'A selection of my favorite builds and research.',
    projects: [
      {
        id: 'peptidebay',
        title: "PeptideBay",
        description: "Chemistry-inspired research database with advanced search capabilities.",
        tags: ["Astro", "TypeScript", "Tailwind CSS"],
        link: "https://ventoxcode.github.io/peptidebay/",
        repo: "https://github.com/ventoXCode/peptidebay",
        openSource: true,
      },
      {
        id: 'groupera',
        title: "Groupera",
        description: "Gamified streak system built as a full-time intern. Tracked weekly group call attendance (self-help platform). After 4 consecutive weeks, users earned a freeze token (keep streak without immediate penalty). Emojis, animations, progression systems.",
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
        link: "https://www.groupera.de/",
        openSource: false,
      }
    ],
    skillsTitle: 'Skills & Tools',
    skillsSubtitle: 'My technical toolkit and areas of specialization.',
    educationTitle: 'Education',
    education: {
      degree: "B.Sc. Business Informatics",
      institution: "Hochschule Emden/Leer",
      start: "Starting March 2026",
      meta: "University entrance qualification with practical fullstack track"
    },
    contactTitle: 'Get in Touch',
    contactSubtitle: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
  }
};

const persona = {
  name: "Joris Geis",
  email: "geis.joris@gmail.com",
  github: "https://github.com/ventoXCode",
  location: "Oldenburg, Germany",
  skills: [
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS"], icon: Layers },
    { group: "Backend", items: ["Node.js", "REST APIs", "MongoDB", "Docker"], icon: Code2 },
    { group: "AI & Emerging", items: ["LLM Integration", "Prompt Engineering"], icon: Cpu },
    { group: "Tools", items: ["Git", "VS Code", "UX/UI Design"], icon: Wrench }
  ]
};

// --- Components ---

const PeptideBayImage = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0d0d0d] overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
    <div className="flex items-center gap-3">
      <svg className="w-12 h-12 text-[#00ff9d] drop-shadow-[0_0_8px_rgba(0,255,157,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3h6M10 3v6.5L5 19c-.7 1.3.2 3 1.8 3h10.4c1.6 0 2.5-1.7 1.8-3L14 9.5V3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 15h10" strokeLinecap="round" opacity="0.5"/>
      </svg>
      <span className="font-bold tracking-tight text-2xl" style={{ fontFamily: "inherit" }}>
        <span className="text-[#00ff9d]" style={{ textShadow: "0 0 10px rgba(0,255,157,0.5)" }}>Peptide</span>
        <span className="text-white">Bay</span>
      </span>
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00ff9d]/5 via-transparent to-transparent opacity-50"></div>
  </div>
);

const StreakSystemImage = () => (
  <div className="w-full h-full bg-[#ffffff] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
    <img 
      src="/streak-icon.png" 
      alt="Streak System" 
      className="w-40 h-40 object-contain"
    />
  </div>
);

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 space-y-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-fluid-h2 font-display font-bold tracking-tight text-white/90"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-secondary max-w-2xl text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={cn(
      "glass rounded-2xl p-6 transition-all duration-300",
      className
    )}
  >
    {children}
  </motion.div>
);

const Navbar = ({ locale, setLocale, t }: { locale: Locale; setLocale: (l: Locale) => void; t: any }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 border-b",
      scrolled 
        ? "bg-[#1a1a1a]/80 backdrop-blur-lg border-white/5 py-3" 
        : "bg-transparent border-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          JG<span className="text-highlight">.</span>
        </motion.div>
        
        <div className="flex gap-4 sm:gap-8 items-center">
          <div className="hidden md:flex gap-8 items-center">
            {t.nav.map((item: string) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-secondary hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/10">
            <button 
              onClick={() => setLocale('de')}
              className={cn(
                "px-3 py-1 text-[10px] font-bold rounded-full transition-all",
                locale === 'de' ? "bg-highlight text-[#1a1a1a]" : "text-secondary hover:text-white"
              )}
            >
              DE
            </button>
            <button 
              onClick={() => setLocale('en')}
              className={cn(
                "px-3 py-1 text-[10px] font-bold rounded-full transition-all",
                locale === 'en' ? "bg-highlight text-[#1a1a1a]" : "text-secondary hover:text-white"
              )}
            >
              EN
            </button>
          </div>

          <a 
            href="mailto:geis.joris@gmail.com"
            className="hidden sm:block px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all"
          >
            {t.hireMe}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  const [locale, setLocale] = useState<Locale>('de');
  const t = content[locale];

  return (
    <div className="relative min-h-screen text-fluid-body">
      <div className="noise-bg" />
      <Scene />
      <Navbar locale={locale} setLocale={setLocale} t={t} />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-40 relative z-10">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[70vh] flex flex-col justify-center items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase text-highlight"
          >
            {t.hero.badge}
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-fluid-h1 font-display font-bold leading-[0.9] tracking-tighter"
            >
              {t.hero.title} <br />
              <span className="text-white/40">{t.hero.titleAccent}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-secondary text-lg sm:text-xl leading-relaxed"
            >
              {t.hero.intro}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projekte"
              className="px-8 py-4 rounded-full bg-white text-[#1a1a1a] font-bold transition-transform hover:scale-105"
            >
              {locale === 'de' ? 'Projekte ansehen' : 'View Work'}
            </a>
            <a 
              href={persona.github}
              target="_blank"
              className="px-8 py-4 rounded-full glass font-medium flex items-center gap-2 hover:bg-white/10"
            >
              <Github size={20} />
              GitHub
            </a>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 pt-12">
            {t.metrics.map((m, i) => (
              <motion.div 
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-3 text-center"
              >
                <div className="text-lg sm:text-xl font-display font-bold text-highlight">{m.value}</div>
                <div className="text-[9px] sm:text-[10px] text-secondary uppercase tracking-widest mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute bottom-10 left-10 text-secondary text-sm">
            @JorisGeis · Built with passion
          </div>
        </section>

        {/* Experience Section */}
        <section id={locale === 'de' ? 'erfahrung' : 'experience'}>
          <SectionHeading subtitle={t.experienceSubtitle}>
            {t.experienceTitle}
          </SectionHeading>
          
          <div className="grid gap-6">
            {t.experience.map((exp) => (
              <GlassCard key={exp.company + exp.role} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-secondary text-sm">
                    <Briefcase size={16} />
                    <span>{exp.period}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-highlight">{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-secondary max-w-xl">{exp.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map(s => (
                    <span key={s} className="px-3 py-1 rounded-full bg-white/5 text-xs text-secondary border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id={locale === 'de' ? 'projekte' : 'projects'}>
          <SectionHeading subtitle={t.projectsSubtitle}>
            {t.projectsTitle}
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.map((p) => (
              <GlassCard key={p.title} className="p-0 overflow-hidden group">
                <div className="aspect-video relative overflow-hidden bg-black/20">
                  {p.id === 'peptidebay' ? <PeptideBayImage /> : <StreakSystemImage />}
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {'link' in p && (
                      <a href={(p as any).link} target="_blank" className="p-3 rounded-full bg-white text-[#1a1a1a] hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {'repo' in p && (
                      <a href={(p as any).repo} target="_blank" className="p-3 rounded-full bg-white text-[#1a1a1a] hover:scale-110 transition-transform">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex flex-wrap gap-2 items-center">
                    {p.tags.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-widest text-highlight font-bold">
                        {t}
                      </span>
                    ))}
                    <span className={`ml-auto text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full ${
                      (p as any).openSource 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {(p as any).openSource 
                        ? (locale === 'de' ? 'Open Source' : 'Open Source') 
                        : (locale === 'de' ? 'Closed Source' : 'Closed Source')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="text-secondary leading-relaxed">{p.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id={locale === 'de' ? 'skills' : 'skills'}>
          <SectionHeading subtitle={t.skillsSubtitle}>
            {t.skillsTitle}
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {persona.skills.map((skill) => (
              <GlassCard key={skill.group} className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-highlight/10 flex items-center justify-center text-highlight">
                  <skill.icon size={24} />
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-lg">{skill.group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="px-2 py-1 rounded-md bg-white/5 text-sm text-secondary">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Education & Contact */}
        <div className="grid lg:grid-cols-2 gap-20">
          <section id="education">
            <SectionHeading>{t.educationTitle}</SectionHeading>
            <GlassCard className="flex gap-6 items-start">
              <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                <GraduationCap />
              </div>
              <div className="space-y-2">
                <div className="text-secondary text-sm flex items-center gap-2">
                  <span>{t.education.start}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{t.education.institution}</span>
                </div>
                <h3 className="text-2xl font-bold">{t.education.degree}</h3>
                <p className="text-secondary">{t.education.meta}</p>
              </div>
            </GlassCard>
          </section>

          <section id={locale === 'de' ? 'kontakt' : 'contact'}>
            <SectionHeading>{t.contactTitle}</SectionHeading>
            <div className="space-y-8">
              <p className="text-secondary text-lg">
                {t.contactSubtitle}
              </p>
              <div className="space-y-4">
                <a 
                  href={`mailto:${persona.email}`}
                  className="flex items-center gap-4 text-2xl font-bold group"
                >
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-highlight/10 group-hover:border-highlight/20 transition-all">
                    <Mail />
                  </div>
                  <span className="group-hover:text-highlight transition-colors text-base sm:text-2xl">{persona.email}</span>
                </a>
                <div className="flex items-center gap-4 text-secondary">
                  <MapPin size={20} />
                  <span>{persona.location}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

      </main>

      <footer className="py-12 px-6 border-t border-white/5 mt-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-secondary text-sm">
          <p>© 2026 {persona.name}. {locale === 'de' ? 'Mit Sorgfalt entwickelt.' : 'Designed with care.'}</p>
          <div className="flex gap-8">
            <a href={persona.github} target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href={`mailto:${persona.email}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
