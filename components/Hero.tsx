import { hero, site } from '@/data/resume';
import { Download } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="hero"
      className="section-padding min-h-[80vh] flex flex-col justify-center"
    >
      <div className="container-wide">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base uppercase tracking-widest mb-4 animate-fade-in">
          {hero.roleCompany}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 max-w-4xl leading-[1.05] animate-slide-up">
          {hero.headline}
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl animate-slide-up [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
          {hero.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3 animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          <Link
            href="#work"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 px-6 py-3 text-sm font-semibold text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-900 dark:border-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            Contact Me
          </Link>
          <Link
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
