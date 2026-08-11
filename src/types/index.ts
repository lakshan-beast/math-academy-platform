// Lesson Object
export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
  duration: string;
}

// Category Object
export type CourseCategory =
  | "grade_6"
  | "grade_7"
  | "grade_8"
  | "grade_9"
  | "grade_10"
  | "grade_11"
  | "paper_class";

// Teacher Object
export interface TeacherProfile {
  name: string;
  qualifications: string[];
  bio: string;
  avatarUrl: string;
  introVideoUrl: string;
}

// Course Object
export interface ModulePack {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  category: CourseCategory[]; // (or CourseCategory if you renamed it)
  coverImageUrl: string;
  month: string;
  price: number;
}