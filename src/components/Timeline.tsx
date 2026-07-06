import React from "react";
import { GraduationCap, Award, BookOpen, Briefcase, Calendar, CheckSquare } from "lucide-react";

export default function Timeline() {
  const professionalTraining = [
    {
      title: "Python Full Stack Development",
      organization: "Systech Institute, Coimbatore",
      type: "Professional Certification",
      period: "Training Completed",
      highlights: [
        "Comprehensive hands-on training covering backend modeling, SQL schemas, and client-side design.",
        "Deep exploration of Python programming structures, Django MVC, and Django REST Framework APIs.",
        "Created relational schema designs and query sets to support robust application endpoints."
      ]
    },
    {
      title: "CSS Bootcamp",
      organization: "Codekaro",
      type: "Technical Specialization",
      period: "Bootcamp Completed",
      highlights: [
        "Mastered advanced CSS3 features, layouts (Flexbox, Grid), and mobile-responsive viewport setups.",
        "Focused on creating subtle interactive states, CSS micro-animations, and eye-friendly typography."
      ]
    },
    {
      title: "Employability & Logical Problem Solving",
      organization: "Titan LEAP Naandi",
      type: "Professional Workshop",
      period: "Workshop Completed",
      highlights: [
        "Honed technical problem solving, structured algorithms, and corporate team dynamics.",
        "Focused on clear communication, technical reasoning under constraints, and professional presentation."
      ]
    }
  ];

  const educationHistory = [
    {
      degree: "Bachelor of Engineering (ECE)",
      institution: "University College of Engineering, Dindigul",
      period: "2020 — 2024",
      scoreLabel: "CGPA",
      score: "8.03 / 10",
      highlights: [
        "Electronics and Communication Engineering background fostering systematic logic and hardware/software synergy.",
        "Acquired foundational training in Digital System Design, Microprocessors, and Object-Oriented Logic.",
        "Participated in collaborative projects emphasizing structured systems, circuit routing, and logical thinking."
      ]
    },
    {
      degree: "Higher Secondary (HSE)",
      institution: "Bharani Park Matriculation Hr. Sec. School",
      period: "2019 — 2020",
      scoreLabel: "Percentage",
      score: "63.33%",
      highlights: [
        "Focused on Mathematics, Physics, Chemistry, and Computer Science streams.",
        "Engaged in technical club projects and logical problem-solving exercises."
      ]
    },
    {
      degree: "Secondary (SSLC)",
      institution: "Pannai Matriculation Hr. Sec. School",
      period: "2017 — 2018",
      scoreLabel: "Percentage",
      score: "86.00%",
      highlights: [
        "Consistently recognized for mathematical and logical aptitude during primary academic terms."
      ]
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors">
      
      {/* PROFESSIONAL TIMELINE (TRAINING & PROJECTS) */}
      <section id="certifications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-sky-500 font-mono text-xs mb-2 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-[1px] bg-sky-500"></span> [ PROFESSIONAL CREDENTIALS ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Certifications & Training
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-md font-mono uppercase">
            Specialized bootcamps and corporate readiness alignments completing the technical arsenal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {professionalTraining.map((train, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-sm p-6 flex flex-col justify-between hover:border-sky-500 transition-all duration-300 relative group"
            >
              {/* Geometric square badge */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-l border-b border-slate-200 dark:border-slate-800 text-sky-500 font-mono text-xs font-bold">
                0{idx + 1}
              </div>

              <div>
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-500 mb-3">
                  <Award className="w-3.5 h-3.5" />
                  <span>{train.type}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1 leading-snug">
                  {train.title}
                </h3>
                
                <span className="block text-xs text-slate-500 dark:text-slate-400 font-mono uppercase font-semibold mb-5">
                  {train.organization}
                </span>

                <ul className="space-y-3">
                  {train.highlights.map((high, hIdx) => (
                    <li key={hIdx} className="flex items-start text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      <CheckSquare className="w-3.5 h-3.5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-6 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                <span>STATUS: VERIFIED</span>
                <span className="text-sky-500 font-bold">{train.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-sky-500 font-mono text-xs mb-2 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-[1px] bg-sky-500"></span> [ ACADEMIC FOUNDATION ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Education Timeline
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-md font-mono uppercase">
            Rigorous educational milestones highlighting logical development and core engineering principles.
          </p>
        </div>

        {/* Timeline Line Arrangement */}
        <div className="max-w-4xl mx-auto relative border-l border-slate-200 dark:border-slate-800 pl-6 sm:pl-10 space-y-12">
          {educationHistory.map((edu, idx) => (
            <div key={idx} className="relative group">
              
              {/* Geometric square timeline point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-2.5 h-2.5 bg-slate-900 dark:bg-slate-100 border border-sky-500 rotate-45 group-hover:bg-sky-500 transition-colors" />

              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-sm p-6 sm:p-8 hover:border-sky-500 transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      {edu.degree}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 font-sans block mt-0.5">
                      {edu.institution}
                    </span>
                  </div>
                  
                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1.5">
                    <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200/40 dark:border-slate-800/40">
                      <Calendar className="w-3 h-3 text-sky-500" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 text-[11px] font-mono font-bold text-sky-500 bg-sky-50 dark:bg-sky-950/40 px-2 py-0.5 rounded border border-sky-100 dark:border-sky-900/20">
                      <span>{edu.scoreLabel}: {edu.score}</span>
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {edu.highlights && edu.highlights.map((high, hIdx) => (
                    <li key={hIdx} className="flex items-start text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2.5 mt-2 flex-shrink-0" />
                      <span>{high}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
