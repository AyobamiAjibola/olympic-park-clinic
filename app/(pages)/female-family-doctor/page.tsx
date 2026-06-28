'use client'

import { doctors } from "@/constants/helper";
import { CalendarCheck, ChevronLeft, ChevronRight, Heart, Phone, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation } from "swiper/modules";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import logo from "@/public/logo.png";
import doctorImage from "@/public/f_doc.png";
import doctorGroupImage from "@/public/group_doc.png";
import DoctorCard from "@/components/layout/DoctorCard";

function InfoItem({
  icon,
  title,
  text,
  noBorder,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  noBorder?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 py-4 ${
        noBorder ? "" : "border-b border-gray-200"
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E4EEF9] text-main">
        {icon}
      </div>

      <h3 className="mb-2 font-bold text-main">{title}</h3>

      <p className="text-sm leading-6 text-gray-600">{text}</p>
    </div>
  );
}

export default function page() {
  return (
    <main>
        <section className="relative min-h-screen overflow-hidden bg-main-lightest px-6 lg:px-12">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div>
                    <div className="my-6 inline-flex items-center gap-3 rounded-full bg-white px-3 py-1 shadow-sm">
                        <Users className="h-5 w-5 text-main" />
                        <span className="font-semibold text-main text-xs">
                            New Patients Welcome
                        </span>
                    </div>

                    <h1 className="max-w-2xl text-4xl font-black leading-tight text-black md:text-5xl">
                        <span className="text-main">Female Family Doctor</span>
                        <br />
                        in Calgary Accepting New Patients Now
                    </h1>

                    <div className="mt-2 h-1 w-24 rounded-full bg-main" />

                    <p className="mt-6 text-xl font-bold text-gray-700">
                        Looking for a compassionate, experienced female physician?
                    </p>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        Our female family doctors provide personalized care for women,
                        children and families with same day access and flexible hours.
                    </p>

                    <div className="mt-5 flex max-w-xl items-start gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-main">
                            <Heart className="h-7 w-7 text-white" />
                        </div>

                        <p className="text-xl leading-8 text-gray-600">
                            <span className="font-bold text-gray-700">
                                Comfort, understanding, and expert care
                            </span>
                            <br />
                            from doctors who truly listen.
                        </p>
                    </div>
                </div>

                <div className="relative- h-full mt-6">
                    <div className="relative overflow-hidden rounded-[4rem] bg-white shadow-2xl">
                        <Image
                            src={doctorImage}
                            alt="Female family doctor in Calgary"
                            className="h-120 w-full object-cover"
                            priority
                        />

                        <div className="absolute bottom-4 right-10 w-72 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
                            <InfoItem
                                icon={<Users className="h-5 w-5 text-main" />}
                                title="Family Care"
                                text="For all ages"
                            />
                            <InfoItem
                                icon={<ShieldCheck className="h-5 w-5 text-main" />}
                                title="Personalized Care"
                                text="Your health, our priority"
                                noBorder
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white px-4 py-20 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-black">
                        Meet Our{" "}
                        <span className="text-main">
                        Female Family Physician
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-neutral-600">
                        Our female physicians provide comprehensive family medicine in a
                        supportive and comfortable environment.
                    </p>
                </div>

                <DoctorCard doctors={doctors.filter(d => d.gender === "female")}/>
            </div>
        </section>

        <section className="bg-[#F4F8FD] px-5 py-16 lg:px-20">
            <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 justify-start">
                <div className="relative overflow-hidden rounded-4xl bg-[#EAF3FC] shadow-sm">
                    <div className="absolute left-8 top-10 h-[80%] w-[80%] rounded-full border-18 border-white/70" />

                    <div className="relative z-10">
                        <Image
                            src={doctorGroupImage}
                            alt="Female doctor with patients"
                            className="h-auto w-full object-contain"
                            priority
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-black text-[#111827] sm:text-5xl lg:text-6xl">
                        <span className="text-main">Your Health,</span>
                            <br />
                            Your Comfort,
                            <br />
                            Your Doctor
                    </h2>

                    <div className="mt-8 h-1 w-24 rounded-full bg-main" />

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                        We understand that many women prefer discussing their health with a
                        female doctor. Our physicians are here to provide compassionate,
                        respectful, and personalized care.
                    </p>

                    <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
                        <a
                            href="tel:5871234567"
                            className="inline-flex items-center justify-center gap-3 rounded-xl bg-main px-8 py-5 text-lg font-bold text-white shadow-lg shadow-blue-900/20"
                        >
                            <Phone className="h-6 w-6" />
                            Call: 587-123-4567
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
