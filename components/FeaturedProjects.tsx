'use client';

import { featuredProjects } from '@/data/resume';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Workflow, Plug, Calendar, Users, Gamepad2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const iconMap = { Workflow, Plug, Calendar, Users, Gamepad2 };

export function FeaturedProjects() {
  return (
    <section id="work" className="section-padding bg-zinc-900/30">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-zinc-400 mb-10">Selected system design and integration work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap] ?? Workflow;
            return (
              <Link key={project.id} href={project.href} className="group">
                <Card className="h-full transition-all duration-200 group-hover:border-zinc-600 group-hover:shadow-xl">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="rounded-lg bg-zinc-800 p-2.5">
                        <Icon className="h-5 w-5 text-zinc-300" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                    </div>
                    <CardTitle className="text-lg mt-2">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-zinc-500 bg-zinc-800/80 rounded px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
