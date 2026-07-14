/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Terminal, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import subcomponents
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type PageRoute = 'home' | 'about' | 'skills' | 'projects' | 'certificates' | 'contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingTrace, setLoadingTrace] = useState('Initializing kernel...');
  const [activePage, setActivePage] = useState<PageRoute>('home');
  const isDarkMode = true;

  // Sync theme with HTML document class (Always Dark Mode)
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Incremental loading sequence
  useEffect(() => {
    const traces = [
      'Initializing portfolio core modules...',
      'Mapping responsive grid arrays...',
      'Mounting high-fidelity canvas particles...',
      'Establishing connections with GitHub API...',
      'Injecting certificate modal schemas...',
      'Compiling Olukayode portfolio v2.0...',
      'System ready. Launching...',
    ];

    let traceIdx = 0;
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }

        // Cycle log traces based on percentage brackets
        const nextVal = prev + Math.floor(Math.random() * 8) + 4;
        const currentTargetVal = Math.min(nextVal, 100);

        if (currentTargetVal > 15 && traceIdx === 0) { traceIdx = 1; setLoadingTrace(traces[1]); }
        if (currentTargetVal > 35 && traceIdx === 1) { traceIdx = 2; setLoadingTrace(traces[2]); }
        if (currentTargetVal > 55 && traceIdx === 2) { traceIdx = 3; setLoadingTrace(traces[3]); }
        if (currentTargetVal > 75 && traceIdx === 3) { traceIdx = 4; setLoadingTrace(traces[4]); }
        if (currentTargetVal > 90 && traceIdx === 4) { traceIdx = 5; setLoadingTrace(traces[5]); }
        if (currentTargetVal >= 100) { setLoadingTrace(traces[6]); }

        return currentTargetVal;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Sync active section based on scroll position using IntersectionObserver
  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -45% 0px', // Trigger when section is in active viewing sweetspot
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id as PageRoute);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const ids: PageRoute[] = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  const navigateTo = (page: PageRoute) => {
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      const yOffset = -80; // Offset for sticky navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-purple-500/30 selection:text-white bg-[#030014] text-zinc-100">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* High-Fidelity Cinematic Loader Gate */
          <motion.div
            key="loader-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-100 bg-[#030014] flex flex-col items-center justify-center p-6"
          >
            <div className="max-w-md w-full text-left space-y-6">
              {/* Header Indicator */}
              <div className="flex items-center gap-3 text-cyan-400">
                <Terminal className="w-5 h-5 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">BOOT SEQUENCE SYSTEM</span>
              </div>

              {/* Progress percentage read-out */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="text-zinc-500 animate-pulse">{loadingTrace}</span>
                  <span className="text-xl font-bold font-display text-white">{loadingProgress}%</span>
                </div>

                {/* Progress bar line */}
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${loadingProgress}%` }}
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full shadow-md shadow-purple-500/50 transition-all duration-100"
                  />
                </div>
              </div>

              {/* Brand identifier */}
              <div className="flex items-center gap-2 pt-6 border-t border-zinc-900/60 text-zinc-500">
                <Cpu className="w-4.5 h-4.5" />
                <span className="font-display font-semibold text-xs tracking-wider uppercase">ANUOLUWAPO OLUKAYODE © 2026</span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Main Page Grid Assembly */
          <motion.div
            key="main-web-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background Orbs from Elegant Dark Design */}
            <>
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
              <div className="absolute top-[40%] right-[20%] w-[20%] h-[30%] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
            </>

            {/* Ambient Animated Canvas System */}
            <div className="opacity-100 transition-opacity">
              <ParticleBackground />
            </div>

            {/* Sticky Navigation */}
            <Navbar activePage={activePage} onPageChange={navigateTo} />

            {/* Primary Main Container Block - Sequential Simple Single Page Layout */}
            <main id="primary-content-layout" className="relative z-10 pt-20">
              {/* Hero Presentation */}
              <Hero onPageChange={navigateTo} />

              {/* Biography Details */}
              <About />

              {/* Work Chronology Timeline */}
              <Experience />

              {/* Academic Coursework */}
              <Education />

              {/* Skill Matrix Tab Grid */}
              <Skills />

              {/* Interactive Creations List */}
              <Projects />

              {/* Certification Galleries */}
              <Certificates />

              {/* Contact Inquiry form */}
              <Contact />
            </main>

            {/* Signature Footer */}
            <Footer onPageChange={navigateTo} />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

