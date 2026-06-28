import { clinicEmail, directionsUrl, fax, monFriHrs, OfficeNumber, saturdayHrs, sundayHrs } from "@/constants/helper";
import logo from "@/public/logo.png"
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Female Family Doctors", href: "/female-family-doctors" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "All Services", href: "/services" },
  { label: "About Us", href: "/about" },
];

export function Footer() {

  return (
    <footer className="bg-main text-white py-12 px-4">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[0.4fr_1.6fr_1fr_1.4fr]">
        <div>
          <Image
            src={logo}
            alt="Olympic Park Clinic logo"
            className="mb-6 h-20 w-20 rounded-md bg-white p-2"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold">Olympic Park Clinic</h3>
          <p className="mt-3 max-w-md text-base leading-7 text-white/80">
            Open 7 days a week with real family doctors and walk-ins welcome.
            We provide accessible, compassionate care for individuals and
            families in Calgary.
          </p>

          <div className="mt-6 space-y-3 text-white/85">
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0" size={20} />
              <span>34 Canada Olympic Common SW, Calgary, AB T3H 6K4</span>
            </p>

            <p className="flex items-center gap-3">
              <Phone size={20} />
              <span>{OfficeNumber}</span>
            </p>

            <p className="flex items-center gap-3">
              <Printer size={20} />
              <span>{fax}</span>
            </p>

            <p className="flex items-center gap-3">
              <Mail size={20} />
              <span>{clinicEmail}</span>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>

          <div className="mt-5 flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 transition hover:text-white hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Hours</h4>

          <div className="mt-5 space-y-3 text-white/85">
            <p className="flex items-start gap-3">
              <span>{monFriHrs}</span>
            </p>

            <p>{saturdayHrs}</p>
            <p>{sundayHrs}</p>
            <p>Holidays: Closed</p>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-main transition hover:bg-white/90"
          >
            Get Directions
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-4">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-100">
          <p>
            © {new Date().getFullYear()} Olympic Park Pharmacy. All rights reserved.
          </p>

          {/* <div className="flex gap-5">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}