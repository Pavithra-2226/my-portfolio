import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import AiChatbot from "./components/AiChatbot";
import { ArrowUp, Terminal, Shield, Cpu, RefreshCw, Layers } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to Dark mode as in the Geometric Balance theme
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [systemLoad, setSystemLoad] = useState("1.04");
  const [currentTime, setCurrentTime] = useState("");

  // Update mock system load periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const load = (1.00 + Math.random() * 0.15).toFixed(2);
      setSystemLoad(load);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Update current UTC time for the status bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcString = now.toISOString().replace("T", " ").substring(0, 19);
      setCurrentTime(utcString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sync dark mode class on DOM root
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const handleDownloadResume = () => {
    // Direct link trigger to download public resume text asset
    const link = document.createElement("a");
    link.href = "/Pavithra_N_Resume.txt";
    link.download = "Pavithra_N_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-300 font-sans selection:bg-sky-500/30 selection:text-slate-900 transition-colors duration-300">
      
      {/* Navbar section */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAiChat={() => setIsChatOpen(true)}
      />

      {/* Main Container Grid/Flex */}
      <main className="flex-1 w-full flex flex-col gap-0">
        
        {/* HERO SECTION */}
        <Hero
          onOpenAiChat={() => setIsChatOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        {/* ABOUT SECTION */}
        <About />

        {/* SKILLS SECTION */}
        <Skills />

        {/* PROJECTS SECTION */}
        <Projects />

        {/* EXPERIENCE & ACADEMIC TIMELINE SECTION */}
        <Timeline />

        {/* CONTACT SECTION */}
        <Contact />

      </main>

      {/* FOOTER BAR (Aligned with Geometric Balance Theme) */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-6 sm:py-8 mt-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* System logs status */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>SYSTEMS STATUS: ONLINE</span>
              </span>
              <span>//</span>
              <span>LOAD: {systemLoad}</span>
              <span>//</span>
              <span>UTC: {currentTime}</span>
            </div>

            {/* General copyrights / guidelines */}
            <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center md:text-right">
              DESIGNED FOR HIGH PERFORMANCE — PAVITHRA N V.2026.1
            </div>

          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Pavithra N. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#about" className="hover:text-sky-500 transition-colors">Biography</a>
              <a href="#projects" className="hover:text-sky-500 transition-colors">Builds</a>
              <a href="#contact" className="hover:text-sky-500 transition-colors">Connection Channels</a>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING ACTION CHANNELS */}

      {/* AI Bot floating button */}
      <button
        id="chatbot-floating-trigger"
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-30 p-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white dark:text-slate-950 rounded-full shadow-lg transition-transform hover:scale-105 duration-200 flex items-center justify-center"
        aria-label="Toggle Career Assistant"
        title="Chat with Pavithra's Recruiter AI"
      >
        <Terminal className="w-5 h-5" />
      </button>

      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-trigger"
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-30 p-3.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-200"
          aria-label="Scroll back to top"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Pavi-AI Slide-out Chatbot Drawer */}
      <AiChatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

    </div>
  );
}
