'use client'

import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  HeartPulse,
  Phone,
  ShieldCheck,
  UserRoundPlus,
  Users
} from "lucide-react";
import { ServicesSection } from "@/components/layout/ServicesSection";
import { OfficeNumber } from "@/constants/helper";
import Link from "next/link";

const highlights = [
  {
    title: "Accepting New Patients",
    description: "Register with our experienced family physicians.",
    icon: UserRoundPlus,
  },
  {
    title: "Walk In Available",
    description: "Get care when you need it without waiting weeks.",
    icon: Clock,
  },
  {
    title: "Family Focused Care",
    description: "Healthcare for children, adults, and seniors.",
    icon: Users,
  },
];


export default function page() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-[#f4f8ff] via-white to-[#eaf2fb] px-5 py-10 lg:px-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-main/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-main/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-main shadow-sm">
              <HeartPulse className="h-5 w-5" />
              Primara Olympic Park Clinic
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Medical Services
              <br />
              <span className="text-main">Designed Around You</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              From family medicine and preventive care to walk in visits and
              chronic disease management, our team provides compassionate,
              patient centred healthcare for every stage of life.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-main/10 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-main text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:4030000000"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-main px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/20"
              >
                <Phone className="h-5 w-5" />
                Call: {OfficeNumber}
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-main/20 bg-white px-8 py-4 font-bold text-main"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-4xl border border-main/10 bg-white p-6 shadow-2xl shadow-blue-950/10">
            <div className="rounded-3xl bg-main p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                Patient Care
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight">
                Your Health.
                <br />
                Our Commitment.
              </h2>

              <p className="mt-5 leading-7 text-white/80">
                Whether you need a routine visit, ongoing support, or quick
                same day care, Primara Olympic Park Clinic is here to help.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Male and female doctors",
                  "Family medicine services",
                  "Preventive health support",
                  "Compassionate patient care",
                  "Walk in care available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#f4f8ff] p-5">
                <CalendarCheck className="h-8 w-8 text-main" />
                <h3 className="mt-4 font-bold text-slate-950">
                  Same Day Care
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Get help when you need it.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f4f8ff] p-5">
                <ShieldCheck className="h-8 w-8 text-main" />
                <h3 className="mt-4 font-bold text-slate-950">
                  Trusted Care
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Care focused on your wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-main">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">
              Complete Care for Your Family
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore our core medical services designed to support your health,
              comfort, and long term wellness.
            </p>
          </div>

          <ServicesSection/>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-main p-8 text-white shadow-2xl shadow-blue-950/20 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60">
                Ready to Visit?
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                Get compassionate medical care when you need it.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                Whether you are looking for a family doctor or need same day
                medical attention, Primara Olympic Park Clinic is here to
                support you and your family.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="tel:4030000000"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-main"
              >
                <Phone className="h-5 w-5" />
                Call: {OfficeNumber}
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-main"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
