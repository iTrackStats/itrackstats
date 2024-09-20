import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Poppins } from "next/font/google";
import { AuthProvider } from "@/context/UserContext";

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

const fontSans = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
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
          className={`${fontSans} font-sans tracking-wider min-h-screen antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
