"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cycleSegments } from "@/data/content";
import { Icon } from "@iconify/react";

const iconMap: Record<string, string> = {
  build: "noto:hammer-and-wrench",
  measure: "noto:chart-increasing",
  learn: "noto:light-bulb",
};

export function LeanCycleSection() {
  const [activeSegment, setActiveSegment] = useState<string | null>("build");

  const getActiveSegmentData = () => {
    return cycleSegments.find((s) => s.id === activeSegment) || cycleSegments[0];
  };

  return (
    <section
      id="lean-cycle"
      className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <Icon icon="noto:counterclockwise-arrows-button" className="w-5 h-5" />
            <span className="text-emerald-400 font-medium">متدولوژی Lean Startup</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            چرخه <span className="bg-gradient-to-l from-emerald-400 to-cyan-400 bg-clip-text text-transparent">ساخت-سنجش-یادگیری</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            این چرخه قلب متدولوژی Lean Startup است و به شما کمک می‌کند با حداقل هزینه و سرعت بالا یاد بگیرید
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Cycle Visualization - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Circular Cycle */}
            <div className="relative w-full max-w-md mx-auto aspect-square">
              
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-slate-600/50 animate-[spin_60s_linear_infinite]" />
              
              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border-2 border-slate-700/50" />
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-emerald-500/30"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon icon="noto:rocket" className="w-14 h-14 md:w-20 md:h-20" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Cycle Segments */}
              {cycleSegments.map((segment, index) => {
                const angles = [-90, 30, 150]; // Top, bottom-right, bottom-left
                const angle = angles[index];
                const radius = 42; // percentage from center
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                const isActive = activeSegment === segment.id;

                return (
                  <motion.button
                    key={segment.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSegment(segment.id)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    <motion.div
                      animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`relative w-24 h-24 md:w-32 md:h-32 rounded-2xl flex flex-col items-center justify-center shadow-2xl cursor-pointer transition-all duration-500 ${
                        isActive 
                          ? "ring-4 ring-white/30 ring-offset-4 ring-offset-slate-900" 
                          : "hover:ring-2 hover:ring-white/20"
                      }`}
                      style={{
                        backgroundColor: segment.color,
                        boxShadow: isActive 
                          ? `0 20px 60px -10px ${segment.color}80` 
                          : `0 10px 40px -10px ${segment.color}50`,
                      }}
                    >
                      <Icon icon={iconMap[segment.id]} className="w-10 h-10 md:w-14 md:h-14 mb-1" />
                      <span className="text-white text-sm md:text-base font-bold">
                        {segment.title}
                      </span>
                      <span className="text-white/70 text-xs ltr">
                        {segment.titleEn}
                      </span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"
                        />
                      )}
                    </motion.div>
                  </motion.button>
                );
              })}

              {/* Connecting Arrows */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <defs>
                  <marker
                    id="arrow"
                    markerWidth="8"
                    markerHeight="6"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" fill="#10b981" fillOpacity="0.6" />
                  </marker>
                </defs>
                
                {/* Build to Measure */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  d="M 58 15 Q 85 35 78 55"
                  fill="none"
                  stroke="url(#arrowGradient)"
                  strokeWidth="0.8"
                  strokeDasharray="3,2"
                  markerEnd="url(#arrow)"
                />
                
                {/* Measure to Learn */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1.0 }}
                  d="M 72 78 Q 50 95 28 78"
                  fill="none"
                  stroke="url(#arrowGradient)"
                  strokeWidth="0.8"
                  strokeDasharray="3,2"
                  markerEnd="url(#arrow)"
                />
                
                {/* Learn to Build */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  d="M 15 55 Q 22 35 42 15"
                  fill="none"
                  stroke="url(#arrowGradient)"
                  strokeWidth="0.8"
                  strokeDasharray="3,2"
                  markerEnd="url(#arrow)"
                />
                
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                </linearGradient>
              </svg>
            </div>

            {/* Cycle description text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center text-slate-400 mt-8 text-sm"
            >
              روی هر بخش کلیک کنید تا جزئیات بیشتری ببینید
            </motion.p>
          </motion.div>

          {/* Details Panel - Right Side */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSegment}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                {(() => {
                  const segment = getActiveSegmentData();
                  return (
                    <>
                      <div className="flex items-center gap-5 mb-8">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
                          style={{ 
                            backgroundColor: segment.color,
                            boxShadow: `0 10px 40px -10px ${segment.color}80`
                          }}
                        >
                          <Icon icon={iconMap[segment.id]} className="w-10 h-10" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white">
                            {segment.title}
                          </h3>
                          <p className="text-slate-400 ltr text-lg">{segment.titleEn}</p>
                        </div>
                      </div>

                      <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        {segment.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="font-bold text-white flex items-center gap-2">
                          <Icon icon="noto:check-mark-button" className="w-5 h-5" />
                          مراحل کلیدی
                        </h4>
                        {segment.steps.map((step, index) => (
                          <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/5"
                          >
                            <span
                              className="w-8 h-8 rounded-lg text-white text-sm font-bold flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: segment.color }}
                            >
                              {index + 1}
                            </span>
                            <span className="text-slate-200">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>

            {/* Quick Navigation */}
            <div className="flex gap-3 justify-center">
              {cycleSegments.map((segment) => (
                <motion.button
                  key={segment.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSegment(segment.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeSegment === segment.id
                      ? "text-white shadow-lg"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                  style={{
                    backgroundColor: activeSegment === segment.id ? segment.color : undefined,
                    boxShadow: activeSegment === segment.id ? `0 10px 30px -10px ${segment.color}80` : undefined
                  }}
                >
                  <Icon icon={iconMap[segment.id]} className="w-5 h-5" />
                  {segment.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: "noto:hourglass-not-done", value: "۲-۴ هفته", label: "میانگین زمان هر چرخه" },
            { icon: "noto:money-with-wings", value: "۷۰٪", label: "کاهش هزینه توسعه" },
            { icon: "noto:bullseye", value: "۳x", label: "افزایش شانس موفقیت" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 text-center"
            >
              <Icon icon={stat.icon} className="w-10 h-10 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default LeanCycleSection;
