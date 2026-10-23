import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBnNumber(num: number | string | undefined): string {
  if (num === undefined || num === null) return "০";
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(num).replace(/[0-9]/g, (w) => bnDigits[+w]);
}

export const APP_URL = process.env.APP_URL || "http://localhost:3000";
export const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5001";
export const APP_LOGIN_URL = `${APP_URL}/login?next=/dashboard/subscription`;
export const APP_REGISTER_URL = `${APP_URL}/register?next=/dashboard/subscription`;
