interface SiteLink {
  name: string;
  link: string;
  icon: string;
}

export type LicenseLevel = "standard" | "premium" | "express";
export type Transmission = "automatic" | "manual";
export type CourseMode = "full_license" | "driving_only" | "refresher";

export interface Course {
  mode: "full_license" | "driving_only" | "refresher";
  level: "standard" | "premium" | "express";
  transmission: "automatic" | "manual";
  duration: string;
  fee: number;
  description: string;
  packages: string[];
  routine: string[];
}

export interface TestimonialProps {
  id: number;
  name: string;
  avatar: any;
  text: string;
  rating: number;
  course: string;
}

export interface avatarCardProps {
  id: number;
  name: string;
  avatar: any;
  position: string;
  theme: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "student" | "instructor";
  avatar?: string;
  createdAt: Date;
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  author: User;
  coverImage?: ImageData;
  images: ImageData[];
  createdAt: Date;
  updatedAt: Date;
  readTime: number;
  tags: string[];
  isPublished: boolean;
}

export interface ImageData {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  position?: "cover" | "inline" | "gallery";
  order: number;
  uploadedAt: Date;
}

export interface EditorState {
  title: string;
  subtitle: string;
  content: string;
  coverImage?: ImageData;
  images: ImageData[];
  isSaving: boolean;
  hasChanges: boolean;
}

export type ViewMode = "DASHBOARD" | "EDITOR" | "LESSON_VIEW" | "PREVIEW";

export interface UploadResult {
  success: boolean;
  url?: string;
  id?: string;
  error?: string;
}
