import { featuredProjects } from '@/data/resume';

export function FeaturedProjects() {
  return (
    <section id="work" className="section-padding">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
          Featured Projects
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10">
          A selection of high-impact work I've shipped at Jill's Office.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:border-zinc-700"
            >
              <header className="flex items-start justify-between gap-3">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <span className="shrink-0 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                  {project.tag}
                </span>
              </header>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>
              <p className="mt-auto text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {project.stack.join('  •  ')}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
