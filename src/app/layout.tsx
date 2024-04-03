import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uni Cards: Next-gen Credit Cards &amp; Rewards",
  description:
    "Elevate your credit experience with the next-gen 🌊NX Wave Credit Card | Uni Paychek: receive a salary before your salary | Uni PowerUp: Earn consistent 9% returns on your money",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
