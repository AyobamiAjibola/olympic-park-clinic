'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import Image from "next/image";
import logo from "@/public/logo.png";
import { doctors, OfficeNumber } from "@/constants/helper";
import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  HeartPulse,
  Phone,
  ShieldCheck,
  Baby,
  Stethoscope,
  Activity,
  ChevronRight,
  FileUp,
  UserCheck,
} from "lucide-react";

import clinicImage from "@/public/clinic-hero.png";
import doctorsImage from "@/public/clinic-hero.png";

const steps = [
  {
    number: "1",
    title: "Call 587-391-8188",
    description:
      "Extension 4. Follow the instructions to register with a family doctor.",
    icon: Phone,
  },
  {
    number: "2",
    title: "Submit Your Request",
    description:
      "Send us your details so our team can verify your information and begin your registration.",
    icon: FileUp,
  },
  {
    number: "3",
    title: "We’ll Contact You Shortly",
    description:
      "Our team will reach out as soon as possible to connect you with a family doctor of your choice.",
    icon: UserCheck,
  },
];

const benefits = [
  "Accepting new patients",
  "Open 7 days a week",
  "Walk-ins welcome",
  "Male and female doctors",
  "Multiple languages",
  "Convenient Calgary location",
];

const services = [
  {
    title: "Preventive & Routine Care",
    icon: ShieldCheck,
    points: [
      "Annual physical exams",
      "Blood pressure and diabetes management",
      "Health screening and lab follow-ups",
    ],
  },
  {
    title: "Women’s Health",
    icon: HeartPulse,
    points: [
      "Pap tests and cervical screening",
      "Prenatal care",
      "Menopause support",
      "UTIs, yeast infections, and hormonal care",
    ],
  },
  {
    title: "Children’s Health",
    icon: Baby,
    points: [
      "Immunizations",
      "Checkups and growth monitoring",
      "Asthma and allergy management",
    ],
  },
  {
    title: "Men's Health",
    icon: Activity,
    points: [
      "Prostate health, cholesterol, heart checks",
      "Stress and sleep issues",
    ],
  },
  {
    title: "Chronic Conditions",
    icon: Stethoscope,
    points: [
      "Diabetes, hypertension, asthma, thyroid issues",
      "Regular medication renewals and monitoring",
    ],
  },
];

