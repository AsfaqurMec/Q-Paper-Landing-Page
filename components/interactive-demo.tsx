"use client";

import { useState } from "react";
import {
  FileText,
  SplitSquareVertical,
  Shuffle,
  Printer,
  Download,
  CheckCircle2,
  Eye,
  EyeOff,
  Sparkles,
  BookOpen,
  Check,
  RotateCw,
  HelpCircle,
  FileCheck2,
  ExternalLink
} from "lucide-react";
import { formatBnNumber, APP_URL } from "@/lib/utils";
import { MathRenderer } from "@/components/math-renderer";

interface McqQuestion {
  no: string;
  text: string;
  math?: string;
  options: string[];
  correct: number;
  explanation: string;
  topic: string;
}

export function InteractiveDemo() {
  const [demoType, setDemoType] = useState<"mcq" | "cq">("mcq");
  const [activeSet, setActiveSet] = useState<"A" | "B" | "C" | "D">("A");
  const [layout, setLayout] = useState<"split" | "single">("split");
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  // 4 Sets of MCQ Data with authentic KaTeX math & matrices
  const mcqSets: Record<"A" | "B" | "C" | "D", McqQuestion[]> = {
    A: [
      {
        no: "১",
        text: "যদি $f(x) = x^3 - 3x^2 + 4$ হয়, তবে $f(-1)$ এর মান কত?",
        options: ["-1", "0", "2", "4"],
        correct: 1,
        explanation: "f(-1) = (-1)³ - 3(-1)² + 4 = -1 - 3 + 4 = 0",
        topic: "উচ্চতর গণিত"
      },
      {
        no: "২",
        text: "নিচের কোন ম্যাট্রিক্সটি ব্যতিক্রমী (Singular)?",
        math: "A = \\begin{bmatrix} 2 & 4 \\\\ 3 & 6 \\end{bmatrix}",
        options: [
          "|A| = 0 (ব্যতিক্রমী)",
          "|A| \\neq 0 (অব্যতিক্রমী)",
          "একক ম্যাট্রিক্স (Identity)",
          "স্কেলার ম্যাট্রিক্স"
        ],
        correct: 0,
        explanation: "নির্ণায়কের মান: |A| = (2×6) - (4×3) = 12 - 12 = 0। নির্ণায়ক শূন্য হওয়ায় এটি ব্যতিক্রমী ম্যাট্রিক্স।",
        topic: "ম্যাট্রিক্স"
      },
      {
        no: "৩",
        text: "একটি বস্তুকে $40\\text{ m/s}$ বেগে খাড়া উপরের দিকে নিক্ষেপ করা হলে সর্বোচ্চ উচ্চতায় পৌঁছাতে কত সময় লাগবে? ($g = 9.8\\text{ ms}^{-2}$)",
        options: ["2.04 s", "3.12 s", "4.08 s", "5.16 s"],
        correct: 2,
        explanation: "t = u/g = 40 / 9.8 ≈ 4.08 সেকেন্ড",
        topic: "পদার্থবিজ্ঞান"
      },
      {
        no: "৪",
        text: "যদি $\\log_2(x - 1) = 3$ হয়, তবে $x$ এর সঠিক মান কোনটি?",
        options: ["7", "8", "9", "10"],
        correct: 2,
        explanation: "x - 1 = 2³ = 8 ⇒ x = 8 + 1 = 9",
        topic: "বীজগণিত"
      },
      {
        no: "৫",
        text: "যদি $\\tan\\theta = \\frac{3}{4}$ এবং $\\theta$ সূক্ষ্মকোণ হয়, তবে $\\sin\\theta \\cdot \\cos\\theta$ এর মান কত?",
        options: [
          "\\frac{7}{25}",
          "\\frac{12}{25}",
          "\\frac{4}{5}",
          "\\frac{3}{5}"
        ],
        correct: 1,
        explanation: "অতিভুজ = √(3² + 4²) = 5। sinθ = 3/5, cosθ = 4/5। গুণফল = (3/5) × (4/5) = 12/25।",
        topic: "ত্রিকোণমিতি"
      },
      {
        no: "৬",
        text: "পর্যায় সারণির ১৭ নং গ্রুপের হ্যালোজেন মৌলগুলোর বহিঃস্তরে কয়টি ইলেকট্রন থাকে?",
        options: ["৫টি", "৬টি", "৭টি", "৮টি"],
        correct: 2,
        explanation: "১৭ নং গ্রুপের সাধারণ ইলেকট্রন বিন্যাস ns² np⁵, অর্থাৎ বহিঃস্তরে ৭টি ইলেকট্রন থাকে।",
        topic: "রসায়ন"
      }
    ],
    B: [
      {
        no: "১",
        text: "নিচের কোন ম্যাট্রিক্সটি ব্যতিক্রমী (Singular)?",
        math: "A = \\begin{bmatrix} 2 & 4 \\\\ 3 & 6 \\end{bmatrix}",
        options: [
          "একক ম্যাট্রিক্স (Identity)",
          "|A| = 0 (ব্যতিক্রমী)",
          "স্কেলার ম্যাট্রিক্স",
          "|A| \\neq 0 (অব্যতিক্রমী)"
        ],
        correct: 1,
        explanation: "নির্ণায়কের মান: |A| = 12 - 12 = 0। নির্ণায়ক শূন্য হওয়ায় এটি ব্যতিক্রমী ম্যাট্রিক্স।",
        topic: "ম্যাট্রিক্স"
      },
      {
        no: "২",
        text: "একটি বস্তুকে $40\\text{ m/s}$ বেগে খাড়া উপরের দিকে নিক্ষেপ করা হলে সর্বোচ্চ উচ্চতায় পৌঁছাতে কত সময় লাগবে? ($g = 9.8\\text{ ms}^{-2}$)",
        options: ["4.08 s", "2.04 s", "5.16 s", "3.12 s"],
        correct: 0,
        explanation: "t = u/g = 40 / 9.8 ≈ 4.08 সেকেন্ড",
        topic: "পদার্থবিজ্ঞান"
      },
      {
        no: "৩",
        text: "যদি $\\log_2(x - 1) = 3$ হয়, তবে $x$ এর সঠিক মান কোনটি?",
        options: ["8", "7", "9", "10"],
        correct: 2,
        explanation: "x - 1 = 2³ = 8 ⇒ x = 9",
        topic: "বীজগণিত"
      },
      {
        no: "৪",
        text: "যদি $f(x) = x^3 - 3x^2 + 4$ হয়, তবে $f(-1)$ এর মান কত?",
        options: ["0", "-1", "4", "2"],
        correct: 0,
        explanation: "f(-1) = -1 - 3 + 4 = 0",
        topic: "উচ্চতর গণিত"
      },
      {
        no: "৫",
        text: "পর্যায় সারণির ১৭ নং গ্রুপের হ্যালোজেন মৌলগুলোর বহিঃস্তরে কয়টি ইলেকট্রন থাকে?",
        options: ["৭টি", "৫টি", "৮টি", "৬টি"],
        correct: 0,
        explanation: "বহিঃস্তরে ৭টি ইলেকট্রন থাকে।",
        topic: "রসায়ন"
      },
      {
        no: "৬",
        text: "যদি $\\tan\\theta = \\frac{3}{4}$ এবং $\\theta$ সূক্ষ্মকোণ হয়, তবে $\\sin\\theta \\cdot \\cos\\theta$ এর মান কত?",
        options: [
          "\\frac{3}{5}",
          "\\frac{7}{25}",
          "\\frac{12}{25}",
          "\\frac{4}{5}"
        ],
        correct: 2,
        explanation: "গুণফল = (3/5) × (4/5) = 12/25।",
        topic: "ত্রিকোণমিতি"
      }
    ],
    C: [
      {
        no: "১",
        text: "যদি $\\log_2(x - 1) = 3$ হয়, তবে $x$ এর সঠিক মান কোনটি?",
        options: ["9", "8", "10", "7"],
        correct: 0,
        explanation: "x - 1 = 8 ⇒ x = 9",
        topic: "বীজগণিত"
      },
      {
        no: "২",
        text: "যদি $\\tan\\theta = \\frac{3}{4}$ এবং $\\theta$ সূক্ষ্মকোণ হয়, তবে $\\sin\\theta \\cdot \\cos\\theta$ এর মান কত?",
        options: [
          "\\frac{4}{5}",
          "\\frac{12}{25}",
          "\\frac{3}{5}",
          "\\frac{7}{25}"
        ],
        correct: 1,
        explanation: "গুণফল = 12/25।",
        topic: "ত্রিকোণমিতি"
      },
      {
        no: "৩",
        text: "যদি $f(x) = x^3 - 3x^2 + 4$ হয়, তবে $f(-1)$ এর মান কত?",
        options: ["2", "0", "-1", "4"],
        correct: 1,
        explanation: "f(-1) = 0",
        topic: "উচ্চতর গণিত"
      },
      {
        no: "৪",
        text: "পর্যায় সারণির ১৭ নং গ্রুপের হ্যালোজেন মৌলগুলোর বহিঃস্তরে কয়টি ইলেকট্রন থাকে?",
        options: ["৬টি", "৭টি", "৫টি", "৮টি"],
        correct: 1,
        explanation: "বহিঃস্তরে ৭টি ইলেকট্রন থাকে।",
        topic: "রসায়ন"
      },
      {
        no: "৫",
        text: "একটি বস্তুকে $40\\text{ m/s}$ বেগে খাড়া উপরের দিকে নিক্ষেপ করা হলে সর্বোচ্চ উচ্চতায় পৌঁছাতে কত সময় লাগবে? ($g = 9.8\\text{ ms}^{-2}$)",
        options: ["3.12 s", "5.16 s", "4.08 s", "2.04 s"],
        correct: 2,
        explanation: "t = u/g ≈ 4.08 s",
        topic: "পদার্থবিজ্ঞান"
      },
      {
        no: "৬",
        text: "নিচের কোন ম্যাট্রিক্সটি ব্যতিক্রমী (Singular)?",
        math: "A = \\begin{bmatrix} 2 & 4 \\\\ 3 & 6 \\end{bmatrix}",
        options: [
          "স্কেলার ম্যাট্রিক্স",
          "|A| \\neq 0 (অব্যতিক্রমী)",
          "|A| = 0 (ব্যতিক্রমী)",
          "একক ম্যাট্রিক্স (Identity)"
        ],
        correct: 2,
        explanation: "নির্ণায়কের মান: |A| = 12 - 12 = 0। নির্ণায়ক শূন্য হওয়ায় এটি ব্যতিক্রমী ম্যাট্রিক্স।",
        topic: "ম্যাট্রিক্স"
      }
    ],
    D: [
      {
        no: "১",
        text: "পর্যায় সারণির ১৭ নং গ্রুপের হ্যালোজেন মৌলগুলোর বহিঃস্তরে কয়টি ইলেকট্রন থাকে?",
        options: ["৮টি", "৭টি", "৬টি", "৫টি"],
        correct: 1,
        explanation: "বহিঃস্তরে ৭টি ইলেকট্রন থাকে।",
        topic: "রসায়ন"
      },
      {
        no: "২",
        text: "যদি $f(x) = x^3 - 3x^2 + 4$ হয়, তবে $f(-1)$ এর মান কত?",
        options: ["4", "2", "0", "-1"],
        correct: 2,
        explanation: "f(-1) = 0",
        topic: "উচ্চতর গণিত"
      },
      {
        no: "৩",
        text: "নিচের কোন ম্যাট্রিক্সটি ব্যতিক্রমী (Singular)?",
        math: "A = \\begin{bmatrix} 2 & 4 \\\\ 3 & 6 \\end{bmatrix}",
        options: [
          "|A| = 0 (ব্যতিক্রমী)",
          "একক ম্যাট্রিক্স (Identity)",
          "|A| \\neq 0 (অব্যতিক্রমী)",
          "স্কেলার ম্যাট্রিক্স"
        ],
        correct: 0,
        explanation: "নির্ণায়কের মান: |A| = 12 - 12 = 0। নির্ণায়ক শূন্য হওয়ায় এটি ব্যতিক্রমী ম্যাট্রিক্স।",
        topic: "ম্যাট্রিক্স"
      },
      {
        no: "৪",
        text: "যদি $\\tan\\theta = \\frac{3}{4}$ এবং $\\theta$ সূক্ষ্মকোণ হয়, তবে $\\sin\\theta \\cdot \\cos\\theta$ এর মান কত?",
        options: [
          "\\frac{12}{25}",
          "\\frac{3}{5}",
          "\\frac{7}{25}",
          "\\frac{4}{5}"
        ],
        correct: 0,
        explanation: "গুণফল = 12/25।",
        topic: "ত্রিকোণমিতি"
      },
      {
        no: "৫",
        text: "যদি $\\log_2(x - 1) = 3$ হয়, তবে $x$ এর সঠিক মান কোনটি?",
        options: ["10", "7", "8", "9"],
        correct: 3,
        explanation: "x - 1 = 8 ⇒ x = 9",
        topic: "বীজগণিত"
      },
      {
        no: "৬",
        text: "একটি বস্তুকে $40\\text{ m/s}$ বেগে খাড়া উপরের দিকে নিক্ষেপ করা হলে সর্বোচ্চ উচ্চতায় পৌঁছাতে কত সময় লাগবে? ($g = 9.8\\text{ ms}^{-2}$)",
        options: ["2.04 s", "4.08 s", "3.12 s", "5.16 s"],
        correct: 1,
        explanation: "t = u/g ≈ 4.08 s",
        topic: "পদার্থবিজ্ঞান"
      }
    ]
  };

  // CQ Questions with Math & Clear Derivations
  const cqQuestions = [
    {
      no: "১",
      stem: "উদ্দীপক: f(x) = x^3 - 6x^2 + 11x - 6 একটি বহুপদী অপেক্ষক এবং একটি ২×২ ক্রমের ম্যাট্রিক্স M = \\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}।",
      subQuestions: [
        {
          label: "ক",
          type: "জ্ঞানমূলক",
          text: "ব্যতিক্রমী ও অব্যতিক্রমী ম্যাট্রিক্সের প্রধান পার্থক্য কী?",
          marks: 1,
          answer: "যে বর্গ ম্যাট্রিক্সের নির্ণায়কের মান শূন্য (|A| = 0), তাকে ব্যতিক্রমী ম্যাট্রিক্স বলে; আর নির্ণায়কের মান অশূন্য (|A| ≠ 0) হলে তাকে অব্যতিক্রমী ম্যাট্রিক্স বলে।"
        },
        {
          label: "খ",
          type: "অনুধাবনমূলক",
          text: "উদ্দীপকের ম্যাট্রিক্স $M$ এর বিপরীত ম্যাট্রিক্স $M^{-1}$ বিদ্যমান কি-না যাচাই কর।",
          marks: 2,
          answer: "|M| = (2×3) - (1×4) = 6 - 4 = 2 ≠ 0। যেহেতু নির্ণায়কের মান অশূন্য, তাই M একটি অব্যতিক্রমী ম্যাট্রিক্স এবং এর বিপরীত ম্যাট্রিক্স M⁻¹ বিদ্যমান।"
        },
        {
          label: "গ",
          type: "প্রয়োগমূলক",
          text: "ভাগশেষ উপপাদ্য প্রয়োগ করে দেখাও যে, $(x - 1)$ রাশিটি $f(x)$ এর একটি উৎপাদক।",
          marks: 3,
          answer: "f(1) = 1³ - 6(1)² + 11(1) - 6 = 1 - 6 + 11 - 6 = 0। ভাগশেষ উপপাদ্য অনুযায়ী f(1) = 0 হওয়ায় (x - 1) রাশিটি f(x) এর একটি নিশ্চিত উৎপাদক।"
        },
        {
          label: "ঘ",
          type: "উচ্চতর দক্ষতামূলক",
          text: "$f(x) = 0$ সমীকরণের মূলগুলো নির্ণয় কর এবং মূলগুলোর প্রকৃতি বিশ্লেষণ কর।",
          marks: 4,
          answer: "f(x) = (x - 1)(x² - 5x + 6) = (x - 1)(x - 2)(x - 3) = 0 ⇒ x = 1, 2, 3। মূল তিনটি বাস্তব, মূলদ এবং অসমান।"
        }
      ]
    },
    {
      no: "২",
      stem: "উদ্দীপক: ৫০০ গ্রাম ভরের একটি ক্রিকেট বল ৩০ m/s বেগে আসছিল। ব্যাটসম্যান ব্যাট দিয়ে আঘাত করায় বলটি ঠিক বিপরীত দিকে ২০ m/s বেগে ফিরে গেল। বল ও ব্যাটের সংযোগকাল ছিল ০.০২ সেকেন্ড।",
      subQuestions: [
        {
          label: "ক",
          type: "জ্ঞানমূলক",
          text: "বলের ঘাত (Impulse of Force) কাকে বলে? এর একক কী?",
          marks: 1,
          answer: "খুব অল্প সময়ের জন্য প্রযুক্ত কোনো বল এবং ঐ বলের ক্রিয়াকালের গুণফলকে বলের ঘাত বলা হয়। এর এসআই একক N·s (নিউটন-সেকেন্ড) বা kg·m/s।"
        },
        {
          label: "খ",
          type: "অনুধাবনমূলক",
          text: "বন্দুক থেকে গুলি ছুড়লে বন্দুকটি পেছনের দিকে প্রতিক্ষেপ বেগ লাভ করে কেন?",
          marks: 2,
          answer: "ভরবেগের নিত্যতা সূত্রানুসারে, গুলি সামনে যাওয়ার সময় যে পরিমাণ সম্মুখ ভরবেগ লাভ করে, বন্দুক ঠিক বিপরীত দিকে সমান পশ্চাৎ ভরবেগ লাভ করে পেছনের দিকে সরে আসে।"
        },
        {
          label: "গ",
          type: "প্রয়োগমূলক",
          text: "উদ্দীপকের তথ্যানুযায়ী ব্যাটের দ্বারা বলটির উপর প্রযুক্ত বলের ঘাতের মান নির্ণয় কর।",
          marks: 3,
          answer: "m = 0.5 kg, u = 30 m/s, v = -20 m/s। বলের ঘাত J = m(v - u) = 0.5(-20 - 30) = 0.5 × (-50) = -25 N·s। বলের ঘাতের মান ২৫ নিউটন-সেকেন্ড।"
        },
        {
          label: "ঘ",
          type: "উচ্চতর দক্ষতামূলক",
          text: "ব্যাটের প্রযুক্ত গড় বলের মান কত? সংযোগকাল দ্বিগুণ করা হলে প্রযুক্ত গড় বলের কি পরিবর্তন ঘটবে—গাণিতিক বিশ্লেষণ দাও।",
          marks: 4,
          answer: "গড় বল F = J / Δt = 25 / 0.02 = 1250 N। সংযোগকাল দ্বিগুণ (Δt' = 0.04 s) হলে F' = 25 / 0.04 = 625 N। অর্থাৎ সংযোগকাল দ্বিগুণ করলে প্রযুক্ত গড় বলের মান ঠিক অর্ধেক হয়ে যাবে।"
        }
      ]
    }
  ];

  const currentMcq = mcqSets[activeSet];

  const handleOptionClick = (questionNo: string, optionIdx: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionNo]: optionIdx
    }));
  };

  const setCodeLabels: Record<"A" | "B" | "C" | "D", string> = {
    A: "ক",
    B: "খ",
    C: "গ",
    D: "ঘ"
  };

  return (
    <section id="live-demo" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100/70 relative overflow-hidden border-t border-slate-200/90">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-400/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-bold mb-4 border border-emerald-300/80 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" />
            <span>লাইভ প্রশ্নপত্র সিমুলেটর ও নিখুঁত KaTeX সমীকরণ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.25]">
            বোর্ড স্ট্যান্ডার্ডে আসল প্রিন্ট কেমন দেখাবে?
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg mt-2 sm:mt-3 font-medium">
            বহুনির্বাচনী (MCQ) এবং সৃজনশীল (CQ) — দুটি ফরম্যাটেই সরাসরি প্রিভিউ দেখুন। ৪ সেট শাফলিং ও গণিতের ম্যাট্রিক্স সমীকরণ কীভাবে রেন্ডার হয় নিজেই পরীক্ষা করুন।
          </p>

          {/* Master Tabs: MCQ vs CQ */}
          <div className="w-full max-w-lg mx-auto p-1.5 bg-slate-200/90 rounded-2xl mt-6 sm:mt-8 shadow-inner border border-slate-300 grid grid-cols-2 gap-1">
            <button
              onClick={() => setDemoType("mcq")}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-base font-bold transition-all duration-200 min-h-[44px] ${
                demoType === "mcq"
                  ? "bg-white text-emerald-900 shadow-md scale-[1.01]"
                  : "text-slate-700 hover:text-slate-950"
              }`}
            >
              <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>বহুনির্বাচনী (MCQ)</span>
            </button>
            <button
              onClick={() => setDemoType("cq")}
              className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-base font-bold transition-all duration-200 min-h-[44px] ${
                demoType === "cq"
                  ? "bg-white text-emerald-900 shadow-md scale-[1.01]"
                  : "text-slate-700 hover:text-slate-950"
              }`}
            >
              <BookOpen className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>সৃজনশীল (CQ)</span>
            </button>
          </div>
        </div>

        {/* Paper Container Simulator */}
        <div className="max-w-4xl mx-auto">
          {/* Top Control Bar with Glassmorphic Chrome */}
          <div className="bg-slate-900 text-white rounded-t-2xl px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800 shadow-xl">
            {/* Window title & status */}
            <div className="flex items-center justify-between sm:justify-start gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <span className="font-bold text-xs sm:text-sm text-slate-200 ml-1">
                  {demoType === "mcq" ? "A4 বোর্ড MCQ প্রিভিউ" : "A4 সৃজনশীল (CQ) প্রিভিউ"}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                KaTeX লাইভ
              </span>
            </div>

            {/* Controls: Set Shuffler & Solution Toggle */}
            <div className="flex items-center justify-between sm:justify-end gap-2 flex-wrap">
              {demoType === "mcq" && (
                <div className="flex items-center gap-0.5 sm:gap-1 bg-slate-800/90 p-0.5 sm:p-1 rounded-xl border border-slate-700/80">
                  <span className="text-slate-400 text-[11px] sm:text-xs px-1.5 flex items-center gap-1 font-semibold">
                    <Shuffle className="w-3 h-3 text-emerald-400 shrink-0" /> সেট:
                  </span>
                  {(["A", "B", "C", "D"] as const).map((setKey) => (
                    <button
                      key={setKey}
                      onClick={() => setActiveSet(setKey)}
                      className={`px-2 sm:px-3 py-1 rounded-lg text-xs font-bold min-h-[32px] sm:min-h-0 transition-all ${
                        activeSet === setKey
                          ? "bg-emerald-600 text-white shadow-sm scale-105"
                          : "text-slate-300 hover:text-white hover:bg-slate-700"
                      }`}
                    >
                      {setCodeLabels[setKey]}
                    </button>
                  ))}
                </div>
              )}

              {/* Layout Toggle (Desktop) */}
              {demoType === "mcq" && (
                <div className="hidden sm:flex items-center gap-1 bg-slate-800/90 p-1 rounded-xl border border-slate-700/80">
                  <button
                    onClick={() => setLayout("split")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                      layout === "split"
                        ? "bg-slate-700 text-emerald-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <SplitSquareVertical className="w-3.5 h-3.5" /> ২-কলাম
                  </button>
                  <button
                    onClick={() => setLayout("single")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                      layout === "single"
                        ? "bg-slate-700 text-emerald-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    ১-কলাম
                  </button>
                </div>
              )}

              <button
                onClick={() => setShowAnswerKey(!showAnswerKey)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 min-h-[32px] transition ${
                  showAnswerKey
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
                }`}
              >
                {showAnswerKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showAnswerKey ? "লুকান" : "উত্তর ও ওএমআর"}</span>
              </button>
            </div>
          </div>

          {/* Simulated Authentic A4 Exam Sheet */}
          <div className="relative bg-white border-x border-b border-slate-300 rounded-b-2xl shadow-2xl p-3.5 sm:p-8 md:p-10 text-slate-900 overflow-hidden font-sans">
            {/* Watermark in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none rotate-[-25deg]">
              <span className="text-8xl sm:text-9xl font-black text-slate-900 tracking-widest uppercase">
                Q-PAPER EXAM
              </span>
            </div>

            {/* Authentic Board Institution Header */}
            <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
              <div className="inline-block border border-slate-300 bg-slate-50 text-[11px] font-bold text-slate-700 px-3 py-0.5 rounded-full mb-1">
                মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড নমুনা প্রশ্নপত্র
              </div>
              <h3 className="text-base sm:text-2xl font-black text-slate-900 tracking-tight">
                মতিঝিল আইডিয়াল স্কুল অ্যান্ড কলেজ, ঢাকা
              </h3>
              <p className="text-[11px] sm:text-sm font-bold text-slate-800 mt-0.5">
                এসএসসি নির্বাচনী পরীক্ষা — ২০২৬
              </p>

              {/* Exam Info Strip - 2 cols on mobile, flex on desktop */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-between text-[11px] sm:text-sm text-slate-900 font-semibold mt-3 pt-2.5 border-t border-slate-200 gap-2 text-left sm:text-center">
                <div>
                  <span className="text-slate-500 font-normal">শ্রেণি: </span>
                  <span className="font-bold">নবম-দশম (SSC)</span>
                </div>
                <div>
                  <span className="text-slate-500 font-normal">বিষয়: </span>
                  <span className="font-bold">
                    {demoType === "mcq" ? "উচ্চতর গণিত (MCQ)" : "উচ্চতর গণিত (CQ)"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 font-normal">বিষয় কোড: </span>
                  <span className="font-bold font-mono">১২৬</span>
                </div>
                {demoType === "mcq" && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 font-normal">সেট: </span>
                    <span className="inline-block bg-slate-900 text-white font-black px-2 py-0.5 rounded text-[11px] sm:text-xs tracking-wider">
                      {setCodeLabels[activeSet]} ({activeSet})
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 font-normal">সময়: </span>
                  <span className="font-bold">{demoType === "mcq" ? "২৫ মিনিট" : "২ ঘণ্টা ১৫ মি."}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-normal">পূর্ণমান: </span>
                  <span className="font-bold">{demoType === "mcq" ? "২৫" : "৫০"}</span>
                </div>
              </div>
            </div>

            {/* Special Board Instructions Banner */}
            <div className="text-xs text-slate-700 italic mb-6 text-center font-medium bg-slate-50/90 py-2 px-4 rounded-xl border border-slate-200">
              {demoType === "mcq"
                ? "[বিশেষ নির্দেশ: প্রতিটি প্রশ্নের মান ১। সঠিক উত্তরের বৃত্তটি ওএমআর শিটে কালো বলপেন দিয়ে সতর্কতার সাথে ভরাট কর। ক্যালকুলেটর অনুমোদিত।]"
                : "[বিশেষ নির্দেশ: ডানপাশের সংখ্যা প্রশ্নের পূর্ণমান জ্ঞাপক। প্রদত্ত উদ্দীপকগুলো সতর্কভাবে পড়ে যেকোনো ৫টি প্রশ্নের উত্তর দাও।]"}
            </div>

            {/* MCQ View with KaTeX and True 2-Column Board Split */}
            {demoType === "mcq" && (
              <div
                className={`grid gap-6 ${
                  layout === "split"
                    ? "grid-cols-1 sm:grid-cols-2 sm:divide-x sm:divide-slate-200 sm:gap-x-8"
                    : "grid-cols-1"
                }`}
              >
                {currentMcq.map((q, idx) => {
                  const selectedOpt = userAnswers[q.no];
                  return (
                    <div
                      key={idx}
                      className={`space-y-2 text-xs sm:text-sm ${
                        layout === "split" && idx % 2 === 1 ? "sm:pl-8" : ""
                      }`}
                    >
                      {/* Question Stem with KaTeX math support */}
                      <div className="font-bold text-slate-900 leading-relaxed">
                        <span className="text-emerald-700 font-black mr-2 font-mono text-sm">
                          {q.no}.
                        </span>
                        <MathRenderer text={q.text} />
                      </div>

                      {/* Explicit Matrix Display using KaTeX */}
                      {q.math && (
                        <div className="my-2 p-2.5 bg-slate-50/80 border border-slate-200/90 rounded-xl text-center shadow-xs">
                          <MathRenderer text={`$$${q.math}$$`} as="div" />
                        </div>
                      )}

                      {/* Options Grid (Clickable interactive trial) */}
                      <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-slate-800 font-medium">
                        {q.options.map((opt, optIdx) => {
                          const labels = ["(ক)", "(খ)", "(গ)", "(ঘ)"];
                          const isSelected = selectedOpt === optIdx;
                          const isCorrect = q.correct === optIdx;

                          let optionStyle = "bg-white border-slate-200 text-slate-800 hover:border-emerald-400 hover:bg-emerald-50/40";
                          if (showAnswerKey) {
                            if (isCorrect) {
                              optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500";
                            } else if (isSelected && !isCorrect) {
                              optionStyle = "bg-rose-50 border-rose-400 text-rose-900 line-through";
                            }
                          } else if (isSelected) {
                            optionStyle = "bg-emerald-100/70 border-emerald-500 text-emerald-950 font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleOptionClick(q.no, optIdx)}
                              className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all ${optionStyle}`}
                            >
                              <span className="font-bold text-slate-600 font-sans shrink-0">
                                {labels[optIdx]}
                              </span>
                              <div className="flex-1 truncate">
                                <MathRenderer text={opt} />
                              </div>
                              {showAnswerKey && isCorrect && (
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Optional Explanation when Answer Key is active */}
                      {showAnswerKey && (
                        <div className="mt-1.5 p-2 bg-emerald-50/70 border border-emerald-200/80 rounded-lg text-[11px] text-emerald-900 leading-normal">
                          <span className="font-bold">ব্যাখ্যা: </span>
                          <MathRenderer text={q.explanation} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* CQ View with Stem, KaTeX, Subquestions & Rubric */}
            {demoType === "cq" && (
              <div className="space-y-8">
                {cqQuestions.map((q, idx) => (
                  <div key={idx} className="border-b border-slate-200 pb-7 last:border-b-0 space-y-3.5">
                    {/* CQ Header & Stem */}
                    <div className="text-sm sm:text-base leading-relaxed">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-indigo-800 font-black text-sm bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                          প্রশ্ন নং {formatBnNumber(idx + 1)}
                        </span>
                      </div>
                      <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200 text-slate-900 font-medium leading-relaxed">
                        <MathRenderer text={q.stem} />
                      </div>
                    </div>

                    {/* Sub Questions (ক, খ, গ, ঘ) */}
                    <div className="space-y-3 pt-1 pl-1 sm:pl-3">
                      {q.subQuestions.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-start justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900">
                            <div className="leading-relaxed">
                              <span className="text-indigo-700 font-bold mr-1.5 text-sm">
                                ({sub.label})
                              </span>
                              <MathRenderer text={sub.text} />
                              <span className="text-[11px] text-slate-400 font-normal ml-2">
                                [{sub.type}]
                              </span>
                            </div>
                            <span className="shrink-0 font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200 text-xs">
                              {formatBnNumber(sub.marks)}
                            </span>
                          </div>

                          {/* Answer Key Drawer */}
                          {showAnswerKey && (
                            <div className="ml-5 p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs text-emerald-950 font-normal leading-relaxed">
                              <span className="font-bold text-emerald-900">নমুনা সমাধান: </span>
                              <MathRenderer text={sub.answer} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="text-right text-[11px] text-slate-500 font-mono font-semibold">
                      মোট নম্বর: ১ + ২ + ৩ + ৪ = ১০
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Answer Key & OMR Sheet Simulation Drawer (Visible when toggled) */}
            {demoType === "mcq" && showAnswerKey && (
              <div className="mt-8 p-5 bg-slate-900 text-white rounded-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-sm text-slate-200">
                      স্বয়ংক্রিয় ওএমআর ও উত্তরমালা টেবিল (সেট {setCodeLabels[activeSet]})
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    ১০০% নির্ভুল স্বয়ংক্রিয় সমাধানমালা
                  </span>
                </div>

                {/* OMR Row Simulation */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {currentMcq.map((q, idx) => {
                    const letters = ["ক", "খ", "গ", "ঘ"];
                    return (
                      <div key={idx} className="bg-slate-800 p-2.5 rounded-lg border border-slate-700 text-center">
                        <div className="text-xs text-slate-400 mb-1.5 font-bold">
                          প্রশ্ন {q.no}
                        </div>
                        <div className="flex justify-center gap-1.5">
                          {letters.map((letStr, lIdx) => (
                            <span
                              key={lIdx}
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                                q.correct === lIdx
                                  ? "bg-emerald-500 text-slate-950 ring-2 ring-emerald-300"
                                  : "border border-slate-600 text-slate-400"
                              }`}
                            >
                              {letStr}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Paper Bottom Footer Note */}
            <div className="mt-8 pt-4 border-t-2 border-slate-900 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>বোর্ড স্ট্যান্ডার্ড ২-কলাম স্প্লিট, KaTeX ম্যাট্রিক্স ও শতভাগ নকলমুক্ত ৪-সেট শাফলিং</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`${APP_URL}/register`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>এমন বোর্ড প্রশ্ন তৈরি করুন</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
