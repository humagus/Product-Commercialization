"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <Icon icon="noto:graduation-cap" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg">درس تجاری‌سازی محصول</h3>
                <p className="text-sm text-slate-400">دانشگاه آزاد اسلامی قزوین</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 leading-relaxed mb-6 max-w-md"
            >
              این وبسایت به عنوان پروژه درس ۷ (MVP و تست بازار) از دوره تجاری‌سازی محصول
              توسط مهندس عفیفه السادات قافله‌باشی در دانشگاه آزاد اسلامی قزوین طراحی شده است.
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-base mb-6">دسترسی سریع</h4>
            <ul className="space-y-3">
              {[
                { label: "MVP چیست؟", href: "#what-is-mvp" },
                { label: "انواع MVP", href: "#mvp-types" },
                { label: "موفقیت‌ها", href: "#case-studies" },
                { label: "ابزارها", href: "#tools" },
                { label: "آزمون MVP", href: "#quiz" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-bold text-base mb-6">منابع مفید</h4>
            <ul className="space-y-3">
              {[
                { label: "The Lean Startup", href: "https://theleanstartup.com" },
                { label: "Product Hunt", href: "https://producthunt.com" },
                { label: "Y Combinator", href: "https://ycombinator.com" },
                { label: "Startup School", href: "https://startupschool.org" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group ltr"
                  >
                    <Icon icon="solar:arrow-right-up-bold" className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} تمامی حقوق محفوظ است | دانشگاه آزاد اسلامی واحد قزوین
            </p>
           
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
