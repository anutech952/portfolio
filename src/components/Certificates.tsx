import { useState, useEffect } from 'react';
import { Award, ExternalLink, X, Calendar, ShieldCheck, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATES } from '../data';
import { Certificate } from '../types';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden z-10 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-purple-500 dark:text-purple-400 uppercase flex items-center justify-center md:justify-start gap-2 mb-2">
            <Award className="w-4 h-4" />
            06 / CREDENTIALS
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Certifications & <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Certificates Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 cursor-pointer shadow-lg dark:shadow-black/20 light:shadow-black/5 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between items-start text-left relative group overflow-hidden"
              id={`cert-item-${cert.id}`}
            >
              {/* Top Row Icon and Label */}
              <div className="flex items-center justify-between w-full">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500 dark:text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 font-semibold uppercase">{cert.date}</span>
              </div>

              {/* Title & Issuer */}
              <div className="mt-5 space-y-1.5 flex-grow">
                <h3 className="font-display font-bold text-sm text-zinc-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold">{cert.issuer}</p>
              </div>

              {/* Action Prompt */}
              <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light:border-black/5 w-full flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-500 light:text-zinc-650 group-hover:text-zinc-800 dark:group-hover:text-zinc-300">
                <span>View Details</span>
                <ExternalLink className="w-3 h-3 text-zinc-500 dark:text-zinc-600 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Modal Overlay */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blurred Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-zoom-out"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-2xl bg-neutral-950 dark:bg-neutral-950 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden flex flex-col gap-6 text-left animate-in"
                id="cert-modal-box"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* High Fidelity Dynamic Certificate Mockup */}
                <div className="relative border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 p-6 flex flex-col items-center justify-center text-center space-y-4 overflow-hidden select-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/5 blur-2xl rounded-full" />
                  <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full" />

                  <ShieldCheck className="w-12 h-12 text-cyan-400 animate-pulse" />
                  
                  <div>
                    <div className="flex justify-center gap-2 mb-1">
                      <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">CERTIFICATE OF COMPLETION</p>
                      {selectedCert.hoursCount && (
                        <span className="px-1.5 py-0.5 text-[8px] font-mono font-bold bg-blue-500/10 border border-blue-500/20 rounded text-blue-500 dark:text-blue-400 uppercase">
                          {selectedCert.hoursCount} Hours
                        </span>
                      )}
                    </div>
                    <h4 className="font-display font-bold text-lg sm:text-xl text-zinc-850 dark:text-white mt-1 leading-snug">
                      {selectedCert.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-0.5">Officially issued to</p>
                    <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-1 uppercase font-display tracking-wide">
                      Anuoluwapo Olukayode
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-3 border-t border-white/5 dark:border-white/5 light:border-black/5 w-full max-w-sm justify-center">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                      {selectedCert.date}
                    </span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                    <span>{selectedCert.issuer}</span>
                  </div>

                  {selectedCert.signatureName && (
                    <div className="pt-3 w-full max-w-md flex flex-col items-center border-t border-white/5 dark:border-white/5 light:border-black/5">
                      <p className="font-serif italic text-zinc-400 dark:text-zinc-300 text-sm tracking-wide">
                        {selectedCert.signatureName}
                      </p>
                      <p className="text-[9px] font-mono text-zinc-500 uppercase mt-1">
                        {selectedCert.signatureTitle}
                      </p>
                    </div>
                  )}
                </div>

                {/* License verification data */}
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-display font-bold text-zinc-800 dark:text-zinc-200">Credential Specifics</h4>
                    <p className="text-zinc-650 dark:text-zinc-400 text-xs leading-relaxed mt-1">
                      {selectedCert.description || `This digital record confirms that requirements corresponding to the training curriculum and assignments for ${selectedCert.title} have been fully evaluated and met.`}
                    </p>
                  </div>

                  {selectedCert.credentialId && (
                    <div className="bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 dark:border-white/5 light:border-black/5 p-3.5 rounded-xl flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase">CREDENTIAL ID</p>
                        <p className="text-xs font-mono font-semibold text-zinc-550 dark:text-zinc-300 mt-0.5">{selectedCert.credentialId}</p>
                      </div>

                      {selectedCert.credentialUrl && (
                        <a
                          href={selectedCert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-600 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors"
                        >
                          Verify Credential
                          <FileCheck className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
