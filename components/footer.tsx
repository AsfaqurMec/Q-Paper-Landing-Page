import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/utils";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand info */}
          <div className="sm:col-span-2 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 p-1 ring-1 ring-emerald-500/20 flex items-center justify-center">
                <Image
                  src="/logo-small.png"
                  alt="Q-paper Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Q-paper
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              বাংলাদেশের শিক্ষক, কোচিং সেন্টার ও শিক্ষাপ্রতিষ্ঠানের জন্য তৈরি আধুনিক প্রশ্নপত্র ও প্রশ্নব্যাংক প্ল্যাটফর্ম। NCTB কারিকুলাম অনুযায়ী ৩ মিনিটে তৈরি করুন ২-কলাম স্ট্যান্ডার্ড প্রশ্নপত্র।
            </p>
            <div className="text-xs text-slate-500">
              হেল্পলাইন ও সাপোর্ট: support@q-paper.app
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-sm tracking-wide">ন্যাভিগেশন</h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <a href="#features" className="py-1 inline-block hover:text-emerald-400 transition">
                  ফিচারসমূহ
                </a>
              </li>
              <li>
                <a href="#curriculum" className="py-1 inline-block hover:text-emerald-400 transition">
                  কারিকুলাম ও বিষয়
                </a>
              </li>
              <li>
                <a href="#sample-questions" className="py-1 inline-block hover:text-emerald-400 transition">
                  স্যাম্পল প্রশ্নব্যাংক
                </a>
              </li>
              <li>
                <a href="#pricing" className="py-1 inline-block hover:text-emerald-400 transition">
                  প্যাকেজ ও মূল্যতালিকা
                </a>
              </li>
              <li>
                <a href="#comparison" className="py-1 inline-block hover:text-emerald-400 transition">
                  সনাতন বনাম Q-paper
                </a>
              </li>
              <li>
                <a href="#faq" className="py-1 inline-block hover:text-emerald-400 transition">
                  সাধারণ প্রশ্ন (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Packages Links */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-sm tracking-wide">প্যাকেজসমূহ</h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <a href={`${APP_URL}/register`} className="py-1 inline-block hover:text-emerald-400 transition">
                  Free প্ল্যান (৳০)
                </a>
              </li>
              <li>
                <a
                  href={`${APP_URL}/checkout?plan=small`}
                  className="py-1 text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Small প্ল্যান (৳২৫০)</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                    নতুন
                  </span>
                </a>
              </li>
              <li>
                <a href={`${APP_URL}/checkout?plan=pro`} className="py-1 inline-block hover:text-emerald-400 transition">
                  Pro প্ল্যান (৳৫০০)
                </a>
              </li>
              <li>
                <a href={`${APP_URL}/checkout?plan=ultra`} className="py-1 inline-block hover:text-emerald-400 transition">
                  Ultra প্ল্যান (৳১,০০০)
                </a>
              </li>
            </ul>
          </div>

          {/* Software Access */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-sm tracking-wide">সফটওয়্যার অ্যাক্সেস</h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <a
                  href={`${APP_URL}/login`}
                  className="py-1 text-slate-300 hover:text-emerald-400 transition inline-block font-medium"
                >
                  সফটওয়্যারে লগইন
                </a>
              </li>
              <li>
                <a
                  href={`${APP_URL}/register`}
                  className="py-1 text-slate-300 hover:text-emerald-400 transition inline-block font-medium"
                >
                  নতুন অ্যাকাউন্ট তৈরি
                </a>
              </li>
              <li>
                <a
                  href={`${APP_URL}/forgot-password`}
                  className="py-1 hover:text-emerald-400 transition inline-block"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            কপিরাইট © ২০২৬ <span className="text-slate-300 font-semibold">Q-paper</span> — সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center justify-center gap-1 text-slate-400">
            <span>বাংলাদেশে তৈরি</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block mx-0.5" />
            <span>শিক্ষকদের সহজতার জন্য</span>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-900 flex flex-row items-center justify-center gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            <Link href="/privacy-policy" className=" hover:text-emerald-400 transition">Developed by</Link> | <Link href="https://my-portfolio-asfaqur-rahman.web.app" className="text-emerald-500 font-bold tracking-wideest hover:text-emerald-400 transition">Asfaqur Rahman</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
