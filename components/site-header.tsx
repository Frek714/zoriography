'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/acquista", label: "Acquista" },
  { href: "/contatti", label: "Contatti" }
];

const SiteHeader = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [heroInView, setHeroInView] = useState(false);
  const isHeroDriven = pathname === "/portfolio" || pathname === "/contatti" || pathname === "/acquista";
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18], [0, 0, 1]);
  const [isInteractive, setIsInteractive] = useState(!isHome);

  useEffect(() => {
    setIsInteractive(!isHome);
  }, [isHome]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!isHome) return;
    setIsInteractive(value > 0.12);
  });

  useEffect(() => {
    if (!isHeroDriven) {
      setHeroInView(false);
      return;
    }

    const sentinel = document.getElementById("header-hero-sentinel");
    if (!sentinel) {
      setHeroInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setHeroInView(entry?.isIntersecting ?? false);
      },
      { threshold: 0.25 }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [pathname, isHeroDriven]);

  const shouldBeTransparent = isHeroDriven && heroInView;
  const headerBackground = shouldBeTransparent
    ? "border-transparent bg-transparent backdrop-blur-none"
    : "border-white/10 bg-black/70 backdrop-blur-md";

  return (
    <motion.header
      id="site-header"
      style={isHome ? { opacity: headerOpacity } : { opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 pointer-events-none ${
        headerBackground
      } ${!isHome || isInteractive ? "pointer-events-auto" : ""}`}
      data-transparent={shouldBeTransparent ? "true" : "false"}
    >
      <div
        className={`flex w-full items-center justify-between px-6 py-8 md:px-10 transition-colors duration-500 ${
          shouldBeTransparent ? "text-white" : ""
        }`}
    >
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-wide text-brand-light uppercase"
        >
          Zoriography
        </Link>
        <nav className="flex items-center gap-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <motion.div
                key={item.href}
                className="relative text-md uppercase tracking-[0.32em] text-white/60 sm:text-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Link
                  href={item.href}
                  className="block px-1 py-1 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-brand"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
