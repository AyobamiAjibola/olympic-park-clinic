"use client";

import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Printer,
  Send,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { clinicAddress, clinicEmail, directionsUrl, fax, mapUrl, OfficeNumber } from "@/constants/helper";
import { SetStateAction, SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [fn, setFn] = useState<string>("");
  const [ln, setLn] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);
  };

  const contactReasons = [
    "General Inquiry",
    "Book an Appointment",
    "Walk In Question",
    "New Patient Registration",
    "Directions",
  ];

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "0712f490-bae9-4b1f-8a57-eadf90218db8");
    formData.append("subject", "New Contact Message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        router.push("/thank-you");
        form.reset();
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      setErrorMsg("Something went wrong. Please try again.");
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-[#f4f8ff] via-white to-[#eaf2fb] px-5 py-10 lg:px-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-main/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-main/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-main shadow-sm">
              <MessageCircle className="h-5 w-5" />
              Contact Primara Olympic Park Clinic
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              We’re Here to Help
              <br />
              <span className="text-main">You and Your Family</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Have a question, need directions, or want to speak with our team?
              Reach out to Primara Olympic Park Clinic today.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ContactInfoCard
              icon={<Phone className="h-8 w-8" />}
              title="Call Us"
              description="Speak directly with our clinic team."
              value={OfficeNumber}
              href={`tel:${OfficeNumber}`}
            />

            <ContactInfoCard
              icon={<MapPin className="h-8 w-8" />}
              title="Visit Us"
              description="Find us easily at Olympic Park."
              value="Calgary, Alberta"
              href="#location"
            />

            <ContactInfoCard
              icon={<Clock className="h-8 w-8" />}
              title="Clinic Hours"
              description="Open throughout the week."
              value="Mon to Fri, 9 AM to 7 PM"
              href="#hours"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-4xl bg-main p-8 text-white shadow-2xl shadow-blue-950/20 lg:p-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60">
              Get in Touch
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Contact Information
            </h2>

            <p className="mt-5 leading-7 text-white/80">
              Our friendly clinic team is ready to support you with appointment
              questions, walk in information, directions, and general inquiries.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <InfoRow
                icon={<Phone />}
                title="Phone"
                text={OfficeNumber}
              />

              <InfoRow
                icon={<Printer />}
                title="Fax"
                text={fax}
              />

              <InfoRow
                icon={<Mail />}
                title="Email"
                text={clinicEmail}
              />

              <InfoRow
                icon={<MapPin />}
                title="Address"
                text={clinicAddress}
              />
            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-5">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-7 w-7 shrink-0" />
                <p className="leading-7 text-white/85">
                  For medical emergencies, please call 911 or visit the nearest
                  emergency department.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-4xl border border-main/10 bg-white p-6 shadow-2xl shadow-blue-950/10 lg:p-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-main">
              Send a Message
            </p>

            <h2 className="mt-4 text-3xl font-black text-slate-950">
              How can we help?
            </h2>

            <p className="mt-4 text-slate-600">
              Fill out the form below and our clinic team will get back to you.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput 
                  label="First Name" 
                  placeholder="Your first name" 
                  value={fn}
                  setValue={setFn}
                />
                <FormInput 
                  label="Last Name" 
                  placeholder="Your last name" 
                  value={ln}
                  setValue={setLn}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                  label="Phone Number"
                  placeholder="Your phone number"
                  type="tel"
                  value={phone}
                  setValue={setPhone}
                />

                <FormInput
                  label="Email Address"
                  placeholder="Your email address"
                  type="email"
                  value={email}
                  setValue={setEmail}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-800">
                  Reason for Contact
                </label>

                <select 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-700 outline-none transition focus:border-main focus:ring-4 focus:ring-main/10"
                >
                  {contactReasons.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-800">
                  Message
                </label>

                <textarea
                  value={message}
                  onChange={handleMessageChange}
                  rows={5}
                  placeholder="Write your message here"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-4 text-slate-700 outline-none transition focus:border-main focus:ring-4 focus:ring-main/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-main px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-main/90 sm:w-auto"
              >
                {loading
                  ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )
                }
              </button>
              {errorMsg && <p className="text-sm text-slate-500 mt-4">
                {errorMsg}
              </p>}
            </form>
          </motion.div>
        </div>
      </section>

      <section id="hours" className="bg-[#f4f8ff] px-5 py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-main">
              Clinic Hours
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-950">
              Visit During Our Opening Hours
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              We offer convenient hours throughout the week to support your
              family’s healthcare needs.
            </p>
          </div>

          <div className="rounded-4xl bg-white p-6 shadow-xl shadow-blue-950/5">
            <HourRow day="Monday to Friday" time="9:00 AM — 7:00 PM" />
            <HourRow day="Saturday" time="10:00 AM — 4:00 PM" />
            <HourRow day="Sunday" time="10:00 AM — 2:00 PM" noBorder />
          </div>
        </div>
      </section>

      <section id="location" className="px-5 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl border border-main/10 bg-white shadow-2xl shadow-blue-950/10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-main p-8 text-white lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60">
                Location
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Find Primara Olympic Park Clinic
              </h2>

              <p className="mt-5 leading-7 text-white/80">
                We are conveniently located in Calgary and easy to access for
                individuals and families in the surrounding community.
              </p>

              <Link
                href={directionsUrl}
                target="_blank"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-main"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </Link>
            </div>

            <div className="min-h-90 bg-[#eaf2fb]">
              <iframe
                title="Primara Olympic Park Clinic Map"
                src={mapUrl}
                className="h-100 w-full border-0 rounded-2xl"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactInfoCard({
  icon,
  title,
  description,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  href?: string;
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.2 }}
      className="hover:bg-main-lightest h-full rounded-3xl border border-main/10 bg-white p-6 text-center shadow-lg shadow-main/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-main/10"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-main text-white shadow-lg shadow-main/20">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <p className="mt-4 font-bold text-main">{value}</p>
    </motion.div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

function InfoRow({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-main">
        {icon}
      </div>

      <div>
        <p className="font-bold">{title}</p>
        <p className="mt-1 leading-6 text-white/80">{text}</p>
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

function FormInput({
  label,
  placeholder,
  type = "text",
  value,
  setValue
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-800">
        {label}
      </label>

      <input
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
        className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-700 outline-none transition focus:border-main focus:ring-4 focus:ring-main/10"
      />
    </div>
  );
}

function HourRow({
  day,
  time,
  noBorder,
}: {
  day: string;
  time: string;
  noBorder?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-5 ${
        noBorder ? "" : "border-b border-slate-100"
      }`}
    >
      <span className="font-bold text-slate-950">{day}</span>
      <span className="text-right font-semibold text-main">{time}</span>
    </div>
  );
}