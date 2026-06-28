'use client'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation } from "swiper/modules";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "@/public/logo.png";

export type DoctorType =  {
    name: string;
    role: string;
    status: string;
    qualification: string;
    image: string;
    gender: string;
}[]

export default function DoctorCard({doctors}: {doctors: DoctorType}) {
  return (
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
        {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
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
  )
}
