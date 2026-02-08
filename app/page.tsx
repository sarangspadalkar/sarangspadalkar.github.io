import { Hero } from '@/components/Hero';
import { SkillsGrid } from '@/components/SkillsGrid';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsGrid />
      <ExperienceTimeline />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
