"use client";

import Image from "next/image";
import { motion } from "motion/react";
import logo from "@/public/logo.png";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <motion.div
            animate={{
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Image
              src={logo}
              alt="Olympic Park Clinic"
              className="mx-auto h-24 w-auto"
            />
          </motion.div>

          <p className="mt-8 text-lg font-medium text-neutral-500">
            Please wait...
          </p>

          <div className="mt-6 flex justify-center gap-2">
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: item * 0.15,
                }}
                className="h-3 w-3 rounded-full bg-main"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}