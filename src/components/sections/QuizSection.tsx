"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions, quizResults } from "@/data/content";
import { Icon } from "@iconify/react";

function Confetti() {
  const colors = ["#2563eb", "#16a34a", "#ea580c", "#eab308", "#06b6d4"];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: "50vw",
            y: "50vh",
            scale: 0,
            opacity: 1,
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: [0, 1, 1, 0],
            opacity: [1, 1, 1, 0],
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 0.5,
            ease: "easeOut",
          }}
          className="absolute w-3 h-3 rounded-sm"
          style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}
        />
      ))}
    </div>
  );
}

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = quizQuestions.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.score)), 0);
  const percentage = Math.round((totalScore / maxScore) * 100);

  const result = quizResults.find((r) => percentage >= r.min && percentage <= r.max) || quizResults[0];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
      if (percentage >= 61) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section
      id="quiz"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {showConfetti && <Confetti />}

      {/* Background decoration */}
      <div className="absolute inset-0">
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
            آزمون تعاملی
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            آمادگی <span className="text-gradient">MVP</span> شما چقدر است؟
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            ۸ سوال ساده برای سنجش آمادگی شما در ساخت MVP
          </p>
        </motion.div>

        {/* Quiz Card */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-500">
                      سوال {currentQuestion + 1} از {quizQuestions.length}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {Math.round(((currentQuestion) / quizQuestions.length) * 100)}٪
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                    {quizQuestions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(option.score)}
                        className="w-full p-4 text-right rounded-xl border-2 border-slate-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full border-2 border-slate-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center text-sm font-bold transition-colors">
                            {["الف", "ب", "ج", "د"][index]}
                          </div>
                          <span className="text-slate-700 group-hover:text-slate-900">
                            {option.text}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 text-center"
              >
                {/* Result Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center`}
                  style={{ backgroundColor: `${result.color}20` }}
                >
                  {percentage >= 86 ? (
                    <Icon icon="noto:trophy" className="w-14 h-14" />
                  ) : percentage >= 61 ? (
                    <Icon icon="noto:rocket" className="w-14 h-14" />
                  ) : percentage >= 31 ? (
                    <Icon icon="noto:sparkles" className="w-14 h-14" />
                  ) : (
                    <Icon icon="noto:warning" className="w-14 h-14" />
                  )}
                </motion.div>

                {/* Score */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <div className="text-5xl font-bold mb-2" style={{ color: result.color }}>
                    {percentage}٪
                  </div>
                  <p className="text-slate-500">
                    امتیاز شما: {totalScore} از {maxScore}
                  </p>
                </motion.div>

                {/* Result Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-slate-900 mb-4"
                >
                  {result.title}
                </motion.h3>

                {/* Result Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-600 mb-8 leading-relaxed"
                >
                  {result.description}
                </motion.p>

                {/* Progress Circle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="relative w-32 h-32 mx-auto mb-8"
                >
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="8"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke={result.color}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 56 * (1 - percentage / 100) }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </svg>
                </motion.div>

                {/* Retry Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  <Icon icon="noto:counterclockwise-arrows-button" className="w-6 h-6" />
                  دوباره امتحان کنید
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
