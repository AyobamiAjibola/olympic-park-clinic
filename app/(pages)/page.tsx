import HomeContent from "@/features/Home/HomeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Primara Olympic Park Pharmacy"
};

export default function HomePage() {
  return <HomeContent />
}
