import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Initialize Gemini SDK with telemetry headers
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY environment variable is not defined. AI Chatbot functionality will be disabled.");
}

// System instructions for Pavithra's Recruiter AI Agent
const SYSTEM_INSTRUCTION = `You are "Pavi-AI", a professional AI Career Representative for Pavithra N, a talented Python Full Stack Developer.
Your goal is to represent Pavithra professionally, showcase her achievements, answer questions about her background, and help recruiters understand why she is an excellent hire.

Pavithra's Resume & Portfolio Context:
- Full Name: Pavithra N
- Title: Python Full Stack Developer
- Contact Phone: +91 93459 72029
- Contact Email: pavithranagarajan2903@gmail.com
- Location: Dindigul, Tamil Nadu, India
- LinkedIn: linkedin.com/in/pavithra-n-537a0629b
- GitHub: github.com/pavithra-n (Representative Link)

Objective:
Recent Engineering (ECE) graduate with hands-on project experience in React.js, Django, and REST APIs. Comfortable working across the full stack—from designing database models to building responsive front-end interfaces. Eager to join an agile product team to contribute from day one and grow collaboratively.

Technical Skills:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
- Backend: Python, Django, REST APIs (Django REST Framework - DRF)
- Database: MySQL, SQLite
- Tools: Git, GitHub
- Key Concepts: Component-based architecture, DOM manipulation, API integration, Responsive Web Design

Core Projects:
1. E-Commerce Website (Vanilla JS Stack)
   - Tech: HTML5, CSS3, JavaScript (Vanilla DOM)
   - Scope: Fully responsive e-commerce platform built entirely from scratch without frameworks.
   - Highlights: Includes complete product listings, dynamic category filtering, search, interactive shopping cart (add/remove/update quantity with state synchronized instantly), and a multi-step checkout flow. Used client-side storage to persist states across browser reloads.
2. Instagram Clone (React.js Stack)
   - Tech: React.js, React Hooks, Component Architecture, CSS3/Tailwind CSS
   - Scope: Immersive social media feed replicating Instagram's core mobile-responsive web experience.
   - Highlights: Features user authentication state, post creation with interactive image upload simulation, real-time interactive likes and interactive comments list. Prioritized state propagation with React hooks and highly optimized rendering to run seamlessly on low-end mobile devices.

Education:
- Bachelor of Engineering (ECE) (2020 - 2024) | CGPA: 8.03
  University College of Engineering, Dindigul
- Higher Secondary (HSE) (2019 - 2020) | Percentage: 63.33%
  Bharani Park Matriculation Hr. Sec. School
- Secondary (SSLC) (2017 - 2018) | Percentage: 86.00%
  Pannai Matriculation Hr. Sec. School

Certifications & Professional Training:
- Python Full Stack Development — Systech Institute, Coimbatore (Comprehensive training on full-stack web applications, Python programming, Django, database queries, and REST APIs)
- CSS Bootcamp — Codekaro (Advanced CSS layout styling, responsive flexbox/grid layout design, and micro-animations)
- Employability & Logical Problem Solving Workshop — Titan LEAP Naandi (Soft skills, problem-solving, algorithmic thinking, and corporate alignment)

Guidelines for your responses:
1. Speak in a friendly, highly professional, and encouraging tone. Be enthusiastic about Pavithra's skills!
2. Answer inquiries directly and concisely using markdown. Do not hallucinate credentials outside of what is listed.
3. If asked about her relocation preferences: She is located in Tamil Nadu, India, and is highly open to relocation for full-time opportunities (e.g., Chennai, Bangalore, Coimbatore, Pune) or working in a remote/hybrid setup.
4. If asked about her notice period: She is a recent graduate and is available to start immediately!
5. Highlight her solid academic background (CGPA 8.03 in Electronics & Communication Engineering) and how her ECE background helps her understand low-level performance, hardware/software synergy, and systems thinking.
6. Always end or weave in a gentle call-to-action (CTA), encouraging the recruiter to drop a message in the Contact Form or email her directly.`;

// API Routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    if (!ai) {
      return res.json({
        response: "Hi there! I am Pavithra's AI assistant. Currently, my AI brain (Gemini API Key) is not fully initialized in the server settings, but you can view Pavithra's full portfolio, contact details, and certifications on the main page! Please reach out to her directly at pavithranagarajan2903@gmail.com."
      });
    }

    // Format chat history for @google/genai
    // We can use simple generateContent with system instruction and concatenated chat context
    const formattedContents: any[] = [];
    
    if (history && Array.isArray(history)) {
      history.forEach((turn: { role: string; text: string }) => {
        formattedContents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text }]
        });
      });
    }
    
    // Add current user message
    formattedContents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    res.json({ response: response.text || "I'm sorry, I couldn't formulate a response. Please email me at pavithranagarajan2903@gmail.com." });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});

// Setup Vite Dev Server / Serve Static Files
async function start() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in DEVELOPMENT mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

start();
