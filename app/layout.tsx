import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const metadataTitle = "Amirhosein | Personal Portfolio";
const metadataDescription =
  "Personal portfolio of Amirhosein Arabhaji, a software engineer building fast, resilient web experiences with Python and Django.";
const socialImagePath = "/avatar.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Amirhosein Portfolio",
  title: {
    default: metadataTitle,
    template: "%s | Amirhosein",
  },
  description: metadataDescription,
  keywords: [
    "Amirhosein Arabhaji",
    "Software Engineer",
    "Python",
    "Django",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [
    {
      name: "Amirhosein Arabhaji",
      url: siteUrl,
    },
  ],
  creator: "Amirhosein Arabhaji",
  publisher: "Amirhosein Arabhaji",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Amirhosein Portfolio",
    locale: "en_US",
    images: [
      {
        url: socialImagePath,
        width: 1200,
        height: 630,
        alt: "Portrait of Amirhosein Arabhaji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [socialImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
