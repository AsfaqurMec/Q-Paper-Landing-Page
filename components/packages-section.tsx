"use client";

import { useState } from "react";
import type { Plan } from "@/lib/types";
import { formatBnNumber, APP_URL } from "@/lib/utils";
import {
  Check,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Zap,
  HelpCircle,
  FileDown,
  Layers,
  Award,
  Lock
} from "lucide-react";

interface PackagesSectionProps {
  plans?: Plan[];
}

export function PackagesSection({ plans = [] }: PackagesSectionProps) {
  // If backend plans are passed, use them; otherwise fallback to default schema
  const planList = Array.isArray(plans) && plans.length > 0 ? plans : [
    {
      code: "free",
      name: "Free",
      price: 0,
      interval: "month",
      paperLimit: 2,
      questionLimit: 30,
      totalQuestionsLimit: 60,
      exports: ["pdf"],
      watermark: true,
      questionBank: false,
      branding: false,
      randomGenerator: false,
      multipleVersions: false,
      importQuestion: false
    },
    {
      code: "small",
      name: "Small",
      price: 100,
      interval: "month",
      paperLimit: 100,
      questionLimit: 50,
      totalQuestionsLimit: 3500,
      exports: ["pdf"],
      watermark: false,
      questionBank: true,
      branding: true,
      randomGenerator: true,
      multipleVersions: true,
      importQuestion: false
    },
    {
      code: "pro",
      name: "Pro",
      price: 500,
      interval: "month",
      paperLimit: 2000,
      questionLimit: 200,
      totalQuestionsLimit: 7000,
      exports: ["pdf"],
      watermark: false,
      questionBank: true,
      branding: true,
      randomGenerator: true,
      multipleVersions: true,
      importQuestion: false
    },
    {
      code: "ultra",
      name: "Ultra",
      price: 1000,
      interval: "month",
      paperLimit: 5000,
      questionLimit: 500,
      totalQuestionsLimit: 15000,
      exports: ["pdf", "docx"],
      watermark: false,
      questionBank: true,
      branding: true,
      randomGenerator: true,
      multipleVersions: true,
      importQuestion: true
    },
    {
      code: "diamond",
      name: "Diamond",
      price: 3500,
      interval: "month",
      paperLimit: 999999,
      questionLimit: 999999,
      totalQuestionsLimit: 999999,
      exports: ["pdf", "docx"],
      watermark: false,
      questionBank: true,
      branding: true,
      randomGenerator: true,
      multipleVersions: true,
      importQuestion: true
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>স্বচ্ছ ও সাশ্রয়ী সাবস্ক্রিপশন প্ল্যান</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            আপনার শিক্ষকতা বা কোচিংয়ের জন্য সেরা প্যাকেজ
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg mt-2 sm:mt-3">
            নতুন <span className="font-extrabold text-emerald-700">Small (স্মল)</span> ও <span className="font-extrabold text-cyan-700">Diamond (ডায়মন্ড)</span> সহ যেকোনো প্ল্যান বেছে নিন। কোনো লুকানো চার্জ নেই, যেকোনো সময় আপগ্রেড সম্ভব।
          </p>

          <div className="inline-flex items-center gap-2 mt-4 sm:mt-6 px-4 py-1.5 bg-slate-100 rounded-full border border-slate-200 text-xs text-slate-600 font-semibold">
            <span>মাসিক সাবস্ক্রিপশন</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">ইনস্ট্যান্ট অ্যাক্টিভেশন</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-3 items-stretch">
          {planList.map((plan) => {
            const isSmall = plan.code === "small";
            const isPro = plan.code === "pro";
            const isUltra = plan.code === "ultra";
            const isDiamond = plan.code === "diamond";
            const isFree = plan.code === "free";

            const checkoutUrl = isFree
              ? `${APP_URL}/register`
              : `${APP_URL}/checkout?plan=${plan.code}`;

            return (
              <div
                key={plan.code}
                className={`relative rounded-3xl p-5 sm:p-6 lg:p-4 flex flex-col justify-between transition-all duration-300 ${
                  isDiamond
                    ? "bg-white border-2 border-cyan-500 shadow-xl shadow-cyan-600/15 ring-4 ring-cyan-500/10 lg:-translate-y-2 z-10"
                    : isSmall
                    ? "bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-600/15 ring-4 ring-emerald-500/10 lg:-translate-y-2 z-10"
                    : "bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300"
                }`}
              >
                {/* Popular Badge for Small Plan */}
                {isSmall && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] sm:text-xs font-black px-4 py-1 rounded-full shadow-md tracking-wide uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>সেরা ভ্যালু</span>
                  </div>
                )}

                {/* Ultra Badge */}
                {isUltra && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] sm:text-xs font-bold px-4 py-1 rounded-full shadow-sm tracking-wide">
                    কোচিং সেন্টারের পছন্দ
                  </div>
                )}

                {/* Diamond Badge */}
                {isDiamond && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-[11px] sm:text-xs font-black px-4 py-1 rounded-full shadow-md tracking-wide uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>আনলিমিটেড সুপার</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 capitalize">
                        {plan.name}
                      </h3>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                        {plan.interval === "month" ? "মাসিক" : plan.interval}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mt-1">
                      {isFree && "সফটওয়্যার পরীক্ষা ও ফ্রি ট্রায়াল"}
                      {isSmall && "ব্যক্তিগত শিক্ষক ও ছোট ব্যাচের জন্য সেরা"}
                      {isPro && "মাঝারি কোচিং ও পূর্ণাঙ্গ শিক্ষাপ্রতিষ্ঠান"}
                      {isUltra && "বড় কোচিং ও ওয়ার্ড (.docx) এক্সপোর্ট"}
                      {isDiamond && "সম্পূর্ণ আনলিমিটেড পেপার ও প্রশ্ন, ভিআইপি"}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1 my-5 pb-5 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                      ৳{formatBnNumber(plan.price)}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      / {plan.interval === "month" ? "মাস" : "মেয়াদ"}
                    </span>
                  </div>

                  {/* Core Capacity Box */}
                  <div className={`rounded-2xl p-4 mb-6 space-y-2.5 ${
                    isDiamond
                      ? "bg-cyan-50/80 border border-cyan-200/80 text-cyan-950"
                      : isSmall
                      ? "bg-emerald-50/80 border border-emerald-200/80 text-emerald-950"
                      : "bg-slate-50 border border-slate-100 text-slate-800"
                  }`}>
                    <div className="flex items-center justify-between text-xs font-black">
                      <span>মোট প্রশ্নপত্র:</span>
                      <span className={isDiamond ? "text-cyan-700 font-extrabold text-sm" : isSmall ? "text-emerald-700 font-extrabold text-sm" : "text-slate-900 font-bold"}>
                        {plan.paperLimit >= 999999 ? "আনলিমিটেড পেপার" : `${formatBnNumber(plan.paperLimit)} টি পেপার`}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-black">
                      <span>সর্বোচ্চ প্রশ্ন লিমিট:</span>
                      <span className={isDiamond ? "text-cyan-700 font-extrabold text-sm" : isSmall ? "text-emerald-700 font-extrabold text-sm" : "text-slate-900 font-bold"}>
                        {plan.totalQuestionsLimit >= 999999 ? "আনলিমিটেড কোটা" : `${formatBnNumber(plan.totalQuestionsLimit)} টি`}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-600 font-medium pt-1 border-t border-slate-200/50">
                      <span>প্রতি পেপারে সর্বোচ্চ:</span>
                      <span>{plan.questionLimit >= 999999 ? "আনলিমিটেড প্রশ্ন" : `${formatBnNumber(plan.questionLimit)} টি প্রশ্ন`}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-semibold text-slate-900">
                        {plan.watermark ? "ওয়াটারমার্ক সহ প্রিভিউ" : "কোনো ওয়াটারমার্ক নেই (ক্লিন)"}
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      {plan.questionBank ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <span className={plan.questionBank ? "font-medium" : "text-slate-400 line-through"}>
                        ৩,২০০+ প্রশ্নব্যাংক ফুল অ্যাক্সেস
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      {plan.randomGenerator ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <span className={plan.randomGenerator ? "font-medium" : "text-slate-400 line-through"}>
                        অটোমেটিক ৩-ক্লিক র্যান্ডম জেনারেটর
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      {plan.branding ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <span className={plan.branding ? "font-medium" : "text-slate-400 line-through"}>
                        প্রতিষ্ঠানের নিজস্ব নাম ও লোগো
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      {plan.multipleVersions ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <span className={plan.multipleVersions ? "font-medium" : "text-slate-400 line-through"}>
                        ৪ সেট শাফলার (সেট ক, খ, গ, ঘ)
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-semibold text-slate-900">
                        {plan.exports.includes("docx")
                          ? "PDF এবং MS Word (.docx) এক্সপোর্ট"
                          : "প্রিন্ট-রেডি এ৪ PDF এক্সপোর্ট"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <a
                  href={checkoutUrl}
                  className={`w-full py-4 px-4 rounded-2xl text-center text-sm font-black transition-all duration-200 flex items-center justify-center gap-2 ${
                    isDiamond
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg shadow-cyan-600/30 active:scale-[0.98]"
                      : isSmall
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 active:scale-[0.98]"
                      : isFree
                      ? "bg-slate-100 hover:bg-slate-200 text-slate-800"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>{isFree ? "ফ্রি ট্রায়াল শুরু করুন" : `${plan.name} প্যাকেজ চালু করুন`}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Enhanced Payment & Security Banner */}
        <div className="mt-12 sm:mt-16 bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs border border-emerald-100">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-base sm:text-xl">
                সহজ, সুরক্ষিত ও তাৎক্ষণিক পেমেন্ট ব্যবস্থা
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                বিকাশ (bKash) ও নগদ (Nagad) এর মাধ্যমে পেমেন্ট সম্পন্ন করে সাথে সাথে আপনার অ্যাকাউন্ট সক্রিয় করুন। যেকোনো প্রয়োজনে রয়েছে সার্বক্ষণিক সাপোর্ট।
              </p>
            </div>
          </div>

          {/* Payment Method Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <div className="px-4 py-2 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              <span>bKash বিকাশ</span>
            </div>
            <div className="px-4 py-2 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              <span>Nagad নগদ</span>
            </div>
            <div className="px-4 py-2 bg-purple-50 border border-purple-200 text-purple-800 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              <span>Rocket রকেট</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
