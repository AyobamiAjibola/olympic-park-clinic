import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/providers/AppProvider";
import { Allura } from "next/font/google";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://www.primaraolympicparkclinic.ca/#clinic",
  name: "Primara Olympic Park Medical Clinic",
  url: "https://www.primaraolympicparkclinic.ca",
  telephone: "+1-403-900-5551",
  faxNumber: "+1-403-900-5552",
  email: "info@primaraolympicparkclinic.ca",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "34 Canada Olympic Common SW",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T3H 6K4",
    addressCountry: "CA",
  },
};

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.primaraolympicparkclinic.ca"),
  title: "Primara Olympic Park Medical Clinic",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${allura.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
