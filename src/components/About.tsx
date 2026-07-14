import { useEffect, useState, useRef } from 'react';
import { Target, BookOpen, GraduationCap, Award, Compass } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { BIO_SUMMARY, STATS } from '../data';

// Helper component for animated count up integers
function AnimatedCounter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden z-10 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-purple-500 dark:text-purple-400 uppercase flex items-center justify-center md:justify-start gap-2 mb-2">
            <Compass className="w-4 h-4" />
            01 / PORTRAIT
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            About My <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Paragraph Narrative (Grid Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md space-y-5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-800 dark:text-zinc-100">The Path of Logic</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base font-normal">
                {BIO_SUMMARY.aboutJourney}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md space-y-5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500 dark:text-purple-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-800 dark:text-zinc-100">Core Passions</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                {BIO_SUMMARY.aboutPassion} {BIO_SUMMARY.aboutLearning}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/10 via-purple-950/10 to-white/5 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-white/5 light:from-blue-500/5 light:via-purple-500/5 light:to-black/5 border border-purple-500/30 backdrop-blur-md space-y-5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-800 dark:text-zinc-100">Future Aspirations</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                {BIO_SUMMARY.aboutAspirations}
              </p>
            </div>
          </div>

          {/* Statistics Grid Column (Grid Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat) => {
              // Icon matching
              const getIcon = (id: string) => {
                switch (id) {
                  case 'projects':
                    return <Compass className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
                  case 'skills':
                    return <Target className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
                  case 'certificates':
                    return <Award className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
                  default:
                    return <GraduationCap className="w-5 h-5 text-pink-500 dark:text-pink-400" />;
                }
              };

              return (
                <motion.div
                  key={stat.id}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-5 sm:p-6 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 flex flex-col justify-between aspect-square text-left shadow-lg relative group overflow-hidden transition-all duration-300"
                  id={`stat-card-${stat.id}`}
                >
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-xl bg-[#050505] dark:bg-[#030014] light:bg-white border border-white/5 dark:border-white/5 light:border-black/5 transition-colors duration-500">
                      {getIcon(stat.id)}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-3xl sm:text-4xl font-display font-black text-zinc-800 dark:text-white flex items-baseline gap-0.5 transition-colors duration-500">
                      <AnimatedCounter value={stat.value} />
                      <span className="text-blue-600 dark:text-cyan-400 text-2xl font-bold">{stat.suffix}</span>
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mt-1 font-medium leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
