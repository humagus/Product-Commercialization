"use client";

import { motion } from "framer-motion";
import { testingTools } from "@/data/content";
import { Icon } from "@iconify/react";

const iconMap: Record<string, string> = {
  FileSpreadsheet: "noto:bar-chart",
  FormInput: "noto:clipboard",
  Flame: "noto:fire",
  CreditCard: "noto:credit-card",
  ListChecks: "noto:memo",
  LineChart: "noto:chart-increasing",
};

const categoryColors: Record<string, string> = {
  "نظرسنجی": "from-blue-500 to-cyan-500",
  "تحلیل رفتار": "from-orange-500 to-red-500",
  "صفحه فرود": "from-green-500 to-emerald-500",
  "تحلیل": "from-indigo-500 to-violet-500",
};

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="section-padding bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-4"
          >
            جعبه ابزار MVP
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            ابزارهای <span className="text-gradient">تست بازار</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            این ابزارها به شما کمک می‌کنند تا بدون نیاز به کدنویسی، MVP خود را تست کنید
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testingTools.map((tool, index) => {
            const iconName = iconMap[tool.icon];
            const gradient = categoryColors[tool.category];

            return (
              <motion.a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 p-6 transition-all duration-300 hover:shadow-xl"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                      <Icon icon={iconName} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 ltr">{tool.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${gradient} text-white`}>
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <Icon icon="solar:arrow-right-up-bold" className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Icon icon="noto:check-mark-button" className="w-5 h-5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="mt-4 pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm text-primary font-medium flex items-center gap-1">
                    مشاهده ابزار
                    <Icon icon="solar:arrow-right-up-bold" className="w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">ابزارهای بیشتر؟</h3>
              <p className="text-slate-300">
                صدها ابزار دیگر برای ساخت و تست MVP وجود دارد. از جمله:
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Notion", "Figma", "Webflow", "Airtable", "Zapier", "Mailchimp"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm ltr"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <motion.a
              href="https://www.producthunt.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              <span>Product Hunt</span>
              <Icon icon="solar:arrow-right-up-bold" className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
