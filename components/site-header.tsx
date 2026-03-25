'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "framer-motion";
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
  const [isHomeHeaderVisible, setIsHomeHeaderVisible] = useState(!isHome);
  const [isInteractive, setIsInteractive] = useState(!isHome);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const visibleByDefault = !isHome;
    setIsHomeHeaderVisible(visibleByDefault);
    setIsInteractive(visibleByDefault);
  }, [isHome]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!isHome) return;

    const showThreshold = 0.12;
    const hideThreshold = 0.08;

    if (value >= showThreshold) {
      setIsHomeHeaderVisible(true);
      setIsInteractive(true);
      return;
    }

    if (value <= hideThreshold) {
      setIsHomeHeaderVisible(false);
      setIsInteractive(false);
    }
  });

  useEffect(() => {
    if (!isHeroDriven) {
      setHeroInView(false);
      return;
    }

    let animationFrame = 0;
    let observer: IntersectionObserver | null = null;
    let attempts = 0;

    const attachObserver = () => {
      const sentinel = document.getElementById("header-hero-sentinel");
      if (!sentinel) {
        if (attempts >= 60) {
          setHeroInView(false);
          return;
        }
        attempts += 1;
        animationFrame = window.requestAnimationFrame(attachObserver);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setHeroInView(entry?.isIntersecting ?? false);
        },
        { threshold: 0.25 }
      );

      observer.observe(sentinel);
    };

    attachObserver();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer?.disconnect();
    };
  }, [pathname, isHeroDriven]);

  const shouldBeTransparent = isHeroDriven && heroInView;
  const headerBackground = shouldBeTransparent
    ? "border-transparent bg-transparent backdrop-blur-none shadow-none"
    : "header-textured border-white/10 backdrop-blur-md";

  return (
    <motion.header
      key={isHome ? "site-header-home" : "site-header-page"}
      id="site-header"
      style={isHome ? { opacity: isHomeHeaderVisible ? 1 : 0 } : { opacity: 1 }}
      className={`fixed w-[100vw] inset-x-0 top-0 z-50 border-b transition-[opacity,background-color,border-color,box-shadow] duration-500 pointer-events-none ${
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
        <nav className="hidden items-center gap-x-8 lg:flex" aria-label="Navigazione principale">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <motion.div
                key={item.href}
                className="relative text-sm uppercase tracking-[0.32em] text-white/60 sm:text-xs md:text-sm xl:text-base"
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
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Chiudi menu di navigazione" : "Apri menu di navigazione"}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span
            className={`absolute h-[2px] w-5 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-current transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            className="header-textured border-t border-white/10 px-6 pb-6 pt-3 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Menu mobile"
          >
            <ul className="flex flex-col gap-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));

                return (
                  <li key={`mobile-${item.href}`}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-2 py-3 text-sm uppercase tracking-[0.24em] transition-colors ${
                        isActive ? "text-brand" : "text-white/75 hover:text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default SiteHeader;
