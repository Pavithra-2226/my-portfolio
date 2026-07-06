import React from "react";
import { User, Cpu, Code2, GraduationCap, ArrowUpRight, CheckCircle } from "lucide-react";

export default function About() {
  const coreStrengths = [
    {
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      title: "Systems Thinker (ECE)",
      desc: "An Electronics and Communication Engineering background provides a foundation in logical structures, signal flows, system performance, and memory optimization."
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      title: "Full-Stack Native",
      desc: "Fluent across the stack. Experienced in both highly-responsive frontend applications (React) and performant backend services (Django / REST APIs)."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-purple-500" />,
      title: "Rapid Self-Learner",
      desc: "Proven track record of picking up new tools, bootcamps, and workshops. Constantly keeping pace with contemporary web paradigms."
    }
  ];

  const QuickFacts = [
    { label: "Location", value: "Dindigul, Tamil Nadu, IN" },
    { label: "Degree", value: "B.E. Electronics & Communication" },
    { label: "Languages", value: "English, Tamil" },
    { label: "Focus", value: "Product Development & Web Systems" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1.5 bg-emerald-600 dark:bg-emerald-500 mx-auto mt-4 rounded" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Bridging hardware logic with high-level full-stack software implementation.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Bio Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-emerald-500/10 rounded-2xl dark:bg-emerald-500/5 blur-lg" />
            <div className="relative bg-gradient-to-tr from-emerald-600 to-blue-600 p-8 rounded-2xl text-white shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              
              <div className="flex items-center space-x-3 mb-6">
                <User className="w-8 h-8 text-white/90" />
                <h3 className="text-2xl font-bold">Pavithra N</h3>
              </div>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-8">
                "I view coding not just as writing statements, but as organizing complete, fluid systems. 
                My background in Electronics teaches me the values of precision, performance limits, and structural planning, 
                which I translate into clean full-stack web applications."
              </p>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                {QuickFacts.map((fact) => (
                  <div key={fact.label}>
                    <span className="block text-xs text-white/60 font-semibold uppercase tracking-wider">
                      {fact.label}
                    </span>
                    <span className="block text-sm font-semibold text-white mt-0.5">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Biography and Strengths Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                The Core Narrative
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
                As an Engineering graduate with a CGPA of 8.03, I've spent substantial time mastering full-stack web architectures. 
                My development stack is grounded in **Python, Django, and React.js** — enabling me to draft clear database schemas, 
                compose robust API routes, and wire responsive, dynamic user interfaces.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether implementing low-dependency vanilla JavaScript structures or managing state architectures using React hooks, 
                I focus on **low-latency, browser compatibility, and accessible UI paths**. I am eager to contribute my energy to a 
                product team that values logical clarity, continuous execution improvement, and collaborative progress.
              </p>
            </div>

            {/* Strengths Cards */}
            <div className="space-y-4">
              {coreStrengths.map((strength) => (
                <div
                  key={strength.title}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-white dark:bg-slate-900 shadow-sm">
                    {strength.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {strength.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
