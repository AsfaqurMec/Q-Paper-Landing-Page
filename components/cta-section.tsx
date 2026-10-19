import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { APP_URL } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-semibold mb-5 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>স্মার্ট শিক্ষকতার আধুনিক হাতিয়ার</span>
        </div>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.3] px-1">
          টাইপিংয়ের অতিরিক্ত সময় বাঁচিয়ে{" "}
          <span className="text-emerald-400 block sm:inline mt-1 sm:mt-0">পাঠদানে মনোযোগ দিন</span>
        </h2>

        <p className="text-slate-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2">
          আজই যুক্ত হোন Q-paper পরিবারের সাথে। সম্পূর্ণ বিনামূল্যে অ্যাকাউন্ট খুলে ৩ মিনিটের মধ্যে তৈরি করে নিন আপনার প্রতিষ্ঠানের প্রথম প্রশ্নপত্র।
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href={`${APP_URL}/register`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] shadow-lg shadow-emerald-500/25 transition-all duration-200 min-h-[46px]"
          >
            <span>এখনই ফ্রি একাউন্ট খুলুন</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href={`${APP_URL}/login`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-800 active:scale-[0.98] border border-slate-700 transition-all duration-200 min-h-[46px]"
          >
            <span>পূর্বের একাউন্টে লগইন করুন</span>
          </a>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-6 mt-8 sm:mt-10 text-[11px] sm:text-xs text-slate-400 text-left xs:text-center">
          <div className="flex items-center justify-center gap-1.5 bg-slate-800/40 sm:bg-transparent py-1.5 px-3 rounded-lg border border-slate-800/60 sm:border-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>কোনো ক্রেডিট কার্ড লাগবে না</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-slate-800/40 sm:bg-transparent py-1.5 px-3 rounded-lg border border-slate-800/60 sm:border-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>তাত্ক্ষণিক ফ্রি এক্সেস</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-slate-800/40 sm:bg-transparent py-1.5 px-3 rounded-lg border border-slate-800/60 sm:border-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>১০০% বাংলা ও বোর্ড সিলেবাস</span>
          </div>
        </div>
      </div>
    </section>
  );
}
