import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AvsarSetu — One Platform. Every Opportunity.",
  description: "India's centralized opportunity discovery gateway for government schemes, scholarships, jobs, apprenticeships, and free learning programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#0F172A] selection:bg-[#E8F1EE] selection:text-[#0F3832]">
        {children}
      </body>
    </html>
  );
}
