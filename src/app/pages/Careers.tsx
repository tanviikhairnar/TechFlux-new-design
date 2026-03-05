import { motion } from 'motion/react';
import {
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  Code2,
  Globe2,
  Heart,
  Monitor,
  TrendingUp,
  Users,
} from 'lucide-react';
import teamPhoto from '../../assets/photo-1760629863094-5b1e8d1aae74.jpg';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

const whyWorkItems = [
  {
    icon: TrendingUp,
    title: 'Learning & Growth',
    text: 'Access to mini-courses, certifications, and continuous skill development.',
  },
  {
    icon: Globe2,
    title: 'Flexible Work Culture',
    text: 'Work remotely with flexible hours and maintain a healthy work-life balance.',
  },
  {
    icon: Users,
    title: 'Global Projects',
    text: 'Work on diverse projects for international clients across industries.',
  },
  {
    icon: Heart,
    title: 'Supportive Team Environment',
    text: 'Collaborative culture with mentorship, care, and knowledge sharing.',
  },
];

const positions = [
  {
    title: 'Flutter Developer',
    tags: ['Remote', '2-4 years', 'Mobile Development'],
    description: 'Build high-quality cross-platform mobile applications using Flutter and Dart for global clients.',
  },
  {
    title: 'React Developer',
    tags: ['Remote / Hybrid', '3-5 years', 'Frontend Development'],
    description: 'Develop modern, scalable web apps using React, Next.js, and latest frontend technologies.',
  },
  {
    title: 'Backend Developer',
    tags: ['Remote', '3-6 years', 'Backend Development'],
    description: 'Build scalable APIs and backend systems using Node.js, Python, or Laravel with cloud infrastructure.',
  },
  {
    title: 'QA Tester',
    tags: ['Remote', '1-3 years', 'Quality Assurance'],
    description: 'Ensure software quality through comprehensive manual and automated testing.',
  },
  {
    title: 'UI/UX Designer',
    tags: ['Remote', '2-4 years', 'Design'],
    description: 'Craft beautiful and intuitive user experiences for web and mobile applications.',
  },
];

const hiringProcess = [
  {
    icon: CheckCircle2,
    title: 'Application Submission',
    text: 'Submit your resume and portfolio through our careers portal.',
  },
  {
    icon: Users,
    title: 'Initial Screening',
    text: 'HR team reviews your profile and conducts a preliminary assessment.',
  },
  {
    icon: Code2,
    title: 'Technical Interview',
    text: 'Technical discussion and coding assessment with our engineering team.',
  },
  {
    icon: CalendarClock,
    title: 'Final Interview',
    text: 'Meet the team and discuss project expectations and growth path.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Offer & Onboarding',
    text: 'Receive your offer letter and begin your onboarding journey.',
  },
];

const lifeCards = [
  {
    image: teamPhoto,
    title: 'Team Collaboration',
    text: 'Work together on challenging projects.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    title: 'Remote-First',
    text: 'Flexible work environment',
  },
  {
    image:
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=900&q=80',
    title: 'Innovation Culture',
    text: 'Brainstorm and create together',
  },
  {
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    title: 'Cutting-Edge Tech',
    text: 'Work with modern technologies',
  },
];

function tagIcon(label: string) {
  if (label.includes('Remote')) return Monitor;
  if (label.includes('years')) return CalendarClock;
  return BriefcaseBusiness;
}

