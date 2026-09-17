import MeetOurDoctorsContent from "@/features/MeetDoctors/MeetOurDoctorsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Doctors",
  description:
    "Meet Primara Olympic Park Pharmacy Doctors",
};

export default function page() {
  return <MeetOurDoctorsContent />
}
