import { Github, Linkedin, Mail, Code2, MessageSquare } from 'lucide-react';
import { BIO_SUMMARY, LOGO_IMAGE } from '../data';

interface FooterProps {
  onPageChange?: (page: 'home' | 'about' | 'skills' | 'projects' | 'certificates' | 'contact') => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    if (onPageChange) {
      onPageChange('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-black dark:bg-black light:bg-zinc-50 border-t border-white/5 dark:border-white/5 light:border-zinc-200 relative z-10 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top brand logo signature */}
        <button
          onClick={handleLogoClick}
          className="inline-flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 p-[1px] group-hover:rotate-6 transition-transform">
            <div className="w-full h-full bg-[#050505] dark:bg-[#050505] light:bg-white rounded-[7px] flex items-center justify-center transition-colors overflow-hidden">
              <img 
                src={LOGO_IMAGE} 
                alt="anutech logo" 
                className="w-6 h-6 object-contain transition-transform" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-zinc-800 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
            anu<span className="text-cyan-500 dark:text-cyan-400">tech</span>
          </span>
        </button>

        {/* Short footer bio */}
        <p className="text-zinc-500 text-xs max-w-sm mx-auto font-normal">
          Building high-performance, responsive full-stack web applications with deep type safety and clean interfaces.
        </p>

        {/* Social connections */}
        <div className="flex justify-center gap-4">
          <a
            href={`mailto:${BIO_SUMMARY.emailAddress}`}
            className="p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all hover:scale-115"
            aria-label="Email Address Direct"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={BIO_SUMMARY.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all hover:scale-115"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`https://github.com/${BIO_SUMMARY.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all hover:scale-115"
            aria-label="GitHub Repositories"
          >
            <Github className="w-4 h-4" />
          </a>
          {BIO_SUMMARY.whatsappNumber && (
            <a
              href={BIO_SUMMARY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all hover:scale-115"
              aria-label="WhatsApp Direct Message"
              id="footer-whatsapp-link"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-white/10 dark:bg-white/10 light:bg-black/10 mx-auto" />

        {/* Copyright clauses */}
        <div className="space-y-1.5 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <p>© {currentYear} ALL RIGHTS RESERVED.</p>
          <p className="font-semibold text-zinc-500 hover:text-zinc-400 transition-colors">
            Designed & Developed by <span className="bg-gradient-to-r from-blue-450 via-purple-450 to-cyan-450 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold">{BIO_SUMMARY.name}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
