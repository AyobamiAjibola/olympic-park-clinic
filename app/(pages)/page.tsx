"use client"

import Image from "next/image"
import clinicImage from "@/public/clinic-hero.png";
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
  PhoneCall,
  ArrowUpRight,
  Stethoscope,
} from "lucide-react";
import { directionsUrl, doctors, mapUrl, monFriHrs, OfficeNumber, saturdayHrs, sundayHrs } from "@/constants/helper";
import { ServicesSection } from "@/components/layout/ServicesSection";
import Link from "next/link";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import DoctorCard from "@/components/layout/DoctorCard";

type DataType = {
  title: React.ReactNode;
  icon: React.ReactNode,
  subTitle: React.ReactNode;
}

const data = [
  {
    title: <span className="font-semibold">Open 7 Days</span>,
    icon: <CalendarDays className="text-main" size={20}/>,
    subTitle: <span className="text-neutral-500 leading-4 text-sm">Including Weekends</span>
  },
  {
    title: <span className="font-semibold">Real Doctors</span>,
    icon: <Users className="text-main" size={20}/>,
    subTitle: <span className="text-neutral-500 leading-4 text-sm">Experienced family <br/>physician</span>
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
  // "Open 7 Days",
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

export default function HomePage() {

  const getStoreStatus_ = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday

    const hours = [
      { open: 10, close: 14, openText: "10:00 AM", closeText: "2:00 PM" }, // Sunday
      { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" },   // Monday
      { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" },   // Tuesday
      { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" },   // Wednesday
      { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" },   // Thursday
      { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" },   // Friday
      { open: 10, close: 16, openText: "10:00 AM", closeText: "4:00 PM" }, // Saturday
    ];

    const today = hours[day];

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const openingMinutes = today.open * 60;
    const closingMinutes = today.close * 60;

    // Before opening today
    if (currentMinutes < openingMinutes) {
      return {
        isOpen: false,
        message: `Opens Today at ${today.openText}`,
      };
    }

    // During business hours
    if (currentMinutes < closingMinutes) {
      return {
        isOpen: true,
        message: `Until ${today.closeText} Today`,
      };
    }


    // Closed, find next opening day
    const nextDay = (day + 1) % 7;
    const next = hours[nextDay];

    return {
      isOpen: false,
      message: `Opens Tomorrow at ${next.openText}`,
    };
  };

  const storeStatus = getStoreStatus_();
  
  console.log(getStoreStatus_(), 'status')
  return (
    <main>
      <section
        className="
          lg:h-screen pb-6 px-4 lg:px-12 flex 
          justify-center items-center 
          bg-main-lightest flex-col
          bg-[url('/bg.png')]
          bg-cover
          bg-center
          bg-no-repeat
          "
    >
      <div className="flex flex-col items-start justify-start gap-10 lg:flex-row lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          viewport={{ once: true, amount: 0.08 }}
          className="flex w-full flex-col items-start justify-start lg:w-[60%]"
        >
          <span className="sm:mt-4 text-sm font-semibold leading-relaxed text-main sm:text-base">
            PRIMARA OLYMPIC PARK CLINIC
          </span>

          <h1 className="text-4xl font-black leading-tight text-main sm:text-5xl lg:text-6xl">
            Family Medicine
            <br className="hidden sm:block" />
            & Walk-in Clinic
          </h1>

          <span className="my-4 text-base font-light leading-relaxed text-neutral-600 sm:text-lg">
            Compassionate care for every stage of life.
            <br className="hidden sm:block" />
            No appointment required. Walk in anytime.
          </span>

          <div className="relative w-full lg:hidden block">
            <div className="relative overflow-hidden rounded-2xl border border-main/15 bg-white p-3 shadow-2xl shadow-main/10">
              <div className="aspect-4/3 overflow-hidden rounded-3xl bg-main/10">
                <Image
                  src={clinicImage}
                  alt="Family doctors at Olympic Park Clinic"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="flex w-full flex-col gap-2 rounded-2xl bg-main p-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center justify-start gap-4">
                  <span className="relative ml-2 flex size-6 items-center justify-center md:ml-0">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                        storeStatus.isOpen ? "bg-green-400" : "bg-red-400"
                      } opacity-75`}
                    />
                    <span
                      className={`relative inline-flex size-5 rounded-full ${
                        storeStatus.isOpen ? "bg-green-500" : "bg-red-400"
                      }`}
                    />
                  </span>

                  <div className="flex flex-col items-start justify-start">
                    <p className="text-sm leading-relaxed text-white">
                      Walk-in status
                    </p>

                    <span
                      className={`text-2xl font-black leading-tight sm:text-3xl ${
                        storeStatus.isOpen ? "text-green-500" : "text-red-400"
                      }`}
                    >
                      {storeStatus.isOpen ? "OPEN NOW" : "CLOSED"}
                    </span>

                    <p className="text-xs font-semibold leading-relaxed text-white">
                      {storeStatus.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid hidden w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:pr-8">
            {data.map((d: DataType, key: number) => (
              <div
                key={key}
                className="flex min-h-20 items-center gap-3 rounded-xl bg-white p-4 shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 p-2">
                  {d.icon}
                </div>

                <div className="flex min-w-0 flex-col items-start justify-start">
                  {d.title}
                  {d.subTitle}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex w-full items-start justify-start gap-3 rounded-xl bg-main/10 px-4 py-4 shadow-sm sm:items-center">
            <HeartPulse className="h-8 w-8 shrink-0 text-main sm:h-12 sm:w-12" />

            <span className="text-sm leading-tight text-black/60 sm:text-base">
              Our experienced and friendly doctors are always ready to deliver{" "}
              <span className="font-semibold text-main">
                patient-centred, evidence-based care
              </span>{" "}
              to you and your family.
            </span>
          </div>
        </motion.div>

        <div className="relative w-full lg:w-[40%] lg:block hidden">
          <div className="relative overflow-hidden rounded-2xl border border-main/15 bg-white p-3 shadow-2xl shadow-main/10">
            <div className="aspect-4/3 overflow-hidden rounded-3xl bg-main/10">
              <Image
                src={clinicImage}
                alt="Family doctors at Olympic Park Clinic"
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="flex w-full flex-col gap-4 rounded-2xl bg-main px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center justify-start gap-4 w-[60%]">
                <span className="relative ml-2 flex size-6 items-center justify-center md:ml-0">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                      storeStatus.isOpen ? "bg-green-400" : "bg-red-400"
                    } opacity-75`}
                  />
                  <span
                    className={`relative inline-flex size-5 rounded-full ${
                      storeStatus.isOpen ? "bg-green-500" : "bg-red-400"
                    }`}
                  />
                </span>

                <div className="flex flex-col items-start justify-start">
                  <p className="text-sm leading-relaxed text-white">
                    Walk-in status
                  </p>

                  <span
                    className={`text-2xl font-black leading-tight sm:text-3xl ${
                      storeStatus.isOpen ? "text-green-500" : "text-red-400"
                    }`}
                  >
                    {storeStatus.isOpen ? "OPEN NOW" : "CLOSED"}
                  </span>

                  <p className="text-xs font-semibold leading-relaxed text-white">
                    {storeStatus.message}
                  </p>
                </div>
              </div>

              <div className="hidden h-16 w-px bg-white/20 lg:block" />

              <div className="flex items-center justify-start gap-3 w-[40%]">
                {/* <MapPin className="h-8 w-8 shrink-0 text-white sm:h-10 sm:w-10" /> */}

                <div>
                  <Button className="cursor-pointer rounded-lg bg-white text-base font-medium text-main sm:text-lg">
                    <MapPin />
                    Direction
                  </Button>

                  <p className="mt-1 text-left text-sm leading-tight text-white sm:text-base">
                    Get here easily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="flex justify-start items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true, amount: 0.08 }} 
            className="flex flex-col justify-start items-start md:w-[60%] w-full"
          >
            <div className="flex gap-1 justify-center items-center px-4 py-2 shadow-sm">
              <span
                className="text-green-500"
              >OPEN NOW</span>
              <span
                className="text-sm"
              >{storeStatus.message} </span>
            </div>
            <span className="mb-2 text-sm font-semibold leading-relaxed sm:text-base md:text-sm">
              PRIMARA OLYMPIC PARK CLINIC
            </span>

            <h1 className="text-4xl font-black leading-16 text-main sm:text-5xl lg:text-6xl">
              Family Medicine
              <br className="hidden sm:block" />
              & Walk-in Clinic
            </h1>

            <span className="my-4 font-light text-neutral-600">
              Compassionate care for every stage of life. 
              <br/> No appointment required. Walk in anytime.
            </span>

            <div className="flex w-auto gap-4 pr-0 sm:flex-wrap sm:items-center sm:justify-between md:pr-12">
              {data.map((d: DataType, key: number) => (
                <div
                  key={key}
                  className="flex h-18 items-center gap-3 sm:w-auto p-2 shadow-md rounded-xl bg-white"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 p-2">
                    {d.icon}
                  </div>

                  <div className="flex min-w-0 flex-col items-start justify-start">
                    {d.title}
                    {d.subTitle}
                  </div>
                </div>
              ))}
            </div>
            <div className="shadow-sm mt-6 flex gap-2 justify-start items-center bg-main/10 rounded-xl py-2 px-4">
              <HeartPulse className="h-12 w-12 text-main"/>
              <span className="text-base text-black/60 leading-5">
                Our experienced and friendly doctors are always ready to deliver <br/>
                <span className="font-semibold text-main">patient-centred, evidence-based care</span> 
                {" "} to you and your family
              </span>
            </div>
          </motion.div>

          <div className="relative w-[40%] md:block hidden">
            <div className="relative overflow-hidden rounded-2xl border border-main/15 bg-white p-3 shadow-2xl shadow-main/10">
              <div className="aspect-4/3 overflow-hidden rounded-3xl bg-main/10">
                <Image
                  src={clinicImage}
                  alt="Family doctors at Olympic Park Clinic"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="bg-main rounded-2xl w-full flex items-center justify-between py-4 px-5">
                <div className="flex items-center justify-start gap-4">
                  <span className="relative flex size-6 items-center justify-center ml-2 md:ml-0">
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${storeStatus.isOpen ? 'bg-green-400' : 'bg-red-400'} opacity-75`} />
                    <span className={`relative inline-flex size-5 rounded-full ${storeStatus.isOpen ? 'bg-green-500' : 'bg-red-400'}`} />
                  </span>

                  <div className="flex flex-col items-start justify-start">
                    <p className="text-sm leading-relaxed text-white">
                      Walk-in status
                    </p>
                    <span className={`text-3xl font-black leading-6 md:text-3xl ${storeStatus.isOpen ? 'text-green-500' : 'text-red-400'}`}>
                      {storeStatus.isOpen ? 'OPEN NOW' : 'CLOSED'}
                    </span>
                    {storeStatus.isOpen && <p className="text-xs leading-relaxed text-white font-semibold">
                      {storeStatus.message}
                    </p>}
                    {!storeStatus.isOpen && <p className="text-xs leading-relaxed text-white font-semibold">
                      {storeStatus.message}
                    </p>}
                  </div>
                </div>

                <div className="hidden h-[80%] w-px bg-white/20 backdrop-blur lg:block" >.</div>

                <div className="flex items-start justify-start gap-1">
                  <MapPin className="shrink-0 text-white h-10 w-10 md:h-10 md:w-10" />
                  <div>
                    <Button className="bg-white text-main cursor-pointer rounded-lg text-lg font-medium">
                      <Search />
                      Direction
                    </Button>
                    <p className="text-left text-l leading-tight text-white md:text-base">
                      Get here easily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="mt-8 w-full mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-main/10 text-main">
                  <Icon size={34} strokeWidth={2.2} />
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div> */}
      </section>
      

      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-5 -top-5 hidden h-44 w-44 rounded-2xl bg-main lg:block" />

            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/10">
              <Image
                src={clinicImage}
                alt="Olympic Park Clinic building"
                className="h-70 w-full object-cover sm:h-95 lg:h-130"
                priority
              />
            </div>

            <div className="absolute -bottom-8 -left-6 hidden grid-cols-6 gap-2 lg:grid">
              {Array.from({ length: 30 }).map((_, index) => (
                <span key={index} className="h-1 w-1 rounded-full bg-main/60" />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true, amount: 0.08 }} 
          >
            <h2 className="mt-8 text-4xl font-black leading-tight text-main sm:text-5xl lg:text-6xl">
              Why Calgary Trusts{" "}
              <span className="block text-black">Olympic Park Clinic</span>
            </h2>

            <p className="mt-2 max-w-xl text-lg leading-8 text-neutral-600 sm:text-xl">
              We are here when you need care the most.
            </p>

            <div className="mt-2 space-y-1">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-neutral-200 py-2 last:border-b-0"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main/10">
                    <Check className="text-main" size={22} strokeWidth={3} />
                  </span>

                  <span className="text-base font-medium leading-7 text-neutral-900 sm:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 md:flex-row flex-col mt-4">
              <a
                href={`tel:${OfficeNumber}`}
                className="inline-flex items-center gap-3  bg-main px-6 py-2 text-lg font-semibold text-white transition hover:opacity-90"
              >
                <Phone size={20} />
                Call: {OfficeNumber}
              </a>

              <Link
                href="/meet-our-doctors"
                className="inline-flex items-center gap-3 border-2 border-main px-6 py-2 text-lg font-semibold text-main transition hover:bg-main hover:text-white"
              >
                Get Direction
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-6 px-4 lg:px-12 flex flex-col justify-center items-center bg-main-lightest py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true, amount: 0.08 }} 
            className="flex flex-col justify-start items-start"
          >
            <h2 className="text-6xl font-bold leading-relaxed">Our <span className="text-main">Mission</span></h2>
            <span className="text-xl leading-relaxed">
              At Primara Olympic Park Clinic, our mission is to provide compassionate, 
              accessible, and patient-centered primary healthcare that empowers individuals 
              and families to achieve lifelong wellness. We are committed to delivering 
              high-quality, evidence-based medical care through prevention, early intervention, 
              and comprehensive management of acute and chronic conditions. We strive to 
              create a welcoming environment where every patient—including walk-ins, newcomers, 
              IFHP recipients, and out-of-province visitors—is treated with dignity, respect, 
              and excellence. Through collaboration, innovation, and community partnership, 
              we aim to improve health outcomes, support healthier lifestyles, and build 
              stronger, healthier communities.
            </span>

            <a
              href={`tel:${OfficeNumber}`}
              className="mt-6 inline-flex items-center gap-3  bg-main px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
            >
              <Phone size={20} />
              Call: {OfficeNumber}
            </a>
          </motion.div>
          
          <div className="relative">
            <div className="absolute -left-5 -top-5 hidden h-44 w-44 rounded-2xl bg-main lg:block" />

            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/10">
              <Image
                src={clinicImage}
                alt="Olympic Park Clinic building"
                className="h-50 w-full object-cover sm:h-75 lg:h-110"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              We <span className="text-main">Welcome You</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              We are committed to making healthcare accessible and convenient for
              everyone in our community.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {patientCards.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                key={title}
                className="flex min-h-65 flex-col items-center justify-center rounded-3xl border border-main/25 bg-main-lightest px-6 py-10 text-center shadow-lg shadow-main/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-main/10"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-main shadow-lg shadow-main/25">
                  <Icon className="text-white" size={42} strokeWidth={1.8} />
                </div>

                <h3 className="mt-8 text-2xl font-black leading-tight text-neutral-950">
                  {title}
                </h3>

                <p className="mt-5 max-w-sm text-base leading-8 text-neutral-600">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-main-lightest px-4 py-16 sm:px-6 lg:px-12 lg:py-4">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">

            <h2 className="mt-6 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Comprehensive <br/><span className="text-main">Care for You</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-neutral-600">
              We offer a wide range of medical services to support your health and
              well-being at every stage of life.
            </p>
          </div>
          <ServicesSection limit={6} />

          <div className="flex justify-center items-center">
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-3 bg-main px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight text-neutral-950 md:text-6xl">
              Family Doctors Accepting{" "}
              <span className="text-main">
                New Patients
              </span>
            </h2>

            <p className="mt-8 text-2xl font-semibold text-neutral-900">
              Looking for a family doctor in Calgary?
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-neutral-600">
              Our caring male and female doctors are accepting new patients in Calgary
              for long term, comprehensive care. Get matched with a doctor who
              listens, understands, and builds lasting relationships with your family.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {highlights.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                key={title}
                className="rounded-3xl border border-main/20 bg-white p-8 text-center shadow-lg shadow-main/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-main">
                  <Icon className="text-white" size={34} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-neutral-950">
                  {title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-neutral-600">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-28 text-center">
            <h2 className="text-4xl font-black tracking-tight text-neutral-950 md:text-6xl">
              Meet{" "}
              <span className="text-main">
                Our Doctors
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-neutral-600">
              Our diverse team of family doctors provides good care.
              Each doctor brings years of experience in family medicine, chronic
              condition management, and preventive health.
            </p>
          </div>

          <DoctorCard doctors={doctors}/>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${OfficeNumber}`}
              className="inline-flex items-center gap-3 bg-main px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
            >
              <Phone size={20} />
              Call: {OfficeNumber}
            </a>

            <Link
              href="/meet-our-doctors"
              className="inline-flex items-center gap-3 border-2 border-main px-8 py-4 text-lg font-semibold text-main transition hover:bg-main hover:text-white"
            >
              Meet Our Doctors
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-main-lightest px-4 py-10 lg:px-12">
        <h2 className="text-5xl text-center mb-8 font-bold">
          Find Us <span className="text-main">& Hours</span>
        </h2>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="overflow-hidden">
            <iframe
              title="Primara Olympic Park Pharmacy Location"
              src={mapUrl}
              className="h-130 w-full border-0 rounded-2xl"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="flex justify-start items-start flex-col">
            <div className="flex gap-6">
              <MapPin size={30} className="text-main mt-1"/>
              <div className="flex flex-col justify-center items-start">
                <span className="text-3xl font-semibold">Address</span>
                <span className="text-lg font-normal">
                  34 Canada Olympic Common SW, <br/>Calgary, AB T3H 6K4
                </span>
              </div>
            </div>
            <div className="flex gap-6 my-4">
              <Clock size={30} className="text-main mt-1" />
              <div className="flex flex-col justify-center items-start">
                <span className="text-3xl font-semibold">Hours</span>
                <p className="flex items-start gap-3 text-lg">
                  <span>{monFriHrs}</span>
                </p>
                <p className="text-lg">{saturdayHrs}</p>
                <p className="text-lg">{sundayHrs}</p>
                <p className="text-lg">Holidays: Closed</p>
              </div>
            </div>
            <div className="flex gap-6 mb-4 justify-center">
              <PhoneCall size={30} className="text-main mt-1" />
              <div className="flex flex-col justify-center items-start">
                <span className="text-3xl font-semibold">Phone</span>
                <span className="text-lg font-normal">{OfficeNumber}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-start justify-start gap-4">
              <a
                href={`tel:${OfficeNumber}`}
                className="inline-flex items-center gap-3  bg-main px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
              >
                <Phone size={20} />
                Call: {OfficeNumber}
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-main px-8 py-4 text-lg font-semibold text-main transition hover:bg-main hover:text-white"
              >
                Get Directions
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
