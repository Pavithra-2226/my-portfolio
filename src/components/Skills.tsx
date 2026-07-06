import React, { useState } from "react";
import { Skill } from "../types";
import { Code, Server, Database, Wrench, BrainCircuit, Users } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skillsData: Skill[] = [
    // Frontend
    { name: "React.js", level: 88, category: "frontend" },
    { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
    { name: "HTML5", level: 92, category: "frontend" },
    { name: "CSS3", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 88, category: "frontend" },
    
    // Backend
    { name: "Python", level: 92, category: "backend" },
    { name: "Django", level: 85, category: "backend" },
    { name: "REST APIs (DRF)", level: 85, category: "backend" },
    
    // Database
    { name: "MySQL", level: 80, category: "database" },
    { name: "SQLite", level: 85, category: "database" },
    
    // Tools
    { name: "Git", level: 85, category: "tool" },
    { name: "GitHub", level: 88, category: "tool" },
    { name: "Postman", level: 80, category: "tool" },
    
    // Concepts
    { name: "Component Architecture", level: 90, category: "concept" },
    { name: "DOM Manipulation", level: 92, category: "concept" },
    { name: "API Integration", level: 88, category: "concept" },
    
    // Soft Skills
    { name: "Logical Problem Solving", level: 90, category: "softskill" },
    { name: "Team Collaboration", level: 85, category: "softskill" },
    { name: "Technical Communication", level: 88, category: "softskill" },
    { name: "Adaptability & Agility", level: 85, category: "softskill" },
  ];

  const categories = [
    { id: "all", label: "All Skills", icon: null },
    { id: "frontend", label: "Frontend", icon: <Code className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> },
    { id: "database", label: "Databases", icon: <Database className="w-4 h-4" /> },
    { id: "tool", label: "Tools", icon: <Wrench className="w-4 h-4" /> },
    { id: "concept", label: "Concepts", icon: <BrainCircuit className="w-4 h-4" /> },
    { id: "softskill", label: "Soft Skills", icon: <Users className="w-4 h-4" /> },
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical & Professional Skills
          </h2>
          <div className="w-16 h-1.5 bg-emerald-600 dark:bg-emerald-500 mx-auto mt-4 rounded" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Proficiency levels based on academic rigor, training completion, and deep project builds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-150 dark:border-slate-800/60 shadow-sm transition-all hover:shadow hover:-translate-y-0.5 duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-xs sm:text-sm font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Track */}
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              
              {/* Context Tag */}
              <span className="inline-block mt-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
