import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { jsonLd } from "@/lib/metadata";

const sans = localFont({
  src: "../public/fonts/schibsted-latin.woff2",
  variable: "--font-schibsted",
  weight: "400 700",
  display: "swap",
});
const display = localFont({
  src: "../public/fonts/literata-latin-regular.woff2",
  variable: "--font-literata",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Omniasec Labs — Research & Product Development",
    template: "%s — Omniasec Labs",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.founder,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Omniasec Labs — Research & Product Development",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Omniasec Labs — Research & Product Development",
    description: site.description,
  },
  robots:
    process.env.VERCEL_ENV === "preview"
      ? { index: false, follow: false }
      : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101f1d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    founder: { "@type": "Person", name: site.founder },
    description: site.description,
    logo: `${site.url}/logo-mark.svg`,
    sameAs: [site.github],
  };

  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <div className="or-shell or-descriptor">
          <p>Technology research &amp; product development</p>
        </div>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema) }}
        />
      </body>
    </html>
  );
}
