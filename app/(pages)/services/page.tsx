import ServiceContent from "@/features/Services/ServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the services we offer in Calgary, Alberta.",
  alternates: {
    canonical: "/services",
  }
};

export default function page() {
  return <ServiceContent />
}
