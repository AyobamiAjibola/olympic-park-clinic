import ContactContent from "@/features/Contact/ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Contact & Hours | Primara Olympic Park Medical Clinic",
  "description": "Call 403-900-5551 or visit 34 Canada Olympic Common SW, Calgary. Open Mon to Fri 9 AM to 7 PM, Sat 10 AM to 4 PM. Walk-ins welcome.",
  "alternates": {
    "canonical": "https://www.primaraolympicparkclinic.ca/contact"
  },
  "openGraph": {
    "title": "Contact & Hours | Primara Olympic Park Medical Clinic",
    "description": "Call 403-900-5551 or visit 34 Canada Olympic Common SW, Calgary. Open Mon to Fri 9 AM to 7 PM, Sat 10 AM to 4 PM. Walk-ins welcome.",
    "url": "https://www.primaraolympicparkclinic.ca/contact",
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
    "title": "Contact & Hours | Primara Olympic Park Medical Clinic",
    "description": "Call 403-900-5551 or visit 34 Canada Olympic Common SW, Calgary. Open Mon to Fri 9 AM to 7 PM, Sat 10 AM to 4 PM. Walk-ins welcome.",
    "card": "summary_large_image",
    "images": [
      "/og-image.png"
    ]
  }
};

export default function ContactPage() {
  return <ContactContent/>
}