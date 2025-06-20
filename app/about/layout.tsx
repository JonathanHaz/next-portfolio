import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Jonathan Hazan | Creative Fullstack Developer",
  description: "Learn about Jonathan Hazan, a creative fullstack developer with experience at Relyon.ai, freelance projects, and expertise in React, Next.js, TypeScript, and modern web design.",
  keywords: ["Jonathan Hazan about", "fullstack developer experience", "Relyon.ai intern", "freelance web developer", "React developer story", "creative developer background"],
  openGraph: {
    title: "About Jonathan Hazan | Creative Fullstack Developer",
    description: "Learn about Jonathan Hazan's journey as a creative fullstack developer, from discovering design passion in high school to working with cutting-edge technologies.",
    type: "profile",
  },
  twitter: {
    title: "About Jonathan Hazan | Creative Fullstack Developer",
    description: "Learn about Jonathan Hazan's journey as a creative fullstack developer, from discovering design passion in high school to working with cutting-edge technologies.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 