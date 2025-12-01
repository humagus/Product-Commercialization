"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { marketTestingStages } from "@/data/content";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, string> = {
  MessageCircle: "noto:speech-balloon",
  Layout: "noto:desktop-computer",
  Megaphone: "noto:loudspeaker",
  Database: "noto:card-file-box",
  BarChart3: "noto:bar-chart",
  GitBranch: "noto:herb",
  Rocket: "noto:rocket",
};

export function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !timelineRef.current) return;

    const items = timelineRef.current.querySelectorAll(".timeline-item");
    const line = timelineRef.current.querySelector(".timeline-line");

    // Animate the line drawing
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate each item
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [isInView]);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
          >
            فرآیند گام به گام
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            مراحل <span className="text-gradient">تست بازار</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            از اولین مصاحبه با مشتری تا تصمیم نهایی برای مقیاس‌پذیری
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div
            className="timeline-line absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            style={{ transform: "translateX(50%) scaleY(0)" }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {marketTestingStages.map((stage, index) => {
              const iconName = iconMap[stage.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={stage.id}
                  className={`timeline-item relative flex items-center ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-5/12 ${isEven ? "text-left pl-8" : "text-right pr-8"}`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-100 ${
                        isEven ? "rounded-tr-none" : "rounded-tl-none"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${stage.color}20` }}
                        >
                          <Icon icon={iconName} className="w-6 h-6" />
                        </div>
                        <span
                          className="text-2xl font-bold"
                          style={{ color: stage.color }}
                        >
                          {stage.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Node */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                      style={{ backgroundColor: stage.color }}
                    >
                      <Icon icon={iconName} className="w-7 h-7" />
                    </motion.div>
                  </div>

                  {/* Empty space */}
                  <div className="w-5/12" />
                </div>
              );
            })}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 40 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-xl shadow-green-500/25">
              <Icon icon="noto:rocket" className="w-10 h-10" />
              <div className="text-right">
                <p className="font-bold text-lg">آماده پرواز هستید؟</p>
                <p className="text-sm text-white/80">زمان مقیاس‌پذیری رسیده!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
