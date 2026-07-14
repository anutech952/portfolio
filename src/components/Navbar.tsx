import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_IMAGE } from '../data';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  activePage: string;
  onPageChange: (page: 'home' | 'about' | 'skills' | 'projects' | 'certificates' | 'contact') => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const isDarkMode = true;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for header styling (glassmorphism intensity)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: 'home' | 'about' | 'skills' | 'projects' | 'certificates' | 'contact') => {
    setIsMobileMenuOpen(false);
    onPageChange(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? isDarkMode
            ? 'bg-[#030014]/65 backdrop-blur-md border-white/5 py-3 shadow-lg shadow-black/20'
            : 'bg-white/70 backdrop-blur-md border-black/5 py-3 shadow-lg shadow-black/5'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          id="nav-logo-btn"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 p-[1.5px] group-hover:rotate-6 transition-transform duration-300">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center transition-colors overflow-hidden ${isDarkMode ? 'bg-[#030014]' : 'bg-white'}`}>
              <img 
                src={LOGO_IMAGE} 
                alt="anutech logo" 
                className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <span className={`font-display font-bold text-lg tracking-tight transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:text-cyan-400' 
              : 'text-zinc-900 group-hover:text-blue-600'
          }`}>
            anu<span className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'}>tech</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-1.5 p-1 rounded-full border backdrop-blur-md transition-all duration-300 ${
          isDarkMode 
            ? 'bg-white/5 border-white/10' 
            : 'bg-black/5 border-black/10'
        }`}>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider font-semibold uppercase transition-all duration-300 relative cursor-pointer focus:outline-none ${
                  isActive
                    ? isDarkMode ? 'text-white' : 'text-zinc-900 font-bold'
                    : isDarkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-500 hover:text-zinc-850'
                }`}
                id={`nav-item-${item.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute inset-0 border rounded-full ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/25 border-purple-500/30' 
                        : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 shadow-sm'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Call To Action - Header Quick Connect */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-xs font-semibold text-white shadow-md shadow-blue-500/10 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
            id="desktop-hire-me"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg border transition-colors cursor-pointer focus:outline-none ${
              isDarkMode 
                ? 'bg-white/5 border-white/10 text-zinc-400 hover:text-white' 
                : 'bg-black/5 border-black/10 text-zinc-600 hover:text-zinc-950'
            }`}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b transition-colors duration-300 overflow-hidden ${
              isDarkMode 
                ? 'border-white/5 bg-[#030014]/95 backdrop-blur-2xl' 
                : 'border-black/5 bg-white/95 backdrop-blur-2xl shadow-xl'
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id as any)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold text-left transition-all duration-255 flex items-center justify-between cursor-pointer focus:outline-none ${
                      isActive
                        ? isDarkMode
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-2 border-cyan-400 text-white pl-5'
                          : 'bg-blue-500/5 border-l-2 border-blue-600 text-blue-600 pl-5'
                        : isDarkMode
                          ? 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                          : 'text-zinc-600 hover:bg-black/5 hover:text-zinc-950'
                    }`}
                    id={`mobile-nav-item-${item.id}`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className={`w-1.5 h-1.5 rounded-full shadow-md animate-pulse ${
                        isDarkMode ? 'bg-cyan-400 shadow-cyan-400/50' : 'bg-blue-600 shadow-blue-600/50'
                      }`} />
                    )}
                  </button>
                );
              })}
              <div className={`pt-4 border-t px-4 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold text-white cursor-pointer"
                  id="mobile-hire-me"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
