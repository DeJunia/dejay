import type { JSONContent } from "@tiptap/core";

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

export interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
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

export type LessonStatus = "draft" | "published";

export interface LessonContent {
  type: "doc";
  content: JSONContent[];
}

export interface Lesson {
  title: string;
  content: LessonContent;
  categoryId: string;
  status: LessonStatus;
  isTodaysLesson: boolean;
  authorId?: string;
  authorName?: string;
  scheduledDate?: string;
  readingTime?: number;
  viewCount?: number;
  marginMode?: "normal" | "wide";
}

export interface LessonData {
  _id?: string;
  title: string;
  content: LessonContent;
  categoryId: Category;
  status: LessonStatus;
  isTodaysLesson: boolean;
  authorId?: string;
  authorName?: string;
  scheduledDate?: string;
  readingTime?: number;
  viewCount?: number;
  marginMode?: "normal" | "wide";
  createdAt?: string;
  updatedAt?: string;
}

export interface LessonCreateInput {
  title: string;
  content: LessonContent;
  categoryId: string;
  status: LessonStatus;
  isTodaysLesson?: boolean;
  marginMode?: "normal" | "wide";
  scheduledDate?: string;
}

export interface LessonUpdateInput extends Partial<LessonCreateInput> {
  id: string;
}

// Category Types
export interface Category {
  _id?: string;
  name: string;
  description?: string;
  color: string;
  pdfUrl?: string;
  pdfName?: string;
  lessonCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CategoryRes {
  data: Category[];
  message: string;
  success: boolean;
}

export interface LessonRes {
  data: LessonData;
  message: string;
  success: boolean;
}
export interface LessonSRes {
  data: LessonData[];
  message: string;
  success: boolean;
}

export interface CategoryCreateInput {
  name: string;
  description?: string;
  color: string;
}

export interface CategoryUpdateInput extends Partial<CategoryCreateInput> {
  id: string;
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
