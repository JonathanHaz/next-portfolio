import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio & Work | Jonathan Hazan - Fullstack Developer Projects",
  description: "Explore Jonathan Hazan's portfolio of fullstack web development projects including e-commerce apps, landing pages, React applications, and custom websites built with Next.js, TypeScript, and modern technologies.",
  keywords: ["Jonathan Hazan portfolio", "fullstack developer projects", "React projects", "Next.js applications", "e-commerce development", "landing pages", "web development work", "TypeScript projects", "custom websites"],
  openGraph: {
    title: "Portfolio & Work | Jonathan Hazan - Fullstack Developer Projects",
    description: "Explore Jonathan Hazan's portfolio featuring innovative web applications, e-commerce platforms, and custom digital solutions.",
    type: "website",
  },
  twitter: {
    title: "Portfolio & Work | Jonathan Hazan - Fullstack Developer Projects",
    description: "Explore Jonathan Hazan's portfolio featuring innovative web applications, e-commerce platforms, and custom digital solutions.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 