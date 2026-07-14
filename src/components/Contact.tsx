import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, CheckCircle2, AlertCircle, Compass, MessageSquare } from 'lucide-react';
import { BIO_SUMMARY } from '../data';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrorMessage('');

    // Validations
    if (!name.trim()) {
      setFormState('error');
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      setFormState('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setFormState('error');
      setErrorMessage('Please write a message that is at least 10 characters.');
      return;
    }

    try {
      setFormState('sending');
      
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setFormState('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setFormState('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden z-10 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase flex items-center justify-center md:justify-start gap-2 mb-2">
            <Mail className="w-4 h-4" />
            08 / CONNECT
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info and Social Links Panel (Grid Span 5) */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md space-y-6 transition-all duration-300">
              <h3 className="font-display font-bold text-lg text-zinc-800 dark:text-zinc-100">
                Let's discuss something great.
              </h3>
              <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                I am open to internship opportunities, freelance software tasks, open source collaborations, or general developer networking! Drop a message or reach out via email.
              </p>

              {/* Direct email connection */}
              <div className="space-y-4">
                <a
                  href={`mailto:${BIO_SUMMARY.emailAddress}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-left truncate">
                    <p className="text-[9px] font-mono text-zinc-500 uppercase">DIRECT EMAIL</p>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 truncate">{BIO_SUMMARY.emailAddress}</p>
                  </div>
                </a>

                {/* LinkedIn link */}
                <a
                  href={BIO_SUMMARY.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    <Linkedin className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-mono text-zinc-500 uppercase">PROFESSIONAL LINKEDIN</p>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">Anuoluwapo Olukayode</p>
                  </div>
                </a>

                {/* GitHub link */}
                <a
                  href={`https://github.com/${BIO_SUMMARY.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                    <Github className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-mono text-zinc-500 uppercase">GITHUB CODEBASE</p>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">@{BIO_SUMMARY.githubUsername}</p>
                  </div>
                </a>

                {/* WhatsApp direct link */}
                {BIO_SUMMARY.whatsappNumber && (
                  <a
                    href={BIO_SUMMARY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 transition-all duration-300 group"
                    id="contact-whatsapp-link"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                      <MessageSquare className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase">WHATSAPP CHAT</p>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">{BIO_SUMMARY.whatsappNumber}</p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Input Form Card (Grid Span 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl dark:shadow-black/20 light:shadow-black/5 transition-all duration-300">
              
              {formState === 'success' ? (
                /* Success Prompt state */
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg text-zinc-850 dark:text-white">Message Transmitted!</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto">
                      Thank you for connecting, Anuoluwapo has received your message and will get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormState('idle')}
                    className="px-4 py-2 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* Main Interactive Form fields */
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  {/* Validation Error Banner */}
                  {formState === 'error' && errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/20 flex items-start gap-2.5 text-xs text-red-400/90 font-medium">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="text-[10px] font-mono font-bold tracking-widest text-zinc-550 dark:text-zinc-550 uppercase">
                      Your Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      disabled={formState === 'sending'}
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (formState === 'error') setFormState('idle');
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white border border-white/10 dark:border-white/10 light:border-black/15 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="text-[10px] font-mono font-bold tracking-widest text-zinc-550 dark:text-zinc-550 uppercase">
                      Email Address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      disabled={formState === 'sending'}
                      placeholder="e.g. johndoe@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (formState === 'error') setFormState('idle');
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white border border-white/10 dark:border-white/10 light:border-black/15 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message-input" className="text-[10px] font-mono font-bold tracking-widest text-zinc-550 dark:text-zinc-550 uppercase">
                      Message
                    </label>
                    <textarea
                      id="message-input"
                      rows={5}
                      disabled={formState === 'sending'}
                      placeholder="Detail your inquiry or project request..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (formState === 'error') setFormState('idle');
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white border border-white/10 dark:border-white/10 light:border-black/15 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-500/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
                  >
                    {formState === 'sending' ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
                        Transmitting Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-cyan-300" />
                        SendMessage
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
