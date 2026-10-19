import { Check, X, Sparkles, Scale } from "lucide-react";

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "প্রশ্নপত্র তৈরির সময়",
      traditional: "২ থেকে ৩ ঘণ্টা ক্লান্তি ও টাইপিং",
      qpaper: "মাত্র ৩ মিনিটে সম্পূর্ণ প্রশ্নপত্র রেডি",
      highlight: true
    },
    {
      feature: "গণিত ও বিজ্ঞান সমীকরণ",
      traditional: "ফন্ট ভেঙে যায়, ইকুয়েশন এডিটর অত্যন্ত ধীর",
      qpaper: "অত্যাধুনিক KaTeX সাপোর্ট — সমীকরণ ১০০% নিখুঁত",
      highlight: false
    },
    {
      feature: "প্রশ্ন খোঁজার ঝামেলা",
      traditional: "বিভিন্ন গাইড বই ও টেস্ট পেপারের পাতা খোঁজা",
      qpaper: "৩,২০০+ সমৃদ্ধ লাইভ বোর্ড প্রশ্নব্যাংক ফিল্টার",
      highlight: true
    },
    {
      feature: "নকলমুক্ত ভিন্ন সেট (Set A, B, C, D)",
      traditional: "ম্যানুয়ালি প্রতিটি প্রশ্নের ক্রম বদলানো কঠিন",
      qpaper: "১-ক্লিকে প্রশ্নের ক্রম ও অপশন অটো-শাফলিং",
      highlight: false
    },
    {
      feature: "পৃষ্ঠা ও মুদ্রণ সাশ্রয় (Layout)",
      traditional: "অগোছালো মার্জিন ও অপ্রয়োজনীয় বাড়তি পৃষ্ঠা",
      qpaper: "বোর্ড স্ট্যান্ডার্ড ২-কলাম স্প্লিটে ৪০% কাগজ সেভ",
      highlight: true
    },
    {
      feature: "সংরক্ষণ ও ক্লাউড অ্যাক্সেস",
      traditional: "পেনড্রাইভ বা কম্পিউটারে ফাইল নষ্ট হওয়ার ঝুঁকি",
      qpaper: "ক্লাউডে আজীবন সুরক্ষিত, যেকোনো ডিভাইস থেকে এক্সেস",
      highlight: false
    }
  ];

  return (
    <section id="comparison" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5 text-emerald-600" />
            <span>সরাসরি তুলনা</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            কেন সনাতন পদ্ধতি বাদ দিয়ে Q-paper বেছে নিবেন?
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2 sm:mt-3">
            টাইপিংয়ের বাড়তি সময় বাঁচিয়ে পাঠদানে মনোযোগ দিন। দেখুন কীভাবে Q-paper আপনার কাজকে সহজ করে দেয়।
          </p>
        </div>

        {/* Mobile View: Comparison Cards (Shown on mobile < md) */}
        <div className="md:hidden space-y-3">
          {comparisons.map((row, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-4 border transition-all ${
                row.highlight
                  ? "bg-white border-emerald-300 shadow-sm"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="font-bold text-slate-900 text-sm pb-2.5 mb-2.5 border-b border-slate-100 flex items-center justify-between">
                <span>{row.feature}</span>
                {row.highlight && (
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    প্রধান পার্থক্য
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs">
                {/* Traditional */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-600 flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 block mb-0.5">সনাতন পদ্ধতি (MS Word):</span>
                    <span>{row.traditional}</span>
                  </div>
                </div>

                {/* Q-paper */}
                <div className="p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200 text-emerald-950 flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-900 block mb-0.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      Q-paper সফটওয়্যার:
                    </span>
                    <span className="font-semibold">{row.qpaper}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Full Comparison Table (Shown on md+) */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-5 text-sm font-bold">
            <div className="col-span-4">ফিচার বা মানদণ্ড</div>
            <div className="col-span-4 text-slate-300">সনাতন পদ্ধতি (MS Word/টাইপিং)</div>
            <div className="col-span-4 text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Q-paper সফটওয়্যার</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-5 text-sm items-center transition ${
                  row.highlight ? "bg-emerald-50/30" : "bg-white"
                }`}
              >
                <div className="col-span-4 font-bold text-slate-800 pr-2">
                  {row.feature}
                </div>

                <div className="col-span-4 text-slate-500 pr-2 flex items-start gap-1.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>

                <div className="col-span-4 font-semibold text-emerald-900 flex items-start gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.qpaper}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
