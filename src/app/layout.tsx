import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Congzhou Machinery - A UniPack Company",
  description: "Congzhou Packaging Machinery Mfg. Co. has been strategically acquired by UniPack Corrugated, marking our entry into the Indian and Asian markets as a global leader in printing and packaging engineering solutions.",
  keywords: ["Congzhou Machinery", "UniPack", "packaging machinery", "corrugated packaging", "industrial equipment", "acquisition", "India operations"],
  authors: [{ name: "UniPack Corrugated" }],
  openGraph: {
    title: "Congzhou Machinery - A UniPack Company",
    description: "Strategic acquisition announcement: Congzhou Machinery joins UniPack Corrugated to expand operations in India and Asian markets.",
    url: "https://www.congzhoumachinery.com",
    siteName: "Congzhou Machinery",
    images: [
      {
        url: "/OG IMAGE.png",
        width: 1200,
        height: 630,
        alt: "Congzhou Machinery - A UniPack Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Congzhou Machinery - A UniPack Company", 
    description: "Strategic acquisition announcement: Congzhou Machinery joins UniPack Corrugated to expand operations in India and Asian markets.",
    images: ["/OG IMAGE.png"],
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
  icons: {
    icon: "/FAVICON.png",
    shortcut: "/FAVICON.png",
    apple: "/FAVICON.png",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.congzhoumachinery.com" />
        <meta name="theme-color" content="#f00027" />
        <meta name="msapplication-TileColor" content="#f00027" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