export default function Careers() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-5">
          <section className="mb-20 grid gap-8 lg:grid-cols-[1fr_1.02fr] lg:items-center">
            <motion.div initial={{ opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
              <h1
                className="mb-5 max-w-[520px] text-4xl font-bold leading-[1.04] tracking-[-0.01em] text-[#E5E7EB] sm:text-5xl md:text-[58px]"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Join the Team at
                <br />
                TechFlux
                <br />
                Solutions
              </h1>
              <p className="mb-7 max-w-[500px] text-base leading-relaxed text-[#94A3B8] md:text-lg">
                We&apos;re building scalable SaaS platforms, AI systems, and digital products for global clients.
                Join our team and help create impactful technology.
              </p>
              <a
                href="#open-positions"
                className="inline-flex rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                View Open Positions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
            >
              <img src={teamPhoto} alt="Techflux team at work" className="h-[340px] w-full object-cover md:h-[400px] lg:h-[350px]" />
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-center text-4xl font-bold text-[#E5E7EB] md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Why Work With TechFlux
            </h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {whyWorkItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + index * 0.07 }}
                  className="rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#13376A]">
                    <item.icon className="h-5 w-5 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#E5E7EB]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#93A4BE]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        <section id="open-positions" className="border-y border-white/5 bg-[#0A152B] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-2 text-center text-4xl font-bold text-[#E5E7EB] md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Open Positions
              </h2>
              <p className="mb-8 text-center text-sm text-[#93A4BE] md:text-base">
                Explore opportunities to work on cutting-edge projects with a talented team.
              </p>
            </motion.div>

            <div className="space-y-4">
              {positions.map((position, index) => (
                <motion.article
                  key={position.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-xl border border-[#233554] bg-[#121f38] p-5 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-2 text-[27px] font-semibold leading-tight text-[#E5E7EB] md:text-[30px]">
                        {position.title}
                      </h3>
                      <div className="mb-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#90A8CB]">
                        {position.tags.map((tag) => {
                          const Icon = tagIcon(tag);
                          return (
                            <span key={tag} className="inline-flex items-center gap-1.5">
                              <Icon className="h-3.5 w-3.5 text-[#2F80ED]" />
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                      <p className="max-w-[760px] text-sm text-[#9AB0CF]">{position.description}</p>
                    </div>

                    <div className="flex shrink-0 gap-3 md:flex-col">
                      <button className="rounded-lg border border-[#35507C] bg-[#1B2A45] px-6 py-2 text-xs font-medium text-[#D5E6FF] transition-all duration-300 hover:bg-[#22365A]">
                        View Details
                      </button>
                      <a
                        href={`mailto:hr@techflux.in?subject=${encodeURIComponent(`Application for ${position.title}`)}`}
                        className="rounded-lg bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-6 py-2 text-center text-xs font-semibold text-white transition-all duration-300 hover:brightness-110"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1260px] px-4 py-20 lg:px-5">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="mb-2 text-center text-4xl font-bold text-[#E5E7EB] md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Our Hiring Process
            </h2>
            <p className="mb-8 text-center text-sm text-[#93A4BE] md:text-base">
              A transparent and efficient hiring journey from application to onboarding.
            </p>

            <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-[38px] hidden h-px bg-[#294778] xl:block" />
              {hiringProcess.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="relative rounded-2xl border border-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <span className="absolute right-4 top-4 text-[10px] font-semibold tracking-[0.08em] text-[#78B8FF]">{`0${index + 1}`}</span>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#13376A]">
                    <step.icon className="h-5 w-5 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[#E5E7EB]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#93A4BE]">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        <section className="border-y border-white/5 bg-[#0A152B] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-2 text-center text-4xl font-bold text-[#E5E7EB] md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Life at TechFlux
              </h2>
              <p className="mb-8 text-center text-sm text-[#93A4BE] md:text-base">
                Join a collaborative environment where innovation meets culture.
              </p>

              <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {lifeCards.map((card, index) => (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <img src={card.image} alt={card.title} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="mb-1 text-base font-semibold text-[#E5E7EB]">{card.title}</h3>
                      <p className="text-sm text-[#93A4BE]">{card.text}</p>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="rounded-2xl border border-white/5 p-8 text-center md:p-12" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <h3 className="mb-3 text-4xl font-bold text-[#E5E7EB] md:text-[42px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Ready to Join Our Team?
                </h3>
                <p className="mx-auto mb-7 max-w-3xl text-sm leading-relaxed text-[#93A4BE] md:text-base">
                  We&apos;re a distributed team of passionate engineers, designers, and product managers working
                  together to build exceptional digital products.
                </p>
                <a
                  href="#open-positions"
                  className="inline-flex rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Explore Open Positions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

