import TypingText from "./TypingText";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,102,255,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.18),transparent_32%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.25),transparent_34%)]" />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Portfolio 2026
        </p>
        <h1 className="text-5xl font-black leading-tight tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-zinc-100">
          Sanjay V
        </h1>
        <p className="mt-3 text-xl font-semibold text-zinc-700 dark:text-zinc-300">
          Full Stack Developer
        </p>
        <p className="mt-4 max-w-2xl text-xl font-bold sm:text-2xl">
          <TypingText
            texts={[
              "Passionate about building modern web apps.",
              "Actively building projects and learning every day.",
              "Entry-level full stack developer open to opportunities.",
            ]}
          />
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.03] hover:bg-blue-500"
          >
            View My Work
          </a>
          <a
            href="/Sanjay_V_Resume.pdf"
            download="Sanjay_V_Resume.pdf"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-8 py-3 text-sm font-extrabold uppercase tracking-wider text-zinc-900 transition hover:scale-[1.03] hover:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
