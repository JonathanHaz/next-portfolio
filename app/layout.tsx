import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import AnimatedLayout from "@/components/AnimatedLayout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jonathanhazan.dev'),
  title: {
    default: "Jonathan Hazan • Creative Fullstack Developer & Designer",
    template: "%s | Jonathan Hazan - Portfolio"
  },
  description: "Creative Fullstack Developer specializing in Next.js, React, TypeScript, and modern web design. Building innovative digital experiences and custom solutions. Available for freelance projects.",
  keywords: [
    "Jonathan Hazan",
    "Fullstack Developer",
    "Web Developer", 
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Creative Developer",
    "UI/UX Designer",
    "Portfolio",
    "Freelance Developer",
    "Web Design",
    "E-commerce Development",
    "Landing Pages",
    "CRM Development",
    "Custom Websites",
    "Modern Web Applications",
    "Responsive Design",
    "Full Stack Development"
  ],
  authors: [{ name: "Jonathan Hazan" }],
  creator: "Jonathan Hazan",
  publisher: "Jonathan Hazan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jonathanhazan.dev',
    siteName: 'Jonathan Hazan Portfolio',
    title: 'Jonathan Hazan • Creative Fullstack Developer & Designer',
    description: 'Creative Fullstack Developer specializing in Next.js, React, TypeScript, and modern web design. Building innovative digital experiences and custom solutions.',
    images: [
      {
        url: '/profilePic.png',
        width: 1200,
        height: 630,
        alt: 'Jonathan Hazan - Creative Fullstack Developer',
      },
    ],
  },
  alternates: {
    canonical: 'https://jonathanhazan.dev',
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"></link>
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jonathan Hazan",
              "jobTitle": "Creative Fullstack Developer",
              "description": "Creative Fullstack Developer specializing in Next.js, React, TypeScript, and modern web design",
              "url": "https://jonathanhazan.dev",
              "image": "https://jonathanhazan.dev/profilePic.png",
              "sameAs": [
                "https://github.com/JonathanHaz",
                "https://linkedin.com/in/jonathanhaz",
                "https://www.instagram.com/jonathan.hazan1/",
              
              ],
              "knowsAbout": [
                "JavaScript",
                "TypeScript", 
                "React",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "Supabase",
                "Sanity",
                "Spline",
                "Node.js",
                "Web Development",
                "Full Stack Development",
                "UI/UX Design",
                "MongoDB",
                "Express.js",
                "Adobe Photoshop",
                "Adobe Illustrator",
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "IITC College"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
      </Head>
      <body className={inter.className}>
        <AnimatedLayout>
          <Navbar/>
          <Header/>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}
