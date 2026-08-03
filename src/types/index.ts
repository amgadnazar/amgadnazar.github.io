export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}


export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}


export interface Certification {
  name: string;
  issuer: string;
}


export interface SkillGroup {
  [key:string]: string[];
}