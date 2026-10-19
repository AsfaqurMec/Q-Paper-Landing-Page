import { Layers, MousePointerClick, Download, CheckCircle2 } from "lucide-react";

export function WorkflowSteps() {
  const steps = [
    {
      step: "০১",
      title: "শ্রেণি, বিষয় ও অধ্যায় সিলেক্ট করুন",
      desc: "এসএসসি বা এইচএসসি-র নির্দিষ্ট বিষয় এবং যে যে অধ্যায় থেকে পরীক্ষা নিতে চান তা এক ক্লিকে পছন্দ করুন।",
      icon: Layers
    },
    {
      step: "০২",
      title: "প্রশ্ন নির্বাচন বা এআই জেনারেট",
      desc: "৩,২০০+ সমৃদ্ধ প্রশ্নব্যাংক থেকে পছন্দমতো প্রশ্ন যোগ করুন অথবা ৩-ক্লিকে র্যান্ডম জেনারেটর দিয়ে স্বয়ংক্রিয়ভাবে প্রশ্নপত্র সাজান।",
      icon: MousePointerClick
    },
    {
      step: "০৩",
      title: "প্রিন্ট-রেডি এ৪ পিডিএফ ডাউনলোড",
      desc: "আপনার প্রতিষ্ঠানের নাম, লোগো এবং বোর্ড স্ট্যান্ডার্ড ২-কলাম লেআউটে সরাসরি প্রিন্ট অথবা ওয়ার্ড ফাইলে সংরক্ষণ করুন।",
      icon: Download
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>সহজ ও নিরবচ্ছিন্ন পদ্ধতি</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            মাত্র ৩টি সহজ ধাপে সম্পূর্ণ প্রশ্নপত্র প্রস্তুত
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 sm:mt-3">
            কোনো জটিল সফটওয়্যার প্রশিক্ষণ ছাড়াই প্রথম দিন থেকেই দক্ষভাবে ব্যবহার করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-5 sm:p-8 border border-slate-200/80 flex flex-col items-center text-center group hover:bg-emerald-50/40 hover:border-emerald-300 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-md mb-4 sm:mb-6 group-hover:scale-110 transition duration-300 shrink-0">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <span className="text-emerald-700 font-extrabold text-xs tracking-widest uppercase mb-1">
                  ধাপ {item.step}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
