import React from "react";
import { Project } from "../types";
import { Globe, Github, Terminal, ArrowUpRight, HelpCircle, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const projectsData: Project[] = [
    {
      id: "ecommerce",
      title: "Responsive E-Commerce Platform",
      category: "Vanilla JS Development",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage", "DOM Manipulation"],
      problem: "Traditional framework-heavy e-commerce templates result in bloated bundle sizes, slow page loads on mobile networks, and complex maintenance overhead for lightweight stores.",
      solution: "Engineered a high-performance, single-page e-commerce application entirely in pure Vanilla JavaScript (ES6+), optimizing page speed, layout calculations, and interaction latency without any reliance on third-party frameworks.",
      achievements: [
        "Architected a state-synchronized shopping cart persisting item selections across user sessions via localStorage.",
        "Built dynamic, responsive content filtering algorithms using native DOM traversal and category query maps.",
        "Created an intuitive multi-step checkout funnel with comprehensive client-side form validation.",
        "Achieved near-perfect Google Lighthouse performance scores (98+) by minimizing script blocking times."
      ],
      metrics: ["98+ Lighthouse Score", "Zero Framework Bloat", "100% Persisted Cart"],
      githubUrl: "https://github.com/nrpr2003", // Placeholder matching user github context
      demoUrl: "#"
    },
    {
      id: "instagram-clone",
      title: "Interactive Instagram Web-App",
      category: "React.js Ecosystem",
      tech: ["React.js", "React Hooks", "Tailwind CSS", "Component Architecture", "State Management"],
      problem: "Replicating complex social feeds on mobile web platforms usually suffers from erratic rendering, complex component cycles, and heavy memory usage during image manipulation.",
      solution: "Designed a lightweight, robust React.js web client designed for standard mobile displays, organizing data structures through dedicated hooks and component isolation to limit re-renders.",
      achievements: [
        "Structured modular functional components with decoupled local and global states using React Hooks.",
        "Implemented interactive like mechanisms and nested comment loops with real-time UI propagation.",
        "Engineered an elegant mock image uploading pipeline with live client-side preview rendering.",
        "Optimized frame-rendering performance for fluid scrolling even on entry-level mobile devices."
      ],
      metrics: ["Smooth FPS on Low-End Devices", "Modular Architecture", "Instant UI Update Loops"],
      githubUrl: "https://github.com/nrpr2003",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/40 dark:bg-slate-950 transition-colors border-t border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Geometric Balance Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-sky-500 font-mono text-xs mb-2 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-[1px] bg-sky-500"></span> [ ARCHITECTURAL BUILDS ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Featured Work
            </h2>
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-md font-mono uppercase">
            Deploying responsive layouts, optimized state managers, and lightweight code blocks.
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-300 relative group"
            >
              {/* Dynamic Corner Indicator */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-slate-200 dark:bg-slate-800 group-hover:bg-sky-500 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sky-500 text-xs font-mono font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1.5 rounded-sm border border-slate-200 dark:border-slate-800"
                        title="View Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="text-sky-500 hover:text-sky-400 transition-colors p-1.5 rounded-sm border border-slate-200 dark:border-slate-800"
                        title="Live Demo"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase mb-4 tracking-tight">
                  {project.title}
                </h3>

                {/* Problem & Solution block */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-l-2 border-slate-400 dark:border-slate-700">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
                      <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                      <span>Challenge / Problem</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-l-2 border-sky-500">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-sky-500 mb-1">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Resolution / Tech Stack</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="mb-6">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-3">
                    Core Engineering Accomplishments:
                  </span>
                  <ul className="space-y-2.5">
                    {project.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Metrics footer */}
              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5 mt-4">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-950/40 p-2.5 rounded-sm border border-slate-150 dark:border-slate-800/40 text-center">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="border-r last:border-r-0 border-slate-200 dark:border-slate-800 px-1">
                      <span className="block text-[10px] font-mono font-bold text-sky-500 leading-none">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
