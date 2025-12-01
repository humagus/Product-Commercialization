"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import gsap from "gsap";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const titleText = "MVP چیست؟ چرا ۹۰٪ استارتاپ‌ها بدون MVP شکست می‌خورند؟";
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < titleText.length) {
        setDisplayText(titleText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Floating particles animation
  useEffect(() => {
    if (!particlesRef.current) return;

    const particles = particlesRef.current.children;
    
    gsap.to(particles, {
      y: "random(-100, 100)",
      x: "random(-50, 50)",
      rotation: "random(-180, 180)",
      duration: "random(4, 8)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        from: "random",
      },
    });
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("statistics");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingShapes = [
    { size: "w-20 h-20", color: "from-primary/20 to-blue-400/20", delay: 0 },
    { size: "w-32 h-32", color: "from-secondary/20 to-green-400/20", delay: 1 },
    { size: "w-16 h-16", color: "from-accent/20 to-orange-400/20", delay: 2 },
    { size: "w-24 h-24", color: "from-primary/15 to-cyan-400/15", delay: 1.5 },
    { size: "w-12 h-12", color: "from-secondary/15 to-emerald-400/15", delay: 0.5 },
    { size: "w-28 h-28", color: "from-accent/15 to-amber-400/15", delay: 2.5 },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Floating geometric shapes */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: shape.delay, duration: 0.8 }}
            className={`absolute ${shape.size} rounded-full bg-gradient-to-br ${shape.color} blur-xl`}
            style={{
              left: `${15 + index * 15}%`,
              top: `${20 + (index % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-custom text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <Icon icon="noto:sparkles" className="w-5 h-5" />
          <span className="text-sm text-white/80">
            درس ۷ - تجاری‌سازی محصول
          </span>
        </motion.div>

        {/* Main title with typewriter effect */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight min-h-[3em] md:min-h-[2.5em]"
        >
          {displayText}
          <span className="inline-block w-1 h-8 md:h-12 bg-primary animate-blink mr-1" />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          راهنمای کامل{" "}
          <span className="text-primary font-semibold">Minimum Viable Product</span>{" "}
          و تست بازار | مهندس عفیفه السادات قافله‌باشی | دانشگاه آزاد اسلامی قزوین
        </motion.p>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: "noto:high-voltage", text: "کاهش ریسک" },
            { icon: "noto:bullseye", text: "اعتبارسنجی سریع" },
            { icon: "noto:sparkles", text: "صرفه‌جویی در زمان" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
            >
              <Icon icon={item.icon} className="w-6 h-6" />
              <span className="text-white/80">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNext}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
        >
          <Icon icon="noto:rocket" className="w-6 h-6" />
          <span>شروع سفر MVP</span>
          <Icon icon="solar:alt-arrow-down-bold" className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          
          {/* Animated border */}
          <span className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:scale-105 group-hover:opacity-0 transition-all duration-300" />
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-white/50">اسکرول کنید</span>
          <Icon icon="solar:alt-arrow-down-bold" className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
