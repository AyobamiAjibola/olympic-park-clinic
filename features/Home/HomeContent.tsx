"use client"

import Image from "next/image"
import clinicImage from "@/public/primara.jpeg";
import clinicImage3 from "@/public/primara_3.jpeg";
import clinicImage2 from "@/public/primara_2.jpeg";
import { 
  CalendarDays, MapPin, 
  Phone, 
  Users,
  Check,
  UserPlus,
  PersonStanding,
  BadgePlus,
  Globe2,
  CreditCard,
  HeartPulse,
  ArrowRight,
  Clock,
  Stethoscope,
  Heart,
  Calendar,
  Footprints,
  Users2,
  HeartIcon,
  ParkingSquare,
  Clock3,
} from "lucide-react";
import {  BOOKING_LINK, directionsUrl, getStoreStatus_, getTodayHours, OfficeNumber } from "@/constants/helper";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import OpenIndicator from "@/components/OpenIndicator";
import FeatureCarousel from "@/components/FeatureCarousel";
import ServiceSection from "@/components/Services";
import DoctorsSection from "@/components/DoctorsSection";
import BgFlower from "@/public/bgFlowery.png";

type DataType = {
  title: React.ReactNode;
  icon: React.ReactNode,
  subTitle: React.ReactNode;
}

const data = [
  {
    title: <span className="font-semibold">Open 6 Days</span>,
    icon: <CalendarDays className="text-main" size={20}/>,
    subTitle: <span className="text-neutral-500 leading-4 text-sm">Mon - Sat</span>
  },
  {
    title: <span className="font-semibold">Real Doctors</span>,
    icon: <Users className="text-main" size={20}/>,
    subTitle: <span className="text-neutral-500 leading-4 text-sm">Experienced family <br/>physicians</span>
  },
  {
    title: <span className="font-semibold leading-4">Direct Billing</span>,
    icon: <CreditCard className="text-main" size={20}/>,
    subTitle: <span className="text-neutral-500 leading-6 text-sm">Most insurance plans</span>
  }
];

const patientCards = [
  {
    title: "New patients accepted",
    description: "We are always happy to welcome new patients and their families.",
    icon: UserPlus,
  },
  {
    title: "Walk-in patients accepted",
    description: "No appointment needed. Walk in and see a doctor.",
    icon: PersonStanding,
  },
  {
    title: "IFHP patients accepted",
    description: "We accept the Interim Federal Health Program (IFHP).",
    icon: BadgePlus,
  },
  {
    title: "Out-of-province patients accepted (except Quebec)",
    description:
      "We welcome patients from other provinces. Quebec patients are not accepted at this time.",
    icon: Globe2,
  },
  {
    title: "Private/self-pay patients accepted (no health card required)",
    description:
      "No Alberta health card? No problem. We offer self-pay options for your convenience.",
    icon: CreditCard,
  },
];

const items = [
  "Long-term family doctor care",
  "Same-day walk-in visits",
  "Preventive and chronic disease management",
  "Women's and mental health support",
  "Experienced Family Doctors You Can Rely On"
]

const highlights = [
  {
    title: "Male & Female Doctors",
    description: "Choose a doctor you're comfortable with",
    icon: Stethoscope,
  },
  {
    title: "Family Focused Care",
    description: "Healthcare for children, adults, and seniors",
    icon: Users,
  },
  {
    title: "Comprehensive Care",
    description: "Chronic conditions, preventive health & more",
    icon: HeartPulse,
  },
];

