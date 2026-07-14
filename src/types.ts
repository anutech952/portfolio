export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number; // proficiency 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools';
  iconName: string; // lucide icon name
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  duration: string;
  gpa?: string;
  coursework: string[];
  description?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl?: string;
  description?: string;
  signatureName?: string;
  signatureTitle?: string;
  hoursCount?: number;
}

export interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  stars: number;
  total_commits: number;
  languages: { name: string; percentage: number; color: string }[];
  pinned_repos: {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    url: string;
  }[];
}
