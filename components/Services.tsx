import { useRef } from "react";
import {
  Users,
  HeartPulse,
  Stethoscope,
  Bandage,
  ClipboardList,
  CirclePlus,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Care for all ages",
    description: "Newborns, children, adults and seniors.",
    icon: Users,
  },
  {
    title: "Preventive care",
    description: "Check-ups, screenings and immunizations.",
    icon: HeartPulse,
  },
  {
    title: "Chronic disease management",
    description: "Diabetes, hypertension and more.",
    icon: Stethoscope,
  },
  {
    title: "Acute illness care",
    description: "Same-day assessment and treatment.",
    icon: Bandage,
  },
  {
    title: "Women's health",
    description: "Reproductive and lifestyle care.",
    icon: ClipboardList,
  },
  {
    title: "Minor procedures",
    description: "Skin, joint and other in-office procedures.",
    icon: CirclePlus,
  },
];

export default function ServiceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const gap = 16;
    const scrollAmount = firstCard.offsetWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white px-5 py-16 md:px-10 lg:px-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-main-light">
            Our Services
          </p>

          <h2 className="text-xl font-black text-main md:text-2xl">
            Comprehensive primary care services
          </h2>
        </div>

        <a
          href="/services"
          className="hidden items-center gap-2 font-medium text-[#003B70] md:flex"
        >
          View all services
          <ArrowRight className="size-5" />
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            scroll-smooth
            pb-2
            scrollbar-none
            [&::-webkit-scrollbar]:hidden
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  min-h-47.5
                  min-w-65
                  snap-start
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  md:min-w-70
                  lg:min-w-75
                "
              >
                <Icon
                  className="mb-5 size-10 text-main-light"
                  strokeWidth={1.7}
                />

                <h3 className="mb-2 text-lg font-semibold leading-tight text-[#002855]">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous services"
          className="
            absolute
            left-0
            top-1/2
            z-10
            flex
            size-11
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white
            shadow-md
            transition
            hover:bg-gray-50
          "
        >
          <ChevronLeft className="size-5 text-[#003B70]" />
        </button>

        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next services"
          className="
            absolute
            right-0
            top-1/2
            z-10
            flex
            size-11
            translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white
            shadow-md
            transition
            hover:bg-gray-50
          "
        >
          <ChevronRight className="size-5 text-[#003B70]" />
        </button>
      </div>

      <a
        href="/services"
        className="flex items-center gap-2 font-medium text-[#003B70] md:hidden"
      >
        View all services
        <ArrowRight className="size-5" />
      </a>
    </section>
  );
}