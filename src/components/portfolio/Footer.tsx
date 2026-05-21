import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-5 py-8 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          © {new Date().getFullYear()} Sanjay V. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Sanjayv072004"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 transition hover:border-blue-500 hover:text-blue-500 dark:border-zinc-700 dark:text-zinc-300"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjay-v-8704102b3/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 transition hover:border-blue-500 hover:text-blue-500 dark:border-zinc-700 dark:text-zinc-300"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
