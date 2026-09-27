import { doctors } from "@/constants/helper";
import { CalendarDays, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function DoctorAvailability() {
  return (
    <div className="space-y-3">
      <div className="mb-5">
        <p className="text-base leading-6 text-gray-500">
          Choose a physician to view their available appointment times.
        </p>
      </div>

      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="
            group flex flex-col gap-4 rounded-xl
            border border-gray-200 bg-white p-4
            transition-all duration-200
            hover:border-main/40 hover:shadow-md
            sm:flex-row sm:items-center
          "
        >
          {/* Doctor */}
          <div className="flex min-w-0 flex-1 items-center gap-4">
            {doctor.image ? (
              <Image
                src={doctor.image}
                alt={doctor.name}
                className="h-14 w-14 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-main-light">
                <div
                    className="
                        flex
                        size-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#DDF6FA]
                        text-xl
                        font-bold
                        text-[#003B70]
                    "
                >
                    {doctor.initials}
                </div>
              </div>
            )}

            <div className="min-w-0">
                <h3 className="truncate font-semibold text-gray-900">
                    {doctor.name}
                </h3>
                <p className="mt-0.5 text-sm text-gray-500 capitalize">
                    Gender: {doctor.gender}
                </p>
                <p className="mt-0.5 text-sm text-gray-500">
                    {doctor.role}
                </p>
            </div>
          </div>

          <a
            href={doctor.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex shrink-0 items-center justify-center gap-2
              rounded-lg bg-main px-4 py-2.5
              text-sm font-semibold text-white
              transition-opacity hover:opacity-90
            "
          >
            <CalendarDays size={16} />
            View Availability
            <ExternalLink size={13} />
          </a>
        </div>
      ))}
    </div>
  );
}