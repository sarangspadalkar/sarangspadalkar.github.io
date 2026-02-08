'use client';

import { featuredProjects } from '@/data/resume';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Workflow, Plug, Calendar, Users, Gamepad2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const iconMap = { Workflow, Plug, Calendar, Users, Gamepad2 };

function ProjectBlock({
  label,
  children,
}: Readonly<{
  label: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-1.5">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {label}
      </h4>
      <div className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{children}</div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="work" className="section-padding bg-zinc-100 dark:bg-zinc-900/30">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
          Featured Projects
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10">
          Selected system design and integration work
        </p>
        <div className="space-y-8">
          {featuredProjects.map((project) => {
            const Icon = iconMap[project.icon] ?? Workflow;
            const hasLink = project.projectLink && project.projectLink !== '#';
            return (
              <Card
                key={project.id}
                className="overflow-hidden transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-zinc-200 dark:bg-zinc-800 p-2.5">
                      <Icon className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Tools
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <li
                          key={tool}
                          className="text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800/80 rounded-md px-2.5 py-1"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ProjectBlock label="Situation">{project.situation}</ProjectBlock>
                  <ProjectBlock label="Action">{project.action}</ProjectBlock>
                  <ProjectBlock label="Result">{project.result}</ProjectBlock>
                  <div className="space-y-1.5 pt-2 border-t border-zinc-200 dark:border-zinc-700">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Project link
                    </h4>
                    {hasLink ? (
                      <Link
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        {project.projectLink}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <span className="text-sm text-zinc-500 dark:text-zinc-500 italic">
                        Link not yet available
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
