import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#059669"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://q-paper.app"),
  title: "Q-paper — আধুনিক প্রশ্নপত্র জেনারেটর ও প্রশ্নব্যাংক সফটওয়্যার",

  description:
    "টাইপিংয়ের ঝামেলা ছাড়াই মাত্র ৩ মিনিটে তৈরি করুন নির্ভুল বোর্ড স্ট্যান্ডার্ড প্রশ্নপত্র ও উত্তরমালা। সমৃদ্ধ প্রশ্নব্যাংক, ম্যাথ KaTeX সমীকরণ, ২-কলাম স্প্লিট লেআউট ও ওয়ার্ড/পিডিএফ এক্সপোর্ট।",
  keywords: [
    "Q-paper",
    "প্রশ্নপত্র জেনারেটর",
    "question paper generator",
    "প্রশ্নব্যাংক",
    "NCTB question bank",
    "SSC question paper",
    "HSC question paper",
    "KaTeX math exam paper"
  ],
  icons: {
    icon: "/logo-small.png",
    shortcut: "/logo-small.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "Q-paper — আধুনিক প্রশ্নপত্র জেনারেটর ও প্রশ্নব্যাংক সফটওয়্যার",
    description:
      "টাইপিংয়ের ঝামেলা ছাড়াই মাত্র ৩ মিনিটে তৈরি করুন নির্ভুল বোর্ড স্ট্যান্ডার্ড প্রশ্নপত্র ও উত্তরমালা।",
    url: "https://q-paper.app",
    siteName: "Q-paper",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Q-paper Software"
      }
    ],
    locale: "bn_BD",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(regs) {
                  for (var i = 0; i < regs.length; i++) {
                    regs[i].unregister();
                  }
                });
              }
            `
          }}
        />
      </head>
      <body className="antialiased font-sans selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
