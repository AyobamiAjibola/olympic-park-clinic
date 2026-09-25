import {
  House,
  Stethoscope,
  Heart,
  MapPin,
  Users,
  Calendar,
} from "lucide-react";

const features = [
  {
    icon: House,
    title: "Complete care for you and your family",
    description:
      "From preventive care to chronic disease management.",
  },
  {
    icon: Stethoscope,
    title: "Family physicians who listen",
    description:
      "Building long-term relationships based on trust.",
  },
  {
    icon: Heart,
    title: "You are welcome here",
    description:
      "Inclusive, respectful care for every person in our community.",
  },
  {
    icon: Users,
    title: "Make & Female Physicians",
    description:
      "Care for every member of your family",
  },
  {
    icon: Calendar,
    title: "Walk-in Availability",
    description:
      "Same day care when you need it",
  },
  {
    icon: MapPin,
    title: "Convenient care in Southwest Calgary",
    description:
      "Accessible location with easy parking.",
  },
];

const FeatureCarousel = () => {
    const carouselFeatures = [...features, ...features];
    return (
        <section className="w-full overflow-hidden bg-[#EAFBFF] py-6">
        <div className="feature-track flex w-max">
            {carouselFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
                <div
                key={`${feature.title}-${index}`}
                className="
                    flex
                    w-70
                    md:min-w-70
                    items-start
                    gap-4
                    border-r
                    border-r-gray-200
                    px-6
                    py-4
                "
                >
                <Icon
                    className="mt-1 size-8 shrink-0 text-[#003B70]"
                    strokeWidth={1.8}
                />

                <div>
                    <h3 className="text-sm font-semibold leading-snug text-[#003B70]">
                    {feature.title}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-gray-600">
                    {feature.description}
                    </p>
                </div>
                </div>
            );
            })}
        </div>
        </section>
    );
};

export default FeatureCarousel;