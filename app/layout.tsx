import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — A Personal Journey",
  description: "An immersive personal portfolio traveling from sunrise to sunset through the mountains.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Your Name — A Personal Journey",
    description: "An immersive personal portfolio traveling from sunrise to sunset through the mountains.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "A mountain journey from sunrise to sunset" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
