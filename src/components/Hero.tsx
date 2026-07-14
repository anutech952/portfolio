import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Download, FolderGit2, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BIO_SUMMARY, PROFILE_IMAGE } from '../data';
import ResumeModal from './ResumeModal';

const TYPING_PHRASES = [
  'Full-Stack Developer',
  'Computer Science Student',
  'Problem Solver',
  'Tech Enthusiast',
  'Lifelong Learner',
];

interface HeroProps {
  onPageChange: (page: 'home' | 'about' | 'skills' | 'projects' | 'certificates' | 'contact') => void;
}

export default function Hero({ onPageChange }: HeroProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Typing effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const phrase = TYPING_PHRASES[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === phrase) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? phrase.substring(0, currentText.length - 1)
            : phrase.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  // CV download triggers toast AND opens the resume modal for view/printing/saving as PDF
  const handleDownloadCV = () => {
    setIsResumeOpen(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden z-10"
    >
      {/* Decorative Floating Geometric Elements */}
      <div className="absolute top-[25%] left-[8%] w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-md animate-float-slow hidden md:block" />
      <div className="absolute bottom-[30%] left-[12%] w-16 h-16 rounded-full border-2 border-dashed border-cyan-500/20 animate-spin-slow hidden md:block" style={{ animationDuration: '20s' }} />
      <div className="absolute top-[30%] right-[10%] w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-lg rotate-45 animate-float hidden md:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[20%] right-[15%] w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 animate-float-slow hidden md:block" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Profile Card / Visual (Grid Span 5) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -12, 0],
                rotate: [0, 1.5, -1.5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, ease: 'easeOut' },
                scale: { duration: 0.8, ease: 'easeOut' },
                y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
                rotate: { repeat: Infinity, duration: 8, ease: 'easeInOut' }
              }}
              className="relative group"
            >
              {/* Outer Rotating Glowing Borders */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 rounded-3xl blur opacity-65 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              {/* Card Container */}
              <div className="relative w-72 sm:w-80 md:w-88 aspect-square rounded-[22px] bg-white/5 dark:bg-white/5 light:bg-black/5 p-2 overflow-hidden border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center backdrop-blur-xl transition-colors duration-500">
                <img
                  src={PROFILE_IMAGE}
                  alt={BIO_SUMMARY.name}
                  className="w-full h-full object-cover rounded-[16px] filter brightness-95 contrast-105 group-hover:scale-103 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Tech Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 dark:bg-black/75 light:bg-white/85 backdrop-blur-md border border-white/5 dark:border-white/5 light:border-black/5 px-4 py-2.5 rounded-xl flex items-center justify-between shadow-lg shadow-black/40 transition-colors duration-500">
                  <div>
                    <p className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-500 uppercase">LOCATION</p>
                    <p className="text-xs font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                      {BIO_SUMMARY.location}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={BIO_SUMMARY.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-white/10 hover:bg-white/25 dark:bg-white/5 dark:hover:bg-white/10 light:bg-black/5 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-300 dark:text-zinc-300 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-950 transition-colors"
                      id="hero-linkedin-link"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://github.com/${BIO_SUMMARY.githubUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-white/10 hover:bg-white/25 dark:bg-white/5 dark:hover:bg-white/10 light:bg-black/5 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-300 dark:text-zinc-300 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-950 transition-colors"
                      id="hero-github-link"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Introduction Details (Grid Span 7) */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Greetings Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-500 dark:text-blue-400 text-xs font-mono font-medium tracking-wider uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                WELCOME TO MY PORTFOLIO
              </div>

              {/* Developer Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-zinc-900 dark:text-white light:text-zinc-900 leading-tight transition-colors duration-500">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
                  {BIO_SUMMARY.name}
                </span>
              </h1>

              {/* Cycling Subtitles / Role Typist */}
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-xl font-mono text-zinc-700 dark:text-zinc-300 light:text-zinc-700 flex items-center gap-2 font-semibold">
                  <span className="text-zinc-400 dark:text-zinc-500">&gt;&nbsp;</span>
                  <span className="text-blue-600 dark:text-cyan-400">{currentText}</span>
                  <span className="w-1.5 h-5 bg-purple-500 animate-pulse" />
                </p>
              </div>

              {/* Introduction Paragraph */}
              <p className="text-zinc-600 dark:text-zinc-400 light:text-zinc-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal transition-colors duration-500">
                {BIO_SUMMARY.tagline} {BIO_SUMMARY.aboutPassion}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                {/* View Projects CTA */}
                <button
                  onClick={() => onPageChange('projects')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 group transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
                  id="hero-view-projects-btn"
                >
                  <FolderGit2 className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
                  View Projects
                </button>

                {/* Contact CTA */}
                <button
                  onClick={() => onPageChange('contact')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer border bg-white/5 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 light:bg-black/5 light:hover:bg-black/10 light:border-black/10 text-zinc-700 dark:text-zinc-200 light:text-zinc-700 hover:text-black dark:hover:text-white light:hover:text-zinc-950"
                  id="hero-contact-btn"
                >
                  <Mail className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  Contact Me
                </button>

                {/* Download Resume Link */}
                <button
                  onClick={handleDownloadCV}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border bg-white/5 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 light:bg-black/5 light:hover:bg-black/10 light:border-black/10 text-zinc-600 dark:text-zinc-400 light:text-zinc-600 hover:text-black dark:hover:text-zinc-200 light:hover:text-zinc-900"
                  id="hero-download-cv-btn"
                >
                  <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  Download CV
                </button>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Floating Page Anchor Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-30" onClick={() => onPageChange('about')} id="scroll-indicator-btn">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-zinc-400/20 dark:border-white/5 light:border-black/10 flex justify-center p-1"
          >
            <div className="w-1.5 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
          </motion.div>
        </div>
      </div>

      {/* High-Fidelity Custom Slide-in Toast Notification for CV preparation */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-100 flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/95 dark:bg-zinc-900/95 light:bg-white/95 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 shadow-xl shadow-black/30 backdrop-blur-md max-w-sm"
          >
            <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-500">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white dark:text-white light:text-zinc-900">Resume Requested Successfully</p>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mt-0.5 leading-relaxed">
                Anuoluwapo Olukayode's Curriculum Vitae is prepared for you.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Printable CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
