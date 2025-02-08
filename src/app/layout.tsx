import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title: "Eden Portfolio",
 description: "Crated With Love - Design by Eden",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className="font-neue antialiased transition-opacity">
    {children}
   </body>
  </html>
 );
}