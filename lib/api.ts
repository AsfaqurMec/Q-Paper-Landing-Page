import { BACKEND_URL } from "./utils";
import type {
  Plan,
  CurriculumStats,
  AcademicClass,
  CurriculumSubject,
  BankQuestionSample
} from "./types";

export async function fetchPlans(): Promise<Plan[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/plans`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch plans from backend:", error);
    return [];
  }
}

export async function fetchCurriculumStats(): Promise<CurriculumStats | null> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/curriculum/stats`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error("Failed to fetch curriculum stats:", error);
    return null;
  }
}

export async function fetchClasses(): Promise<AcademicClass[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/curriculum/classes`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch classes:", error);
    return [];
  }
}

export async function fetchSubjects(): Promise<CurriculumSubject[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/curriculum/subjects`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch subjects:", error);
    return [];
  }
}

export async function fetchSampleQuestions(options: {
  limit?: number;
  type?: "mcq" | "cq";
  subject?: string;
} = {}): Promise<BankQuestionSample[]> {
  try {
    const params = new URLSearchParams();
    if (options.limit) params.set("limit", String(options.limit));
    if (options.type) params.set("type", options.type);
    if (options.subject) params.set("subject", options.subject);

    const res = await fetch(`${BACKEND_URL}/api/curriculum/sample-questions?${params.toString()}`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch sample questions:", error);
    return [];
  }
}
