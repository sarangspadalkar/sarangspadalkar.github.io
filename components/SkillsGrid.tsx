import { skillsByCategory, type SkillCategory } from '@/data/resume';
import { cn } from '@/lib/utils';

const categoryOrder: SkillCategory[] = [
  'Backend',
  'Cloud & DevOps',
  'Databases',
  'Security & Identity',
  'Tools',
];

export function SkillsGrid() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
          Technical Skills
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10">
          The stack I work with day to day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categoryOrder.map((category) => (
            <div
              key={category}
              className={cn(
                'rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5 sm:p-6',
                'hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors'
              )}
            >
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skillsByCategory[category].map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-zinc-800 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-md px-2.5 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
