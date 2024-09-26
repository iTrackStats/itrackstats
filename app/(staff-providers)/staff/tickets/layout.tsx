import { TicketsProvider } from "@/contexts/TicketsProvider";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TicketsProvider>{children}</TicketsProvider>
    </>
  );
}
