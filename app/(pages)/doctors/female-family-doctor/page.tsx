import FemaleFamilyDoctorContent from "@/features/Doctors/FemaleFamilyDoctorContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Female Doctor in Calgary Accepting New Patients | Primara",
  "description": "Dr. Lynder Alole (MBBS, FWACP, CCFP) is a female family physician at Olympic Park in NW Calgary, accepting new patients. Open Saturdays. Call 403-900-5551.",
  "alternates": {
    "canonical": "https://www.primaraolympicparkclinic.ca/doctors/female-family-doctor"
  },
  "openGraph": {
    "title": "Female Doctor in Calgary Accepting New Patients | Primara",
    "description": "Dr. Lynder Alole (MBBS, FWACP, CCFP) is a female family physician at Olympic Park in NW Calgary, accepting new patients. Open Saturdays. Call 403-900-5551.",
    "url": "https://www.primaraolympicparkclinic.ca/doctors/female-family-doctor",
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
    "title": "Female Doctor in Calgary Accepting New Patients | Primara",
    "description": "Dr. Lynder Alole (MBBS, FWACP, CCFP) is a female family physician at Olympic Park in NW Calgary, accepting new patients. Open Saturdays. Call 403-900-5551.",
    "card": "summary_large_image",
    "images": [
      "/og-image.png"
    ]
  }
};

export default function page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is there a female doctor at Primara?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Dr. Lynder Alole is a female family physician here."}}, {"@type": "Question", "name": "Is Dr. Alole accepting new patients?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Call 403-900-5551 to register with her."}}, {"@type": "Question", "name": "How do I book a visit with her?", "acceptedAnswer": {"@type": "Answer", "text": "Call 403-900-5551 and ask for Dr. Alole."}}, {"@type": "Question", "name": "Are you open on weekends?", "acceptedAnswer": {"@type": "Answer", "text": "Saturdays, 10 AM to 4 PM. We're closed on Sundays."}}, {"@type": "Question", "name": "Is this an emergency clinic?", "acceptedAnswer": {"@type": "Answer", "text": "No. For medical emergencies, call 911 or go to the nearest emergency department."}}]}) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.primaraolympicparkclinic.ca/"}, {"@type": "ListItem", "position": 2, "name": "Doctors", "item": "https://www.primaraolympicparkclinic.ca/doctors"}, {"@type": "ListItem", "position": 3, "name": "Female Family Doctor", "item": "https://www.primaraolympicparkclinic.ca/doctors/female-family-doctor"}]}) }} />
    <FemaleFamilyDoctorContent />
  </>
}
