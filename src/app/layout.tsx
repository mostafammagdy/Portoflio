import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mostafammoussa.vercel.app"),
  title: "Mostafa Mohamed | Software Engineer",
  description:
    "Full-stack engineer specializing in payment integrations (Stripe, PayPal, PayTabs), enterprise APIs, and POS systems. Montreal, relocating to Toronto July 2026.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "Montreal",
    "Payments Engineer",
    "Integration Engineer",
    "Apache Camel",
    "Spring Boot",
    "POS",
    "Fintech",
    "Toronto",
  ],
  authors: [{ name: "Mostafa Mohamed" }],
  creator: "Mostafa Mohamed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mostafammoussa.vercel.app",
    siteName: "Mostafa Mohamed | Software Engineer",
    title: "Mostafa Mohamed | Software Engineer",
    description:
      "Full-stack engineer specializing in payment integrations (Stripe, PayPal, PayTabs), enterprise APIs, and POS systems. Montreal, relocating to Toronto July 2026.",
    // TODO: Add og-image.png (1200x630) to /public
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mostafa Mohamed - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Mohamed | Software Engineer",
    description:
      "Full-stack engineer specializing in payment integrations (Stripe, PayPal, PayTabs), enterprise APIs, and POS systems. Montreal, relocating to Toronto July 2026.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mostafa Mohamed",
  jobTitle: "Software Engineer",
  url: "https://mostafammoussa.vercel.app",
  description:
    "Full-stack engineer specializing in payment integrations (Stripe, PayPal, PayTabs), enterprise APIs, and POS systems. Montreal, relocating to Toronto July 2026.",
  sameAs: [
    "https://github.com/mostafammagdy",
    "https://www.linkedin.com/in/mostafa-mohamed-558586155/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montreal (relocating Toronto, July 2026)",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "York University",
  },
  knowsAbout: [
    "React",
    "Node.js",
    "TypeScript",
    "Java",
    "C++",
    "C#",
    "Spring Boot",
    "PostgreSQL",
    "MongoDB",
    "Next.js",
    "REST APIs",
    "Docker",
    "CI/CD",
    "Stripe",
    "PayPal",
    "PayTabs",
    "Apache Camel",
    "Payment Integration",
    "Point of Sale",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-[#0a0a0a] text-[#fafafa]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
