"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

const steps = [
  {
    icon: "noto:light-bulb",
    title: "ایده",
    subtitle: "Idea",
    description: "ایده اولیه شما برای حل یک مشکل",
    color: "from-yellow-500 to-amber-400",
  },
  {
    icon: "noto:wrench",
    title: "پروتوتایپ",
    subtitle: "Prototype",
    description: "نمونه اولیه ساده برای نمایش مفهوم",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: "noto:rocket",
    title: "MVP",
    subtitle: "Minimum Viable Product",
    description: "محصول با حداقل ویژگی‌های قابل عرضه",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: "noto:trophy",
    title: "محصول کامل",
    subtitle: "Full Product",
    description: "محصول نهایی با تمام ویژگی‌ها",
    color: "from-primary to-blue-400",
  },
];

const benefits = [
  { icon: "noto:shield", title: "کاهش ریسک", description: "تست فرضیه‌ها قبل از سرمایه‌گذاری سنگین" },
  { icon: "noto:magnifying-glass-tilted-right", title: "اعتبارسنجی سریع", description: "دریافت بازخورد واقعی از بازار" },
  { icon: "noto:hourglass-done", title: "صرفه‌جویی در زمان", description: "تمرکز روی ویژگی‌های اصلی محصول" },
  { icon: "noto:money-bag", title: "جذب سرمایه", description: "اثبات پتانسیل محصول به سرمایه‌گذاران" },
];

export function WhatIsMVPSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="what-is-mvp"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-slate-800 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            تعریف اصلی
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            MVP یا <span className="text-gradient">محصول با حداقل ویژگی</span> چیست؟
          </h2>
        </motion.div>

        {/* Main Definition Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30"
              >
                <Icon icon="noto:rocket" className="w-10 h-10" />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 ltr">
                  Minimum Viable Product
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  MVP نسخه‌ای از محصول است که با{" "}
                  <span className="text-primary font-semibold">کمترین ویژگی‌های ممکن</span>{" "}
                  ساخته می‌شود تا بتوان با{" "}
                  <span className="text-primary font-semibold">کمترین هزینه و زمان</span>، فرضیه‌های اصلی
                  را در بازار واقعی تست کرد و{" "}
                  <span className="text-primary font-semibold">بازخورد مشتریان</span> را دریافت نمود.
                </p>
              </div>
            </div>

            {/* Eric Ries Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border-r-4 border-primary pr-6 py-4 bg-primary/5 rounded-l-xl"
            >
              <p className="text-lg text-slate-700 italic mb-2">
                &ldquo;MVP آن نسخه از محصول است که به شما اجازه می‌دهد با کمترین تلاش، بیشترین یادگیری
                تأییدشده را درباره مشتریان به دست آورید.&rdquo;
              </p>
              <cite className="text-sm text-slate-500 not-italic">
                — اریک ریس، نویسنده کتاب The Lean Startup
              </cite>
            </motion.blockquote>
          </div>
        </motion.div>

        {/* Journey Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            مسیر از ایده تا محصول
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative p-6 rounded-2xl bg-white shadow-lg border-2 ${
                    step.subtitle === "Minimum Viable Product"
                      ? "border-primary ring-4 ring-primary/20"
                      : "border-slate-100"
                  }`}
                >
                  {step.subtitle === "Minimum Viable Product" && (
                    <span className="absolute -top-3 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      هدف ما
                    </span>
                  )}
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon icon={step.icon} className="w-8 h-8" />
                  </motion.div>

                  <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-400 ltr mb-2">{step.subtitle}</p>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </motion.div>

                {index < steps.length - 1 && (
                  <Icon icon="solar:arrow-left-bold" className="w-8 h-8 text-slate-300 mx-4 rotate-180 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            مزایای ساخت MVP
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon icon={benefit.icon} className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
