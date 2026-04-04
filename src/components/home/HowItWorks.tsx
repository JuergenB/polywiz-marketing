'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Globe, Sparkles, CalendarClock, ShieldCheck, Send } from 'lucide-react';

const steps = [
  {
    icon: Globe,
    title: 'Drop in a URL',
    description: 'Paste your exhibition page, newsletter, or event. PolyWiz scrapes the content automatically.',
    iconBg: 'bg-[#FEF0EC]',
    iconColor: 'text-[#E07A5F]',
  },
  {
    icon: Sparkles,
    title: 'AI generates the posts',
    description: 'Platform-specific drafts tuned for voice, length, and audience across all your channels.',
    iconBg: 'bg-[#EFF7F3]',
    iconColor: 'text-[#81B29A]',
  },
  {
    icon: CalendarClock,
    title: 'Smart scheduling',
    description: 'Posts are distributed over weeks and months with platform-appropriate cadence.',
    iconBg: 'bg-[#FDF6E8]',
    iconColor: 'text-[#D4A853]',
  },
  {
    icon: ShieldCheck,
    title: 'Review and approve',
    description: 'Every post is a draft. Edit text, swap images, approve individually or in bulk.',
    iconBg: 'bg-[#FEF0EC]',
    iconColor: 'text-[#E07A5F]',
  },
  {
    icon: Send,
    title: 'Publish everywhere',
    description: 'One click publishes to 14 platforms with status tracking and branded short links.',
    iconBg: 'bg-[#EFF7F3]',
    iconColor: 'text-[#81B29A]',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#FAFAF8] py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E07A5F]">
            How It Works
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#2D3436] sm:text-4xl">
            From URL to published campaign in five steps
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(45,52,54,0.08)] border border-[#DFE6E9]"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${step.iconBg}`}>
                  <Icon className={`h-6 w-6 ${step.iconColor}`} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F5F3F0] text-xs font-bold text-[#636E72]">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[#2D3436]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[#636E72] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
