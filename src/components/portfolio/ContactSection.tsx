"use client";

import { FormEvent, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { formspreeFormId } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";

function normalizeFormspreeId(raw: string): string {
  const value = raw.trim();
  const match = value.match(/formspree\.io\/f\/([a-zA-Z0-9]+)/);
  return match ? match[1] : value;
}

const formId = normalizeFormspreeId(
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || formspreeFormId,
);

const FORMSPREE_ENDPOINT = formId ? `https://formspree.io/f/${formId}` : null;

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      setErrorMessage(
        "Form not connected. Open src/data/portfolio.ts and set formspreeFormId to your Formspree ID (from formspree.io/f/YOUR_ID). Then restart npm run dev.",
      );
      return;
    }

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
        errors?: { message: string }[];
      } | null;

      if (!response.ok) {
        const detail =
          data?.error ||
          data?.errors?.map((entry) => entry.message).join(", ") ||
          "Failed to send message";
        throw new Error(detail);
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setErrorMessage(
        message.includes("Failed to fetch")
          ? "Network error. Check your internet connection and try again."
          : `${message} Or email me directly at sanjayv072004@gmail.com.`,
      );
    }
  };

  return (
    <AnimatedSection id="contact" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8">
      <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-100">
        Contact
      </h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-xl border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full rounded-xl border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-600"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-blue-600 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-sm font-semibold text-green-600 dark:text-green-400">
              Message sent! I will get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-semibold text-red-600 dark:text-red-400">{errorMessage}</p>
          )}
        </form>
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Email</p>
          <a
            href="mailto:sanjayv072004@gmail.com"
            className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-zinc-900 transition hover:text-blue-500 dark:text-zinc-100"
          >
            <FiMail /> sanjayv072004@gmail.com
          </a>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Sanjayv072004"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-lg transition hover:border-blue-500 hover:text-blue-500 dark:border-zinc-600 dark:text-zinc-200"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-v-8704102b3/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-lg transition hover:border-blue-500 hover:text-blue-500 dark:border-zinc-600 dark:text-zinc-200"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
