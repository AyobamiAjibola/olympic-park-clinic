import ContactContent from "@/features/Contact/ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us today"
};

export default function ContactPage() {
  return <ContactContent/>
}