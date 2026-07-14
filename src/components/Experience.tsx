import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden z-10 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-purple-500 dark:text-purple-400 uppercase flex items-center justify-center md:justify-start gap-2 mb-2">
            <Briefcase className="w-4 h-4" />
            04 / TIMELINE
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Experience Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline center line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-blue-600 via-purple-600 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  id={`experience-row-${exp.id}`}
                >
                  {/* Timeline Glowing Node Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[7px] md:-translate-x-[8px] top-1.5 z-30">
                    <div className="w-4 h-4 rounded-full bg-[#030014] dark:bg-[#030014] light:bg-white border-2 border-purple-500 flex items-center justify-center relative transition-colors duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping absolute" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  {/* Left Column (Flipped alignment for timeline symmetry on desktop) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 flex flex-col justify-start">
                    <div className={`p-6 sm:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 transition-all duration-300 shadow-lg dark:shadow-black/25 light:shadow-black/5 text-left`} id={`experience-card-${exp.id}`}>
                      {/* Meta Information row */}
                      <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3">
                        <span className="flex items-center gap-1 bg-black/80 dark:bg-black/80 light:bg-white/80 border border-white/5 dark:border-white/5 light:border-black/5 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 shadow-sm transition-colors duration-500">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-500 light:text-zinc-500">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Header Role and Company */}
                      <h3 className="font-display font-extrabold text-xl text-zinc-800 dark:text-white tracking-tight leading-snug transition-colors duration-500">
                        {exp.role}
                      </h3>
                      <h4 className="font-display font-bold text-sm text-blue-600 dark:text-cyan-400 mt-1 uppercase tracking-wider transition-colors duration-500">
                        {exp.company}
                      </h4>

                      {/* Bullet Description list */}
                      <ul className="mt-4 space-y-2.5 text-zinc-600 dark:text-zinc-350 text-xs sm:text-sm list-none font-normal transition-colors duration-500">
                        {exp.description.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies highlighted tags */}
                      <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-white/5 dark:border-white/5 light:border-black/5">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 dark:border-white/5 light:border-black/5 px-2.5 py-1 rounded-md text-[10px] font-mono font-medium text-zinc-500 dark:text-zinc-400 transition-colors"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for desktop timelines */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
