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
  id: number,
  name: string,
  avatar: any,
  text: string,
  rating: number;
  course: string
}

export interface avatarCardProps {
  id: number,
  name: string,
  avatar: any,
  position: string,
  theme: string
}