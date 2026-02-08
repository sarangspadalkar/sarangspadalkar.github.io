import type { Metadata, Viewport } from 'next';
import { site } from '@/data/resume';
import { Header } from '@/components/Header';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#18181b',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sarangspadalkar.github.io'),
  title: `${site.name} | Senior Backend Developer`,
  description:
    "Sarang Padalkar — Senior Software Engineer at Jill's Office. Building scalable distributed systems and AI-driven infrastructure with Node.js, AWS, and TypeScript.",
  keywords: [
    'Sarang Padalkar',
    'Senior Backend Developer',
    'Node.js',
    'AWS',
    'Distributed Systems',
    'TypeScript',
    "Jill's Office",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    title: `${site.name} | Senior Backend Developer`,
    description: "Building Scalable Distributed Systems & AI-Driven Infrastructure.",
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <Header />
        <main>{children}</main>
        <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
