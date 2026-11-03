import ServiceContent from "@/features/Services/ServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Family Medicine & Walk-in Care in Calgary | Primara",
  "description": "Checkups, screenings, chronic disease care and same day walk-in visits at Olympic Park in NW Calgary. Male and female family doctors. Call 403-900-5551.",
  "alternates": {
    "canonical": "https://www.primaraolympicparkclinic.ca/services"
  },
  "openGraph": {
    "title": "Family Medicine & Walk-in Care in Calgary | Primara",
    "description": "Checkups, screenings, chronic disease care and same day walk-in visits at Olympic Park in NW Calgary. Male and female family doctors. Call 403-900-5551.",
    "url": "https://www.primaraolympicparkclinic.ca/services",
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
    "title": "Family Medicine & Walk-in Care in Calgary | Primara",
    "description": "Checkups, screenings, chronic disease care and same day walk-in visits at Olympic Park in NW Calgary. Male and female family doctors. Call 403-900-5551.",
    "card": "summary_large_image",
    "images": [
      "/og-image.png"
    ]
  }
};

export default function page() {
  return <ServiceContent />
}
