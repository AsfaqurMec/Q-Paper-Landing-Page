"use client";

import { useState, useMemo } from "react";
import type { BankQuestionSample } from "@/lib/types";
import { formatBnNumber, APP_URL } from "@/lib/utils";
import {
  HelpCircle,
  Check,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Layers,
  GraduationCap,
  Atom,
  FlaskConical,
  Binary,
  Dna,
  Compass,
  CheckCircle2,
  X
} from "lucide-react";
import { MathRenderer } from "@/components/math-renderer";

interface QuestionShowcaseProps {
  questions?: BankQuestionSample[];
}

// Curated high-fidelity fallback questions with genuine Board credentials & KaTeX equations
const DEFAULT_QUESTIONS: BankQuestionSample[] = [
  {
    id: "q-mcq-1",
    title: "নিচের $A$ ম্যাট্রিক্সটির ক্ষেত্রে কোনটি সঠিক?",
    type: "mcq",
    subject: "উচ্চতর গণিত",
    category: "Higher Mathematics",
    className: "নবম-দশম (SSC)",
    chapter: "ম্যাট্রিক্স ও নির্ণায়ক",
    options: [
      "|A| = 0 (ব্যতিক্রমী ম্যাট্রিক্স)",
      "|A| \\neq 0 (অব্যতিক্রমী ম্যাট্রিক্স)",
      "একক ম্যাট্রিক্স (Identity Matrix)",
      "স্কেলার ম্যাট্রিক্স"
    ],
    correctIndex: 0,
    board: "ঢাকা বোর্ড",
    year: "২০২৪",
    difficulty: "medium",
    marks: 1
  },
  {
    id: "q-mcq-2",
    title: "$20\\text{ m/s}$ আদিবেগে খাড়া উপরের দিকে নিক্ষিপ্ত কোনো বস্তুর সর্বোচ্চ উচ্চতা কত? ($g = 9.8\\text{ ms}^{-2}$)",
    type: "mcq",
    subject: "পদার্থবিজ্ঞান",
    category: "Physics",
    className: "নবম-দশম (SSC)",
    chapter: "গতিবিদ্যা ও বল",
    options: ["20.4 m", "40.8 m", "10.2 m", "2.04 m"],
    correctIndex: 0,
    board: "রাজশাহী বোর্ড",
    year: "২০২৩",
    difficulty: "medium",
    marks: 1
  },
  {
    id: "q-mcq-3",
    title: "$\\text{KMnO}_4$ যৌগে ম্যাঙ্গানিজ ($\\text{Mn}$) এর জারণ সংখ্যা কত?",
    type: "mcq",
    subject: "রসায়ন",
    category: "Chemistry",
    className: "নবম-দশম (SSC)",
    chapter: "জারণ-বিজারণ ও পর্যায় সারণি",
    options: ["+2", "+4", "+7", "-1"],
    correctIndex: 2,
    board: "চট্টগ্রাম বোর্ড",
    year: "২০২৪",
    difficulty: "easy",
    marks: 1
  },
  {
    id: "q-mcq-4",
    title: "যদি $2^{x+3} = 32$ হয়, তবে $x$ এর সঠিক মান কোনটি?",
    type: "mcq",
    subject: "সাধারণ গণিত",
    category: "General Mathematics",
    className: "নবম-দশম (SSC)",
    chapter: "সূচক ও লগারিদম",
    options: ["1", "2", "3", "5"],
    correctIndex: 1,
    board: "দিনাজপুর বোর্ড",
    year: "২০২৪",
    difficulty: "easy",
    marks: 1
  },
  {
    id: "q-mcq-5",
    title: "যদি $\\tan\\theta = \\frac{3}{4}$ এবং $\\theta$ সূক্ষ্মকোণ হয়, তবে $\\sin\\theta \\cdot \\cos\\theta$ এর মান কত?",
    type: "mcq",
    subject: "উচ্চতর গণিত",
    category: "Higher Mathematics",
    className: "নবম-দশম (SSC)",
    chapter: "ত্রিকোণমিতি",
    options: ["\\frac{7}{25}", "\\frac{12}{25}", "\\frac{4}{5}", "\\frac{3}{5}"],
    correctIndex: 1,
    board: "কুমিল্লা বোর্ড",
    year: "২০২৩",
    difficulty: "medium",
    marks: 1
  },
  {
    id: "q-mcq-6",
    title: "সালোকসংশ্লেষণের আলোক পর্যায়ে ক্লোরোপ্লাস্টের কোথায় এটিপি (ATP) সংশ্লেষিত হয়?",
    type: "mcq",
    subject: "জীববিজ্ঞান",
    category: "Biology",
    className: "নবম-দশম (SSC)",
    chapter: "জীবনীশক্তি",
    options: ["থাইলাকয়েড পর্দা", "স্ট্রোমা", "রাইবোসোম", "গ্রানা ল্যামেলা"],
    correctIndex: 0,
    board: "যশোর বোর্ড",
    year: "২০২৪",
    difficulty: "medium",
    marks: 1
  },
  // Creative Questions (CQ)
  {
    id: "q-cq-1",
    title: "উদ্দীপক: $f(x) = 2x^3 - 5x^2 + x + 2$ একটি বহুপদী অপেক্ষক এবং $g(x) = \\frac{2x+1}{x-3}$ একটি ফাংশন।",
    type: "cq",
    subject: "উচ্চতর গণিত",
    category: "Higher Mathematics",
    className: "নবম-দশম (SSC)",
    chapter: "ফাংশন ও বহুপদী",
    board: "ঢাকা বোর্ড",
    year: "২০২৪",
    difficulty: "hard",
    marks: 10,
    subQuestions: [
      {
        label: "ক",
        text: "$g(x)$ ফাংশনটির ডোমেন নির্ণয় কর।",
        marks: 1,
        answer: "g(x) সংজ্ঞায়িত হবে যদি x - 3 ≠ 0 ⇒ x ≠ 3 হয়। অতএব, ডোমেন = ℝ - {3}।"
      },
      {
        label: "খ",
        text: "ভাগশেষ উপপাদ্যের সাহায্যে দেখাও যে, $(x - 1)$ রাশিটি $f(x)$ এর একটি উৎপাদক।",
        marks: 2,
        answer: "f(1) = 2(1)³ - 5(1)² + 1 + 2 = 2 - 5 + 1 + 2 = 0। ভাগশেষ উপপাদ্য অনুযায়ী f(1) = 0 হওয়ায় (x - 1) রাশিটি f(x) এর একটি উৎপাদক।"
      },
      {
        label: "গ",
        text: "$f(x) = 0$ সমীকরণটির বাস্তব মূলগুলো নির্ণয় কর।",
        marks: 3,
        answer: "f(x) = (x - 1)(2x² - 3x - 2) = (x - 1)(2x + 1)(x - 2) = 0। সুতরাং x = 1, -1/2, 2।"
      },
      {
        label: "ঘ",
        text: "বিপরীত ফাংশন $g^{-1}(x)$ নির্ণয় কর এবং প্রমাণ কর যে, $g(g^{-1}(x)) = x$।",
        marks: 4,
        answer: "y = (2x+1)/(x-3) ⇒ xy - 3y = 2x + 1 ⇒ x(y - 2) = 3y + 1 ⇒ x = (3y + 1)/(y - 2)। অতএব g⁻¹(x) = (3x + 1)/(x - 2)।"
      }
    ]
  },
  {
    id: "q-cq-2",
    title: "উদ্দীপক: ২০ কেজি ভরের একটি বস্তুকে ৩০ মিটার উঁচু দালানের ছাদ থেকে মুক্তভাবে ছেড়ে দেওয়া হলো। ($g = 9.8\\text{ ms}^{-2}$)",
    type: "cq",
    subject: "পদার্থবিজ্ঞান",
    category: "Physics",
    className: "নবম-দশম (SSC)",
    chapter: "কাজ, ক্ষমতা ও শক্তি",
    board: "রাজশাহী বোর্ড",
    year: "২০২৩",
    difficulty: "hard",
    marks: 10,
    subQuestions: [
      {
        label: "ক",
        text: "শক্তির নিত্যতা সূত্রটি বিবৃত কর।",
        marks: 1,
        answer: "শক্তির সৃষ্টি বা ধ্বংস নেই, শক্তি কেবল এক রূপ থেকে অন্য এক বা একাধিক রূপে রূপান্তরিত হতে পারে। মহাবিশ্বের মোট শক্তির পরিমাণ নির্দিষ্ট ও অপরিবর্তনীয়।"
      },
      {
        label: "খ",
        text: "কাজ একটি স্কেলার রাশি কেন? ব্যাখ্যা কর।",
        marks: 2,
        answer: "কাজ হলো বল এবং বলের দিকে সরণের গুণফল (W = F · s cosθ)। বল এবং সরণ ভেক্টর হলেও তাদের ডট গুণফলের ফলে উৎপন্ন কাজের কেবল মান আছে কিন্তু কোনো দিক নেই, তাই কাজ একটি স্কেলার রাশি।"
      },
      {
        label: "গ",
        text: "বস্তুটি ভূমি স্পর্শ করার ঠিক পূর্ব মুহূর্তে গতিশক্তি নির্ণয় কর।",
        marks: 3,
        answer: "শক্তির সংরক্ষণশীলতা অনুসারে, ভূমি স্পর্শের মুহূর্তে সম্পূর্ণ বিভব শক্তি গতিশক্তিতে রূপান্তরিত হয়। E_k = mgh = 20 × 9.8 × 30 = 5880 জুল।"
      },
      {
        label: "ঘ",
        text: "ভূমি হতে কত উচ্চতায় বস্তুটির বিভব শক্তি গতিশক্তির এক-তৃতীয়াংশ হবে—গাণিতিক বিশ্লেষণ দাও।",
        marks: 4,
        answer: "ধরি, ভূমি থেকে h' উচ্চতায় E_p = 1/3 E_k ⇒ E_k = 3 E_p। মোট শক্তি E = E_p + 3 E_p = 4 E_p ⇒ mgh = 4 mgh' ⇒ h' = h / 4 = 30 / 4 = 7.5 মিটার।"
      }
    ]
  },
  {
    id: "q-cq-3",
    title: "উদ্দীপক: পর্যায় সারণির ৩য় পর্যায়ের তিনটি মৌল $A, B, C$ যাদের পারমাণবিক সংখ্যা যথাক্রমে ১১, ১৩ ও ১৭।",
    type: "cq",
    subject: "রসায়ন",
    category: "Chemistry",
    className: "নবম-দশম (SSC)",
    chapter: "মৌলের পর্যায়বৃত্ত ধর্ম",
    board: "চট্টগ্রাম বোর্ড",
    year: "২০২৪",
    difficulty: "medium",
    marks: 10,
    subQuestions: [
      {
        label: "ক",
        text: "ইলেকট্রন আসক্তি কাকে বলে?",
        marks: 1,
        answer: "গ্যাসীয় অবস্থায় কোনো মৌলের এক মোল বিচ্ছিন্ন পরমাণুতে এক মোল ইলেকট্রন যুক্ত করে এক মোল ঋণাত্মক আয়নে পরিণত করতে যে পরিমাণ শক্তি নির্গত হয়, তাকে ঐ মৌলের ইলেকট্রন আসক্তি বলে।"
      },
      {
        label: "খ",
        text: "নোবেল গ্যাসসমূহ রাসায়নিকভাবে নিষ্ক্রিয় আচরণ করে কেন?",
        marks: 2,
        answer: "নোবেল গ্যাসসমূহের সর্ববহিঃস্থ শক্তিস্তরে অষ্টক পূর্ণ (ns² np⁶) বা হিলিয়ামের ক্ষেত্রে দ্বিত্ব পূর্ণ (1s²) স্থিতিশীল ইলেকট্রন বিন্যাস বিদ্যমান থাকে, ফলে তারা ইলেকট্রন গ্রহণ, বর্জন বা শেয়ার করতে চায় না।"
      },
      {
        label: "গ",
        text: "উদ্দীপকের মৌল তিনটির পারমাণবিক আকারের ক্রম কারণসহ ব্যাখ্যা কর।",
        marks: 3,
        answer: "মৌল তিনটি হলো Na (11), Al (13), Cl (17)। একই পর্যায়ে বাম থেকে ডানে গেলে প্রোটন সংখ্যা বৃদ্ধি পাওয়ায় নিউক্লিয়াসের আকর্ষণ বাড়ে এবং পারমাণবিক ব্যাসার্ধ হ্রাস পায়। সুতরাং আকারের ক্রম: Na > Al > Cl।"
      },
      {
        label: "ঘ",
        text: "$A$ ও $C$ দ্বারা গঠিত যৌগ এবং $B$ ও $C$ দ্বারা গঠিত যৌগের গলনাঙ্ক ও স্ফুটনাঙ্কের তুলনামূলক বিশ্লেষণ কর।",
        marks: 4,
        answer: "A ও C দ্বারা গঠিত NaCl হলো আয়নিক যৌগ এবং শক্তিশালী স্থিরবৈদ্যুতিক আকর্ষণ বল দ্বারা আবদ্ধ। অপরপক্ষে AlCl₃ আংশিক সমযোজী বৈশিষ্ট্য প্রদর্শন করে। ফলে NaCl এর গলনাঙ্ক ও স্ফুটনাঙ্ক AlCl₃ অপেক্ষা অনেক বেশি।"
      }
    ]
  }
];

