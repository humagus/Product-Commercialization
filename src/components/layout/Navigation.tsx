"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { navItems } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map((item) => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <Icon icon="noto:graduation-cap" className="w-7 h-7" />
              </div>
              <div className="hidden sm:block">
                <p className={cn(
                  "font-bold text-sm transition-colors duration-300",
                  scrolled ? "text-slate-900" : "text-white"
                )}>
                  درس تجاری‌سازی
                </p>
                <p className={cn(
                  "text-xs transition-colors duration-300",
                  scrolled ? "text-slate-500" : "text-white/70"
                )}>
                  دانشگاه آزاد قزوین
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeSection === item.id
                      ? "bg-primary text-white"
                      : scrolled
                        ? "text-slate-600 hover:bg-slate-100"
                        : "text-white/90 hover:bg-white/10"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors duration-300",
                scrolled 
                  ? "bg-slate-100 text-slate-700" 
                  : "bg-white/10 text-white"
              )}
              aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
            >
              {isOpen ? (
                <Icon icon="solar:close-circle-bold" className="w-6 h-6" />
              ) : (
                <Icon icon="solar:hamburger-menu-bold" className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-slate-900 z-50 lg:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                      <Icon icon="noto:graduation-cap" className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">درس تجاری‌سازی</p>
                      <p className="text-xs text-slate-500">دانشگاه آزاد قزوین</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    aria-label="بستن منو"
                  >
                    <Icon icon="solar:close-circle-bold" className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                        activeSection === item.id
                          ? "bg-primary text-white"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      )}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
