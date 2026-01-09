export type UserRole = "student" | "instructor" | "admin";

export interface StudentProfile {
  learnerPermitNumber: string;
  enrolledAt: Date;
  completedLessons: number;
  assignedInstructorId?: string;
  progressPercentage: number;
}

export interface InstructorProfile {
  instructorLicenseNumber: string;
  yearsOfExperience: number;
  assignedVehicle?: string;
  availability: {
    day: string; // e.g. "Monday"
    slots: string[]; // e.g. ["09:00-11:00", "14:00-16:00"]
  }[];
}

export interface AdminProfile {
  permissions: string[]; // e.g. ["manage_users", "view_reports"]
}

export interface User extends Document {
  surname: string;
  othernames: string;
  email: string;
  password: string;
  role: UserRole;

  studentProfile?: StudentProfile;
  instructorProfile?: InstructorProfile;
  adminProfile?: AdminProfile;
  avatarUri?: string;

  gender: "male" | "female" | "other";

  lastLoginAt?: Date;

  createdAt: Date;
  updatedAt: Date;
}

export interface userRes {
  user: User;
  token: string;
  message: string;
  success: boolean;
}

export interface RegistrationData {
  surname: string;
  othernames: string;
  email: string;
  password: string;
  gender: "male" | "female" | "other";
}
