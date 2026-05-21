import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjay V | Full Stack Developer Portfolio",
  description:
    "Bold and creative full stack developer portfolio showcasing projects, skills, and services for internships, jobs, and freelance opportunities.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Development",
    "Freelance Developer",
  ],
  authors: [{ name: "Alex Carter" }],
  openGraph: {
    title: "Alex Carter | Full Stack Developer",
    description:
      "Explore projects, technical skills, and what I am building as a fresher full stack developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
