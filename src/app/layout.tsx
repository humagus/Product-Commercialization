import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MVP چیست؟ | راهنمای کامل Minimum Viable Product و تست بازار",
  description:
    "درس ۷ تجاری‌سازی محصول - دانشگاه آزاد اسلامی قزوین | مهندس عفیفه السادات قافله‌باشی | یادگیری ساخت MVP، تست بازار، و راه‌اندازی استارتاپ موفق",
  keywords: [
    "MVP",
    "Minimum Viable Product",
    "تست بازار",
    "استارتاپ",
    "تجاری‌سازی محصول",
    "کارآفرینی",
    "لین استارتاپ",
    "اسنپ",
    "دیجی‌کالا",
  ],
  authors: [{ name: "مهندس عفیفه السادات قافله‌باشی" }],
  creator: "دانشگاه آزاد اسلامی قزوین",
  openGraph: {
    title: "MVP چیست؟ | راهنمای کامل ساخت محصول حداقلی",
    description:
      "۹۰٪ استارتاپ‌ها شکست می‌خورند! یاد بگیرید چگونه با MVP از این آمار فرار کنید.",
    locale: "fa_IR",
    type: "website",
    siteName: "درس تجاری‌سازی محصول",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP چیست؟ | راهنمای کامل ساخت محصول حداقلی",
    description:
      "۹۰٪ استارتاپ‌ها شکست می‌خورند! یاد بگیرید چگونه با MVP از این آمار فرار کنید.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className={`${vazirmatn.variable} font-sans antialiased`}>
        <LenisProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
