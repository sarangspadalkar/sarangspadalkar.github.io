import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SkillsGrid } from '@/components/SkillsGrid';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsGrid />
      <ExperienceTimeline />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
