import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Family Doctors in Calgary, Accepting New Patients | Primara",
  "description": "Meet Dr. Jacob Eze and Dr. Lynder Alole, family physicians at Primara Olympic Park in NW Calgary. Accepting new patients. Call 403-900-5551.",
  "alternates": {
    "canonical": "https://www.primaraolympicparkclinic.ca/doctors"
  },
  "openGraph": {
    "title": "Family Doctors in Calgary, Accepting New Patients | Primara",
    "description": "Meet Dr. Jacob Eze and Dr. Lynder Alole, family physicians at Primara Olympic Park in NW Calgary. Accepting new patients. Call 403-900-5551.",
    "url": "https://www.primaraolympicparkclinic.ca/doctors",
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
    "title": "Family Doctors in Calgary, Accepting New Patients | Primara",
    "description": "Meet Dr. Jacob Eze and Dr. Lynder Alole, family physicians at Primara Olympic Park in NW Calgary. Accepting new patients. Call 403-900-5551.",
    "card": "summary_large_image",
    "images": [
      "/og-image.png"
    ]
  }
};

const physicians = ["Dr. Jacob Eze", "Dr. Lynder Alole"].map((name) => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  name,
  jobTitle: "Family Physician",
  worksFor: {
    "@type": "MedicalClinic",
    "@id": "https://www.primaraolympicparkclinic.ca/#clinic",
    name: "Primara Olympic Park Medical Clinic",
  },
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicians) }}
      />
      {children}
    </>
  );
}
