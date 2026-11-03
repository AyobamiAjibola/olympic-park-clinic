import HomeContent from "@/features/Home/HomeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Walk-in Clinic & Family Doctors in NW Calgary | Primara",
  "description": "Walk-in and family medicine at Olympic Park in NW Calgary. Male and female doctors, now accepting new patients. Free parking. Call 403-900-5551.",
  "alternates": {
    "canonical": "https://www.primaraolympicparkclinic.ca/"
  },
  "openGraph": {
    "title": "Walk-in Clinic & Family Doctors in NW Calgary | Primara",
    "description": "Walk-in and family medicine at Olympic Park in NW Calgary. Male and female doctors, now accepting new patients. Free parking. Call 403-900-5551.",
    "url": "https://www.primaraolympicparkclinic.ca/",
    "siteName": "Primara Olympic Park Medical Clinic",
    "images": [
      {
        "url": "/og-image.png",
        "width": 1200,
        "height": 630
      }
    ],
    "locale": "en_CA",
    "type": "website"
  },
  "twitter": {
    "title": "Walk-in Clinic & Family Doctors in NW Calgary | Primara",
    "description": "Walk-in and family medicine at Olympic Park in NW Calgary. Male and female doctors, now accepting new patients. Free parking. Call 403-900-5551.",
    "card": "summary_large_image",
    "images": [
      "/og-image.png"
    ]
  }
};

export default function HomePage() {
  return <HomeContent />
}
