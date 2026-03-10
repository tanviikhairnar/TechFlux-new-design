import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
const teamPhoto = "https://techflux.in/img/assets/images/WhatsApp%20Image%202026-03-10%20at%2015.39.11.jpeg";
const culturePhoto = "https://techflux.in/img/assets/images/cloud-storage-background-business-network-design.jpg";
const workspacePhoto = "https://techflux.in/img/assets/images/hand-touching-mobile-with-applications.jpg";
const growthPhoto = "https://techflux.in/img/assets/images/pexels-cottonbro-5483071.jpg";
import { Footer } from '../components/Footer';
import { CareerApplyNowButton, CareerViewDetailsButton } from '../components/GetProjectEstimateButton';
import { Navigation } from '../components/Navigation';
import { careerRoles } from '../data/careers';

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

const positions = careerRoles;

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
    image: culturePhoto,
    title: 'Remote-First',
    text: 'Flexible work environment',
  },
  {
    image: workspacePhoto,
    title: 'Innovation Culture',
    text: 'Brainstorm and create together',
  },
  {
    image: growthPhoto,
    title: 'Cutting-Edge Tech',
    text: 'Work with modern technologies',
  },
];

function tagIcon(label: string) {
  if (label.includes('Work From Office') || label.includes('Remote')) return Monitor;
  if (label.includes('Year') || label.includes('Month') || label.includes('Fresher')) return CalendarClock;
  return BriefcaseBusiness;
}

const scrollToOpenPositions = () => {
  const element = document.getElementById('open-positions');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Careers() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-5">
          <section className="mb-20 grid min-h-[calc(100vh-150px)] gap-10 lg:grid-cols-[1fr_1.02fr] lg:items-center">
            <motion.div initial={{ opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
              <h1
                className="mb-6 max-w-[560px] text-5xl font-bold leading-[1.04] tracking-[-0.015em] text-[#E5E7EB] sm:text-6xl md:text-[72px]"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Join the Team at
                <br />
                Techflux
                <br />
                Solutions
              </h1>
              <p className="mb-9 max-w-[560px] text-base leading-relaxed text-[#94A3B8] md:text-[17px]">
                We&apos;re building scalable SaaS platforms, AI systems, and digital products for global clients.
                Join our team and help create impactful technology.
              </p>
              <button
                onClick={scrollToOpenPositions}
                className="inline-flex rounded-2xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-10 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                View Open Positions
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
            >
              <img src={teamPhoto} alt="Techflux team at work" className="h-[300px] w-full object-cover object-center md:h-[520px] lg:h-[620px]" />
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24 pt-2"
          >
            <h2 className="mb-12 text-center text-4xl font-bold text-[#E5E7EB] md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Why Work With Techflux
            </h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {whyWorkItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + index * 0.07 }}
                  className="flex min-h-[320px] flex-col items-center rounded-3xl border border-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="mb-7 inline-flex h-[72px] w-[72px] items-center justify-center rounded-3xl bg-[#143764]">
                    <item.icon className="h-9 w-9 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold leading-tight text-[#E5E7EB] md:text-2xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#93A4BE] md:text-base">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        <section id="open-positions" className="bg-[#0A152B] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-3 text-center text-4xl font-bold text-[#E5E7EB] md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Open Positions
              </h2>
              <p className="mb-12 text-center text-base text-[#93A4BE] md:text-[17px]">
                Explore opportunities to work on cutting-edge projects with a talented team.
              </p>
            </motion.div>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <motion.article
                  key={position.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-3xl border border-[#233554] bg-[#121f38] px-7 py-6 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:px-8 md:py-7"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-3 text-[30px] font-semibold leading-tight text-[#E5E7EB] md:text-[36px]">
                        {position.title}
                      </h3>
                      <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2 text-base text-[#90A8CB] md:text-lg">
                        {[position.mode, position.experience, position.department].map((tag) => {
                          const Icon = tagIcon(tag);
                          return (
                            <span key={tag} className="inline-flex items-center gap-1.5">
                              <Icon className="h-4 w-4 text-[#2F80ED]" />
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                      <p className="max-w-[760px] text-base text-[#9AB0CF] md:text-lg">{position.summary}</p>
                    </div>

                    <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row md:w-auto md:flex-col">
                      <CareerViewDetailsButton
                        slug={position.slug}
                        role={position}
                        className="w-full rounded-2xl border border-[#35507C] bg-[#25334B] px-6 py-3 text-center text-base font-medium text-[#D5E6FF] transition-all duration-300 hover:bg-[#2A3D5D] sm:flex-1 md:min-w-[220px] md:flex-none"
                      />
                      <CareerApplyNowButton
                        positionTitle={position.title}
                        role={position}
                        className="w-full rounded-2xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-6 py-3 text-center text-base font-semibold text-white shadow-[0_10px_28px_rgba(47,128,237,0.35)] transition-all duration-300 hover:brightness-110 sm:flex-1 md:min-w-[220px] md:flex-none"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1260px] px-4 py-24 lg:px-5">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <h2 className="mb-3 text-center text-4xl font-bold text-[#E5E7EB] md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Our Hiring Process
            </h2>
            <p className="mb-12 text-center text-base text-[#93A4BE] md:text-[17px]">
              A transparent and efficient hiring journey from application to onboarding.
            </p>

            <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {hiringProcess.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="relative rounded-3xl border border-white/5 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  {index < hiringProcess.length - 1 ? (
                    <span className="pointer-events-none absolute right-[-26px] top-[84px] hidden h-[2px] w-[30px] bg-[#204270] xl:block" />
                  ) : null}
                  <div className="relative mb-6 mx-auto flex h-[82px] w-[82px] items-center justify-center rounded-full bg-gradient-to-r from-[#39AEFE] to-[#2F80ED]">
                    <span className="absolute -right-2 -top-2 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2F80ED] bg-[#061226] text-[18px] font-bold text-[#2F80ED]">
                      {`0${index + 1}`}
                    </span>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold leading-tight text-[#E5E7EB] md:text-2xl">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#93A4BE] md:text-base">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        <section className="bg-[#0A152B] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-3 text-center text-4xl font-bold text-[#E5E7EB] md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Life at Techflux
              </h2>
              <p className="mb-12 text-center text-base text-[#93A4BE] md:text-[17px]">
                Join a collaborative environment where innovation meets culture.
              </p>

              <div className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {lifeCards.map((card, index) => (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="overflow-hidden rounded-3xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img src={card.image} alt={card.title} className="h-full w-full object-cover object-center" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E1B34] to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="mb-2 text-xl font-semibold leading-tight text-[#E5E7EB] md:text-2xl">{card.title}</h3>
                      <p className="text-sm leading-snug text-[#93A4BE] md:text-base">{card.text}</p>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="rounded-3xl border border-white/5 p-10 text-center md:p-14" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <h3 className="mb-4 text-4xl font-bold text-[#E5E7EB] md:text-[52px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Ready to Join Our Team?
                </h3>
                <p className="mx-auto mb-10 max-w-4xl text-base leading-relaxed text-[#93A4BE] md:text-[17px]">
                  We&apos;re a distributed team of passionate engineers, designers, and product managers working
                  together to build exceptional digital products.
                </p>
                <button
                  onClick={scrollToOpenPositions}
                  className="inline-flex rounded-2xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-12 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Explore Open Positions
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}





