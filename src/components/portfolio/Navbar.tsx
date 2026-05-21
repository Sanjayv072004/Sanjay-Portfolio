"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 80);
      setLastY(currentY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-zinc-200/60 bg-white/75 backdrop-blur-md transition-transform duration-300 dark:border-zinc-800 dark:bg-zinc-950/70 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#hero"
          className="text-lg font-black uppercase tracking-widest text-zinc-900 dark:text-zinc-100"
        >
          Sanjay V
        </a>
        <div className="flex items-center gap-4 md:gap-7">
          <ul className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wide text-zinc-700 transition hover:text-blue-500 dark:text-zinc-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
