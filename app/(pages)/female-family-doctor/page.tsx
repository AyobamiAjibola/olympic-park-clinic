'use client'

import { directionsUrl, doctors, OfficeNumber } from "@/constants/helper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation } from "swiper/modules";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function page() {
  return (
    <main>
        <section className="pb-6 px-4 lg:px-12 flex flex-col justify-center items-center bg-main-lightest">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                <div>
                    <span className="text-main text-5xl font-black">
                        Female Family Doctor
                    </span>

                    <h1 className="mt-2 text-5xl font-black leading-tight text-neutral-950">
                        in Calgary Accepting
                        <br />
                        New Patients Now
                    </h1>

                    <p className="mt-8 text-xl font-semibold text-neutral-800">
                        Looking for a compassionate, experienced female physician?
                    </p>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                        Our female family doctors provide personalized care for women,
                        children and families with same day access and flexible hours.
                    </p>

                    <p className="mt-6 text-lg font-semibold text-neutral-900">
                        Comfort, understanding, and expert care from doctors who truly
                        listen.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="tel:5873918188"
                            className="bg-main px-8 py-4 font-semibold text-white"
                        >
                            Call: {OfficeNumber}
                        </a>

                        <a
                            href={directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-main px-8 py-4 font-semibold text-main"
                        >
                            Walk In Today
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="overflow-hidden rounded-4xl shadow-2xl">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-162.5 object-cover"
                        >
                            <source src="/videos/female-doctor.mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white px-4 py-20 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                <h2 className="text-5xl font-black">
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

                <div className="relative mt-14">
                    <button className="doctor-prev absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-main/20 bg-white shadow-lg">
                        <ChevronLeft className="text-main" />
                    </button>

                    <button className="doctor-next absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-main/20 bg-white shadow-lg">
                        <ChevronRight className="text-main" />
                    </button>

                    <Swiper
                        modules={[SwiperNavigation]}
                        navigation={{
                            prevEl: ".doctor-prev",
                            nextEl: ".doctor-next",
                        }}
                        style={{ paddingBottom: '20px'}}
                        spaceBetween={24}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="px-12"
                    >
                    {doctors.filter(d => d.gender === "female").map((doctor, index) => (
                        <SwiperSlide key={doctor.name}>
                            <motion.article 
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="overflow-hidden rounded-3xl bg-white border border-main/20 shadow-xl shadow-main/10 transition-all duration-300 hover:-translate-y-1">
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
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </div>
        </section>

        <section className="bg-[#f8fbff] px-4 py-20 lg:px-12">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                <div className="relative">
                    <div className="absolute -left-6 -top-6 h-full w-full bg-main/10" />

                    <Image
                        src={logo}//{waitingRoomImage}
                        alt="Female doctors clinic"
                        className="relative"
                    />
                </div>

                <div>
                    <h2 className="text-5xl font-black leading-tight">
                        <span className="text-main">
                            Your Health,
                        </span>
                        <br />
                            Your Comfort,
                        <br />
                        Your Doctor
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-neutral-600">
                        We understand that many women prefer discussing their health with a
                        female doctor. Our physicians are here to provide compassionate,
                        respectful, and personalized care.
                    </p>

                    <a
                        href="tel:5873918188"
                        className="mt-8 inline-block bg-main px-8 py-4 font-semibold text-white"
                    >
                        Call: {OfficeNumber}
                    </a>
                </div>
            </div>
        </section>
    </main>
  )
}
