import { useState } from 'react';
import { ExternalLink, Github, FolderGit2, FolderDot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((proj) => proj.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden z-10 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-blue-500 dark:text-blue-400 uppercase flex items-center justify-center md:justify-start gap-2 mb-2">
            <FolderGit2 className="w-4 h-4" />
            03 / CREATIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Categories / Filters Bar */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-12">
          {(['all', 'frontend', 'backend', 'fullstack'] as const).map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase border cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-lg shadow-blue-500/10'
                    : 'bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 border-white/10 dark:border-white/10 light:border-black/10 text-zinc-500 dark:text-zinc-400 light:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
                id={`project-filter-${cat}`}
              >
                {cat === 'all' ? 'All projects' : cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid Container with Layout Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 overflow-hidden flex flex-col justify-between shadow-xl dark:shadow-black/40 light:shadow-black/5 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 hover:shadow-blue-500/5 transition-all duration-300"
                id={`project-card-${project.id}`}
              >
                {/* Visual Thumbnail Card Header */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#050505] dark:bg-[#030014] light:bg-black/5 border-b border-white/5 dark:border-white/5 light:border-black/5">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag Overlay */}
                  <span className="absolute top-3 left-3 bg-black/80 dark:bg-black/80 light:bg-white/80 backdrop-blur-md border border-white/5 dark:border-white/5 light:border-black/5 text-[10px] font-mono tracking-widest uppercase font-semibold text-blue-600 dark:text-cyan-400 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>

                {/* Info and Tech Description Container */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-zinc-800 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 dark:border-white/5 light:border-black/5 px-2.5 py-1 rounded-md text-[10px] font-mono text-zinc-600 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Redirections Action Links */}
                <div className="px-5 pb-5 pt-3 border-t border-white/5 dark:border-white/5 light:border-black/5 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 light:text-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors"
                    id={`project-github-link-${project.id}`}
                  >
                    <Github className="w-4 h-4 text-zinc-500" />
                    Source Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-500 dark:hover:text-cyan-300 transition-colors"
                    id={`project-demo-link-${project.id}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty search/fallback indicator */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-white/10 dark:border-white/10 light:border-black/10 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5">
            <FolderDot className="w-10 h-10 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-500 text-sm font-medium">No projects in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}
