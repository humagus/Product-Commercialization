"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { mvpTypes } from "@/data/content";
import { Icon } from "@iconify/react";

const iconMap: Record<string, string> = {
  Wand2: "noto:magic-wand",
  UserCheck: "noto:bust-in-silhouette",
  Puzzle: "noto:puzzle-piece",
  Target: "noto:bullseye",
  Layout: "noto:desktop-computer",
  Users: "noto:busts-in-silhouette",
  Shield: "noto:shield",
  Webhook: "noto:gear",
};

const colorMap: Record<string, string> = {
  "wizard-of-oz": "from-amber-500 to-orange-500",
  "concierge": "from-pink-500 to-rose-500",
  "piecemeal": "from-blue-500 to-cyan-500",
  "single-feature": "from-green-500 to-emerald-500",
  "landing-page": "from-primary to-blue-400",
  "crowdfunding": "from-yellow-500 to-amber-400",
  "beta-users": "from-indigo-500 to-violet-500",
  "api-mvp": "from-teal-500 to-cyan-400",
};

export function MVPTypesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="mvp-types"
      className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            استراتژی‌های مختلف
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            انواع <span className="text-gradient">MVP</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            هر استارتاپ می‌تواند با توجه به منابع و نوع محصول، از یکی از این روش‌ها استفاده کند
          </p>
        </motion.div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-2 mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            className={`p-3 rounded-xl bg-white shadow-lg border border-slate-100`}
            aria-label="اسکرول به راست"
          >
            <Icon icon="solar:alt-arrow-right-bold" className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            className={`p-3 rounded-xl bg-white shadow-lg border border-slate-100`}
            aria-label="اسکرول به چپ"
          >
            <Icon icon="solar:alt-arrow-left-bold" className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
        >
          {mvpTypes.map((type, index) => {
            const iconName = iconMap[type.icon];
            const gradient = colorMap[type.id];

            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-80 snap-start"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group"
                >
                  {/* Card Header with gradient */}
                  <div className={`h-32 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                    </div>

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon icon={iconName} className="w-10 h-10" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {type.title}
                      </h3>
                      <p className="text-sm text-slate-400 ltr">{type.titleEn}</p>
                    </div>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {type.description}
                    </p>

                    {/* Example box */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <p className="text-sm text-slate-500 mb-1">مثال:</p>
                      <p className="text-sm text-slate-700">{type.example}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            کدام نوع MVP برای شما مناسب است؟
          </p>
          <motion.a
            href="#quiz"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
          >
            آزمون آمادگی MVP را انجام دهید
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
