import AboutContent from "@/features/About/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Primara Olympic Park Pharmacy"
};

export default function page() {
  return <AboutContent />
}