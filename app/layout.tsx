import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/providers/AppProvider";
import { Allura } from "next/font/google";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Primara Olympic Park Medical Clinic",
  url: "https://www.primaraolympicparkclinic.ca",
  telephone: "+1-403-900-5551",
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

  title: {
    default: "Primara Olympic Park Medical Clinic",
    template: "%s | Primara Olympic Park Medical Clinic",
  },

  description:
    "Family Medicine & Walk-in. Compassionate care for every stage of life.",

  openGraph: {
    title: "Primara Olympic Park Medical Clinic",
    description:
      "Family Medicine & Walk-in. Compassionate care for every stage of life.",
    url: "https://www.primaraolympicparkclinic.ca",
    siteName: "Primara Olympic Park Medical Clinic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Primara Olympic Park Medical Clinic",
    description:
      "A clear description of your business, services, and location.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
