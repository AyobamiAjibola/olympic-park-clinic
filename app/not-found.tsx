"use client";

import Link from "next/link";
import { Home, SearchX } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar showWalkInStatus={false} />
      <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-white to-main-lightest px-4">
        <div className="max-w-xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              scale: {
                duration: 0.5,
                ease: "easeOut",
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="mx-auto flex h-34 w-34 items-center justify-center rounded-full bg-main/10"
          >
            <SearchX
              size={80}
              className="text-main"
              strokeWidth={1.5}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-8"
          >
            <span className="text-8xl font-black text-main">
              404
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-4xl font-black text-neutral-950"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg leading-8 text-neutral-600"
          >
            The page you are looking for may have been moved,
            deleted, or the link may be incorrect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-main px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
            >
              <Home size={20} />
              Return Home
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