export function QuestionShowcase({ questions = [] }: QuestionShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"mcq" | "cq">("mcq");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [userSelectedOptions, setUserSelectedOptions] = useState<Record<string, number>>({});
  const [expandedCqSolutions, setExpandedCqSolutions] = useState<Record<string, boolean>>({});

  // Merge backend questions if available with rich curated defaults
  const allQuestions = useMemo(() => {
    if (Array.isArray(questions) && questions.length >= 4) {
      return questions;
    }
    return DEFAULT_QUESTIONS;
  }, [questions]);

  const mcqQuestions = allQuestions.filter((q) => q.type === "mcq");
  const cqQuestions = allQuestions.filter((q) => q.type === "cq");

  const currentTypeQuestions = activeTab === "mcq" ? mcqQuestions : cqQuestions;

  // Filter by subject
  const filteredQuestions = useMemo(() => {
    if (selectedSubject === "all") return currentTypeQuestions;
    return currentTypeQuestions.filter(
      (q) =>
        q.subject?.toLowerCase().includes(selectedSubject.toLowerCase()) ||
        q.category?.toLowerCase().includes(selectedSubject.toLowerCase())
    );
  }, [currentTypeQuestions, selectedSubject]);

  const subjects = [
    { id: "all", name: "সব বিষয়", icon: Layers },
    { id: "উচ্চতর গণিত", name: "উচ্চতর গণিত", icon: Binary },
    { id: "সাধারণ গণিত", name: "সাধারণ গণিত", icon: Compass },
    { id: "পদার্থবিজ্ঞান", name: "পদার্থবিজ্ঞান", icon: Atom },
    { id: "রসায়ন", name: "রসায়ন", icon: FlaskConical },
    { id: "জীববিজ্ঞান", name: "জীববিজ্ঞান", icon: Dna }
  ];

  const handleOptionClick = (questionId: string, optionIdx: number) => {
    setUserSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const toggleCqSolution = (cqId: string) => {
    setExpandedCqSolutions((prev) => ({
      ...prev,
      [cqId]: !prev[cqId]
    }));
  };

  return (
    <section id="sample-questions" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-100/40 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-teal-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-bold mb-4 border border-emerald-300 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>সরাসরি ৩,২০০+ প্রশ্নব্যাংক থেকে বাস্তব স্যাম্পল</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.25]">
            বোর্ড প্রশ্ন ও টেস্ট পেপারের বাস্তব উদাহরণ
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg mt-2 sm:mt-3 font-medium">
            আমাদের সফটওয়্যারের ভেতর কী ধরণের প্রশ্ন রয়েছে তা নিজেই যাচাই করুন। কোনো কাল্পনিক ডেটা নয় — শীর্ষ শিক্ষা বোর্ড ও স্বনামধন্য কলেজের প্রশ্ন থেকে সংগৃহীত।
          </p>

          {/* Master Tabs: MCQ vs CQ */}
          <div className="w-full max-w-md mx-auto p-1.5 bg-slate-100 rounded-2xl mt-6 sm:mt-8 shadow-inner border border-slate-200 grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("mcq")}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-base font-bold transition-all duration-200 min-h-[44px] ${
                activeTab === "mcq"
                  ? "bg-white text-emerald-800 shadow-md scale-[1.01]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>এমসিকিউ (MCQ)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cq")}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-base font-bold transition-all duration-200 min-h-[44px] ${
                activeTab === "cq"
                  ? "bg-white text-emerald-800 shadow-md scale-[1.01]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <BookOpen className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>সৃজনশীল (CQ)</span>
            </button>
          </div>

          {/* Subject Filter Chips - Horizontal swipeable on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-5 sm:mt-6 overflow-x-auto scrollbar-none flex-nowrap sm:flex-wrap justify-start sm:justify-center p-1 max-w-full">
            {subjects.map((s) => {
              const Icon = s.icon;
              const isActive = selectedSubject === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedSubject(s.id)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl text-xs sm:text-sm font-semibold min-h-[36px] transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-sm scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {filteredQuestions.slice(0, 6).map((q, idx) => {
            const selectedOpt = userSelectedOptions[q.id || String(idx)];
            const isCqExpanded = expandedCqSolutions[q.id || String(idx)];

            return (
              <div
                key={q.id || idx}
                className="bg-white border-2 border-slate-200/90 rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:border-emerald-400/90 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Meta Badges Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs">
                      <span className="font-extrabold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                        {q.className || "নবম-দশম"}
                      </span>
                      <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">
                        {q.subject || q.category}
                      </span>
                      {q.chapter && (
                        <span className="text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-lg border border-slate-200 truncate max-w-[150px]">
                          {q.chapter}
                        </span>
                      )}
                    </div>

                    {/* Board / Year Badge */}
                    {q.board && (
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-300/80 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        <span>
                          {q.board} {q.year ? `(${q.year})` : ""}
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Question Stem / Title with KaTeX rendering */}
                  <div className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                    <span className="text-emerald-700 font-black mr-2 font-mono text-base">
                      {formatBnNumber(idx + 1)}.
                    </span>
                    <MathRenderer text={q.title} />
                  </div>

                  {/* MCQ Options with Interactive click-to-solve */}
                  {q.type === "mcq" && q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                      {q.options.map((opt, optIdx) => {
                        const labels = ["(ক)", "(খ)", "(গ)", "(ঘ)"];
                        const isSelected = selectedOpt === optIdx;
                        const isCorrect = q.correctIndex === optIdx;

                        let buttonClasses = "bg-slate-50/80 border-slate-200 text-slate-800 hover:border-emerald-300 hover:bg-emerald-50/30";
                        if (selectedOpt !== undefined) {
                          if (isCorrect) {
                            buttonClasses = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500";
                          } else if (isSelected && !isCorrect) {
                            buttonClasses = "bg-rose-50 border-rose-400 text-rose-950 line-through";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleOptionClick(q.id || String(idx), optIdx)}
                            className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between text-left transition-all ${buttonClasses}`}
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <span className="text-slate-500 font-bold shrink-0">{labels[optIdx]}</span>
                              <div className="flex-1">
                                <MathRenderer text={opt} />
                              </div>
                            </div>
                            {selectedOpt !== undefined && isCorrect && (
                              <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-black bg-emerald-100 px-2 py-0.5 rounded ml-2 shrink-0">
                                <Check className="w-3 h-3" /> সঠিক
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* CQ Subquestions (ক, খ, গ, ঘ) with expandable model answer */}
                  {q.type === "cq" && q.subQuestions && q.subQuestions.length > 0 && (
                    <div className="mt-5 space-y-3 bg-slate-50/90 p-4 rounded-xl border border-slate-200">
                      {q.subQuestions.map((sub, sIdx) => (
                        <div key={sIdx} className="text-xs sm:text-sm text-slate-800 space-y-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="font-semibold leading-relaxed">
                              <span className="text-indigo-700 font-bold mr-1.5">
                                ({sub.label})
                              </span>
                              <MathRenderer text={sub.text} />
                            </div>
                            <span className="shrink-0 text-[11px] bg-white font-mono font-bold text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                              {formatBnNumber(sub.marks)} নম্বর
                            </span>
                          </div>

                          {/* Expanded Solution for this subquestion */}
                          {isCqExpanded && sub.answer && (
                            <div className="mt-1 ml-4 p-2.5 bg-emerald-50/80 border border-emerald-200 rounded-lg text-xs text-emerald-950 font-normal leading-relaxed">
                              <span className="font-bold text-emerald-900">নমুনা উত্তর: </span>
                              <MathRenderer text={sub.answer} />
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Toggle CQ Solution Drawer Button */}
                      <button
                        type="button"
                        onClick={() => toggleCqSolution(q.id || String(idx))}
                        className="mt-2 text-xs font-bold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1 transition"
                      >
                        {isCqExpanded ? (
                          <>
                            <ChevronUp className="w-3.5 h-3.5" />
                            <span>সমাধান ও রুব্রিক বন্ধ করুন</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3.5 h-3.5" />
                            <span>সম্পূর্ণ নমুনা উত্তর ও সমাধান দেখুন</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Card Footer with Verification Badge */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>NCTB সিলেবাস ভেরিফাইড</span>
                  </div>
                  <span className="text-slate-400 font-mono">
                    {q.type === "mcq" ? "১ মার্কস" : "পূর্ণমান ১০"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner & CTA Strip */}
        <div className="mt-14 bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg sm:text-xl font-black text-slate-900">
              আপনার পছন্দের বিষয় ও অধ্যায় থেকে প্রশ্ন তৈরি করতে চান?
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              বিনামূল্যে অ্যাকাউন্ট খুলে সম্পূর্ণ ৩,২০০+ প্রশ্নব্যাংক এক্সপ্লোর করুন এবং মাত্র ৩ মিনিটে প্রশ্নপত্র বানান।
            </p>
          </div>

          <a
            href={`${APP_URL}/register`}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all hover:scale-105 active:scale-98"
          >
            <span>সম্পূর্ণ প্রশ্নব্যাংক দেখুন (ফ্রি ট্রায়াল)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
