"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "আমি কি সফটওয়্যারটি বিনামূল্যে ট্রায়াল দিয়ে দেখতে পারি?",
      a: "হ্যাঁ, অবশ্যই! আমাদের একটি সম্পূর্ণ 'Free' প্যাকেজ রয়েছে যাতে কোনো ক্রেডিট কার্ড ছাড়াই রেজিস্ট্রেশন করে ২টি পূর্ণাঙ্গ প্রশ্নপত্র ও ৬০টি প্রশ্নের লিমিট ব্যবহার করে সরাসরি পরীক্ষা করে দেখতে পারেন।"
    },
    {
      q: "নতুন 'স্মল (Small)' প্যাকেজে কী কী সুবিধা অন্তর্ভুক্ত?",
      a: "স্মল প্যাকেজটি বিশেষভাবে প্রাইভেট টিউটর ও ছোট কোচিংয়ের জন্য তৈরি। মাত্র ১০০ টাকায় আপনি পাচ্ছেন ১০০টি প্রশ্নপত্র তৈরির সুযোগ, ৩,৫০০টি প্রশ্নের সর্বোচ্চ লিমিট, কোনো ওয়াটারমার্ক ছাড়া ক্লিন প্রিন্ট, প্রশ্নব্যাংক অ্যাক্সেস এবং আপনার নিজস্ব লোগো ও ব্র্যান্ডিং।"
    },
    {
      q: "গণিত ও বিজ্ঞানের জটিল সমীকরণ কি প্রিন্টে স্পষ্ট আসবে?",
      a: "একদম স্পষ্ট আসবে। আমাদের সফটওয়্যারে আধুনিক KaTeX এবং ভেক্টর ম্যাথ রেন্ডারিং ইঞ্জিন যুক্ত রয়েছে। ফলে ক্যালকুলাস, ত্রিকোণমিতি, জটিল ভগ্নাংশ বা ২ডি ম্যাট্রিক্স সমীকরণ হুবহু পাঠ্যবই বা বোর্ড পরীক্ষার মতো প্রিন্ট হয়।"
    },
    {
      q: "বিকাশ (bKash) বা নগদ (Nagad) দিয়ে কীভাবে পেমেন্ট করব?",
      a: "আমাদের চেকআউট সিস্টেমে বিকাশ, নগদ ও রকেটের মাধ্যমে ইনস্ট্যান্ট পেমেন্টের সুবিধা রয়েছে। নির্দিষ্ট নম্বরে টাকা পাঠিয়ে ট্রানজেকশন আইডি প্রদান করলেই আপনার সাবস্ক্রিপশন চালু হয়ে যাবে।"
    },
    {
      q: "প্রশ্নপত্র কি মাইক্রোসফট ওয়ার্ড (.docx) ফরম্যাটে এডিট করা যাবে?",
      a: "হ্যাঁ! আমাদের 'Ultra' প্যাকেজে রয়েছে সরাসরি ওয়ার্ড (.docx) ফরম্যাটে এক্সপোর্টের সুবিধা। এছাড়া সকল প্যাকেজেই রয়েছে হাই-কোয়ালিটি প্রিন্ট-রেডি পিডিএফ এক্সপোর্ট।"
    },
    {
      q: "একাধিক সেট (Set A, B, C, D) কীভাবে কাজ করে?",
      a: "পরীক্ষার প্রশ্ন সাজানোর পর আপনি ১-ক্লিকেই প্রশ্নগুলোর ক্রম এবং চারপাশের অপশনগুলো এলোমেলো (Shuffle) করে ভিন্ন ভিন্ন সেট তৈরি করতে পারবেন। এতে নকলের কোনো সুযোগ থাকে না।"
    }
  ];

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>সচরাচর জিজ্ঞাসা</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            সাধারণ প্রশ্ন ও উত্তর (FAQ)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 sm:mt-3">
            আপনার কোনো প্রশ্ন বা জিজ্ঞাসা থাকলে নিচে দেখে নিতে পারেন।
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-6 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between gap-3 sm:gap-4 transition min-h-[48px]"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-6 bg-white border-t border-slate-100 text-slate-600 text-xs sm:text-base leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
