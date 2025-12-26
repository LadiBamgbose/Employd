// src/lib/resumeDefaults.ts
import type { ResumeData } from "../types/resume";

export const emptyResumeData: ResumeData = {
  header: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedinUrl: "",
    websiteUrl: "",
    githubUrl: "",
  },
  summary: "",
  experience: [],
  education: [],
  projects: [],
  skills: [],
  certifications: [],
  awards: [],
  volunteering: [],
  settings: {
    templateId: "classic",
    sectionOrder: ["summary", "experience", "education", "projects", "skills"],
    hiddenSections: [],
    accentColorHex: "#FF3EA5",
  },
  meta: {
    lastEditedAt: new Date().toISOString(),
    aiEnhanced: false,
    aiModel: "",
  },
};
