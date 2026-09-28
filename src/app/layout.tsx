import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { StructuredData } from "@/components/seo/structured-data";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uzairmalik17.github.io"),
  title: "Uzair Malik — Software Engineer",
  description:
    "Portfolio of Uzair Malik, a software engineer building reliable web applications and AI-enhanced software.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Uzair Malik — Software Engineer",
    description:
      "Portfolio of Uzair Malik, a software engineer building reliable web applications and AI-enhanced software.",
    siteName: "Uzair Malik",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Uzair Malik — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzair Malik — Software Engineer",
    description:
      "Portfolio of Uzair Malik, a software engineer building reliable web applications and AI-enhanced software.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={geist.variable}>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
