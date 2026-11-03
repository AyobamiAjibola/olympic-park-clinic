"use client";

import { Phone, CheckCircle2, FileUp, UserCheck, ChevronRight } from "lucide-react";
import { useSetAtom } from "jotai";
import { appointments } from "@/lib/atoms";
import { BOOKING_LINK } from "@/constants/helper";

const serviceItems = [["Women's health", "pap tests, prenatal care, menopause support and more."], ["Checkups and screening", "annual physical exams, blood pressure and diabetes management, health screening and lab follow-ups."], ["Children's health", "immunizations, checkups and growth monitoring, asthma and allergy management."], ["Mental health support", "anxiety, depression and low mood, stress and burnout, and sleep difficulties."], ["Chronic conditions", "diabetes, high blood pressure and cholesterol, asthma and COPD, thyroid disorders, and medication reviews."]];
const clinicDetails = [["Hours", "Monday to Friday, 9 AM to 7 PM. Saturday, 10 AM to 4 PM. Closed Sundays and holidays."], ["Location", "34 Canada Olympic Common SW, Calgary, at Canada Olympic Park in NW Calgary. Free parking."], ["The whole family", "Primara has male and female family physicians and welcomes patients of all life stages. Walk-ins are welcome based on daily availability. Please call the clinic before coming in to confirm the current wait time."]];
const questions = [["Is there a female doctor at Primara?", "Yes. Dr. Lynder Alole is a female family physician here."], ["Is Dr. Alole accepting new patients?", "Yes. Call 403-900-5551 to register with her."], ["How do I book a visit with her?", "Call 403-900-5551 and ask for Dr. Alole."], ["Are you open on weekends?", "Saturdays, 10 AM to 4 PM. We're closed on Sundays."], ["Is this an emergency clinic?", "No. For medical emergencies, call 911 or go to the nearest emergency department."]];
const steps = [{"number": "1", "title": "Call 403-900-5551.", "description": "Follow the instructions to register with a family doctor, and ask for Dr. Alole."}, {"number": "2", "title": "Submit your request.", "description": "Send us your details so our team can verify your information and begin your registration."}, {"number": "3", "title": "We'll contact you shortly.", "description": "Our team will reach out as soon as possible to connect you with a family doctor of your choice."}].map((step, index) => ({ ...step, icon: [Phone, FileUp, UserCheck][index] }));

function Accordion({ items }: { items: string[][] }) {
  return <div className="mt-8 space-y-4">{items.map(([title, answer]) => (
    <details key={title} className="rounded-xl border border-main bg-white p-8 shadow-lg shadow-main/5">
      <summary className="cursor-pointer text-2xl font-black text-main">{title === "Women's health" ? <a href="/services/womens-health" className="underline underline-offset-4">{title}</a> : title}</summary>
      <p className="mt-5 text-lg leading-8 text-slate-600">{answer}</p>
    </details>
  ))}</div>;
}

export default function FemaleFamilyDoctorContent() {
  const setOpenAppointment = useSetAtom(appointments);
  const buttons = (dark = false) => <div className="mt-10 flex flex-col gap-4 sm:flex-row">
    <a href="tel:+14039005551" className={dark
      ? "inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-main"
      : "inline-flex items-center justify-center gap-3 rounded-xl bg-main px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/20"}>
      <Phone className="h-5 w-5" />Call: 403-900-5551
    </a>
    <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        setOpenAppointment(true);
      }}
      className={dark
        ? "inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-main"
        : "inline-flex items-center justify-center gap-3 rounded-xl border border-main/20 bg-white px-8 py-4 font-bold text-main"}>
      Book an appointment
    </a>
  </div>;

  return <main className="bg-white">
    <section className="relative overflow-hidden bg-linear-to-br from-[#f4f8ff] via-white to-[#eaf2fb] px-5 py-10 lg:px-16">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-main/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-main/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-main-light">{"Female Family Doctor · NW Calgary"}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-main sm:text-5xl lg:text-6xl">{"Female Family Doctor"}<br /><span className="text-main-light">{"in Calgary, Accepting New Patients"}</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{"Looking for female doctors in Calgary? Dr. Lynder Alole (MBBS, FWACP, CCFP) is a female family physician at Primara Olympic Park Medical Clinic. She is accepting new patients, and the clinic is open Saturdays from 10 AM to 4 PM."}</p>
          <p className="mt-5 text-lg leading-8 text-slate-600">{"Accepting new patients · Open Saturdays · Free parking"}</p>
          {buttons()}
        </div>
        <div className="rounded-4xl bg-main/5 p-6">
          <div className="rounded-3xl bg-main p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">Your doctor</p>
            <div className="mt-6 flex size-28 shrink-0 items-center justify-center rounded-full bg-[#DDF6FA] text-4xl font-bold text-[#003B70]">LA</div>
            <h2 className="mt-4 text-3xl font-black leading-tight">Dr. Lynder Alole</h2>
            <div className="mt-8 space-y-4">{["Family Physician · (MBBS, FWACP, CCFP)", "Accepting New Patients", "Licensed with the College of Physicians & Surgeons of Alberta, family medicine", "34 Canada Olympic Common SW, Calgary, at Canada Olympic Park"].map(item => <div key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 shrink-0" /><span>{item}</span></div>)}</div>
          </div>
        </div>
      </div>
    </section>
    <section className="px-5 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-main-light">Meet your doctor</p>
        <h2 className="mt-4 text-4xl font-black text-main sm:text-5xl">A family doctor for every stage of life</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">Dr. Alole believes in building lasting relationships with her patients and supporting them through every stage of life.</p>
      </div>
    </section>
    <section className="relative overflow-hidden bg-main-lightest px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-main/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-main">New patients</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-main sm:text-5xl lg:text-6xl">Three steps to register</h2>
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
      </div>
    </section>
    <section className="px-5 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-main-light">Family medicine</p>
          <h2 className="mt-4 text-4xl font-black text-main sm:text-5xl">Care at Primara Olympic Park</h2>
        </div>
        <Accordion items={serviceItems} />
      </div>
    </section>
    <section className="px-5 pb-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-black text-main sm:text-5xl">Clinic details</h2>
        <Accordion items={clinicDetails} />
      </div>
    </section>
    <section className="px-5 pb-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-black text-main sm:text-5xl">Questions</h2>
        <Accordion items={questions} />
      </div>
    </section>
    <section className="px-5 pb-20 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-main p-8 text-white shadow-2xl shadow-blue-950/20 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60">Ready to register?</p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">Register with Dr. Alole</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Call 403-900-5551 and ask for Dr. Alole. New patients welcome.</p>
          </div>
          {buttons(true)}
        </div>
      </div>
    </section>
  </main>;
}
