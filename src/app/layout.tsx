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
  title: "Madesmac | Full Stack Developer Portfolio",
  description: "Professional portfolio of Madesmac - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects, skills, and get in touch.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js", "Portfolio", "Web Developer", "JavaScript", "TypeScript"],
  authors: [{ name: "Madesmac" }],
  creator: "Madesmac",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadadreansyah.github.io/MadesPortofolio",
    siteName: "Madesmac Portfolio",
    title: "Madesmac | Full Stack Developer",
    description: "Professional portfolio showcasing projects and skills in web development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Madesmac - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madesmac | Full Stack Developer",
    description: "Professional portfolio showcasing projects and skills in web development.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-dark text-light`}
      >
        <CursorGrid />
        {children}
      </body>
    </html>
  );
}
