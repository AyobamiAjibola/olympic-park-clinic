import { HeartPulse, MapPin, Stethoscope, Users } from "lucide-react";

export default function AboutContent() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left */}
          <div>
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-main-light">
              About Us
            </span>

            <h2 className="mb-6 text-3xl font-black leading-tight text-main md:text-4xl lg:text-5xl">
              Compassionate Care for You and Your Family
            </h2>

            <p className="text-base leading-8 text-gray-600 md:text-lg">
              Primara (Olympic Park) Medical Clinic provides compassionate,
              patient-centred family medicine for individuals and families in
              Southwest and Northwest Calgary and surrounding communities.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600 md:text-lg">
              Our male and female physicians offer comprehensive,
              evidence-based care for patients of all ages, including walk-in
              and ongoing family practice services. We are accepting new
              patients and are committed to making every visit welcoming,
              respectful, and comfortable.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <HeartPulse className="mb-5 h-8 w-8 text-main" />
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Patient-Centred Care
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Respectful and compassionate healthcare focused on your
                individual needs.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <Stethoscope className="mb-5 h-8 w-8 text-main" />
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Family Medicine
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Comprehensive, evidence-based medical care for patients of all
                ages.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:col-span-2">
              <Users className="mb-5 h-8 w-8 text-main" />
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Accepting New Patients
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Our male and female physicians welcome new patients for
                ongoing family practice and walk-in care.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
