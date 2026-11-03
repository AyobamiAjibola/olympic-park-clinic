import WomensHealthContent from "@/features/Services/WomensHealthContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Women's Health Clinic in NW Calgary | Primara",
  "description": "Pap tests, prenatal care, menopause support and UTI care with family doctors at Olympic Park, NW Calgary. Female doctor available. Call 403-900-5551.",
  "alternates": {
    "canonical": "https://www.primaraolympicparkclinic.ca/services/womens-health"
  },
  "openGraph": {
    "title": "Women's Health Clinic in NW Calgary | Primara",
    "description": "Pap tests, prenatal care, menopause support and UTI care with family doctors at Olympic Park, NW Calgary. Female doctor available. Call 403-900-5551.",
    "url": "https://www.primaraolympicparkclinic.ca/services/womens-health",
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
    "title": "Women's Health Clinic in NW Calgary | Primara",
    "description": "Pap tests, prenatal care, menopause support and UTI care with family doctors at Olympic Park, NW Calgary. Female doctor available. Call 403-900-5551.",
    "card": "summary_large_image",
    "images": [
      "/og-image.png"
    ]
  }
};

export default function page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I see a female doctor?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Dr. Lynder Alole is a female family physician here. Call 403-900-5551 and ask for a visit with her."}}, {"@type": "Question", "name": "Are you accepting new patients?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Our physicians are accepting new patients for ongoing family care."}}, {"@type": "Question", "name": "Can I walk in?", "acceptedAnswer": {"@type": "Answer", "text": "Walk-ins are welcome based on daily availability. Please call 403-900-5551 before coming in to confirm the current wait time."}}, {"@type": "Question", "name": "Are you open on weekends?", "acceptedAnswer": {"@type": "Answer", "text": "Saturdays, 10 AM to 4 PM. We're closed on Sundays."}}, {"@type": "Question", "name": "Is this an emergency clinic?", "acceptedAnswer": {"@type": "Answer", "text": "No. For medical emergencies, call 911 or go to the nearest emergency department."}}]}) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.primaraolympicparkclinic.ca/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.primaraolympicparkclinic.ca/services"}, {"@type": "ListItem", "position": 3, "name": "Women's Health", "item": "https://www.primaraolympicparkclinic.ca/services/womens-health"}]}) }} />
    <WomensHealthContent />
  </>
}
