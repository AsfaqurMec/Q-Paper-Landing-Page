"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Download,
  Shuffle,
  Sigma,
  SplitSquareVertical,
  Layers,
  ChevronDown,
  ShieldCheck,
  MousePointerClick,
  FileText,
  Printer,
  Check,
  SlidersHorizontal,
  BookmarkCheck
} from "lucide-react";
import { APP_URL } from "@/lib/utils";
import { MathRenderer } from "@/components/math-renderer";

export function Hero() {
  const [mockSet, setMockSet] = useState<"A" | "B">("A");

  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50/60">
      {/* Background Grid Pattern & Ambient Atmospheric Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0596690a_1px,transparent_1px),linear-gradient(to_bottom,#0596690a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-emerald-400/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-[420px] h-[420px] bg-teal-400/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-5 w-[380px] h-[380px] bg-indigo-400/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        {/* Animated Pill Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-[11px] sm:text-sm font-bold shadow-xs hover:scale-105 transition-all duration-300 max-w-full">
          {/* <span className="flex h-2 w-2 relative shrink-0">
           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span> 
           <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span> 
            
          </span> */}
          <Sparkles className="w-3.5 h-3.5 text-emerald-700 animate-spin-slow shrink-0" />
          {/* <span className="bg-emerald-600 text-white text-[10px] sm:text-[11px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            সংস্করণ ২.৫
          </span> */}
          <span className="truncate">
            বাংলাদেশের ১ম এআই প্রশ্নপত্র জেনারেটর
          </span>
          <Sparkles className="w-3.5 h-3.5 text-emerald-700 animate-spin-slow shrink-0" />
        </div>

        {/* Main Headline */}
        <h1 className="mt-5 sm:mt-7 text-[25px] xs:text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-normal leading-[1.32] sm:leading-[1.24] max-w-5xl mx-auto">
          <span className="block mb-1 sm:mb-2 text-slate-900">টাইপিংয়ের ক্লান্তি চিরতরে ভুলে যান</span>
          <span className="text-gradient-hero bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600">
            মাত্র ৩ মিনিটে তৈরি করুন
          </span>{" "}
          <span className="text-slate-900">বোর্ড স্ট্যান্ডার্ড প্রশ্নপত্র!</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
          হাজারো শিক্ষক ও শীর্ষ প্রতিষ্ঠানের বিশ্বস্ত প্ল্যাটফর্ম। NCTB কারিকুলামের ৩,২০০+ প্রশ্নব্যাংক, স্বয়ংক্রিয় ৪ সেট (A, B, C, D) শাফলিং, নিখুঁত KaTeX সমীকরণ ও ২-কলাম স্প্লিট লেআউটে ১-ক্লিকে ওয়ার্ড (.docx) ও পিডিএফ এক্সপোর্ট।
        </p>

        {/* Call to Actions */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href={`${APP_URL}/register`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/35 active:scale-[0.98] transition-all duration-200 group"
          >
            <span>বিনামূল্যে ট্রায়াল শুরু করুন</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition duration-200" />
          </a>

          <a
            href="#live-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border-2 border-slate-200/90 shadow-xs hover:border-emerald-400 hover:text-emerald-800 active:scale-[0.98] transition-all duration-200"
          >
            <MousePointerClick className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>লাইভ প্রিভিউ ডেমো দেখুন</span>
            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
          </a>
        </div>

        {/* Trust Badges - 2-col on mobile, flex on desktop */}
        <div className="mt-7 sm:mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap items-center justify-center sm:gap-6 text-xs sm:text-sm text-slate-700 font-semibold max-w-lg sm:max-w-none mx-auto text-left sm:text-center">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/70 shadow-2xs sm:shadow-none">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">ক্রেডিট কার্ড লাগবে না</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/70 shadow-2xs sm:shadow-none">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">২-কলাম বোর্ড লেআউট</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/70 shadow-2xs sm:shadow-none">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">৪ সেট শাফলিং ও OMR</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/70 shadow-2xs sm:shadow-none">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">bKash/Nagad পেমেন্ট</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* REDESIGNED HYPER-REALISTIC SAAS STUDIO MOCKUP CARD              */}
        {/* ============================================================== */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Multi-layered ambient aura glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-indigo-500/20 rounded-[32px] blur-3xl opacity-80 pointer-events-none" />

          {/* Floating Feature Badges (Desktop) */}
          <div className="hidden lg:block absolute -left-8 top-12 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/90 text-left z-20 hover:scale-105 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shadow-xs">
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">৩ মিনিটে সম্পূর্ণ প্রশ্নপত্র</div>
                <div className="text-[11px] text-emerald-700 font-semibold">এআই র্যান্ডম সিলেক্টর</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-8 top-16 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/90 text-left z-20 hover:scale-105 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shadow-xs">
                <Shuffle className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">৪ সেট শাফলিং (A, B, C, D)</div>
                <div className="text-[11px] text-indigo-700 font-semibold">১০০% নকলমুক্ত পরীক্ষা</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -left-6 bottom-10 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/90 text-left z-20 hover:scale-105 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold shadow-xs">
                <Sigma className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">KaTeX ম্যাথ ও সায়েন্স</div>
                <div className="text-[11px] text-teal-700 font-semibold">ম্যাট্রিক্স ও নিখুঁত সমীকরণ</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-6 bottom-10 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/90 text-left z-20 hover:scale-105 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold shadow-xs">
                <Download className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">PDF ও Word (.docx)</div>
                <div className="text-[11px] text-amber-700 font-semibold">প্রতিষ্ঠানের লোগো ও নাম সহ</div>
              </div>
            </div>
          </div>

          {/* Software Window Shell */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-300 shadow-2xl overflow-hidden text-left">
            {/* Window title bar (Dark Mac Style Chrome) */}
            <div className="bg-slate-900 text-white px-3 sm:px-5 py-2.5 sm:py-3.5 flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-b border-slate-800">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500 inline-block shadow-xs"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 inline-block shadow-xs"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 inline-block shadow-xs"></span>
                </div>
                <div className="h-3.5 w-px bg-slate-700 mx-0.5 sm:mx-1"></div>
                <span className="font-bold text-xs sm:text-sm text-slate-200 flex items-center gap-1.5 sm:gap-2">
                  <span>Q-paper Studio</span>
                  <span className="text-slate-500 hidden xs:inline">/</span>
                  <span className="text-slate-400 font-normal hidden xs:inline truncate max-w-[150px] sm:max-w-none">এসএসসি মডেল টেস্ট ২০২৬</span>
                </span>
              </div>

              {/* Status and quick export badges */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>স্বয়ংক্রিয় সেভড</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg text-[11px] text-slate-300 font-mono">
                  <span>A4 • ২-কলাম স্প্লিট</span>
                </div>
              </div>
            </div>

            {/* Studio Workspace: Left Control Bar + Right Realistic Paper */}
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-100/70 border-b border-slate-200">
              {/* Left Configuration Strip (4 cols on lg) */}
              <div className="lg:col-span-4 p-3.5 sm:p-6 bg-slate-50/90 border-b lg:border-b-0 lg:border-r border-slate-200/90 space-y-3.5 sm:space-y-5">
                {/* Active Exam Pill */}
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    নির্বাচিত বিষয় ও শ্রেণি
                  </div>
                  <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                    <div>
                      <div className="text-xs font-black text-slate-900">উচ্চতর গণিত ও বিজ্ঞান</div>
                      <div className="text-[10px] sm:text-[11px] text-emerald-700 font-bold">নবম-দশম শ্রেণি (SSC)</div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                      কোড: ১২৬
                    </span>
                  </div>
                </div>

                {/* Progress / Status */}
                <div className="bg-white p-2.5 sm:p-3.5 rounded-xl border border-slate-200 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-700">প্রশ্নপত্র প্রস্তুতি:</span>
                    <span className="text-emerald-700 font-mono">২৫ / ২৫ প্রশ্ন প্রস্তুত</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 sm:h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full w-full"></div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 pt-0.5">
                    <span>পূর্ণমান: ২৫</span>
                    <span>সময়: ২৫ মিনিট</span>
                  </div>
                </div>

                {/* Set Selector Toggle */}
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-slate-600">
                    <span>শাফলিং সেট টেস্ট:</span>
                    <span className="text-emerald-700 font-semibold">৪টি সেট প্রস্তুত</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setMockSet("A")}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 min-h-[40px] transition ${
                        mockSet === "A"
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <Shuffle className="w-3 h-3" />
                      <span>সেট ক (A)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMockSet("B")}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 min-h-[40px] transition ${
                        mockSet === "B"
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <Shuffle className="w-3 h-3" />
                      <span>সেট খ (B)</span>
                    </button>
                  </div>
                </div>

                {/* Print Layout Feature Pill */}
                <div className="p-2.5 sm:p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-xl space-y-1 text-xs">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold">
                    <SplitSquareVertical className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>২-কলাম বোর্ড লেআউট সক্রিয়</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-emerald-800 leading-normal">
                    কাগজ ও ফটোকপি খরচ প্রায় ৪০% সাশ্রয় করে প্রতিষ্ঠানের বাজেট বাঁচায়।
                  </p>
                </div>

                {/* Export Action Buttons */}
                <div className="pt-0.5 sm:pt-1 flex flex-col gap-2">
                  <a
                    href="#live-demo"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-sm min-h-[42px] transition"
                  >
                    <MousePointerClick className="w-3.5 h-3.5 text-emerald-400" />
                    <span>লাইভ পেপার এডিটর খুলুন</span>
                  </a>
                </div>
              </div>

              {/* Right Paper Canvas Preview (8 cols on lg) */}
              <div className="lg:col-span-8 p-2.5 sm:p-6 flex justify-center items-center bg-slate-200/50">
                {/* Miniature Realistic A4 Paper Sheet */}
                <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-slate-300/80 p-3.5 sm:p-7 text-slate-900 font-sans relative">
                  {/* Subtle Paper Monogram Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] select-none rotate-[-25deg]">
                    <span className="text-7xl font-black text-slate-900 tracking-widest uppercase">
                      Q-PAPER
                    </span>
                  </div>

                  {/* School Exam Header */}
                  <div className="text-center border-b-2 border-slate-900 pb-3 mb-4">
                    <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                      মতিঝিল আইডিয়াল স্কুল অ্যান্ড কলেজ, ঢাকা
                    </div>
                    <div className="text-xs sm:text-sm font-black text-slate-900 mt-0.5">
                      এসএসসি নির্বাচনী পরীক্ষা — ২০২৬
                    </div>
                    <div className="flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] text-slate-800 font-semibold mt-2 pt-1.5 border-t border-slate-200 gap-y-1">
                      <span>বিষয়: উচ্চতর গণিত</span>
                      <span className="bg-slate-900 text-white px-2 py-0.5 rounded font-black">
                        সেট: {mockSet === "A" ? "ক (A)" : "খ (B)"}
                      </span>
                      <span>সময়: ২৫ মিনিট</span>
                      <span>পূর্ণমান: ২৫</span>
                    </div>
                  </div>

                  {/* Two-Column Mockup Questions with Real KaTeX */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-xs">
                    {/* Column 1 */}
                    <div className="space-y-3 sm:pr-4">
                      {mockSet === "A" ? (
                        <>
                          {/* Q1: Polynomial */}
                          <div className="space-y-1">
                            <div className="font-bold text-slate-900 leading-snug">
                              <span className="text-emerald-700 font-black mr-1">১.</span>
                              <MathRenderer text="যদি $f(x) = x^3 - 3x^2 + 4$ হয়, তবে $f(-1)$ = ?" />
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 font-medium pt-0.5">
                              <div>(ক) -১</div>
                              <div className="font-bold text-emerald-800 bg-emerald-50 px-1 rounded">(খ) ০ ✓</div>
                              <div>(গ) ২</div>
                              <div>(ঘ) ৪</div>
                            </div>
                          </div>

                          {/* Q2: Matrix */}
                          <div className="space-y-1 pt-2 border-t border-slate-100">
                            <div className="font-bold text-slate-900 leading-snug">
                              <span className="text-emerald-700 font-black mr-1">২.</span>
                              <span>নিচের কোনটি ব্যতিক্রমী ম্যাট্রিক্স?</span>
                            </div>
                            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded text-center my-1">
                              <MathRenderer text="$$A = \begin{bmatrix} 2 & 4 \\ 3 & 6 \end{bmatrix}$$" as="div" />
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 font-medium">
                              <div className="font-bold text-emerald-800 bg-emerald-50 px-1 rounded">(ক) |A| = 0 ✓</div>
                              <div>(খ) |A| ≠ 0</div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Shuffled: Matrix is now Q1 in Set B! */}
                          <div className="space-y-1">
                            <div className="font-bold text-slate-900 leading-snug">
                              <span className="text-emerald-700 font-black mr-1">১.</span>
                              <span>নিচের কোনটি ব্যতিক্রমী ম্যাট্রিক্স?</span>
                            </div>
                            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded text-center my-1">
                              <MathRenderer text="$$A = \begin{bmatrix} 2 & 4 \\ 3 & 6 \end{bmatrix}$$" as="div" />
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 font-medium">
                              <div>(ক) একক ম্যাট্রিক্স</div>
                              <div className="font-bold text-emerald-800 bg-emerald-50 px-1 rounded">(খ) |A| = 0 ✓</div>
                            </div>
                          </div>

                          {/* Q2 in Set B: Physics */}
                          <div className="space-y-1 pt-2 border-t border-slate-100">
                            <div className="font-bold text-slate-900 leading-snug">
                              <span className="text-emerald-700 font-black mr-1">২.</span>
                              <MathRenderer text="খাড়া উপরের দিকে $40\text{ m/s}$ বেগে নিক্ষিপ্ত বস্তুর সর্বোচ্চ উচ্চতায় পৌঁছানোর সময়?" />
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 font-medium pt-0.5">
                              <div className="font-bold text-emerald-800 bg-emerald-50 px-1 rounded">(ক) 4.08 s ✓</div>
                              <div>(খ) 2.04 s</div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-3 sm:pl-4 pt-3 sm:pt-0">
                      {mockSet === "A" ? (
                        <>
                          {/* Q3: Physics */}
                          <div className="space-y-1">
                            <div className="font-bold text-slate-900 leading-snug">
                              <span className="text-emerald-700 font-black mr-1">৩.</span>
                              <MathRenderer text="খাড়া উপরের দিকে $40\text{ m/s}$ বেগে নিক্ষিপ্ত বস্তুর সর্বোচ্চ উচ্চতায় পৌঁছানোর সময়?" />
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 font-medium pt-0.5">
                              <div>(ক) 2.04 s</div>
                              <div>(খ) 3.12 s</div>
                              <div className="font-bold text-emerald-800 bg-emerald-50 px-1 rounded">(গ) 4.08 s ✓</div>
                              <div>(ঘ) 5.16 s</div>
                            </div>
                          </div>

                          {/* Q4: Logarithm */}
                          <div className="space-y-1 pt-2 border-t border-slate-100">
                            <div className="font-bold text-slate-900 leading-snug">
                              <span className="text-emerald-700 font-black mr-1">৪.</span>
                              <MathRenderer text="যদি $\log_2(x - 1) = 3$ হয়, তবে $x$ = ?" />
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 font-medium pt-0.5">
                              <div>(ক) ৭</div>
                              <div>(খ) ৮</div>
                              <div className="font-bold text-emerald-800 bg-emerald-50 px-1 rounded">(গ) ৯ ✓</div>
                              <div>(ঘ) ১০</div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Q3 in Set B: Polynomial */}
                          <div className="space-y-1">
                            <div className="font-bold text-slate-900 leading-snug">
                              <span className="text-emerald-700 font-black mr-1">৩.</span>
                              <MathRenderer text="যদি $f(x) = x^3 - 3x^2 + 4$ হয়, তবে $f(-1)$ = ?" />
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 font-medium pt-0.5">
                              <div className="font-bold text-emerald-800 bg-emerald-50 px-1 rounded">(ক) ০ ✓</div>
                              <div>(খ) -১</div>
                              <div>(গ) ৪</div>
                              <div>(ঘ) ২</div>
                            </div>
                          </div>

                          {/* Q4 in Set B: Logarithm */}
                          <div className="space-y-1 pt-2 border-t border-slate-100">
                            <div className="font-bold text-slate-900 leading-snug">
                              <span className="text-emerald-700 font-black mr-1">৪.</span>
                              <MathRenderer text="যদি $\log_2(x - 1) = 3$ হয়, তবে $x$ = ?" />
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 font-medium pt-0.5">
                              <div>(ক) ৮</div>
                              <div>(খ) ৭</div>
                              <div className="font-bold text-emerald-800 bg-emerald-50 px-1 rounded">(গ) ৯ ✓</div>
                              <div>(ঘ) ১০</div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Micro Footer on Paper */}
                  <div className="mt-4 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>Q-PAPER PRINT ENGINE</span>
                    <span>PAGE 1 OF 1</span>
                    <span>NCTB STANDARD 2-COL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar inside Window */}
            <div className="bg-slate-900 text-slate-300 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-medium">
                  স্বয়ংক্রিয়ভাবে সাজানো প্রশ্নপত্রে রয়েছে সম্পূর্ণ উত্তরমালা ও ওএমআর প্রিন্ট সুবিধা।
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#live-demo"
                  className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1"
                >
                  <span>নিচে সম্পূর্ণ পেপার টেস্ট করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
