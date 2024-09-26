import { AuthProvider } from "@/contexts/AuthProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "iTrackStats",
  description:
    "Plataforma innovadora dedicada a proporcionar estadísticas deportivas en tiempo real.",
  keywords: [],
  authors: [{ name: "iTrackStats" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://ideogram.ai/api/images/direct/Qx4hj09WRIW1NYKCbK74sQ.jpg",
    title: "iTrackStats",
    description:
      "Plataforma innovadora dedicada a proporcionar estadísticas deportivas en tiempo real.",
    images: [
      {
        url: "https://ideogram.ai/api/images/direct/Qx4hj09WRIW1NYKCbK74sQ.jpg",
        width: 1200,
        height: 1200,
        alt: "iTrackStats",
      },
    ],
    siteName: "iTrackStats",
  },
  twitter: {
    card: "summary_large_image",
    title: "iTrackStats",
    description:
      "Plataforma innovadora dedicada a proporcionar estadísticas deportivas en tiempo real.",
    images: [
      "https://ideogram.ai/api/images/direct/Qx4hj09WRIW1NYKCbK74sQ.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "",
  },
};

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-[#17182E] font-sans !text-base tracking-wider text-white antialiased",
          )}
        >
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </>
  );
}
