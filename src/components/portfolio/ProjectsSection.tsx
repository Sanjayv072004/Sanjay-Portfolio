"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";

export default function ProjectsSection() {
  const hasProjects = projects.length > 0;

  return (
    <AnimatedSection id="projects" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8">
      <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-100">
        Projects
      </h2>
      {hasProjects ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-300 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-600 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 flex translate-y-6 items-end justify-between bg-gradient-to-t from-zinc-950/85 via-zinc-900/35 to-transparent p-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
                >
                  <FiGithub /> GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    Live Demo <FiArrowUpRight />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Coming Soon</p>
          <h3 className="mt-3 text-2xl font-black text-zinc-900 dark:text-zinc-100">
            Projects are on the way
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            I am currently building and polishing real-world full stack projects. This section is ready, and I will be
            adding project cards here soon with GitHub repositories and live demos.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
           
          </p>
        </div>
      )}
    </AnimatedSection>
  );
}
