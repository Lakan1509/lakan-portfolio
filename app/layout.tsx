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
  metadataBase: new URL("https://lakan-portfolio.vercel.app"),

  title: {
    default: "Lakan Singh Degavath | Software & AI/ML Engineer",
    template: "%s | Lakan Singh Degavath",
  },

  description:
    "Portfolio of Lakan Singh Degavath, a Software & AI/ML Engineer specializing in Generative AI, LLM systems, RAG, agentic AI, distributed systems, ML infrastructure, MLOps, and production AI.",

  keywords: [
    "Lakan Singh Degavath",
    "Software Engineer",
    "AI Engineer",
    "AI/ML Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "LLM",
    "Large Language Models",
    "RAG",
    "Retrieval Augmented Generation",
    "Agentic AI",
    "Multi-Agent Systems",
    "LangGraph",
    "LangChain",
    "Python",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "AWS",
    "MLOps",
    "LLMOps",
    "Distributed Systems",
  ],

  authors: [
    {
      name: "Lakan Singh Degavath",
      url: "https://lakan-portfolio.vercel.app",
    },
  ],

  creator: "Lakan Singh Degavath",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lakan-portfolio.vercel.app",
    siteName: "Lakan Singh Degavath Portfolio",
    title: "Lakan Singh Degavath | Software & AI/ML Engineer",
    description:
      "Software & AI/ML Engineer building production AI systems, LLM applications, RAG and agentic AI platforms, distributed systems, and scalable ML infrastructure.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lakan Singh Degavath | Software & AI/ML Engineer",
    description:
      "Software & AI/ML Engineer specializing in production AI, LLM systems, RAG, agentic AI, distributed systems, and ML infrastructure.",
  },

  alternates: {
    canonical: "https://lakan-portfolio.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}