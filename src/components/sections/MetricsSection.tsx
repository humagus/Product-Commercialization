"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/data/content";
import { Icon } from "@iconify/react";

const metricColors = [
  { bg: "from-blue-500 to-cyan-500", bar: "bg-blue-500" },
  { bg: "from-green-500 to-emerald-500", bar: "bg-green-500" },
  { bg: "from-orange-500 to-amber-500", bar: "bg-orange-500" },
  { bg: "from-indigo-500 to-violet-500", bar: "bg-indigo-500" },
];

function AnimatedBar({ 
  value, 
  maxValue, 
  color, 
  delay, 
  inView 
}: { 
  value: number; 
  maxValue: number; 
  color: string; 
  delay: number;
  inView: boolean;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth((value / maxValue) * 100);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, value, maxValue, delay]);

  return (
    <div className="h-8 bg-slate-100 rounded-lg overflow-hidden">
      <motion.div
        className={`h-full ${color} rounded-lg`}
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

export function MetricsSection() {
  const [activeMetric, setActiveMetric] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
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
            سنجش موفقیت
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            شاخص‌های کلیدی <span className="text-gradient">MVP</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            این معیارها به شما کمک می‌کنند تا بفهمید آیا MVP شما موفق بوده یا نه
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Metric Tabs */}
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <motion.button
                key={metric.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveMetric(index)}
                className={`w-full text-right p-4 rounded-xl transition-all duration-300 ${
                  activeMetric === index
                    ? "bg-white shadow-lg border-2 border-primary"
                    : "bg-white/50 hover:bg-white hover:shadow-md border-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metricColors[index].bg} flex items-center justify-center`}
                  >
                    {index === 0 || index === 3 ? (
                      <Icon icon="noto:chart-increasing" className="w-6 h-6" />
                    ) : (
                      <Icon icon="noto:chart-decreasing" className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{metric.name}</h3>
                    <p className="text-xs text-slate-500 ltr">{metric.nameEn}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Chart & Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeMetric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 lg:p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {metrics[activeMetric].name}
                  </h3>
                  <p className="text-slate-500 ltr">{metrics[activeMetric].nameEn}</p>
                </div>
                <div className="group relative">
                  <Icon icon="noto:information" className="w-6 h-6 cursor-help" />
                  <div className="absolute left-0 top-8 w-64 p-3 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {metrics[activeMetric].description}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6">
                {metrics[activeMetric].description}
              </p>

              {/* Formula */}
              {metrics[activeMetric].formula && (
                <div className="bg-slate-50 rounded-xl p-4 mb-6 ltr">
                  <p className="text-sm text-slate-500 mb-1 rtl">فرمول:</p>
                  <code className="text-slate-800 font-mono">
                    {metrics[activeMetric].formula}
                  </code>
                </div>
              )}

              {/* Chart */}
              <div className="space-y-4 mb-6">
                {metrics[activeMetric].data.map((point, index) => (
                  <div key={point.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{point.label}</span>
                      <span className="font-bold text-slate-900">{point.value}٪</span>
                    </div>
                    <AnimatedBar
                      value={point.value}
                      maxValue={100}
                      color={metricColors[activeMetric].bar}
                      delay={index * 0.2}
                      inView={isInView}
                    />
                  </div>
                ))}
              </div>

              {/* Benchmark */}
              <div className="bg-gradient-to-r from-primary/5 to-blue-400/5 rounded-xl p-4 border border-primary/10">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-primary">معیار موفقیت: </span>
                  {metrics[activeMetric].benchmark}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "شروع سنجش از روز اول",
              description: "از همان ابتدای MVP، سیستم‌های تحلیل را راه‌اندازی کنید",
              color: "bg-blue-500",
            },
            {
              title: "تمرکز روی یک شاخص",
              description: "در هر مرحله روی یک KPI اصلی تمرکز کنید",
              color: "bg-green-500",
            },
            {
              title: "داده را عمل کنید",
              description: "داده بدون اقدام ارزشی ندارد. تصمیم بگیرید!",
              color: "bg-orange-500",
            },
          ].map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-100"
            >
              <div className={`w-3 h-12 ${tip.color} rounded-full mb-4`} />
              <h4 className="font-bold text-slate-900 mb-2">{tip.title}</h4>
              <p className="text-sm text-slate-600">{tip.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
