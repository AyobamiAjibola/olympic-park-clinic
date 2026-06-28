import DoctorCard, { DoctorType } from "@/components/layout/DoctorCard";
import { clinicAddress, directionsUrl, doctors, OfficeNumber } from "@/constants/helper";
import { ArrowUpRight, HeartPulse, MapPin, Phone, ShieldCheck } from "lucide-react";
import Image from "next/image";
import clinicImage from "@/public/clinic-hero_.png"

function DoctorsGroup({
  title,
  doctors,
}: {
  title: string;
  doctors: DoctorType;
}) {
  return (
    <div className="mx-auto px-5 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-black text-slate-900">
          {title.split(" ").slice(0, 1).join(" ")}{" "}
          <span className="text-main">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-main">
          <span className="h-px w-16 bg-main" />
          <HeartPulse className="h-6 w-6" />
          <span className="h-px w-16 bg-main" />
        </div>
      </div>

      <div className={`w-full overflow-hidden`}>
        <DoctorCard doctors={doctors} />
      </div>
    </div>
  );
}

export default function page() {
  return (
    <main>
      <section className="bg-white">
        <div className="rounded-b-[3rem] bg-linear-to-br from-[#F7FBFF] via-white to-[#EAF2FB] px-5 py-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
                Meet <span className="text-main">Our Doctors</span>
                <br />
                Your Family, Our Priority
              </h1>
              <div className="mt-10 flex max-w-2xl gap-4 rounded-xl bg-[#EEF6FF] p-5 text-slate-700">
                <ShieldCheck className="h-8 w-8 shrink-0 text-main" />
                <p className="leading-7">
                  <strong className="text-main">Primara Olympic Park Clinic</strong>{" "}
                  has both male and female doctors accepting new patients.
                  We&apos;re open <strong>seven days a week</strong>, to support your ongoing health
                  needs.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:5873918188"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-main bg-main px-8 py-4 font-bold text-white"
                >
                  <Phone className="h-5 w-5" />
                  Call: 587-391-8188
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-blue-950/10">
              <div className="relative aspect-video bg-slate-900">
                <Image
                  src={clinicImage}
                  alt="Clinic image"
                  className="h-full w-full object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-black/20" />

              </div>

              <div className="flex flex-col gap-2 bg-main p-4 text-white sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold">Primara Olympic Park Clinic</h3>

                  <div className="mt-3 space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {OfficeNumber} | Calgary, AB
                    </p>

                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {clinicAddress}
                    </p>
                  </div>
                   <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl inline-flex items-center mt-4 gap-3 bg-white px-4 py-2 text-lg font-semibold text-main transition hover:bg-neutral-100"
                  >
                    Get Directions
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <DoctorsGroup
          title="Our Female Family Doctors"
          doctors={doctors.filter(d => d.gender === "female")}
        />

        <DoctorsGroup
          title="Our Male Family Doctors"
          doctors={doctors.filter(d => d.gender === "male")}
        />
      </section>
    </main>
  )
}
