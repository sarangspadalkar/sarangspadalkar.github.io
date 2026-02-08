import { contact } from '@/data/resume';
import { Linkedin, Github, Mail } from 'lucide-react';
import Link from 'next/link';

const iconMap = { Linkedin, Github, Mail };

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-zinc-900/30">
      <div className="container-narrow text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{contact.title}</h2>
        <p className="text-zinc-400 mb-10">{contact.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-6">
          {contact.links.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Mail;
            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-5 py-3 text-zinc-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
