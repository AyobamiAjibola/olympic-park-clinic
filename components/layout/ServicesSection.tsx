'use client'

import { services } from "@/constants/helper";
import { motion } from "motion/react";

type IProps = {
  limit?: number
}

export function ServicesSection({ limit }: IProps) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {services.slice(0,limit).map(({ title, icon: Icon, points, description }, index) => (
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true, amount: 0.3 }}
          key={title}
          className="rounded-xl border border-main bg-white p-8 shadow-lg shadow-main/5 transition hover:-translate-y-1 hover:shadow-xl hover:bg-main/5 hover:shadow-main/10"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-main">
            <Icon className="text-white" size={28} />
          </div>

          <h3 className="mt-8 text-2xl font-black text-neutral-950">
            {title}
          </h3>

          <span className="text-sm text-slate-600">
            {description}
          </span>

          <ul className="mt-4 space-y-1">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-neutral-600 text-lg"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-main" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
