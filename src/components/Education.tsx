import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { EDUCATION_LIST } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden z-10 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase flex items-center justify-center md:justify-start gap-2 mb-2">
            <GraduationCap className="w-4 h-4" />
            05 / ACADEMICS
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Education Bento-Grid Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main School Degree Card (Grid Span 7) */}
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md flex flex-col justify-between text-left space-y-6 relative overflow-hidden group transition-all duration-300"
              id={`education-degree-card-${edu.id}`}
            >
              {/* Subtle visual radial corner lighting */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full" />
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold text-cyan-600 dark:text-cyan-400 transition-colors">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {edu.duration}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-black text-2xl text-zinc-800 dark:text-white tracking-tight leading-snug transition-colors duration-500">
                    {edu.degree}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-display font-semibold text-sm transition-colors">
                    {edu.school}
                  </p>
                </div>

                {edu.description && (
                  <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal pt-2 transition-colors">
                    {edu.description}
                  </p>
                )}
              </div>

              {edu.gpa && (
                <div className="pt-4 border-t border-white/5 dark:border-white/5 light:border-black/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Cumulative GPA</span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold bg-black/80 dark:bg-black/80 light:bg-white/80 border border-white/5 dark:border-white/5 light:border-black/5 px-3 py-1.5 rounded-lg text-zinc-800 dark:text-white font-mono shadow-sm transition-colors duration-500">
                    <Award className="w-4 h-4 text-amber-500" />
                    {edu.gpa}
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Coursework Modules Card (Grid Span 5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md flex flex-col justify-start text-left space-y-5 transition-all duration-300" id="education-coursework-card">
            <div className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-300">
              <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-zinc-800 dark:text-zinc-100 transition-colors">
                Relevant Coursework
              </h4>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed transition-colors">
              Rigorous undergraduate modules completed to foster a comprehensive grasp of algorithmic systems, modular code integration, and system design patterns:
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {EDUCATION_LIST[0]?.coursework.map((course) => (
                <span
                  key={course}
                  className="bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border border-white/10 dark:border-white/10 light:border-black/10 px-2.5 py-1.5 rounded-lg text-xs font-mono text-zinc-500 dark:text-zinc-400 light:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all duration-300 cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
