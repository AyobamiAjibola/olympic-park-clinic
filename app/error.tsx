"use client";

import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-white to-main-lightest px-4">
        <div className="max-w-lg text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-red-50"
          >
            <AlertCircle
              size={70}
              className="text-red-500"
              strokeWidth={1.8}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-5xl font-black text-neutral-950"
          >
            Something Went Wrong
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-neutral-600"
          >
            We&apos;re sorry, an unexpected error occurred.
            Please try again or return to the homepage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-3 bg-main px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <RefreshCw size={18} />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 border-2 border-main px-8 py-4 font-semibold text-main transition hover:bg-main hover:text-white"
            >
              <Home size={18} />
              Back Home
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
