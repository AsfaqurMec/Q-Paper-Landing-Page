import {
  Zap,
  SplitSquareVertical,
  Shuffle,
  FileDown,
  Sigma,
  Building,
  CheckCircle,
  ShieldAlert,
  Sliders,
  Check
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "৩ মিনিটে সম্পূর্ণ প্রশ্নপত্র তৈরি",
      desc: "অধ্যায় সিলেক্ট করে ড্র্যাগ-অ্যান্ড-ড্রপ করুন অথবা আমাদের 'র্যান্ডম জেনারেটর' দিয়ে মাত্র ৩ ক্লিকে সম্পূর্ণ মডেল টেস্ট বা ক্লাস টেস্ট রেডি করুন।",
      badge: "অতি দ্রুত",
      color: "emerald"
    },
    {
      icon: Sigma,
      title: "ম্যাথ ও KaTeX সমীকরণ সাপোর্ট",
      desc: "বীজগণিত, ভগ্নাংশ, রুট, সমাকলন, ত্রিকোণমিতি কিংবা ২ডি ম্যাট্রিক্স — সবকিছুই বোর্ডের মতো নিখুঁতভাবে রেন্ডার ও প্রিন্ট হয়।",
      badge: "১০০% নির্ভুল",
      color: "teal"
    },
    {
      icon: SplitSquareVertical,
      title: "অরিজিনাল ২-কলাম স্প্লিট লেআউট",
      desc: "এসএসসি ও এইচএসসি বোর্ড পরীক্ষার হুবহু এ৪ দুই-কলাম ফরম্যাট। এতে পাতার অপচয় রোধ হয় এবং প্রিন্টিং খরচ প্রায় ৪০% কমে যায়।",
      badge: "মুদ্রণ সাশ্রয়ী",
      color: "indigo"
    },
    {
      icon: Shuffle,
      title: "ইনস্ট্যান্ট মাল্টিপল সেট শাফলার (A, B, C, D)",
      desc: "একই প্রশ্নপত্রের প্রশ্নের ক্রম ও অপশনগুলো ১-ক্লিকে এলোমেলো করে তৈরি করুন ৪টি ভিন্ন সেট — শিক্ষার্থীদের অসদুপায় পুরোপুরি বন্ধ।",
      badge: "নকলমুক্ত পরীক্ষা",
      color: "amber"
    },
    {
      icon: FileDown,
      title: "পিডিএফ ও এমএস ওয়ার্ড (.docx) এক্সপোর্ট",
      desc: "প্রিন্ট-রেডি ভেক্টর পিডিএফ ছাড়াও সরাসরি মাইক্রোসফট ওয়ার্ড ফরম্যাটে এক্সপোর্ট করার সুবিধা, যাতে যেকোনো সময় অফলাইনে এডিট করতে পারেন।",
      badge: "ফ্লেক্সিবল",
      color: "sky"
    },
    {
      icon: Building,
      title: "প্রতিষ্ঠানের নিজস্ব লোগো ও ওয়াটারমার্ক",
      desc: "প্রতিটি প্রশ্নপত্রে আপনার স্কুল, কলেজ বা কোচিং সেন্টারের নাম, ঠিকানা এবং প্রফেশনাল জলছাপ স্বয়ংক্রিয়ভাবে যুক্ত হয়ে যায়।",
      badge: "ব্র্যান্ডিং",
      color: "purple"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>উন্নত প্রযুক্তি ও শক্তিশালী ফিচারসমূহ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            প্রশ্নপত্র তৈরির প্রতিটি ধাপে অতুলনীয় সহজতা
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 sm:mt-3">
            সনাতন টাইপিংয়ের জটিলতা ও ভুলভ্রান্তি চিরতরে দূর করে শিক্ষাদানে আরও বেশি সময় দিন।
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition">
                    {feat.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>সফটওয়্যারে সরাসরি ইনক্লুডেড</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
