"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, Calendar, ChevronDown, Menu, Phone, X } from "lucide-react";
import { NavLink } from "@/components/common/NavLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.png"
import Image from "next/image";
import { BOOKING_LINK, OfficeNumber } from "@/constants/helper";
import { usePathname } from "next/navigation";

const links = [
  { to: "/", label: "Home" },
  { 
    label: "Family Doctor", 
    children: [
      { label: "Family Doctors Accepting New Patients", to: "/family-doctor-accepting-new-patients" },
      { label: "Female Family Doctor", to: "/female-family-doctor" },
      { label: "Meet Our Doctors", to: "/meet-our-doctors" }
    ],
  },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="relative flex z-50 h-20 w-full items-center justify-between px-2 lg:px-6 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <NavLink
          href="/"
          exact
        >
          <div className="flex items-center">
            <Image
              alt="logo"
              src={logo}
              className="md:h-16 md:w-18 h-10 w-12"
            />
            <div className="flex items-start flex-col justify-start">
              <span
                className="text-main font-bold md:text-xl text-lg"
              >Primara</span>
              <span className="md:text-sm text-xs">OLYMPIC PARK CLINIC</span>
            </div>
          </div>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link, key) => (
            <li key={key} className="relative group">
              {
                link.children ? (
                  <>
                    <button
                      className={`relative inline-flex items-end text-lg font-medium cursor-pointer transition-colors
                        after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-full
                        after:-translate-x-1/2 after:bg-blue-400
                        after:transition-transform after:duration-300
                        ${
                          pathname === "/family-doctor" ||
                          pathname === "/female-family-doctor" ||
                          pathname === "/meet-our-doctors"
                            ? "font-semibold after:scale-x-100"
                            : "after:scale-x-0 hover:after:scale-x-100"
                        }
                      `}
                    >
                      {link.label}
                      <ChevronDown size={24} />
                    </button>
                    <ul 
                      className="absolute left-0 top-full z-999 hidden w-96 rounded-lg bg-blue-50 px-6 py-4 shadow-lg group-hover:block"
                    >
                      {link.children.map((child) => (
                        <li key={child.to}
                          className={`group relative py-2`}
                        >
                          <NavLink
                            href={child.to}
                            exact={link.to === "/"}
                            className="
                              relative block text-lg font-medium w-full py-2
                              transition-colors after:absolute after:bottom-0 
                              after:left-1/2 after:h-0.5 after:w-full 
                              after:-translate-x-1/2 after:scale-x-0 after:bg-blue-400 
                              after:transition-transform after:duration-300
                              hover:after:scale-x-100
                            "
                            activeClassName="font-semibold after:scale-x-100"
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    href={link.to}
                    exact={link.to === "/"}
                    className="
                      relative inline-block text-lg font-medium 
                      transition-colors after:absolute after:bottom-0 
                      after:left-1/2 after:h-0.5 after:w-full 
                      after:-translate-x-1/2 after:scale-x-0 after:bg-blue-400 
                      after:transition-transform after:duration-300
                      hover:after:scale-x-100
                    "
                    activeClassName="font-semibold after:scale-x-100"
                  >
                    {link.label}
                  </NavLink>
                )
              }
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button className="rounded-lg bg-main py-5 w-auto cursor-pointer"
            onClick={() =>
              window.open(BOOKING_LINK, "_blank")
            }
          >
            <Calendar color="white"/>
            <span className="text-white text-base">
              Book Appointment
            </span>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-foreground md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 md:hidden",
          open ? "h-screen" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.to} className="relative group">
              {
                link.children ? (
                  <div className="flex justify-center items-center flex-col">
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === link.label ? null : link.label
                        )
                      }
                      className={`relative inline-flex items-end text-lg font-medium cursor-pointer transition-colors
                        after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-full
                        after:-translate-x-1/2 after:bg-blue-400 text-center
                        after:transition-transform after:duration-300 w-full
                        ${
                          pathname === "/family-doctor" ||
                          pathname === "/female-family-doctor" ||
                          pathname === "/meet-our-doctors"
                            ? "font-semibold after:scale-x-100"
                            : "after:scale-x-0 hover:after:scale-x-100"
                        }
                    mt-2`}
                    >
                      <span className="ml-26 mr-2">{link.label}</span>
                      {openMobileDropdown === link.label ? (
                        <ArrowUp size={20} className="mb1"/>
                        ) : (
                          <ArrowDown size={20} className="mb-1"/>
                        )
                      }
                    </button>
                    {openMobileDropdown === link.label && (
                      <ul className='mt-3 flex w-[90%] flex-col rounded-lg py-2 shadow-lg'>
                          {link.children.map((child) => (
                            <li key={child.to}
                              className={`py-2`}
                            >
                              <NavLink
                                href={child.to}
                                onClick={() => {
                                  setOpen(false);
                                  setOpenMobileDropdown(null);
                                }}
                                // exact={link.to === "/"}
                                className="
                                  relative block text-base font-medium w-full py-2
                                  transition-colors after:absolute after:bottom-0 
                                  after:left-1/2 after:h-0.5 after:w-full 
                                  after:-translate-x-1/2 after:scale-x-0 after:bg-blue-400 
                                  after:transition-transform after:duration-300
                                  hover:after:scale-x-100
                                "
                                activeClassName="font-semibold bg-neutral-100"
                              >
                                {child.label}
                              </NavLink>
                            </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    href={link.to}
                    exact={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-lg font-medium 
                    text-muted-foreground hover:bg-accent
                      text-center
                      relative
                      transition-colors after:absolute after:bottom-0 
                      after:left-1/2 after:h-0.5 after:w-full 
                      after:-translate-x-1/2 after:scale-x-0 after:bg-blue-400 
                      after:transition-transform after:duration-300
                      hover:after:scale-x-100
                    "
                    activeClassName="font-semibold after:scale-x-100"
                  >
                    {link.label}
                  </NavLink>
                )
              }
            </li>
          ))}

          <li className="pt-6 text-center">
            <Button className="rounded-lg bg-main py-5 w-auto cursor-pointer" onClick={() => setOpen(false)}>
              <Phone color="white"/>
              <span className="text-white text-base">
                Call {OfficeNumber}
              </span>
            </Button>
          </li>
        </ul>
      </div>

      {/* {showWalkInStatus && 
      <div 
        className="relative z-0 bg-main flex h-auto w-full flex-col gap-6 px-4 py-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:h-28 lg:flex-nowrap lg:px-12"
      >
        <div className="flex items-center justify-start gap-4">
          <span className="relative flex size-6 items-center justify-center ml-2 md:ml-0">
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${storeStatus.isOpen ? 'bg-green-400' : 'bg-red-400'} opacity-75`} />
            <span className={`relative inline-flex size-5 rounded-full ${storeStatus.isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
          </span>

          <div className="flex flex-col items-start justify-start">
            <p className="text-lg leading-relaxed text-white">
              Walk-in Live Status
            </p>
            <span className="text-3xl font-black leading-tight text-white md:text-3xl">
              {storeStatus.isOpen ? 'OPEN NOW' : 'CLOSED'}
            </span>
          </div>
        </div>

        <div className="hidden h-[60%] w-px bg-white/20 backdrop-blur lg:block" />

        <div className="hidden md:flex items-start justify-start gap-3">
          <Clock className="shrink-0 text-white h-8 w-8 md:h-10 md:w-10" />
          <div>
            <p className="text-sm leading-relaxed text-white md:text-lg">
              Short Wait
            </p>
            <p className="text-sm leading-tight text-white md:text-lg">
              Walk-in anytime
            </p>
          </div>
        </div>

        <div className="hidden h-[60%] w-px bg-white/20 backdrop-blur lg:block" />

        <div className="flex items-start justify-start gap-3">
          <MapPin className="shrink-0 text-white h-10 w-10 md:h-10 md:w-10" />
          <div>
            <Button className="bg-white text-main cursor-pointer rounded-lg text-lg font-medium">
              <Search />
              Direction
            </Button>
            <p className="text-left text-l leading-tight text-white md:text-base">
              Get here easily
            </p>
          </div>
        </div>

        <div className="hidden h-[60%] w-px bg-white/20 backdrop-blur lg:block" />

        <div className="hidden md:flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-white p-3 text-white hover:border-main-lighter sm:w-auto">
          <MessageCircleMore className="shrink-0" size={36} />
          <div className="flex flex-col items-start justify-start">
            <p className="text-base font-semibold leading-tight md:text-lg">
              Live Chat
            </p>
            <p className="text-sm leading-tight text-neutral-200">
              We&apos;re here to help
            </p>
          </div>
        </div>
      </div>
      } */}
      
    </header>
  );
};

export default Navbar;