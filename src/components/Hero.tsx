import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Download, MessageSquare, Terminal } from "lucide-react";

interface HeroProps {
  onOpenAiChat: () => void;
  onDownloadResume: () => void;
}

export default function Hero({ onOpenAiChat, onDownloadResume }: HeroProps) {
  const titles = [
    "Python Full Stack Developer",
    "Electronics & Communication Graduate",
    "React.js & Django Developer",
    "Systems & Web Engineer"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setTypedText(fullText.substring(0, typedText.length + 1));
        if (typedText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setTypedText(fullText.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(100);
          return;
        }
      }
      setTypingSpeed(isDeleting ? 40 : 80);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTitleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 pt-20 overflow-hidden"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/5 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-500/5 animate-pulse delay-700" />
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Tag */}
        <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border border-emerald-100 dark:border-emerald-900/30">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Open to Relocation & Remote Opportunities</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-sans tracking-tight text-slate-900 dark:text-white mb-4 leading-none">
          Hi, I am <span className="text-emerald-600 dark:text-emerald-500">Pavithra N</span>
        </h1>

        {/* Typing Headline */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold font-mono text-slate-700 dark:text-slate-300">
            {typedText}
            <span className="inline-block w-1 h-6 ml-1 bg-emerald-500 dark:bg-emerald-400 animate-bounce" />
          </span>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-sans">
          An Engineering (ECE) graduate with hands-on expertise building scalable full-stack web architectures. 
          I bridge robust Python backends with fluid, responsive user interfaces.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            id="view-projects-btn"
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg duration-200"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="chat-ai-hero-btn"
            onClick={onOpenAiChat}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg duration-200"
          >
            <Sparkles className="w-4 h-4" />
            <span>Chat with my Career AI</span>
          </button>

          <button
            id="download-resume-hero-btn"
            onClick={onDownloadResume}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Get Recruiter CV</span>
          </button>
        </div>

        {/* Floating Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              8.03
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">
              ECE B.E. CGPA
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              Full Stack
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">
              React & Django
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              Immediate
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">
              Work Availability
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              Certified
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">
              Professional training
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
