"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

export default function TypingText({
  texts,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout: NodeJS.Timeout;

    if (!deleting && display.length < currentText.length) {
      timeout = setTimeout(
        () => setDisplay(currentText.slice(0, display.length + 1)),
        typingSpeed,
      );
    } else if (!deleting && display.length === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(
        () => setDisplay(currentText.slice(0, display.length - 1)),
        deletingSpeed,
      );
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [deleting, display, index, texts, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="inline-block min-h-[2.5rem] text-blue-500 dark:text-cyan-400">
      {display}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}
