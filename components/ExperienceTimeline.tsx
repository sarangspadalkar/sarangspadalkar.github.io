import { experience } from '@/data/resume';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="section-padding bg-zinc-100 dark:bg-zinc-900/30"
    >
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
          Work Experience
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10">
          A track record of shipping full-stack features and cloud infrastructure across enterprise and startup teams.
        </p>
        <div className="space-y-6">
          {experience.map((job, idx) => (
            <Card
              key={`${job.company}-${job.role}-${job.period}`}
              className="overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
                      <Link
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                      >
                        {job.company}
                      </Link>
                    </CardTitle>
                    <p className="mt-1 text-zinc-700 dark:text-zinc-200 font-medium">
                      {job.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm text-zinc-500 dark:text-zinc-400">
                      {job.period}
                    </span>
                    {'location' in job && job.location ? (
                      <span className="block text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
                        {job.location}
                      </span>
                    ) : null}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {job.metrics && job.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {job.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center gap-1.5 text-sm bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 rounded-lg px-3 py-1.5"
                      >
                        <TrendingUp className="h-3.5 w-3.5" />
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
                <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed marker:text-zinc-400">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {'tags' in job && job.tags && job.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2 pt-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="inline-block rounded text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-2.5 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
