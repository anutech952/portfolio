import { X, Printer, Mail, MessageSquare, Linkedin, Github, Globe, MapPin } from 'lucide-react';
import { BIO_SUMMARY, EXPERIENCES, EDUCATION_LIST, CERTIFICATES } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in print:p-0 print:bg-white print:relative">
      {/* Modal Box */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-950 dark:bg-neutral-950 light:bg-white border border-white/10 dark:border-white/10 light:border-zinc-200 rounded-2xl shadow-2xl flex flex-col transition-colors duration-300 print:max-h-none print:overflow-visible print:border-none print:shadow-none print:rounded-none"
        id="interactive-resume-modal"
      >
        {/* Sticky Action Toolbar (Hidden on Print) */}
        <div className="sticky top-0 right-0 left-0 flex items-center justify-between p-4 bg-neutral-900/90 dark:bg-neutral-900/90 light:bg-zinc-50/90 backdrop-blur-md border-b border-white/5 dark:border-white/5 light:border-zinc-200 z-30 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 uppercase">INTERACTIVE CURRICULUM VITAE</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
              title="Print or Save as PDF"
              id="resume-print-btn"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
              id="resume-close-btn"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div className="p-8 sm:p-12 text-left space-y-8 bg-neutral-950 dark:bg-neutral-950 light:bg-white text-zinc-300 dark:text-zinc-300 light:text-zinc-800 print:p-0 print:text-black">
          
          {/* CV Header */}
          <div className="border-b border-white/10 dark:border-white/10 light:border-zinc-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6 print:border-zinc-300 print:pb-4">
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white dark:text-white light:text-zinc-900 tracking-tight print:text-black print:text-2xl">
                {BIO_SUMMARY.name}
              </h1>
              <p className="text-sm font-mono text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-bold uppercase tracking-widest print:text-blue-700">
                Full-Stack Software Developer
              </p>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{BIO_SUMMARY.location}</span>
              </div>
            </div>

            {/* Quick Contacts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <a href={`mailto:${BIO_SUMMARY.emailAddress}`} className="flex items-center gap-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 print:text-black">
                <Mail className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                <span>{BIO_SUMMARY.emailAddress}</span>
              </a>
              {BIO_SUMMARY.whatsappNumber && (
                <a href={BIO_SUMMARY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 print:text-black">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>{BIO_SUMMARY.whatsappNumber}</span>
                </a>
              )}
              <a href={BIO_SUMMARY.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 print:text-black">
                <Linkedin className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a href={`https://github.com/${BIO_SUMMARY.githubUsername}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 print:text-black">
                <Github className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                <span>github.com/{BIO_SUMMARY.githubUsername}</span>
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-bold text-zinc-400 dark:text-zinc-400 light:text-zinc-500 uppercase tracking-widest border-l-2 border-blue-500 pl-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 dark:text-zinc-400 light:text-zinc-600 print:text-zinc-800">
              {BIO_SUMMARY.tagline} {BIO_SUMMARY.aboutJourney} {BIO_SUMMARY.aboutPassion}
            </p>
          </div>

          {/* Core Skills section */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-zinc-400 dark:text-zinc-400 light:text-zinc-500 uppercase tracking-widest border-l-2 border-blue-500 pl-3">
              Technical Skillsets
            </h2>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['TypeScript', 'JavaScript', 'Python', 'Node.js', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'SQL', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma'].map((s) => (
                <span 
                  key={s} 
                  className="px-2.5 py-1 rounded bg-white/5 dark:bg-white/5 light:bg-zinc-100 border border-white/5 dark:border-white/5 light:border-zinc-200 text-xs font-mono font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-700 print:bg-zinc-100 print:text-black print:border-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold text-zinc-400 dark:text-zinc-400 light:text-zinc-500 uppercase tracking-widest border-l-2 border-blue-500 pl-3">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5 break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white dark:text-white light:text-zinc-900 print:text-black">
                      {exp.role} <span className="text-zinc-500 font-normal">at</span> {exp.company}
                    </h3>
                    <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs space-y-1 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 print:text-zinc-800">
                    {exp.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-[9px] font-mono text-zinc-500 bg-white/5 dark:bg-white/5 light:bg-black/5 px-1.5 py-0.5 rounded print:border print:border-zinc-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education list */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold text-zinc-400 dark:text-zinc-400 light:text-zinc-500 uppercase tracking-widest border-l-2 border-blue-500 pl-3">
              Education & Academic Details
            </h2>
            <div className="space-y-4">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="space-y-1 bg-white/2 dark:bg-white/2 light:bg-zinc-50/50 p-4 rounded-xl border border-white/5 dark:border-white/5 light:border-zinc-200 print:p-0 print:border-none print:bg-transparent break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white dark:text-white light:text-zinc-900 print:text-black">
                      {edu.degree}
                    </h3>
                    <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase">{edu.duration}</span>
                  </div>
                  <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-400 light:text-zinc-600 print:text-black">{edu.school}</p>
                  {edu.gpa && (
                    <p className="text-[10px] font-mono text-zinc-500">
                      GPA / Grade: <strong className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 print:text-black">{edu.gpa}</strong>
                    </p>
                  )}
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-650 leading-relaxed mt-1.5 print:text-zinc-800">
                    {edu.description}
                  </p>
                  <div className="pt-2">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">Key Coursework:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {edu.coursework.map((course) => (
                        <span key={course} className="text-[9px] font-mono bg-white/5 dark:bg-white/5 light:bg-black/5 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 px-1.5 py-0.5 rounded print:border print:border-zinc-200">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials / Certificates */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold text-zinc-400 dark:text-zinc-400 light:text-zinc-500 uppercase tracking-widest border-l-2 border-blue-500 pl-3">
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATES.map((cert) => (
                <div key={cert.id} className="p-4 rounded-xl border border-white/5 dark:border-white/5 light:border-zinc-200 bg-white/5 dark:bg-white/5 light:bg-black/2 flex flex-col justify-between text-xs break-inside-avoid print:border-zinc-300 print:bg-transparent">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase">{cert.issuer}</span>
                      <span className="text-[9px] font-mono text-zinc-500">{cert.date}</span>
                    </div>
                    <h3 className="font-bold text-white dark:text-white light:text-zinc-950 mt-1 leading-snug print:text-black">
                      {cert.title}
                    </h3>
                  </div>
                  {cert.credentialId && (
                    <div className="mt-3 pt-2 border-t border-white/5 dark:border-white/5 light:border-zinc-200 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
