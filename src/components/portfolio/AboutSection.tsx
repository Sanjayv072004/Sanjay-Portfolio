import AnimatedSection from "./AnimatedSection";

const highlights = [
  { label: "Focus", value: "Actively building projects and learning" },
  { label: "Passion", value: "Passionate about building web apps" },
  { label: "Approach", value: "Eager, skilled, and ready to contribute" },
];

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8">
      <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-100">
        About Me
      </h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        <div className="h-72 rounded-3xl border border-zinc-200 bg-gradient-to-br from-blue-100 to-purple-100 p-4 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900">
          <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-zinc-400/80 text-sm font-semibold uppercase tracking-widest text-zinc-600 dark:border-zinc-500 dark:text-zinc-300">
            Profile Photo
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            I am a fresher full stack developer with a strong foundation in modern web technologies and a drive to keep
            growing through hands-on projects. I enjoy building clean, responsive applications and learning how great
            products come together from frontend polish to backend logic. I am open to internships, entry-level roles, and
            freelance opportunities where I can learn fast and deliver real value.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
