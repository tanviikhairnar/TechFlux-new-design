import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Star, Video } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const coverageItems = [
  'Product feasibility and technical approach',
  'Recommended architecture and tech stack',
  'Timeline and development phases',
  'Budget range and investment breakdown',
  'Team structure and engagement model',
  'Next steps and action plan',
];

const stats = [
  { value: '12+', label: 'Years building scalable platforms' },
  { value: '200+', label: 'Successful projects delivered' },
  { value: '98%', label: 'Client satisfaction rate' },
];

const testimonials = [
  {
    quote:
      'Techflux transformed our idea into a fully functional SaaS platform in just 4 months. Their expertise in scalable architecture was exactly what we needed.',
    name: 'Michael Chen',
    company: 'CEO, DataInsight',
  },
  {
    quote:
      'The AI integration they built for our platform has been a game-changer. Customer engagement increased by 60% within the first month.',
    name: 'Sarah Johnson',
    company: 'VP Product, TechVentures',
  },
  {
    quote:
      'Working with Techflux as our white-label partner has allowed us to scale our agency without the overhead of hiring developers.',
    name: 'David Martinez',
    company: 'Founder, Digital Agency Co.',
  },
  {
    quote:
      'Techflux delivered an excellent experience from start to finish. I hired Techflux to build a Next.js ticket PDF generation system and he handled it with strong technical proficiency, clean implementation, proactive communication, and clear accountability. I can confidently recommend him.',
    name: 'Mantas',
    company: '',
  },
  {
    quote:
      'Working with Techflux and his team has been an excellent experience. They showed strong technical capability, professionalism, and commitment throughout the EngMe platform development across backend, frontend, and integrations. I highly recommend Techflux as a reliable development partner.',
    name: 'Dr. Ashraf',
    company: 'Engme',
  },
  {
    quote:
      'I had a fantastic experience working with Techflux and his team. They demonstrated creativity, met deadlines consistently, delivered high-quality output, and provided clean documentation and smooth handoff. Great execution across website development and tooling.',
    name: 'Parth',
    company: 'Dine Right',
  },
];

export default function BookStrategyCall() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState(3);
  const [testimonialTransitionOn, setTestimonialTransitionOn] = useState(true);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerView(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerView(2);
      } else {
        setTestimonialsPerView(3);
      }
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const canSlide = testimonials.length > testimonialsPerView;
  const loopedTestimonials = canSlide
    ? [...testimonials, ...testimonials.slice(0, testimonialsPerView)]
    : testimonials;

  useEffect(() => {
    if (!canSlide) return;

    const timer = window.setInterval(() => {
      setTestimonialIndex((prev) => prev + 1);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [canSlide]);

  useEffect(() => {
    if (!canSlide) return;

    if (testimonialIndex === testimonials.length) {
      const resetTimer = window.setTimeout(() => {
        setTestimonialTransitionOn(false);
        setTestimonialIndex(0);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setTestimonialTransitionOn(true);
          });
        });
      }, 470);

      return () => window.clearTimeout(resetTimer);
    }
  }, [testimonialIndex, canSlide]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.15),transparent_42%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-[#E5E7EB] sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Let&apos;s Build Something Scalable
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#94A3B8] md:text-xl">
              Discuss your SaaS, AI, or On-Demand project with our product experts. Get clarity on feasibility,
              architecture, timeline, and budget.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-[#E5E7EB] md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                What We&apos;ll Cover in Your Strategy Call
              </h2>

              <div className="mb-8 space-y-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-base text-[#94A3B8] md:text-lg">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1D8CFF]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-7"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <h3 className="mb-4 text-2xl font-semibold text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Call Details
                </h3>

                <div className="space-y-3 text-[#94A3B8]">
                  <div className="flex items-center gap-3 text-base md:text-lg">
                    <Clock3 className="h-4 w-4 text-[#1D8CFF]" />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center gap-3 text-base md:text-lg">
                    <Video className="h-4 w-4 text-[#1D8CFF]" />
                    <span>Video call (Zoom/Google Meet)</span>
                  </div>
                  <div className="flex items-center gap-3 text-base md:text-lg">
                    <Calendar className="h-4 w-4 text-[#1D8CFF]" />
                    <span>Flexible scheduling - pick a time that works for you</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#2F80ED]/20 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <iframe
                title="strategy call"
                src="https://calendly.com/soheltf/strategy-call-45min"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0"
                style={{ height: "980px" }}
              />
            </motion.div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20"
          >
            <h2
              className="mb-10 text-center text-4xl font-bold text-[#E5E7EB] md:text-5xl"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Why Choose Techflux Solutions
            </h2>

            <div className="relative group">
              <div className="overflow-hidden">
                <motion.div
                  className="-mx-2 flex"
                  animate={{ x: `-${(testimonialIndex * 100) / testimonialsPerView}%` }}
                  transition={testimonialTransitionOn ? { duration: 0.45, ease: 'easeInOut' } : { duration: 0 }}
                >
                  {loopedTestimonials.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="w-full px-2" style={{ flex: `0 0 ${100 / testimonialsPerView}%` }}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className="flex h-[320px] flex-col rounded-2xl border border-white/8 p-8 shadow-lg backdrop-blur-xl transition-all hover:shadow-[#2F80ED]/20"
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      >
                        <div className="mb-6 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-[#2F80ED] text-[#2F80ED]" />
                          ))}
                        </div>
                        <p className="mb-6 text-base leading-relaxed text-[#F9FAFB] line-clamp-4">&quot;{item.quote}&quot;</p>

                        <div className="mt-auto flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] font-bold text-white">
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-xl font-semibold text-[#F9FAFB]">{item.name}</div>
                            {item.company ? <div className="text-base text-[#9CA3AF]">{item.company}</div> : null}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {canSlide ? (
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-screen -translate-x-1/2 -translate-y-1/2 px-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => {
                      if (testimonialIndex === 0) {
                        setTestimonialTransitionOn(false);
                        setTestimonialIndex(testimonials.length);
                        window.requestAnimationFrame(() => {
                          window.requestAnimationFrame(() => {
                            setTestimonialTransitionOn(true);
                            setTestimonialIndex(testimonials.length - 1);
                          });
                        });
                      } else {
                        setTestimonialIndex((prev) => prev - 1);
                      }
                    }}
                    className="pointer-events-none absolute left-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#111827]/95 text-[#E5E7EB] transition-all hover:border-[#2F80ED]/60 hover:text-[#2F80ED] group-hover:pointer-events-auto"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setTestimonialIndex((prev) => prev + 1)}
                    className="pointer-events-none absolute right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#111827]/95 text-[#E5E7EB] transition-all hover:border-[#2F80ED]/60 hover:text-[#2F80ED] group-hover:pointer-events-auto"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              ) : null}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 hidden rounded-3xl border border-white/5 p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-14"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-base text-[#64748B] md:text-lg">
              No sales pitch, just honest technical advice and recommendations.
            </p>
            <button className="rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all hover:brightness-110">
              Confirm Your Strategy Call
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

