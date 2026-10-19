import { formatBnNumber } from "@/lib/utils";
import type { CurriculumStats } from "@/lib/types";
import { BookOpen, Layers, CheckCircle, FileText, Zap, HelpCircle } from "lucide-react";

interface StatsCounterProps {
  stats: CurriculumStats | null;
}

export function StatsCounter({ stats }: StatsCounterProps) {
  const totalQuestions = stats?.totalQuestions || 3214;
  const totalChapters = stats?.totalChapters || 172;
  const totalSubjects = stats?.totalSubjects || 16;
  const totalClasses = stats?.totalClasses || 2;

  const statItems = [
    {
      label: "সমৃদ্ধ প্রশ্নব্যাংক ভাণ্ডার",
      value: `${formatBnNumber(totalQuestions)}+`,
      subtext: "বোর্ড ও শীর্ষ স্কুল-কলেজের প্রশ্ন",
      icon: HelpCircle,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      label: "অধ্যায় ও টপিক কভারেজ",
      value: `${formatBnNumber(totalChapters)}+`,
      subtext: "সম্পূর্ণ NCTB কারিকুলাম ভিত্তিক",
      icon: Layers,
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      label: "অ্যাকাডেমিক বিষয়",
      value: `${formatBnNumber(totalSubjects)}টি`,
      subtext: "এসএসসি ও এইচএসসি সকল বিভাগ",
      icon: BookOpen,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      label: "মুদ্রণ সাশ্রয়ী লেআউট",
      value: "৪০%",
      subtext: "২-কলাম স্প্লিটে কাগজ ও কালি সাশ্রয়",
      icon: Zap,
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section className="relative -mt-6 sm:-mt-8 z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/90 p-4 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-8 sm:divide-x sm:divide-slate-100">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3 sm:p-0 sm:pl-6 flex flex-col items-center sm:items-start text-center sm:text-left bg-slate-50/70 sm:bg-transparent rounded-xl sm:rounded-none border sm:border-0 border-slate-100/90"
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center shadow-md mb-2 sm:mb-3 shrink-0`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5 sm:mt-1">
                  {item.label}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1 sm:line-clamp-none">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
