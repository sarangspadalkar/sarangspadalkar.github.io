import { hero } from '@/data/resume';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="hero"
      className="section-padding min-h-[90vh] flex flex-col justify-center"
    >
      <div className="container-narrow text-center">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base uppercase tracking-widest mb-4 animate-fade-in">
          {hero.roleCompany}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 animate-slide-up">
          {hero.headline}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto animate-slide-up [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
          {hero.subheadline}
        </p>
        <Link
          href="#work"
          className="inline-flex items-center gap-2 mt-10 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]"
        >
          {hero.cta}
          <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
