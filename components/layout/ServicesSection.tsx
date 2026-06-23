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
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Acute & chronic disease management",
    description:
      "Expert care for short-term illnesses and long-term health conditions.",
    icon: Stethoscope,
    bullets: [
      "Diagnosis and treatment",
      "Chronic condition management",
      "Ongoing monitoring",
      "Personalized care plans",
    ],
  },
  {
    title: "Preventive healthcare & lifestyle advice",
    description:
      "Helping you stay healthy through prevention and informed lifestyle choices.",
    icon: HeartPulse,
    bullets: [
      "Health risk assessments",
      "Nutrition and exercise advice",
      "Vaccinations",
      "Lifestyle counselling",
    ],
  },
  {
    title: "Mental health care",
    description:
      "Compassionate support for your mental and emotional well-being.",
    icon: Brain,
    bullets: [
      "Anxiety and depression support",
      "Stress management",
      "Mental health assessments",
      "Referrals to specialists",
    ],
  },
  {
    title: "Routine antenatal care",
    description:
      "Comprehensive care for a healthy pregnancy and peace of mind.",
    icon: Baby,
    bullets: [
      "Prenatal checkups",
      "Baby development monitoring",
      "Nutrition guidance",
      "Pregnancy education",
    ],
  },
  {
    title: "Women’s & reproductive health",
    description:
      "Personalized care for every stage of a woman’s health journey.",
    icon: Venus,
    bullets: [
      "Menstrual health",
      "Family planning",
      "Menopause support",
      "Gynecological care",
    ],
  },
  {
    title: "Annual health checks",
    description:
      "Stay on top of your health with regular checkups and early detection.",
    icon: ClipboardPlus,
    bullets: [
      "Physical examinations",
      "Health screenings",
      "Blood work and lab tests",
      "Early risk detection",
    ],
  },
  {
    title: "Medication refills",
    description:
      "Easy and convenient prescription refill services to keep you on track.",
    icon: Pill,
    bullets: [
      "Prescription renewals",
      "Medication reviews",
      "Dosage adjustments",
      "Pharmacy coordination",
    ],
  },
  {
    title: "Workplace injury (WCB care)",
    description:
      "Specialized care for work-related injuries and return-to-work support.",
    icon: HardHat,
    bullets: [
      "Injury assessment",
      "WCB documentation",
      "Rehabilitation support",
      "Return-to-work planning",
    ],
  },
  {
    title: "Driver’s medical examinations",
    description:
      "Certified medical exams for licensing and road safety compliance.",
    icon: Car,
    bullets: [
      "Class 1, 2, 3 and 4 exams",
      "Commercial driver exams",
      "Vision and health assessments",
      "Official medical reports",
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
