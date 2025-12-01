"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineEvents = [
  { year: 2014, title: "ایده و تیم‌سازی", description: "شروع با تیم کوچک ۴ نفره در تهران" },
  { year: 2015, title: "MVP: اپ ساده تاکسی", description: "فقط درخواست تاکسی در تهران" },
  { year: 2016, title: "گسترش به شهرها", description: "اضافه شدن مشهد، اصفهان و شیراز" },
  { year: 2018, title: "سوپراپ", description: "اضافه شدن غذا، بلیت، باربری" },
  { year: 2020, title: "۳ میلیارد دلار", description: "ارزش‌گذاری یونیکورن" },
  { year: 2024, title: "۵۰+ سرویس", description: "بزرگترین سوپراپ ایران" },
];

const stats = [
  { icon: "noto:busts-in-silhouette", value: "۵۰ میلیون", label: "کاربر فعال" },
  { icon: "noto:round-pushpin", value: "۲۰۰+", label: "شهر" },
  { icon: "noto:mobile-phone", value: "۵۰+", label: "سرویس" },
  { icon: "noto:money-bag", value: "۳ میلیارد", label: "ارزش‌گذاری دلار" },
];

const lessons = [
  "شروع از یک شهر و یک سرویس ساده",
  "تمرکز کامل روی تجربه کاربری",
  "گوش دادن مداوم به بازخورد رانندگان و مسافران",
  "گسترش تدریجی بر اساس داده‌های واقعی",
  "ساخت اکوسیستم بجای محصول تکی",
];

export function SnappCaseStudySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !timelineRef.current) return;

    const events = timelineRef.current.querySelectorAll(".timeline-event");

    events.forEach((event, index) => {
      gsap.fromTo(
        event,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: event,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [isInView]);

  return (
    <section
      id="snapp-case"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-slate-50 via-green-50/30 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-4"
          >
            <span className="text-lg">🇮🇷</span>
            بررسی موردی عمیق
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            داستان موفقیت <span className="text-gradient">اسنپ</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            چگونه یک MVP ساده به بزرگترین یونیکورن ایران تبدیل شد
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
                <Icon icon={stat.icon} className="w-7 h-7" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Icon icon="noto:chart-increasing" className="w-7 h-7" />
              مسیر رشد
            </h3>

            <div ref={timelineRef} className="relative pr-8">
              {/* Vertical line */}
              <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-400 to-green-300" />

              <div className="space-y-8">
                {timelineEvents.map((event) => (
                  <div key={event.year} className="timeline-event relative">
                    {/* Dot */}
                    <div className="absolute -right-8 top-1 w-4 h-4 rounded-full bg-white border-4 border-green-500 shadow-lg" />

                    <div className="bg-white rounded-xl p-4 shadow-md border border-slate-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-bold text-green-600 ltr">
                          {event.year}
                        </span>
                        <span className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-green-200" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-1">{event.title}</h4>
                      <p className="text-sm text-slate-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lessons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Icon icon="noto:check-mark-button" className="w-7 h-7" />
              درس‌های کلیدی
            </h3>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 mb-8">
              <div className="space-y-4">
                {lessons.map((lesson, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-slate-700">{lesson}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* MVP to Success Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white shadow-xl shadow-green-500/25"
            >
              <h4 className="text-xl font-bold mb-3">از MVP تا یونیکورن</h4>
              <p className="text-white/90 leading-relaxed">
                اسنپ با یک اپ ساده درخواست تاکسی در تهران شروع کرد. بدون هیچ ویژگی اضافه‌ای.
                فقط: درخواست تاکسی، مشاهده راننده، پرداخت.
                <br /><br />
                امروز با ارزش ۳ میلیارد دلار، ۵۰ میلیون کاربر و ۵۰+ سرویس، بزرگترین
                یونیکورن ایران است.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-4 text-lg">
            شما هم می‌توانید با یک MVP ساده شروع کنید! 🚀
          </p>
          <motion.a
            href="#checklist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-shadow"
          >
            چک‌لیست قبل از شروع را ببینید
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
