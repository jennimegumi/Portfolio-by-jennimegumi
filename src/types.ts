/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type WorkCategory = 
  | 'graphic-design' 
  | 'artwork' 
  | 'video-edit' 
  | 'ui-ux' 
  | 'logo-branding';

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  client?: string;
  year: string;
  description: string;
  image: string;
  skills: string[];
  link?: string;
  videoUrl?: string; // Simulator video placeholder or actual embed
  caseStudyId?: string; // Link to detailed case study if available
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[]; // Splitted by logical paragraphs/sections for easy rendering
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: WorkCategory;
  client: string;
  timeline: string;
  role: string;
  challenge: string;
  solution: string;
  process: {
    title: string;
    description: string;
    details?: string[];
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  budget?: string;
  message: string;
  date: string;
}
