"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8">
      <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-100">
        Skills
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <h3 className="text-lg font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              {group.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08 }}
                  className="rounded-full border border-blue-500/30 bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
