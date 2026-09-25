'use client'

import {
  Stethoscope,
  HeartPulse,
  Brain,
  Baby,
  Venus,
  ClipboardPlus,
  Pill,
  HardHat,
  Car,
  Users2,
  Bandage,
  ClipboardList,
  CirclePlus,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Care for all ages",
    description: "Newborns, children, adults and seniors.",
    icon: Users2,
    bullets: [
      "Newborn and infant care",
      "Children and adolescent care",
      "Adult healthcare",
      "Senior healthcare",
    ],
  },
  {
    title: "Preventive care",
    description: "Check-ups, screenings and immunizations.",
    icon: HeartPulse,
    bullets: [
      "Routine health check-ups",
      "Health screenings",
      "Immunizations",
      "Preventive health advice",
    ],
  },
  {
    title: "Chronic disease management",
    description: "Diabetes, hypertension and more.",
    icon: Stethoscope,
    bullets: [
      "Diabetes management",
      "Hypertension management",
      "Ongoing monitoring",
      "Personalized care plans",
    ],
  },
  {
    title: "Acute illness care",
    description: "Same-day assessment and treatment.",
    icon: Bandage,
    bullets: [
      "Same-day assessments",
      "Diagnosis and treatment",
      "Minor illness care",
      "Follow-up care",
    ],
  },
  {
    title: "Women's health",
    description: "Reproductive and lifestyle care.",
    icon: ClipboardList,
    bullets: [
      "Reproductive health",
      "Menstrual health",
      "Family planning",
      "Lifestyle care",
    ],
  },
  {
    title: "Minor procedures",
    description: "Skin, joint and other in-office procedures.",
    icon: CirclePlus,
    bullets: [
      "Skin procedures",
      "Joint procedures",
      "Minor in-office treatments",
      "Follow-up care",
    ],
  },
];

type IProps = {
  limit?: number
}

export function ServicesSection({ limit }: IProps) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {services.slice(0,limit).map(({ title, description, icon: Icon, bullets }, index) => (
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true, amount: 0.3 }}
          key={title}
          className="flex min-h-107.5 flex-col rounded-3xl border border-main/20 bg-main-lightest px-6 py-8 shadow-lg shadow-main/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-main/10"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-main shadow-lg shadow-main/25">
            <Icon className="text-white" size={42} strokeWidth={1.8} />
          </div>

          <h3 className="mt-7 text-center text-2xl font-black leading-tight text-neutral-950">
            {title}
          </h3>

          <div className="mx-auto mt-4 h-0.5 w-12 bg-main" />

          <p className="mt-5 text-left text-lg leading-7 text-neutral-600">
            {description}
          </p>

          <ul className="mt-3 space-y-2 text-left text-lg leading-7 text-neutral-800">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-main" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
