"use client";

import { useState } from "react";
import { Printer, Download, Sparkles, Shuffle, CheckCircle, FileText, SplitSquareVertical } from "lucide-react";

export function LiveSamplePaper() {
  const [activeSet, setActiveSet] = useState<"A" | "B">("A");
  const [layout, setLayout] = useState<"split" | "single">("split");

  const questionsSetA = [
    {
      no: "১",
      text: "যদি f(x) = x³ - 3x² + 4 হয়, তবে f(-1) এর মান কত?",
      options: ["-1", "0", "2", "4"],
      ans: "০",
      topic: "উচ্চতর গণিত"
    },
    {
      no: "২",
      text: "নিচের কোন ম্যাট্রিক্সটি ব্যতিক্রমী (Singular)?",
      math: "\\begin{bmatrix} 2 & 4 \\\\ 3 & 6 \\end{bmatrix}",
      options: ["মানের নির্ণায়ক শূন্য", "অব্যতিক্রমী", "একক ম্যাট্রিক্স", "কর্ণ ম্যাট্রিক্স"],
      ans: "ক",
      topic: "ম্যাট্রিক্স ও নির্ণায়ক"
    },
    {
      no: "৩",
      text: "একটি বস্তুকে 40 m/s বেগে খাড়া উপরের দিকে নিক্ষেপ করা হলে সর্বোচ্চ উচ্চতায় পৌঁছাতে কত সময় লাগবে? (g = 9.8 ms⁻²)",
      options: ["2.04 s", "3.12 s", "4.08 s", "5.16 s"],
      ans: "৪.০৮ সেকেন্ড",
      topic: "গতিবিদ্যা"
    },
    {
      no: "৪",
      text: "যদি log₂(x - 1) = 3 হয়, তবে x এর সঠিক মান কোনটি?",
      options: ["7", "8", "9", "10"],
      ans: "৯",
      topic: "লগারিদম"
    }
  ];

  const questionsSetB = [
    {
      no: "১",
      text: "একটি বস্তুকে 40 m/s বেগে খাড়া উপরের দিকে নিক্ষেপ করা হলে সর্বোচ্চ উচ্চতায় পৌঁছাতে কত সময় লাগবে? (g = 9.8 ms⁻²)",
      options: ["4.08 s", "2.04 s", "5.16 s", "3.12 s"],
      ans: "৪.০৮ সেকেন্ড",
      topic: "গতিবিদ্যা"
    },
    {
      no: "২",
      text: "যদি log₂(x - 1) = 3 হয়, তবে x এর সঠিক মান কোনটি?",
      options: ["8", "9", "7", "10"],
      ans: "৯",
      topic: "লগারিদম"
    },
    {
      no: "৩",
      text: "যদি f(x) = x³ - 3x² + 4 হয়, তবে f(-1) এর মান কত?",
      options: ["0", "-1", "4", "2"],
      ans: "০",
      topic: "উচ্চতর গণিত"
    },
    {
      no: "৪",
      text: "নিচের কোন ম্যাট্রিক্সটি ব্যতিক্রমী (Singular)?",
      math: "\\begin{bmatrix} 2 & 4 \\\\ 3 & 6 \\end{bmatrix}",
      options: ["একক ম্যাট্রিক্স", "মানের নির্ণায়ক শূন্য", "কর্ণ ম্যাট্রিক্স", "অব্যতিক্রমী"],
      ans: "খ",
      topic: "ম্যাট্রিক্স"
    }
  ];

  const currentQuestions = activeSet === "A" ? questionsSetA : questionsSetB;

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Decorative ambient backdrop */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

      {/* Control bar */}
      <div className="relative bg-slate-900 text-white rounded-t-2xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
          </div>
          <span className="font-semibold text-slate-300 ml-2 hidden sm:inline">
            এ৪ বোর্ড স্ট্যান্ডার্ড প্রিভিউ
          </span>
        </div>

        {/* Set switcher */}
        <div className="flex items-center gap-1.5 bg-slate-800/90 p-1 rounded-lg border border-slate-700">
          <span className="text-slate-400 text-[11px] px-1.5 flex items-center gap-1">
            <Shuffle className="w-3 h-3" /> সেট:
          </span>
          <button
            onClick={() => setActiveSet("A")}
            className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition ${
              activeSet === "A"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            সেট ক
          </button>
          <button
            onClick={() => setActiveSet("B")}
            className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition ${
              activeSet === "B"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            সেট খ
          </button>
        </div>

        {/* Layout toggle */}
        <div className="hidden sm:flex items-center gap-1 bg-slate-800/90 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setLayout("split")}
            className={`px-2 py-0.5 rounded text-[11px] flex items-center gap-1 transition ${
              layout === "split"
                ? "bg-slate-700 text-emerald-400 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <SplitSquareVertical className="w-3 h-3" /> ২-কলাম
          </button>
          <button
            onClick={() => setLayout("single")}
            className={`px-2 py-0.5 rounded text-[11px] transition ${
              layout === "single"
                ? "bg-slate-700 text-emerald-400 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ১-কলাম
          </button>
        </div>
      </div>

      {/* Simulated A4 Paper */}
      <div className="relative bg-white border border-slate-200 rounded-b-2xl shadow-2xl p-6 sm:p-8 text-slate-800 overflow-hidden font-sans">
        {/* Subtle Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none rotate-[-25deg]">
          <span className="text-8xl font-black text-slate-900 tracking-wider uppercase">
            Q-PAPER
          </span>
        </div>

        {/* Institution Header */}
        <div className="text-center border-b border-slate-900 pb-3 mb-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            আইডিয়াল স্কুল অ্যান্ড কলেজ, ঢাকা
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
            বার্ষিক মূল্যায়ন পরীক্ষা — ২০২৬
          </p>
          <div className="flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-slate-600 font-medium mt-2 pt-2 border-t border-slate-200">
            <span>শ্রেণি: নবম-দশম (SSC)</span>
            <span>বিষয়: পদার্থবিজ্ঞান ও উচ্চতর গণিত</span>
            <span className="bg-slate-100 font-bold px-2 py-0.5 rounded border border-slate-300 text-emerald-700">
              সেট: {activeSet === "A" ? "ক" : "খ"}
            </span>
            <span>সময়: ২৫ মিনিট</span>
            <span>পূর্ণমান: ২৫</span>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-[11px] text-slate-500 italic mb-4 text-center">
          [বিশেষ নির্দেশ: প্রতিটি প্রশ্নের মান ১। সঠিক উত্তরের বৃত্তটি ওএমআর ফরমে পূরণ কর।]
        </p>

        {/* Question content */}
        <div
          className={`grid gap-4 sm:gap-6 ${
            layout === "split"
              ? "grid-cols-1 sm:grid-cols-2 sm:divide-x sm:divide-slate-200 sm:gap-x-6"
              : "grid-cols-1"
          }`}
        >
          {currentQuestions.map((q, idx) => (
            <div
              key={idx}
              className={`text-xs space-y-2 ${layout === "split" && idx % 2 === 1 ? "sm:pl-6" : ""}`}
            >
              <div className="font-semibold text-slate-900 leading-snug">
                <span className="text-emerald-700 font-bold mr-1.5">{q.no}.</span>
                {q.text}
              </div>

              {/* Math snippet if present */}
              {q.math && (
                <div className="bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-center font-mono text-[11px] text-slate-800">
                  A = [ [2, 4], [3, 6] ]
                </div>
              )}

              {/* MCQ Options */}
              <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-700 pt-1">
                {q.options.map((opt, optIdx) => {
                  const labels = ["(ক)", "(খ)", "(গ)", "(ঘ)"];
                  return (
                    <div
                      key={optIdx}
                      className="flex items-center gap-1.5 p-1 rounded hover:bg-emerald-50 transition"
                    >
                      <span className="font-semibold text-slate-500 text-[10px]">
                        {labels[optIdx]}
                      </span>
                      <span>{opt}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Paper Footer with Instant Actions */}
        <div className="mt-6 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>বোর্ড স্ট্যান্ডার্ড ২-কলাম স্প্লিট লেআউট নিশ্চিত</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-mono text-[10px]">
              Page 1 of 1 (A4)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