export default function HomeContent() {

  const heroTitle = "Thoughtful care"
  const heroTitle2 = "close to home"
  const subTitle = "Compassionate, evidence-based primary care for every stage of life."

  const heroContent = [
    {
      icon: <Users color="#205090"/>,
      item: "Patients of all ages welcome"
    },
    {
      icon: <Heart color="#205090"/>,
      item: "Patients of all ages welcome"
    },
    {
      icon: <Calendar color="#205090"/>,
      item: "Patients of all ages welcome"
    }
  ]

  const mobileOpen = getTodayHours();
  const storeStatus = getStoreStatus_();
  
  return (
    <main>
      <section
        className="
          h-screen pb-6 flex 
          items-center
          bg-white relative
          overflow-hidden
          "
      >
        <div className="absolute inset-0 w-full h-full flex justify-end">
          <div className="relative h-full w-full md:w-[50%]">
            <Image
              src={clinicImage}
              alt="Clinic"
              className="h-full w-full object-fill"
            />
            <div 
              className="
                absolute
                bottom-20
                left-1/2
                -translate-x-1/2
                flex-col
                gap-4
                rounded-2xl
                bg-white shadow-md
                py-2 px-8
                md:block hidden
              "
            >
              <OpenIndicator />
            </div>
          </div>
          <div className="absolute h-full w-full md:hidden block bg-black/50">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true, amount: 0.08 }}
              className="h-full justify-start w-full bg-transparent flex flex-col px-6 mt-16"
            >
              <span className="font-black text-[40px] text-white text-left leading-[1.05]">{heroTitle},{" "}
              <span className="font-black text-[40px] text-white text-left leading-[1.05]">{heroTitle2}.</span></span>
              <span className="text-lg text-white text-left leading-5 mt-2">{subTitle}</span>

              <div className="mt-8 flex w-full flex-col">
                <Button className="flex flex-1 items-center bg-main-light p-4 rounded-xl"
                  onClick={() =>
                    window.open(BOOKING_LINK, "_blank")
                  }
                >
                  <Calendar className="w-5! h-5! shrink-0" color="white"/>
                  <span className="text-white text-lg font-semibold">Book an Appointment</span>
                  <ArrowRight color="white" className="w-5! h-5! shrink-0"/>
                </Button>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <a
                    href="tel:4039005551"
                    className="
                      flex h-13 items-center justify-center gap-2
                      rounded-xl border-2 border-white
                      bg-transparent
                    "
                  >
                    <Phone size={20} color="white"/>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white text-sm">Call Clinic</span>
                      <span className="text-white text-xs">403-900-5551</span>
                    </div>
                  </a>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex h-13 items-center justify-center gap-2
                      rounded-xl border-2 border-white
                      bg-transparent
                    "
                  >
                    <MapPin color="white"/>
                    <span className="font-semibold text-white text-sm">Directions</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8">
                <div
                  className="
                    overflow-hidden rounded-2xl
                    border border-white/40
                    bg-white/95
                    text-[#123B68]
                    shadow-xl
                    backdrop-blur-md
                  "
                >
                  <div className="flex items-center justify-between border-b border-gray-200 p-4">
                    <div className="flex gap-2 items-center">
                      <div className="bg-main/10 rounded-full p-2">
                        <Clock color="#205090" size={18}/>
                      </div>

                      <div className="flex flex-col items-start">
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Walk-in Status
                        </p>

                        <p className={`font-bold ${storeStatus.isOpen ? 'text-main text-[16px]' : 'text-red-600 text-lg'}`}>
                          {storeStatus.isOpen ? mobileOpen : "Closed"}
                        </p>
                      </div>
                    </div>

                    {storeStatus.isOpen && <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-2">
                      <span className="size-2 rounded-full bg-green-500" />
                      <span className="text-xs font-bold text-green-600">
                        OPEN
                      </span>
                    </div>}
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-gray-200 py-4 pl-4">
                    <div className="flex gap-2 items-start">
                      <div className="bg-main/10 rounded-full p-2">
                        <Users2 color="#205090" size={18}/>
                      </div>

                      <div className="flex flex-col items-start">
                        <p className="text-xs text-gray-500">
                          Family practice
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          Accepting new patients
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start ml-1">
                      <div className="bg-main/10 rounded-full p-2">
                        <Footprints color="#205090" size={18}/>
                      </div>

                      <div className="flex flex-col items-start">
                        <p className="text-xs text-gray-500">
                          Walk-in clinic
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          Walk-ins welcome
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        <div
          className="absolute inset-0 blur-sm md:block hidden"
          style={{
            background:
              "linear-gradient(to right, white 52%, white 35%, rgba(255,255,255,0.8) 20%, transparent 30%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          viewport={{ once: true, amount: 0.08 }}
          className="relative z-10 h-full w-[50%] px-8 md:flex hidden bg-transparent flex-col justify-start items-start"
        >
          <span className="font-black text-[60px] text-main tracking-[-0.03em] mt-20 mb-4 leading-[1.05]">{heroTitle}, {" "}
          <span className="font-black text-[60px] text-main-light mb-5 tracking-[-0.03em] leading-[1.05]">{heroTitle2}.</span></span>
          <span className="text-xl text-main mt-1 md:w-[80%]">
            Compassionate, evidence-based primary care for every stage of life.
          </span>

          <div className="w-full flex gap-2 mt-12">
            <Button className="flex flex-1 items-center bg-main-light p-6 rounded-xl border border-main-light">
              <Phone color={"white"}/>
              <span className="text-white text-lg font-semibold">
                {OfficeNumber}
              </span>
            </Button>
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center bg-transparent border border-solid border-main p-2 rounded-xl hover:bg-white/60">
              <MapPin color={"#205090"} />
              <span className="text-main text-lg font-semibold">
                Get Direction
              </span>
            </a>
          </div>

          <div 
            className="
              bottom-1/4 w-full flex 
              flex-wrap
              md:mt-12 items-start
            "
          >
            {
              heroContent.map((item, index) => 
                <div key={index} 
                  className={`flex-1 basis-[30%] min-w-42.5 gap-2 px-4 flex items-start flex-col
                    ${index === 1 ? 'border-l border-r border-l-gray-200 border-r-gray-200' : ''}`}
                >
                  <div className="text-[80px]">{item.icon}</div>
                  <span className="text-main leading-[1.05] text-base">{item.item}</span>
                </div>
              )
            }
          </div>
        </motion.div>
      </section>
      
      <FeatureCarousel />
      <ServiceSection />

      <DoctorsSection limit={2} />

      <div className="relative flex w-full min-h-24 mb-6">
        <Image
          src={BgFlower}
          alt="inclusive"
          fill
          className="object-cover z-0"
        />

        <div className="relative z-10 flex items-center py-4 px-6 gap-2">
          <Heart color="#0D93AF" fill="#0D93AF" className="md:h-12! md:w-12! h-16! w-16!"/> 
          <div className="flex flex-col">
            <span className="font-bold md:text-sm text-xs">Inclusive care for a healthier community</span>
            <span className="md:text-sm text-xs">
              We welcome patients of all backgrounds, cultures, identities
              and life stages. Everyone belongs here.
            </span>
          </div>
        </div>
      </div>

      <section className="w-full bg-white px-5 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-main-light">
              Hours & Location
            </p>

            <h2 className="text-3xl font-black tracking-tight text-main md:text-2xl">
              Convenient care in Southwest Calgary
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div className="grid grid-cols-2 gap-3">
              <Image
                src={clinicImage2}
                alt="Primara Olympic Park Medical Clinic entrance"
                className="h-full min-h-60 w-full rounded-xl object-cover"
              />

              <Image
                src={clinicImage3}
                alt="Primara Olympic Park Medical Clinic and pharmacy"
                className="h-full min-h-60 w-full rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col gap-7 lg:border-r lg:border-gray-200 lg:pr-8">
              
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 size-7 shrink-0 text-main-light"
                  strokeWidth={2}
                />

                <div>
                  <h3 className="font-bold text-main">
                    Primara Olympic Park Medical Clinic
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    34 Canada Olympic Common SW
                    <br />
                    Calgary, AB T3H 6K4
                  </p>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-main-light"
                  >
                    Get Directions
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ParkingSquare
                  className="mt-1 size-7 shrink-0 text-main-light"
                  strokeWidth={2}
                />

                <div>
                  <h3 className="font-bold text-main">
                    Free parking
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    Ample on-site parking for our patients.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock3
                className="mt-1 size-7 shrink-0 text-main-light"
                strokeWidth={2}
              />

              <div className="w-full">
                <h3 className="mb-4 font-bold text-main">
                  Clinic Hours
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-6">
                    <span className="text-gray-600">
                      Monday – Friday
                    </span>

                    <span className="whitespace-nowrap font-medium text-main">
                      9:00 AM – 7:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span className="text-gray-600">
                      Saturday
                    </span>

                    <span className="whitespace-nowrap font-medium text-main">
                      10:00 AM – 4:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span className="text-gray-600">
                      Sunday & holidays
                    </span>

                    <span className="font-medium text-main">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
