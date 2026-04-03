import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intellixiatech | AI Solutions & Consultation Services",
  description: "Specialing in Artificial Intelligence services and strategic consultation for business transformation", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
