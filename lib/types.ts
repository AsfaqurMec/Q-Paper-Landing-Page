export interface Plan {
  code: "free" | "small" | "pro" | "ultra" | "diamond" | string;
  name: string;
  price: number;
  interval: "month" | "year" | string;
  duration?: string;
  durationDays?: number;
  description?: string;
  paperLimit: number;
  questionLimit: number;
  totalQuestionsLimit: number;
  exports: string[];
  importQuestion: boolean;
  watermark: boolean;
  questionBank: boolean;
  branding: boolean;
  randomGenerator: boolean;
  multipleVersions: boolean;
}


export interface CurriculumStats {
  totalClasses: number;
  activeClasses: number;
  totalSubjects: number;
  activeSubjects: number;
  totalChapters: number;
  activeChapters: number;
  totalQuestions: number;
  linkedQuestions: number;
}

export interface AcademicClass {
  id: string;
  name: string;
  code: string;
  aliases?: string[];
  subjectsCount?: number;
  chaptersCount?: number;
  questionsCount?: number;
}

export interface CurriculumSubject {
  id: string;
  classId?: string;
  name: string;
  code: string;
  category: string;
  className: string;
  chaptersCount?: number;
  questionsCount?: number;
}


export interface SubQuestion {
  id?: string;
  label: string;
  text: string;
  marks: number;
  answer?: string;
  explanation?: string;
}

export interface BankQuestionSample {
  id: string;
  title: string;
  type: "mcq" | "cq";
  subject: string;
  category?: string;
  className: string;
  chapter: string;
  options?: string[];
  correctIndex?: number;
  subQuestions?: SubQuestion[];
  board?: string;
  year?: string;
  difficulty?: "easy" | "medium" | "hard";
  marks?: number;
}
