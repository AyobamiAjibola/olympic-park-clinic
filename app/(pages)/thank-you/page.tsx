'use client'

import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function ThankYou() {
    
    return (
        <>
            <div className="min-h-screen bg-background">
                <section className="flex min-h-screen items-center justify-center bg-linear-to-b from-white to-green-50 px-4">
                    <div className="text-center">
                        <motion.div
                        initial={{ scale: 0 }}
                            animate={{
                                scale: [0.9, 1.05, 1],
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-green-600 shadow-xl shadow-main/20"
                        >
                        <Check
                            size={90}
                            className="text-white"
                            strokeWidth={3}
                        />
                        </motion.div>

                        <motion.h1
                            initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.2,
                                duration: 0.5,
                            }}
                            className="mt-10 text-6xl font-black text-neutral-950"
                        >
                            Thank You
                        </motion.h1>

                        <motion.p
                            initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.35,
                                duration: 0.5,
                            }}
                            className="text-lg text-neutral-500"
                        >
                            We have received your submission.
                        </motion.p>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}