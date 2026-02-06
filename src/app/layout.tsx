import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CursorGrid from "@/components/CursorGrid";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammadadreansyah.github.io/MadesPortofolio'),
  title: "Madesmac | Data Analyst & Developer Portfolio",
  description: "Portfolio profesional Madesmac - Data Analyst & Developer yang mengkhususkan diri dalam Python, SQL, Power BI, dan teknologi web modern. Lihat proyek, keahlian, dan hubungi saya.",
  keywords: ["Data Analyst", "Developer", "Python", "SQL", "Power BI", "Portfolio", "Web Developer", "JavaScript", "TypeScript"],
  authors: [{ name: "Madesmac" }],
  creator: "Madesmac",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://muhammadadreansyah.github.io/MadesPortofolio",
    siteName: "Madesmac Portfolio",
    title: "Madesmac | Data Analyst & Developer",
    description: "Portfolio profesional yang menampilkan proyek dan keahlian dalam analisis data dan pengembangan web.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Madesmac - Data Analyst & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madesmac | Data Analyst & Developer",
    description: "Portfolio profesional yang menampilkan proyek dan keahlian dalam analisis data dan pengembangan web.",
    creator: "@madesmac",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-dark text-light`}
      >
        <CursorGrid />
        {children}
      </body>
    </html>
  );
}
