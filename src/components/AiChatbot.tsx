import React, { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, AlertCircle, RefreshCw, Terminal, ChevronRight } from "lucide-react";
import { ChatMessage } from "../types";

interface AiChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiChatbot({ isOpen, onClose }: AiChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hi there! I am **Pavi-AI**, Pavithra's virtual career representative. I can answer questions about her skills, experience, project architecture, education, relocation preferences, or notice period. Ask me anything, or try one of the suggestions below!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What are her relocation preferences?",
    "Why is her ECE background valuable for software?",
    "Tell me about her projects.",
    "What is her availability / notice period?"
  ];

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    setError(null);
    const userMsg: ChatMessage = {
      role: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setLoading(true);

    try {
      // Map history to server schema
      const historyContext = messages.map(m => ({
        role: m.role,
        text: m.text
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: historyContext })
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with Pavi-AI server endpoint.");
      }

      const data = await response.json();
      
      const modelMsg: ChatMessage = {
        role: "model",
        text: data.response || "I couldn't generate a proper response. Please contact me directly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      console.error(err);
      setError("AI service connection error. Please feel free to email me directly at pavithranagarajan2903@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "model",
        text: "Hi there! I am **Pavi-AI**, Pavithra's virtual career representative. I can answer questions about her skills, experience, project architecture, education, relocation preferences, or notice period. Ask me anything, or try one of the suggestions below!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setError(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-sm">
      
      {/* Sidebar Drawer Container */}
      <div className="w-full max-w-lg bg-white dark:bg-slate-950 h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 dark:border-slate-800 relative animate-in slide-in-from-right duration-300">
        
        {/* Header bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-sm bg-sky-500 transform rotate-45 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-slate-950 rotate-[-45deg]" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest font-mono text-white flex items-center gap-1.5">
                Pavi-AI Chatbot <span className="text-sky-500">[v1.0]</span>
              </h3>
              <p className="text-[10px] text-slate-400 font-mono">STATUS: SYSTEMS ONLINE</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={clearChat}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
              title="Close Panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat History Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50 dark:bg-slate-950">
          
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-sm p-4 text-xs sm:text-sm shadow-sm border ${
                  msg.role === "user"
                    ? "bg-slate-900 text-white border-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:border-sky-400"
                    : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-800"
                }`}
              >
                {/* Parse minor markdown tags like bold */}
                <p className="leading-relaxed whitespace-pre-wrap">
                  {msg.text.split("**").map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="font-bold text-sky-600 dark:text-sky-400">{part}</strong> : part
                  )}
                </p>
                <span className={`block text-[9px] mt-2 text-right ${
                  msg.role === "user" ? "text-slate-400 dark:text-slate-800" : "text-slate-400"
                }`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {/* Typing state */}
          {loading && (
            <div className="flex flex-col items-start">
              <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-sm p-4 text-xs sm:text-sm shadow-sm flex items-center space-x-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}

          {/* Error notice */}
          {error && (
            <div className="p-3.5 bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-400 text-xs border border-rose-100 dark:border-rose-900/30 rounded-sm flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion list & Input controller */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
          
          {/* Suggestion tags */}
          {messages.length === 1 && (
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold mb-2">
                Suggested Recruitment Questions:
              </span>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendMessage(q)}
                    className="text-[11px] bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-sm border border-slate-200 dark:border-slate-800/80 text-left flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-500" />
                    <span>{q}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat text box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="flex items-center space-x-2"
          >
            <input
              id="chatbot-message-input"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-sm px-4 py-2.5 text-xs sm:text-sm text-slate-950 dark:text-white focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-400"
              placeholder="Ask about her skills, projects, notice period..."
              disabled={loading}
              required
            />
            <button
              id="send-chatbot-message-btn"
              type="submit"
              disabled={loading || !inputText.trim()}
              className="p-2.5 bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950 hover:opacity-90 rounded-sm disabled:opacity-40 transition-opacity"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Recruiter Notice footer */}
          <div className="text-[10px] text-slate-400 text-center font-mono uppercase tracking-wider">
            Powered by Gemini 3.5 Flash — Instant Relocation Response Enabled
          </div>

        </div>

      </div>

    </div>
  );
}
