"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { checklistItems } from "@/data/content";
import { Icon } from "@iconify/react";

export function ChecklistSection() {
  const [items, setItems] = useState(checklistItems.map(item => ({ ...item })));
  const [showCelebration, setShowCelebration] = useState(false);

  const completedCount = items.filter((item) => item.completed).length;
  const progress = (completedCount / items.length) * 100;

  useEffect(() => {
    if (completedCount === items.length && items.length > 0) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  }, [completedCount, items.length]);

  const toggleItem = (id: string) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const resetChecklist = () => {
    setItems(checklistItems.map(item => ({ ...item, completed: false })));
  };

  return (
    <section
      id="checklist"
      className="section-padding bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Celebration overlay */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-white rounded-3xl p-12 text-center max-w-md mx-4"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-xl"
              >
                <Icon icon="noto:party-popper" className="w-14 h-14" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                تبریک! آماده MVP هستید! 🎉
              </h3>
              <p className="text-slate-600">
                تمام موارد چک‌لیست را تکمیل کردید. وقت ساختن MVP است!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
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
            قبل از شروع
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            چک‌لیست <span className="text-gradient">آمادگی MVP</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            قبل از شروع ساخت MVP، مطمئن شوید این موارد را انجام داده‌اید
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900">پیشرفت شما</h3>
                <p className="text-sm text-slate-500">
                  {completedCount} از {items.length} مورد تکمیل شده
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="4"
                  />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke={progress === 100 ? "#22c55e" : "#2563eb"}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    animate={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - progress / 100) }}
                    transition={{ duration: 0.5 }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-900">
                  {Math.round(progress)}٪
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${
                  progress === 100
                    ? "bg-gradient-to-r from-green-500 to-emerald-400"
                    : "bg-gradient-to-r from-primary to-blue-400"
                }`}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Checklist Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
          >
            {items.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleItem(item.id)}
                className={`w-full p-4 flex items-start gap-4 text-right transition-all duration-200 ${
                  index !== items.length - 1 ? "border-b border-slate-100" : ""
                } ${item.completed ? "bg-green-50/50" : "hover:bg-slate-50"}`}
              >
                {/* Checkbox */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    item.completed
                      ? "bg-green-500 border-green-500"
                      : "border-slate-300 hover:border-primary"
                  }`}
                >
                  <AnimatePresence>
                    {item.completed && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h4
                    className={`font-semibold mb-1 transition-colors ${
                      item.completed ? "text-green-700 line-through" : "text-slate-900"
                    }`}
                  >
                    {item.text}
                  </h4>
                  <p
                    className={`text-sm ${
                      item.completed ? "text-green-600/70" : "text-slate-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={resetChecklist}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
            >
              <Icon icon="noto:counterclockwise-arrows-button" className="w-6 h-6" />
              شروع مجدد
            </motion.button>

            {progress === 100 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-green-500/25"
              >
                <Icon icon="noto:rocket" className="w-6 h-6" />
                آماده پرواز هستید! 🚀
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
