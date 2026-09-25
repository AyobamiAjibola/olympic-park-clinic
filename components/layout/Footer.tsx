import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {

  const footerLinks = [
    { label: "Services", href: "/services" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-main text-white py-12 px-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row items-start md:justify-between">
        <div className="flex flex-col gap-4 -mt-6">
          <Image
            src="/main_logo.png"
            alt="Primara Olympic Park Medical Clinic"
            className=""
            width={240}
            height={90}
          />

          <p className="text-base text-white/90">
            Thoughtful care for a healthier tomorrow.
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6 md:items-end">
          <a
            href="tel:4039005551"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-main-light
              px-6
              py-4
              font-semibold
              text-white
              transition-opacity
              hover:opacity-90
            "
          >
            <Phone className="size-5 fill-white" />
            Call 403-900-5551
          </a>

          <p className="text-xs text-white/80">
            © {new Date().getFullYear()} Primara Olympic Park Medical Clinic.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}