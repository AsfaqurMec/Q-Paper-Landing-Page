"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles, BookOpen, Layers } from "lucide-react";
import { APP_URL } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5 sm:py-3"
          : "bg-white/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-xl bg-emerald-600/10 p-0.5 sm:p-1 ring-1 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition shrink-0">
              <Image
                src="/logo-small.png"
                alt="Q-paper Logo"
                width={40}
                height={40}
                className="object-contain rounded-xl"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition leading-tight">
                Q-paper
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium text-emerald-600 uppercase tracking-wider -mt-0.5">
                স্মার্ট প্রশ্নপত্র জেনারেটর
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#live-demo"
              className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition flex items-center gap-1.5 font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>লাইভ ডেমো</span>
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition"
            >
              ফিচারসমূহ
            </a>
            <a
              href="#curriculum"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition"
            >
              কারিকুলাম ও প্রশ্নব্যাংক
            </a>
            <a
              href="#sample-questions"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition"
            >
              স্যাম্পল প্রশ্ন
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition flex items-center gap-1.5"
            >
              প্যাকেজ ও মূল্য
              {/* <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                নতুন প্যাকেজ!
              </span> */}
            </a>
            <a
              href="#comparison"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition"
            >
              তুলনা
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition"
            >
              FAQ
            </a>
          </nav>

          {/* Action Buttons to Software */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`${APP_URL}/login`}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 px-4 py-2 rounded-lg hover:bg-slate-100/80 transition"
            >
              লগইন করুন
            </a>
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:shadow-emerald-600/20 transition-all duration-200"
            >
              <span>ফ্রি শুরু করুন</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions: Quick CTA & Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`${APP_URL}/register`}
              className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-sm shadow-xs active:scale-95 transition"
            >
              ফ্রি ট্রায়াল
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center active:scale-95 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-2 pb-6 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col gap-1.5 pt-2">
            <a
              href="#live-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-emerald-800 bg-emerald-50/80 px-3 py-2.5 rounded-xl border border-emerald-200/60 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>লাইভ ডেমো (MCQ ও CQ)</span>
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition"
            >
              ফিচারসমূহ
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition"
            >
              কারিকুলাম ও প্রশ্নব্যাংক
            </a>
            <a
              href="#sample-questions"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition"
            >
              স্যাম্পল প্রশ্ন
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition flex items-center justify-between"
            >
              <span>প্যাকেজ ও মূল্য</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                নতুন প্যাকেজ!
              </span>
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition"
            >
              তুলনা
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition"
            >
              সাধারণ জিজ্ঞাসা (FAQ)
            </a>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href={`${APP_URL}/login`}
                className="w-full text-center py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded-xl hover:bg-slate-200 transition"
              >
                লগইন করুন
              </a>
              <a
                href={`${APP_URL}/register`}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-md transition"
              >
                ফ্রি অ্যাকাউন্ট তৈরি করুন
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
