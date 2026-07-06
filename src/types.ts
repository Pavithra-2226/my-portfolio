export interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  problem: string;
  solution: string;
  achievements: string[];
  demoUrl?: string;
  githubUrl?: string;
  metrics: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: "frontend" | "backend" | "database" | "tool" | "concept" | "softskill";
  iconName?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  scoreLabel: string;
  score: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  badgeColor?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
  timestamp: string;
}
