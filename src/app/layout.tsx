import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/assets/styles/globals.scss";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Noon Social",
  description:
    "Noon Social is a website designed for the noon front-end assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Navbar />
        <header className="app-title">
          <strong>Noon</strong> Social
        </header>
        {children}
      </body>
    </html>
  );
}