export default function FamilyDoctor() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-main-lightest px-4 py-10 sm:px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          viewport={{ once: true, amount: 0.08 }}
          className="mx-auto max-w-7xl items-center gap-14"
        >
          <div className="flex justify-center items-center flex-col">
            <span className="inline-flex rounded-full bg-main/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-main">
              Accepting New Patients
            </span>

            <h1 className="mt-4 max-w-3xl text-center text-4xl font-black  text-neutral-950 sm:text-5xl lg:text-6xl">
              Family Doctors in Calgary Accepting{" "}
              <span className="text-main">New Patients Now</span>
            </h1>

            <p className="mt-4 text-2xl font-semibold text-neutral-800 text-center">
              Male and Female Family Doctors
            </p>

            <p className="mt-4 text-xl text-center text-neutral-600 md:w-[60%]">
              Looking for a family doctor you can trust? Our caring physicians
              provide long-term, comprehensive care for individuals and families,
              with walk-ins welcome and convenient access throughout the week.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3  bg-main px-7 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Walk In Now
                <ArrowUpRight size={20} />
              </Link>

              <a
                href={`tel:${OfficeNumber}`}
                className="inline-flex items-center justify-center gap-3  border-2 border-main px-7 py-4 font-semibold text-main transition hover:bg-main hover:text-white"
              >
                <Phone size={20} />
                Call: {OfficeNumber}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-3xl bg-main/10" />

            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-main/10">
              <Image
                src={clinicImage}
                alt="Olympic Park Clinic"
                className="h-105 w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black leading-tight text-neutral-950 sm:text-5xl">
              Your Family’s Health,{" "}
              <span className="text-main">In Good Hands</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Finding a doctor who truly listens should not be difficult. Our
              experienced family doctors provide continuous care focused on your
              medical history, lifestyle, and long-term health goals.
            </p>

            <p className="mt-5 text-lg font-semibold leading-8 text-neutral-800">
              We are accepting new patients from across Calgary, including
              adults, seniors, and children.
            </p>

            <a
              href={`tel:${OfficeNumber}`}
              className="mt-8 inline-flex items-center gap-3 bg-main px-7 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <Phone size={20} />
              Call: {OfficeNumber}
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black leading-tight text-neutral-950 sm:text-5xl">
              Why Choose{" "}
              <span className="text-main">Primara Olympic Park Clinic</span>
            </h2>

            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-main/10">
                    <Check className="text-main" size={18} />
                  </span>

                  <p className="text-lg font-medium text-neutral-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-main/15 bg-white p-3 shadow-xl shadow-main/10">
            <Image
              src={clinicImage}
              alt="Clinic location"
              className="h-105 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-10 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black text-neutral-950 sm:text-5xl">
              Meet <span className="text-main">Our Doctors</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Our caring physicians provide family medicine, chronic condition
              management, and preventive healthcare with compassion and
              professionalism.
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className='md:hidden'>
              <Swiper
                spaceBetween={24}
                slidesPerView={1}
                keyboard={{ enabled: true }}
                navigation
                modules={[Navigation, Keyboard]}
                className="w-full pb-12 [&_.swiper-slide]:h-auto [&_.swiper-slide]:flex mt-10"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                  },
                }}
              >
                {doctors.map((doctor, index) => (
                  <SwiperSlide key={index} className="h-auto mb-12">
                    <motion.article 
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="overflow-hidden rounded-3xl bg-white border border-main/20 shadow-xl shadow-main/10 transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-95">
                        <Image
                          src={doctor.image || logo}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-6">
                        <p className="text-sm font-medium text-neutral-500">
                          {doctor.role}
                        </p>

                        <div>
                          <h3 className="mt-2 text-2xl font-bold text-neutral-950">
                            {doctor.name}
                          </h3>

                          <span className="text-neutral-500">
                            {doctor.qualification}
                          </span>
                        </div>

                        <p className="mt-4 font-medium text-main">
                          {doctor.status}
                        </p>
                      </div>
                    </motion.article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden md:grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
              {doctors.map((doctor, index) => (
                <motion.article 
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="overflow-hidden rounded-3xl bg-white border border-main/20 shadow-xl shadow-main/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-95">
                    <Image
                      src={logo}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-medium text-neutral-500">
                      {doctor.role}
                    </p>

                    <div>
                      <h3 className="mt-2 text-2xl font-bold text-neutral-950">
                        {doctor.name}
                      </h3>

                      <span className="text-neutral-500">
                        {doctor.qualification}
                      </span>
                    </div>

                    <p className="mt-4 font-medium text-main">
                      {doctor.status}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={`tel:${OfficeNumber}`}
              className="inline-flex items-center gap-3 bg-main px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <Phone size={20} />
              Call: {OfficeNumber}
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black text-neutral-950 sm:text-5xl">
              Comprehensive{" "}
              <span className="text-main">Family Medicine</span>
            </h2>

            <p className="mt-5 text-xl leading-8 text-neutral-600">
              Our doctors provide ongoing care for patients of all ages and
              health backgrounds.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, icon: Icon, points }, index) => (
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
        </div>
      </section>

      <section className="relative overflow-hidden bg-main-lightest px-4 py-20 sm:px-6 lg:px-12">
        <div className="absolute right-10 top-10 hidden grid-cols-6 gap-3 lg:grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className="h-1.5 w-1.5 rounded-full bg-main/15" />
          ))}
        </div>

        <div className="absolute bottom-10 left-10 hidden grid-cols-6 gap-3 lg:grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className="h-1.5 w-1.5 rounded-full bg-main/15" />
          ))}
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-main/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-main">
              Easy & Fast
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              How to <span className="text-main">Register</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              Becoming a patient is easy. Complete a few quick steps and our team
              will help connect you with a family doctor.
            </p>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-main" />
          </div>

          <div className="relative mt-20 grid gap-12 lg:grid-cols-3">
            <div className="absolute left-[18%] right-[18%] top-24 hidden border-t-2 border-dashed border-main/30 lg:block" />

            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <div key={title} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute -right-8 top-20 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-main text-white shadow-lg shadow-main/20 lg:flex">
                    <ChevronRight size={26} />
                  </div>
                )}

                <article className="relative min-h-77.5 rounded-4xl border border-main/15 bg-white px-6 pb-8 pt-20 text-center shadow-xl shadow-main/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-main/15">
                  <span className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-main text-lg font-black text-white">
                    {number}
                  </span>

                  <div className="absolute left-1/2 top-0 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-main/10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-main shadow-lg shadow-main/25">
                      <Icon className="text-white" size={38} strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl font-black leading-tight text-neutral-950">
                    {title}
                  </h3>

                  <div className="mx-auto mt-5 h-0.5 w-14 bg-main" />

                  <p className="mx-auto mt-6 max-w-sm text-base leading-8 text-neutral-600">
                    {description}
                  </p>
                </article>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href={`tel:${OfficeNumber}`}
              className="inline-flex items-center justify-center gap-3 bg-main px-10 py-4 text-lg font-bold text-white shadow-lg shadow-main/20 transition hover:-translate-y-0.5 hover:opacity-90"
            >
              <Phone size={22} />
              Call: {OfficeNumber}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
