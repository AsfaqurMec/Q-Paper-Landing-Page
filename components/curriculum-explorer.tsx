"use client";

import { useState } from "react";
import type { AcademicClass, CurriculumSubject } from "@/lib/types";
import { formatBnNumber, APP_URL } from "@/lib/utils";
import { BookOpen, Search, ArrowRight, CheckCircle2, GraduationCap, Sparkles } from "lucide-react";

interface CurriculumExplorerProps {
  classes?: AcademicClass[];
  subjects?: CurriculumSubject[];
}

export function CurriculumExplorer({ classes = [], subjects = [] }: CurriculumExplorerProps) {
  const [selectedClassId, setSelectedClassId] = useState<string>(
    classes[0]?.id || "cnmEBdd_5JxMENZxTAsAY"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const safeSubjects = Array.isArray(subjects) ? subjects : [];
  const safeClasses = Array.isArray(classes) ? classes : [];

  const filteredSubjects = safeSubjects.filter((s) => {
    const matchesClass = !selectedClassId || s.classId === selectedClassId;

    const matchesSearch =
      !searchQuery ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.category && s.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesClass && matchesSearch;
  });

  return (
    <section id="curriculum" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>NCTB কারিকুলাম ও প্রশ্নব্যাংক কভারেজ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            সকল ক্লাসের প্রতিটি বিষয়ের সমৃদ্ধ প্রশ্নভাণ্ডার
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 sm:mt-3">
            আমাদের ডেটাবেজে রয়েছে বোর্ড স্ট্যান্ডার্ড অধ্যায়ভিত্তিক হাজারো এমসিকিউ ও সিকিউ প্রশ্ন, যা সবসময় লাইভ আপডেট থাকে।
          </p>
        </div>

        {/* Class Selection Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* Class Tabs - Horizontal swipeable on mobile */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-slate-200 shadow-xs w-full sm:w-auto overflow-x-auto scrollbar-none flex-nowrap">
            {safeClasses.map((cls) => {
              const isActive = selectedClassId === cls.id;
              return (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClassId(cls.id)}
                  className={`shrink-0 flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold min-h-[40px] transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{cls.name}</span>
                  {cls.questionsCount ? (
                    <span
                      className={`ml-1.5 sm:ml-2 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-emerald-700 text-emerald-100"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {formatBnNumber(cls.questionsCount)} প্রশ্ন
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="বিষয় খুঁজুন (যেমন: পদার্থবিজ্ঞান)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSubjects.map((subj) => (
            <div
              key={subj.id}
              className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                    {subj.className || "SSC / HSC"}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition">
                  {subj.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  ক্যাটাগরি: {subj.category || "General"}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <div className="font-semibold text-slate-800">
                    {formatBnNumber(subj.questionsCount || 0)} টি প্রশ্ন সংরক্ষিত
                  </div>
                  <div className="text-slate-500">
                    {formatBnNumber(subj.chaptersCount || 0)} টি অধ্যায় অন্তর্ভুক্ত
                  </div>
                </div>

                <a
                  href={`${APP_URL}/register`}
                  className="inline-flex items-center gap-1 text-emerald-700 font-bold hover:text-emerald-800 hover:underline"
                >
                  <span>প্রশ্নপত্র তৈরি</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">কোনো বিষয় পাওয়া যায়নি। অন্য কিওয়ার্ড দিয়ে সার্চ করুন।</p>
          </div>
        )}

        {/* Bottom helper */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>সকল ডেটা সরাসরি আমাদের সেন্ট্রাল কোশ্চেনব্যাংক ডাটাবেজ থেকে রিয়েল-টাইমে লোড হচ্ছে</span>
        </div>
      </div>
    </section>
  );
}
