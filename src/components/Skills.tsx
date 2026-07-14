import { useState, useRef } from 'react';
import { Layers, Server, Database, Wrench, Cpu, CheckCircle2 } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { SKILLS } from '../data';
import { Skill } from '../types';

function SkillProgressBar({ skill }: { skill: Skill; key?: string }) {
  const barRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(barRef, { once: true, amount: 0.2 });

  // Custom technology color profiles for visual depth
  const getColorClasses = (name: string) => {
    switch (name.toLowerCase()) {
      case 'html5':
        return { bg: 'bg-orange-500', text: 'text-orange-500 dark:text-orange-400', glow: 'shadow-orange-500/20' };
      case 'css3':
        return { bg: 'bg-blue-500', text: 'text-blue-500 dark:text-blue-400', glow: 'shadow-blue-500/20' };
      case 'javascript':
        return { bg: 'bg-yellow-500', text: 'text-yellow-650 dark:text-yellow-400', glow: 'shadow-yellow-500/20' };
      case 'react':
        return { bg: 'bg-cyan-500', text: 'text-cyan-550 dark:text-cyan-400', glow: 'shadow-cyan-500/20' };
      case 'tailwind css':
        return { bg: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400', glow: 'shadow-teal-500/20' };
      case 'bootstrap':
        return { bg: 'bg-indigo-600', text: 'text-indigo-600 dark:text-indigo-400', glow: 'shadow-indigo-600/20' };
      case 'typescript':
        return { bg: 'bg-blue-600', text: 'text-blue-600 dark:text-blue-400', glow: 'shadow-blue-600/20' };
      case 'node.js':
        return { bg: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', glow: 'shadow-emerald-500/20' };
      case 'mysql':
        return { bg: 'bg-blue-600', text: 'text-blue-600 dark:text-blue-400', glow: 'shadow-blue-600/20' };
      case 'mongodb':
        return { bg: 'bg-green-500', text: 'text-green-600 dark:text-green-400', glow: 'shadow-green-500/20' };
      case 'figma':
        return { bg: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', glow: 'shadow-purple-500/20' };
      default:
        return { bg: 'bg-cyan-500', text: 'text-cyan-500 dark:text-cyan-400', glow: 'shadow-cyan-500/20' };
    }
  };

  const colors = getColorClasses(skill.name);

  return (
    <div ref={barRef} className="space-y-2 p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 transition-all duration-300">
      <div className="flex items-center justify-between">
        <span className="font-display font-semibold text-zinc-800 dark:text-zinc-100 text-sm flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
          {skill.name}
        </span>
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 font-medium">{skill.level}%</span>
      </div>
      
      {/* Outer track bar */}
      <div className="w-full h-2 bg-black/35 dark:bg-black/40 light:bg-black/10 rounded-full overflow-hidden">
        {/* Animated fill bar */}
        <div
          style={{
            width: isInView ? `${skill.level}%` : '0%',
            transition: 'width 1.5s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
          className={`h-full ${colors.bg} rounded-full shadow-lg ${colors.glow}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Tech', icon: <Cpu className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Layers className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'database', label: 'Database', icon: <Database className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden z-10 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase flex items-center justify-center md:justify-start gap-2 mb-2">
            <Cpu className="w-4 h-4" />
            02 / CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            My Professional <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Tabs Filter Bar */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-transparent text-white shadow-lg shadow-blue-500/10'
                    : 'bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border-white/10 dark:border-white/10 light:border-black/10 text-zinc-500 dark:text-zinc-400 light:text-zinc-650 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
                id={`tab-filter-${cat.id}`}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <SkillProgressBar key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Skill Category Summary Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md transition-all duration-300">
          <div className="space-y-3">
            <h4 className="font-display font-bold text-zinc-800 dark:text-zinc-100 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Engineering Strengths
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Highly experienced in configuring optimized single page architectures, writing maintainable React hooks, and building structured Node.js backend services. Dedicated to type-safe TypeScript interfaces and quick, modular integrations.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-display font-bold text-zinc-800 dark:text-zinc-100 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              Design & Collaboration Philosophy
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Proficient in translating designer wireframes into fluid frontends using custom Tailwind grids. Thoroughly utilize Git version controls, GitHub collaboration flows, and Figma specs to collaborate cleanly with developer teams.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
