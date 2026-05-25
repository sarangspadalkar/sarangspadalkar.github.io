import { about } from '@/data/resume';

export function About() {
  return (
    <section
      id="about"
      className="section-padding bg-zinc-100 dark:bg-zinc-900/30"
    >
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
          {about.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10">
          A little about how I work and what I focus on.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            {about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
          <aside className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 sm:p-7 space-y-5">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {fact.label}
                </div>
                <div className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {fact.value}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
