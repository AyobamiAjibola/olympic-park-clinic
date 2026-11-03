import AboutContent from "@/features/About/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "About Primara Olympic Park Medical Clinic, Calgary",
  "description": "Patient-centred family medicine in Northwest Calgary. Male and female physicians, walk-in care, and new patients welcome.",
  "alternates": {
    "canonical": "https://www.primaraolympicparkclinic.ca/about"
  },
  "openGraph": {
    "title": "About Primara Olympic Park Medical Clinic, Calgary",
    "description": "Patient-centred family medicine in Northwest Calgary. Male and female physicians, walk-in care, and new patients welcome.",
    "url": "https://www.primaraolympicparkclinic.ca/about",
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
    "title": "About Primara Olympic Park Medical Clinic, Calgary",
    "description": "Patient-centred family medicine in Northwest Calgary. Male and female physicians, walk-in care, and new patients welcome.",
    "card": "summary_large_image",
    "images": [
      "/og-image.png"
    ]
  }
};

export default function page() {
  return <AboutContent />
}