import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Message Received | Primara Olympic Park Medical Clinic",
  "robots": {
    "index": false,
    "follow": true
  },
  "openGraph": {
    "title": "Message Received | Primara Olympic Park Medical Clinic",
    "url": "https://www.primaraolympicparkclinic.ca/thank-you",
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
    "title": "Message Received | Primara Olympic Park Medical Clinic",
    "card": "summary_large_image",
    "images": [
      "/og-image.png"
    ]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
