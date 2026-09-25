import { doctors } from "@/constants/helper";
import { ArrowRight } from "lucide-react";

const DoctorsSection = ({limit}: {limit?: number}) => {

    const doctorData = limit ? doctors.slice(0, limit) : doctors

    return (
        <section className="w-full bg-main/3 px-5 py-6 md:px-10 lg:px-16">

        {limit && <div className="mb-6 flex items-end justify-between gap-4">
            <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-main-light">
                Our Doctors
            </p>

            <h2 className="text-xl font-black text-main md:text-2xl">
                Experienced. Approachable. Here for you.
            </h2>
            </div>

            <a
            href="/doctors"
            className="hidden shrink-0 items-center gap-2 font-medium text-[#003B70] transition-opacity hover:opacity-70 md:flex"
            >
            Meet our team
            <ArrowRight className="size-5" />
            </a>
        </div>}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {doctorData.map((doctor) => (
            <article
                key={doctor.id}
                className={`
                flex
                flex-col
                gap-5
                rounded-xl
                border
                border-gray-200
                bg-white
                p-6
                sm:flex-row
                sm:items-center
                `}
            >
                <div
                className="
                    flex
                    size-28
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DDF6FA]
                    text-4xl
                    font-bold
                    text-[#003B70]
                "
                >
                {doctor.initials}
                </div>

                <div className="flex flex-1 flex-col items-start">
                <h3 className="text-xl font-bold text-[#002855]">
                    {doctor.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#003B70]">
                    {doctor.role}
                </p>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
                    {doctor.shortDescription}
                </p>

                {doctor.href && <a
                    href={doctor.href}
                    className="
                        mt-4
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-main-light
                        px-5
                        py-2
                        text-sm
                        font-semibold
                        text-[#003B70]
                        transition
                        hover:bg-[#1595A8]
                        hover:text-white
                    "
                >
                    Learn more about Dr. {doctor.name.split(" ").at(-1)}
                    <ArrowRight className="size-4" />
                </a>}
                </div>
            </article>
            ))}
        </div>

        <a
            href="/doctors"
            className="mt-2 flex items-center gap-2 font-medium text-[#003B70] md:hidden"
        >
            Meet our team
            <ArrowRight className="size-5" />
        </a>
        </section>
    );
};

export default DoctorsSection;