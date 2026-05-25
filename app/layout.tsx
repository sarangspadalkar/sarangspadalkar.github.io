import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { site } from '@/data/resume';
import { Header } from '@/components/Header';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sarangspadalkar.github.io'),
  title: `${site.name} | Senior Software Engineer`,
  description:
    'Sarang Padalkar — Senior Software Engineer specializing in event-driven backends, cloud infrastructure, and AI-powered automation.',
  keywords: [
    'Sarang Padalkar',
    'Senior Software Engineer',
    'Backend Engineer',
    'AWS',
    'Node.js',
    'TypeScript',
    'GraphQL',
    'LiveKit',
    'OpenAI Realtime API',
    "Jill's Office",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    title: `${site.name} | Senior Software Engineer`,
    description:
      'Building event-driven backends, cloud infrastructure, and AI-powered automation.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const footerLinks = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Chess.com', href: site.chess },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t==='dark');})();`,
          }}
        />
        <Header />
        <main>{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-950 dark:bg-zinc-950">
          <div className="container-wide px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-zinc-300/80">
              {site.name} — Senior Software Engineer
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-400/70 hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-zinc-400/40">
              © {new Date().getFullYear()} {site.name}. Built with care.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
