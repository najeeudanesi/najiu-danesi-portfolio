import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Distinctive display grotesque — the designed voice of the headlines.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

// Set NEXT_PUBLIC_SITE_URL in your deploy env to your real domain so canonical
// links and social-share images resolve to absolute URLs.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://najiudanesi.com"
const NAME = "Najiu Danesi"
const TITLE = "Najiu Danesi — Full-Stack Software Engineer"
const DESCRIPTION =
  "Full-stack software engineer with 6+ years building and shipping production web applications end-to-end — from accessible React and Next.js frontends to Ruby on Rails and PHP/Laravel backends."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Najiu Danesi",
  },
  description: DESCRIPTION,
  applicationName: NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Najiu Danesi",
    "full-stack engineer",
    "full-stack developer",
    "software engineer",
    "React",
    "Next.js",
    "Vue.js",
    "Ruby on Rails",
    "PHP",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "web accessibility",
    "WCAG 2.1 AA",
    "eCommerce",
    "Abuja",
    "Nigeria",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Najiu Danesi — Full-Stack Software Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
    creator: "@najiudanesi",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/icon-32.png",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#15171B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Full-Stack Software Engineer",
  description: DESCRIPTION,
  email: "mailto:najeeudanesi@gmail.com",
  address: {
    "@type": "PostalPlace",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Vue.js",
    "Ruby on Rails",
    "PHP / Laravel",
    "TypeScript",
    "Web Accessibility (WCAG 2.1 AA)",
    "eCommerce",
  ],
  sameAs: [
    "https://github.com/najeeudanesi",
    "https://www.linkedin.com/in/najiu-danesi-6a836416a/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
