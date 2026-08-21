import type { Metadata } from "next";
import { Space_Grotesk, Newsreader, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";
import { profile } from "@/lib/content/profile";
import { email, contactLinks } from "@/lib/content/contact";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const metadataTitle = `${profile.name} | ${profile.role}`;
const metadataDescription =
  "Amirhosein Arabhaji is a backend software engineer specializing in Python/Django and Go, focused on performance, data modelling, and access control at scale.";
const socialImagePath = profile.avatar;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.avatar}`,
  jobTitle: profile.role,
  email: `mailto:${email}`,
  sameAs: contactLinks.map((link) => link.href),
};

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
    canonical: siteUrl,
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
    <html
      lang="en"
      data-theme="light"
      className={`${spaceGrotesk.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
