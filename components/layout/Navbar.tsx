"use client";

import { useState } from "react";
import { Calendar, MapPin, Menu, Phone, X } from "lucide-react";
import { NavLink } from "@/components/common/NavLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/public/main_logo2.png"
import Image from "next/image";
import { OfficeNumber } from "@/constants/helper";
import { useAtom } from "jotai";
import { appointments } from "@/lib/atoms";
import Modal from "../Modal";
import DoctorAvailability from "../DoctorAvailability";

const links = [
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Our Doctors" },
  { to: "/contact", label: "Contact Us" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openAppointment, setOpenAppointment] = useAtom(appointments)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-main p-2 flex justify-between items-center">
        <div className="items-center gap-1 md:flex hidden flex-row">
          <MapPin color="white" size={16}/>
          <span className="text-white text-xs font-medium">
            Proudly serving Southwest, Northwest Calgary
          </span>
        </div>

        <span className="text-white text-xs font-medium">
          New patient welcome | Direct Billing 
        </span>
      </div>
      <nav className="relative flex z-50 h-20 w-full items-center justify-between px-2 lg:px-6 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <NavLink
          href="/"
          exact
        >
          <div className="flex items-center">
            <Image
              alt="logo"
              src={logo}
              className="md:h-18 md:w-60 h-16 w-46"
            />
          </div>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link, key) => (
            <li key={key} className="relative group">
              <NavLink
                href={link.to}
                exact={link.to === "/"}
                className="
                  relative inline-block text-[16px] font-medium 
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
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button className="rounded-lg bg-main-light py-5 w-auto cursor-pointer"
            onClick={()=>setOpenAppointment(true)}
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
          {links.map((link, index) => (
            <li key={index} className="relative group">
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
            </li>
          ))}

          <li className="pt-6 text-center flex justify-center items-center">
            <Button className="flex flex-1 items-center bg-main-light p-3 rounded-xl h-full"
              onClick={()=>setOpenAppointment(true)}
            >
              <Calendar className="w-5! h-5! shrink-0" color="white"/>
              <span className="text-white text-lg font-semibold">Book an Appointment</span>
            </Button>
          </li>
        </ul>
      </div>

      <Modal
        open={openAppointment}
        onOpenChange={setOpenAppointment}
        title="Book an Appointment"
      >
        <DoctorAvailability />
      </Modal>
      
    </header>
  );
};

export default Navbar;