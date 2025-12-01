"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { statistics } from "@/data/content";
import { TrendingDown, AlertTriangle, CheckCircle, DollarSign } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, React.ElementType> = {
  "market-need": AlertTriangle,
  "startup-failure": TrendingDown,
  "mvp-success": CheckCircle,
  "cost-reduction": DollarSign,
};

const colorMap: Record<string, string> = {
  "market-need": "from-red-500 to-orange-500",
  "startup-failure": "from-red-600 to-red-400",
  "mvp-success": "from-green-500 to-emerald-400",
  "cost-reduction": "from-blue-500 to-cyan-400",
};

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="number-ltr">
      {count}
      {suffix}
    </span>
  );
}

export function StatisticsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Bars animation
  useEffect(() => {
    if (!isInView || !barsRef.current) return;

    const bars = barsRef.current.querySelectorAll(".bar-segment");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: barsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate bars growing up
    tl.to(bars, {
      scaleY: 1,
      duration: 1,
      stagger: 0.15,
      ease: "elastic.out(1, 0.5)",
    });

  }, [isInView]);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-4"
          >
            واقعیت تلخ
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            چرا استارتاپ‌ها شکست می‌خورند؟
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            آمار نشان می‌دهد که اکثر استارتاپ‌ها به دلیل نادیده گرفتن تست بازار و MVP شکست می‌خورند
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => {
            const Icon = iconMap[stat.id];
            const gradient = colorMap[stat.id];

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${gradient.includes("red") ? "#ef4444" : gradient.includes("green") ? "#22c55e" : "#3b82f6"}20, transparent)`,
                  }}
                />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Counter */}
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </div>

                  {/* Label */}
                  <h3 className="text-white font-semibold mb-2">{stat.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Breaking Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-8 text-center">
            دلایل اصلی شکست استارتاپ‌ها
          </h3>
          
          <div ref={barsRef} className="flex items-end justify-center gap-4 h-64">
            {[
              { label: "عدم نیاز بازار", value: 42, color: "bg-gradient-to-t from-red-600 to-red-400" },
              { label: "کمبود سرمایه", value: 29, color: "bg-gradient-to-t from-orange-600 to-orange-400" },
              { label: "تیم نامناسب", value: 23, color: "bg-gradient-to-t from-yellow-600 to-yellow-400" },
              { label: "رقابت شدید", value: 19, color: "bg-gradient-to-t from-blue-600 to-blue-400" },
              { label: "قیمت‌گذاری غلط", value: 18, color: "bg-gradient-to-t from-cyan-600 to-cyan-400" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2 flex-1 max-w-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`bar-segment w-full ${item.color} rounded-t-lg origin-bottom shadow-lg`}
                  style={{ 
                    height: `${item.value * 4}px`,
                    transform: "scaleY(0)",
                  }}
                />
                <span className="text-2xl font-bold text-white">{item.value}٪</span>
                <span className="text-xs text-slate-400 text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="text-center text-slate-300 mt-8 text-lg"
          >
            <span className="text-red-400 font-bold">۴۲٪</span> از شکست‌ها به خاطر{" "}
            <span className="text-red-400 font-bold">عدم نیاز بازار</span> است.
            <br />
            <span className="text-green-400">MVP می‌تواند این مشکل را حل کند!</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
