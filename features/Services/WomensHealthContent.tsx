"use client";

import { Phone, CheckCircle2 } from "lucide-react";
import { useSetAtom } from "jotai";
import { appointments } from "@/lib/atoms";
import { BOOKING_LINK } from "@/constants/helper";

const serviceItems = [["Pap tests and cervical screening", "routine cervical screening with your family doctor."], ["Prenatal care", "prenatal care with your family doctor."], ["Menopause support", "care for the changes and symptoms of menopause."], ["UTIs, yeast infections and hormonal care", "a visit with your family doctor for these common concerns."]];
const expectations = [["A female family doctor", "Dr. Lynder Alole (MBBS, FWACP, CCFP) is one of our family physicians. She believes in building lasting relationships with her patients and supporting them through every stage of life."], ["One clinic for the whole family", "male and female physicians, patients of all ages, and walk-in or booked visits."], ["Easy to get to", "we're at Olympic Park in NW Calgary, with free parking."]];
const questions = [["Can I see a female doctor?", "Yes. Dr. Lynder Alole is a female family physician here. Call 403-900-5551 and ask for a visit with her."], ["Are you accepting new patients?", "Yes. Our physicians are accepting new patients for ongoing family care."], ["Can I walk in?", "Walk-ins are welcome based on daily availability. Please call 403-900-5551 before coming in to confirm the current wait time."], ["Are you open on weekends?", "Saturdays, 10 AM to 4 PM. We're closed on Sundays."], ["Is this an emergency clinic?", "No. For medical emergencies, call 911 or go to the nearest emergency department."]];

function Accordion({ items }: { items: string[][] }) {
  return <div className="mt-8 space-y-4">{items.map(([title, answer]) => (
    <details key={title} className="rounded-xl border border-main bg-white p-8 shadow-lg shadow-main/5">
      <summary className="cursor-pointer text-2xl font-black text-main">{title}</summary>
      <p className="mt-5 text-lg leading-8 text-slate-600">{title === "Can I see a female doctor?" ? <>Yes. <a href="/doctors/female-family-doctor" className="underline underline-offset-4">Dr. Lynder Alole</a> is a female family physician here. Call 403-900-5551 and ask for a visit with her.</> : answer}</p>
    </details>
  ))}</div>;
}

export default function WomensHealthContent() {
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
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-main-light">{"Women's Health · NW Calgary"}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-main sm:text-5xl lg:text-6xl">{"Women's Health Clinic"}<br /><span className="text-main-light">{"in NW Calgary"}</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{"A women's health clinic in Calgary with a female family doctor accepting new patients. See Dr. Lynder Alole (MBBS, FWACP, CCFP) for pap tests, prenatal care, menopause support and UTIs, weekdays or Saturdays."}</p>
          <p className="mt-5 text-lg leading-8 text-slate-600">{"Accepting new patients · Open Saturdays · Free parking"}</p>
          {buttons()}
        </div>
        <div className="rounded-4xl bg-main/5 p-6">
          <div className="rounded-3xl bg-main p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">Clinic hours</p>
            <h2 className="mt-4 text-3xl font-black leading-tight">Open six days a week, Saturdays included</h2>
            <div className="mt-8 space-y-4">{["Monday to Friday, 9 AM to 7 PM", "Saturday, 10 AM to 4 PM", "Sunday, closed", "34 Canada Olympic Common SW, Calgary, at Canada Olympic Park"].map(item => <div key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 shrink-0" /><span>{item}</span></div>)}</div>
          </div>
        </div>
      </div>
    </section>
    <section className="px-5 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-main-light">{"Women's health care"}</p>
          <h2 className="mt-4 text-4xl font-black text-main sm:text-5xl">Care for every stage of life</h2>
        </div>
        <Accordion items={serviceItems} />
      </div>
    </section>
    <section className="px-5 pb-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-black text-main sm:text-5xl">What to expect</h2>
        <Accordion items={expectations} />
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
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60">Ready to visit?</p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">See a family doctor who listens</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Call us or book online. Walk-ins are welcome based on daily availability.</p>
          </div>
          {buttons(true)}
        </div>
      </div>
    </section>
  </main>;
}
