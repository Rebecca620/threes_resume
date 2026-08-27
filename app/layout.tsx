import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mountain Journey — Interactive Portfolio",
  description: "An interactive Three.js portfolio journey through the mountains from sunrise to sunset.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Mountain Journey — Interactive Portfolio",
    description: "An interactive Three.js portfolio journey through the mountains from sunrise to sunset.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "A mountain journey from sunrise to sunset" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
