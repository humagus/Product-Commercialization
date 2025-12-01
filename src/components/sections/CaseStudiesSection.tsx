"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { caseStudies } from "@/data/content";
import { Icon } from "@iconify/react";
import Image from "next/image";

export function CaseStudiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [, setCanScrollPrev] = useState(false);
  const [, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="case-studies"
      className="section-padding bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-4"
          >
            داستان‌های موفقیت
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            از <span className="text-gradient">MVP</span> تا موفقیت جهانی
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            ببینید چگونه استارتاپ‌های ایرانی و جهانی با MVP ساده شروع کردند و به یونیکورن تبدیل شدند
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { label: "همه", filter: "all" },
            { label: "ایران 🇮🇷", filter: "iran" },
            { label: "جهان 🌍", filter: "global" },
          ].map((tab) => (
            <motion.button
              key={tab.filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition-colors"
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-primary transition-colors -translate-x-6"
            aria-label="بعدی"
          >
            <Icon icon="solar:alt-arrow-left-bold" className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-primary transition-colors translate-x-6"
            aria-label="قبلی"
          >
            <Icon icon="solar:alt-arrow-right-bold" className="w-6 h-6" />
          </motion.button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {caseStudies.map((study) => (
                <div key={study.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image Side */}
                      <div className="relative h-64 lg:h-auto min-h-[400px]">
                        <Image
                          src={study.image}
                          alt={study.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Company Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              study.country === "iran" 
                                ? "bg-green-500/20 text-green-300" 
                                : "bg-blue-500/20 text-blue-300"
                            }`}>
                              <Icon icon="noto:round-pushpin" className="w-4 h-4 inline ml-1" />
                              {study.country === "iran" ? "ایران" : "جهانی"}
                            </span>
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-1">{study.name}</h3>
                          <p className="text-white/80 ltr">{study.nameEn}</p>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="p-6 lg:p-8">
                        {/* MVP Description */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                            <Icon icon="noto:chart-increasing" className="w-5 h-5" />
                            MVP اولیه
                          </h4>
                          <p className="text-slate-600">{study.mvpDescription}</p>
                        </div>

                        {/* Current Status */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6">
                          <p className="text-green-700 font-semibold">{study.currentStatus}</p>
                        </div>

                        {/* Timeline */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Icon icon="noto:calendar" className="w-5 h-5" />
                            تایم‌لاین رشد
                          </h4>
                          <div className="space-y-2">
                            {study.timeline.map((event, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3"
                              >
                                <span className="w-12 text-sm font-bold text-primary ltr">
                                  {event.year}
                                </span>
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-sm text-slate-600">{event.event}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Key Lessons */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Icon icon="noto:light-bulb" className="w-5 h-5" />
                            درس‌های کلیدی
                          </h4>
                          <ul className="space-y-2">
                            {study.keyLessons.map((lesson, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                  {i + 1}
                                </span>
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`رفتن به اسلاید ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
