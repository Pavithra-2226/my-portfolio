import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Terminal, ShieldAlert } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setResponseMessage("Please fill in all mandatory fields (Name, Email, Message).");
      return;
    }

    setStatus("sending");
    
    // Simulate API call persistence
    setTimeout(() => {
      setStatus("success");
      setResponseMessage(`Thank you, ${formData.name}! Your message has been routed successfully. Pavithra will review your inquiry and get in touch with you shortly.`);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-sky-500 font-mono text-xs mb-2 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-[1px] bg-sky-500"></span> [ COMMUNICATE ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Get In Touch
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-md font-mono uppercase">
            Let's build reliable software systems together. Available for immediate placement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">
                  Connection Channels
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  Are you recruiting for full-time full-stack roles, looking for immediate contract hires, 
                  or just wanting to chat about system architectures? Feel free to contact me through any channel below.
                </p>
              </div>

              {/* Channels list */}
              <div className="space-y-4">
                
                {/* Channel Item */}
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm">
                  <div className="w-10 h-10 bg-sky-50 dark:bg-sky-950/40 text-sky-500 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                      Direct Email
                    </span>
                    <a
                      href="mailto:pavithranagarajan2903@gmail.com"
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
                    >
                      pavithranagarajan2903@gmail.com
                    </a>
                  </div>
                </div>

                {/* Channel Item */}
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm">
                  <div className="w-10 h-10 bg-sky-50 dark:bg-sky-950/40 text-sky-500 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                      Contact Number
                    </span>
                    <a
                      href="tel:+919345972029"
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
                    >
                      +91 93459 72029
                    </a>
                  </div>
                </div>

                {/* Channel Item */}
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm">
                  <div className="w-10 h-10 bg-sky-50 dark:bg-sky-950/40 text-sky-500 flex items-center justify-center rounded-sm flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                      Current Location
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      Dindigul, Tamil Nadu, India
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Connectivity */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-4 font-bold">
                [ SECURE NETWORK CHANNELS ]
              </span>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/pavithra-n-537a0629b"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-sky-500 hover:border-sky-500 transition-all rounded-sm"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/nrpr2003"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-sky-500 hover:border-sky-500 transition-all rounded-sm"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm p-6 sm:p-8 relative">
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-sky-500" />
            
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
              Drop a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name-input" className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                    Your Name *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-sm px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                    Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-sm px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone-input" className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-sm px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="subject-input" className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                    Inquiry Subject
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-sm px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="E.g., Job Opportunity"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message-input" className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                  Detailed Message *
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-sm px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  placeholder="Draft your inquiries or proposal guidelines..."
                  required
                />
              </div>

              {/* Status Message */}
              {status === "success" && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 text-xs sm:text-sm border border-emerald-100 dark:border-emerald-900/30 rounded-sm flex items-start gap-2">
                  <Terminal className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{responseMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-400 text-xs sm:text-sm border border-rose-100 dark:border-rose-900/30 rounded-sm flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>{responseMessage}</span>
                </div>
              )}

              <button
                id="submit-contact-btn"
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-900 dark:bg-white text-white dark:text-slate-950 dark:hover:bg-slate-50 px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-200 disabled:opacity-50"
              >
                <span>{status === "sending" ? "Sending Mission..." : "Transmit Message"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
