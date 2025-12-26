// src/types/resume.ts

export type ResumeData = {
    id?: string; // set by backend
    title?: string; // e.g. "Software Engineer Resume" (optional)
  
    header: {
      fullName: string;
      email?: string;
      phone?: string;
      location?: string; // "Atlanta, GA"
      linkedinUrl?: string;
      websiteUrl?: string;
      githubUrl?: string;
    };
  
    summary?: string; // professional summary (AI can rewrite this)
  
    experience: ExperienceItem[]; // can be empty in v1
    education: EducationItem[];
    projects?: ProjectItem[];
    skills?: SkillGroup[];
    certifications?: CertificationItem[];
    awards?: AwardItem[];
    volunteering?: VolunteeringItem[];
  
    // Controls rendering now + future templates
    settings?: {
      // v1: you can hardcode "classic" but keep this for later
      templateId?: "classic" | "modern" | string;
  
      // v1: you can ignore; later you can add a UI for this
      sectionOrder?: SectionKey[];
  
      // hide sections without deleting data
      hiddenSections?: SectionKey[];
  
      // simple style knobs (optional)
      accentColorHex?: string; // "#FF3EA5" etc
    };
  
    // For AI workflows + debugging
    meta?: {
      lastEditedAt?: string; // ISO string
      aiEnhanced?: boolean;
      aiModel?: string; // "claude-3.5-sonnet" etc
    };
  };
  
  export type SectionKey =
    | "summary"
    | "experience"
    | "education"
    | "projects"
    | "skills"
    | "certifications"
    | "awards"
    | "volunteering";
  
  export type ExperienceItem = {
    id?: string;
    company: string;
    role: string;
    location?: string;
    startDate?: string; // "2024-06" or "Jun 2024" — pick one style later
    endDate?: string; // "Present" allowed
    bullets: string[]; // AI rewrites live here
    keywords?: string[]; // optional for ATS, later
  };
  
  export type EducationItem = {
    id?: string;
    school: string;
    degree?: string; // "B.S. Computer Science"
    major?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    gpa?: string;
    highlights?: string[]; // coursework, honors
  };
  
  export type ProjectItem = {
    id?: string;
    name: string;
    link?: string;
    bullets: string[];
    tech?: string[]; // ["React", "Node", ...]
  };
  
  export type SkillGroup = {
    id?: string;
    label: string; // "Languages", "Frameworks", "Tools"
    skills: string[]; // ["TypeScript", "React", ...]
  };
  
  export type CertificationItem = {
    id?: string;
    name: string;
    issuer?: string;
    date?: string;
  };
  
  export type AwardItem = {
    id?: string;
    name: string;
    issuer?: string;
    date?: string;
    detail?: string;
  };
  
  export type VolunteeringItem = {
    id?: string;
    org: string;
    role?: string;
    date?: string;
    bullets?: string[];
  };
  