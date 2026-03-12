import { AnimatePresence, motion } from 'framer-motion';
import {
  Users, Brain, Zap, Layers, ArrowRight, Check,
  Star, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ClientLogosSlider } from '../components/ClientLogosSlider';
const homeHeroAiImage = "https://techflux.in/public/assets/images/AI%20(1).webp"
const homeSaasImage = "https://techflux.in/public/assets/images/SaaS.webp"
const homeAiGradientImage = "https://techflux.in/public/assets/images/photo-1760629863094-5b1e8d1aae74.webp"
const onDemandImage = "https://techflux.in/public/assets/images/On%20Demand%20(1).webp"
const servyoCaseImage = "https://techflux.in/public/assets/images/Group%201000003012.webp"
const allstarCaseImage = "https://techflux.in/public/assets/images/car.webp"
const eternCaseImage = "https://techflux.in/public/assets/images/3649760.webp"

function Counter({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(() => Number(0).toFixed(decimals));

  useEffect(() => {
    let rafId = 0;
    const duration = 1000;
    const start = performance.now();
    const from = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = from + (value - from) * progress;
      setDisplay(current.toFixed(decimals));
      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [value, decimals]);

  return <span>{display}</span>;
}

const processSteps = [
  { icon: '01', short: 'Discovery', label: 'Discovery & Planning', desc: 'We analyze your requirements, define scope, and create a detailed project roadmap.' },
  { icon: '02', short: 'Architecture', label: 'Architecture Design', desc: 'Design scalable system architecture, database models, and API specifications.' },
  { icon: '03', short: 'UI/UX', label: 'UI/UX Design', desc: 'Create intuitive user interfaces with wireframes, prototypes, and design systems.' },
  { icon: '04', short: 'Development', label: 'Development', desc: 'Build your product using agile methodology with bi-weekly sprint reviews.' },
  { icon: '05', short: 'QA Testing', label: 'Testing & QA', desc: 'Comprehensive testing including unit, integration, and user acceptance testing.' },
  { icon: '06', short: 'Launch & Scale', label: 'Launch & Support', desc: 'Deploy to production with monitoring, maintenance, and continuous improvements.' }
];

const testimonialsData = [
  {
    text: 'Techflux transformed our idea into a fully functional SaaS platform in just 4 months. Their expertise in scalable architecture was exactly what we needed.',
    name: 'Michael Chen',
    company: 'CEO, DataInsight',
  },
  {
    text: 'The AI integration they built for our platform has been a game-changer. Customer engagement increased by 60% within the first month.',
    name: 'Sarah Johnson',
    company: 'VP Product, TechVentures',
  },
  {
    text: 'Working with Techflux as our white-label partner has allowed us to scale our agency without the overhead of hiring developers.',
    name: 'David Martinez',
    company: 'Founder, Digital Agency Co.',
  },
  {
    text: 'Techflux delivered an excellent experience from start to finish. I hired Techflux to build a Next.js ticket PDF generation system and he handled it with strong technical proficiency, clean implementation, proactive communication, and clear accountability. I can confidently recommend him.',
    name: 'Mantas',
    company: '',
  },
  {
    text: 'Working with Techflux and his team has been an excellent experience. They showed strong technical capability, professionalism, and commitment throughout the EngMe platform development across backend, frontend, and integrations. I highly recommend Techflux as a reliable development partner.',
    name: 'Dr. Ashraf',
    company: 'Engme',
  },
  {
    text: 'I had a fantastic experience working with Techflux and his team. They demonstrated creativity, met deadlines consistently, delivered high-quality output, and provided clean documentation and smooth handoff. Great execution across website development and tooling.',
    name: 'Parth',
    company: 'Dine Right',
  },
];

export default function Home() {
  const [activeProcessStep, setActiveProcessStep] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState(3);
  const [testimonialTransitionOn, setTestimonialTransitionOn] = useState(true);
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<number, boolean>>({});

  useEffect(() => {
    document.title = 'Techflux Solutions';
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute(
      'content',
      'TechFlux Solutions helps startups and agencies design, develop, and scale high-performance digital products.',
    );
  }, []);

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

  const canSlide = testimonialsData.length > testimonialsPerView;
  const loopedTestimonials = canSlide
    ? [...testimonialsData, ...testimonialsData.slice(0, testimonialsPerView)]
    : testimonialsData;

  useEffect(() => {
    if (!canSlide) return;

    const timer = window.setInterval(() => {
      setTestimonialIndex((prev) => prev + 1);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [canSlide]);

  useEffect(() => {
    if (!canSlide) return;

    if (testimonialIndex === testimonialsData.length) {
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
  }, [testimonialIndex, testimonialsData.length, canSlide]);

  useEffect(() => {
    setExpandedTestimonials({});
  }, [testimonialIndex]);

  return (
    <div className="w-full min-h-screen bg-[#0B0F1A] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2F80ED]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2D9CDB]/10 rounded-full blur-[120px]" />

        <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-16 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1
              className="text-6xl md:text-6xl font-semibold text-[#F9FAFB] leading-[1.08] mb-7"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Building Scalable SaaS, AI & On-Demand Platforms
            </h1>

            <p className="text-xl text-[#9CA3AF] leading-relaxed mb-10">
              Techflux Solutions helps startups and agencies design, develop, and scale high-performance digital products.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/book-strategy-call"
                className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all flex items-center gap-2"
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/case-studies"
                className="px-9 py-4 rounded-xl border border-[#2F80ED] text-[#2F80ED] font-semibold hover:bg-[#2F80ED]/10 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={homeHeroAiImage}
                alt="AI Technology"
                className="w-full max-w-[640px] h-auto rounded-2xl ml-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </section>

      <section className="py-20 bg-[#111827]/30">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 12, suffix: '+', label: 'Years experience', decimals: 0 },
              { value: 100, suffix: '%', label: 'Dedicated in-house team', decimals: 0 },
              { value: 99.9, suffix: '%', label: 'Scalable architecture', decimals: 1 },
              { value: 24, suffix: '/7', label: 'Long-term support', decimals: 0 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3
                  className="text-[#F9FAFB] text-4xl font-semibold mb-1"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  <Counter value={stat.value} decimals={stat.decimals} />
                  {stat.suffix}
                </h3>
                <p className="text-sm text-[#9CA3AF]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Our Core Expertise
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              End-to-end solutions for modern digital products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: 'SaaS Development',
                description:
                  'Build MVPs, subscription models, and scalable dashboards for long-term growth.',
                link: '#saas',
              },
              {
                icon: Brain,
                title: 'AI Solutions',
                description:
                  'Integrate AI chatbots, GPT models, automation, and advanced analytics.',
                link: '#ai',
              },
              {
                icon: Zap,
                title: 'On-Demand Applications',
                description:
                  'Real-time systems for booking, marketplace, and delivery platforms.',
                link: '#ondemand',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl border border-[#1B263B] hover:border-[#2F80ED]/60 transition-all"
                style={{ background: '#0F172A' }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center mb-6 shadow-lg shadow-[#2F80ED]/25 transition-all">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3
                  className="text-xl font-bold text-[#F9FAFB] mb-3"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {service.title}
                </h3>

                <p className="text-[#9CA3AF] leading-relaxed mb-4">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="text-[#2F80ED] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="saas" className="py-20 relative bg-[#111827]/30">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={homeSaasImage}
                  alt="SaaS Dashboard"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Enterprise SaaS Development
              </h2>
              <p className="text-[#9CA3AF] mb-8 leading-relaxed text-[17px] max-w-[680px]">
                We build production-ready SaaS platforms with robust subscription management, multi-tenant architecture, and intuitive admin dashboards. From MVP to enterprise scale, we architect solutions that grow with your business.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Multi-tenant architecture with role-based access',
                  'Subscription billing and payment gateway integration',
                  'Real-time analytics and reporting dashboards',
                  'API-first architecture for third-party integrations',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-7 h-7 rounded-full border-2 border-[#2F80ED] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#2F80ED]" />
                    </div>
                    <span className="text-[#B9C8E6] text-[16px] md:text-[17px] font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/saas-development"
                className="inline-flex h-[58px] px-9 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white text-[18px] font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center"
              >
                Explore SaaS Development
              </Link>
            </motion.div>

          </div>
        </div>
      </section>


      <section id="ai" className="py-20 relative">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                AI-Powered Innovation
              </h2>

              <p className="text-[#9CA3AF] mb-8 leading-relaxed">
                Harness the power of artificial intelligence to automate workflows, enhance customer experiences, and unlock data-driven insights. We integrate cutting-edge AI models including GPT, custom ML algorithms, and intelligent automation.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Custom AI chatbots with natural language processing',
                  'GPT integration for content generation and analysis',
                  'Predictive analytics and recommendation engines',
                  'Intelligent workflow automation and optimization',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-7 h-7 rounded-full border-2 border-[#2F80ED] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#2F80ED]" />
                    </div>
                    <span className="text-[#B9C8E6] text-[16px] md:text-[17px] font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/ai-solutions"
                className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center gap-2"
              >
                Explore AI Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={homeAiGradientImage}
                  alt="AI Gradient"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/20 to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section id="ondemand" className="py-20 relative bg-[#111827]/30">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={onDemandImage}
                  alt="On-Demand App"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                On-Demand Platforms
              </h2>
              <p className="text-[#9CA3AF] mb-8 leading-relaxed text-[17px] max-w-[700px]">
                Build real-time marketplaces, booking systems, and delivery platforms that connect users instantly. We create seamless experiences for service providers and customers with live tracking, payment processing, and smart matching algorithms.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Real-time booking and scheduling systems',
                  'GPS tracking and route optimization',
                  'Multi-sided marketplace architecture',
                  'Integrated payment and commission management'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-7 h-7 rounded-full border-2 border-[#2F80ED] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#2F80ED]" />
                    </div>
                    <span className="text-[#B9C8E6] text-[16px] md:text-[17px] font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/on-demand-solutions"
                className="inline-flex h-[58px] px-9 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white text-[18px] font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center"
              >
                View On-Demand Solutions
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <section id="process" className="py-12 relative">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Our Development Process
            </h2>
            <p className="text-lg text-[#9CA3AF]">Our proven 6-step methodology</p>
          </motion.div>

          <div className="mb-12" onMouseLeave={() => setActiveProcessStep(null)}>
            <div className="hidden lg:grid lg:grid-cols-6 gap-6 pb-10 pt-16 xl:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.icon}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="relative flex min-h-[138px] flex-col items-center text-center"
                  onMouseEnter={() => setActiveProcessStep(index)}
                >
                  <div className="relative mb-5 flex w-full items-center justify-center">
                    <button
                      type="button"
                      onFocus={() => setActiveProcessStep(index)}
                      onBlur={() => setActiveProcessStep(null)}
                      className="h-16 w-16 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] text-3xl font-bold text-white shadow-lg shadow-[#2F80ED]/30 outline-none"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      {step.icon}
                    </button>

                    {index < processSteps.length - 1 && (
                      <div className="pointer-events-none absolute left-[calc(50%+40px)] top-1/2 h-[2px] w-[calc(100%-80px)] -translate-y-1/2 bg-gradient-to-r from-[#2F80ED]/70 to-transparent" />
                    )}

                    <AnimatePresence>
                      {activeProcessStep === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.22 }}
                          className="absolute top-[calc(100%+14px)] left-1/2 z-30 w-[252px] -translate-x-1/2 rounded-2xl border border-[#2F80ED]/35 bg-[#0F1C35]/95 p-5 text-left shadow-[0_16px_45px_rgba(47,128,237,0.22)] backdrop-blur-xl xl:w-[272px]"
                        >
                          <div className="pointer-events-none absolute left-1/2 bottom-full h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 border-t border-l border-[#2F80ED]/35 bg-[#0F1C35]/95" />

                          <div
                            className="mb-2 text-xl font-bold text-[#2F80ED]"
                            style={{ fontFamily: "Sora, sans-serif" }}
                          >
                            {step.icon}
                          </div>

                          <h3
                            className="mb-2 text-lg font-semibold text-[#F9FAFB]"
                            style={{ fontFamily: "Sora, sans-serif" }}
                          >
                            {step.label}
                          </h3>

                          <p className="text-sm leading-relaxed text-[#9CA3AF]">
                            {step.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <p
                    className="min-h-[56px] text-xl font-semibold leading-tight text-[#F9FAFB]"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {step.short}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
              {processSteps.map((step, index) => (
                <motion.button
                  key={step.icon}
                  type="button"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  onClick={() => setActiveProcessStep(index)}
                  className="rounded-xl border border-white/10 bg-[#0F1C35] px-4 py-5 text-left"
                >
                  <div
                    className="text-[#2F80ED] text-2xl font-bold mb-2"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {step.icon}
                  </div>

                  <div className="text-[#F9FAFB] font-semibold">{step.short}</div>
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeProcessStep !== null && (
              <motion.div
                key={processSteps[activeProcessStep].icon}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="max-w-[460px] rounded-xl border border-white/10 bg-[#0F1C35] p-6 shadow-xl shadow-[#2F80ED]/10 lg:hidden"
              >
                <div
                  className="text-[#2F80ED] font-bold text-2xl mb-2"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {processSteps[activeProcessStep].icon}
                </div>

                <h3
                  className="text-[#F9FAFB] font-semibold text-2xl mb-2"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {processSteps[activeProcessStep].label}
                </h3>

                <p className="text-[#9CA3AF] text-base leading-relaxed">
                  {processSteps[activeProcessStep].desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section id="portfolio" className="py-20 relative bg-[#0B1220]">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-center justify-between"
          >
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-3"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Success Stories
              </h2>
              <p className="text-lg text-[#9CA3AF]">
                Real products. Real results. Real impact.
              </p>
            </div>

            <Link
              to="/case-studies"
              className="text-[#2F80ED] font-semibold flex items-center gap-2 hover:text-[#66B7FF] transition-colors"
            >
              View All Case Studies →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: servyoCaseImage,
                category: "Service Marketplace",
                title: "Servyo",
                description:
                  "Multi-role platform with real-time booking and subscriptions.",
                metric: "Booking + subscriptions",
              },
              {
                image: allstarCaseImage,
                category: "Automotive",
                title: "Allstar Premier Auto",
                description:
                  "Streamlined inventory management with improved lead conversion.",
                metric: "Inventory + lead funnel",
              },
              {
                image: eternCaseImage,
                category: "AI Wellness",
                title: "Etern 8",
                description:
                  "AI-powered personalized health insights generated from wearable data.",
                metric: "Wearable AI insights",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl overflow-hidden border border-white/5 bg-[#111827] hover:border-[#2F80ED]/30 transition-all shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-[#1E293B] text-[#2F80ED]">
                    {project.category}
                  </span>

                  <h3
                    className="text-xl font-bold text-[#F9FAFB] mb-3"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-[#9CA3AF] mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="text-[#2F80ED] font-semibold flex items-center gap-2">
                    ↗ {project.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogosSlider />

      <section className="py-20 relative">
        <div className="w-full max-w-[1260px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4 lg:px-5"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              What Our Clients Say
            </h2>
            <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="relative group">
            <div className="overflow-hidden">
              <motion.div
                className="-mx-3 flex"
                animate={{ x: `-${(testimonialIndex * 100) / testimonialsPerView}%` }}
                transition={testimonialTransitionOn ? { duration: 0.45, ease: 'easeInOut' } : { duration: 0 }}
              >
                {loopedTestimonials.map((testimonial, index) => {
                  const baseIndex = index % testimonialsData.length;
                  const isExpanded = Boolean(expandedTestimonials[baseIndex]);
                  const shouldShowReadMore = testimonial.text.length > 140;

                  return (
                    <div key={`${testimonial.name}-${index}`} className="w-full px-3" style={{ flex: `0 0 ${100 / testimonialsPerView}%` }}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className={`group relative rounded-2xl border border-white/8 p-8 shadow-lg backdrop-blur-xl transition-all hover:shadow-[#2F80ED]/20 flex flex-col ${isExpanded ? 'min-h-[320px]' : 'h-[320px]'}`}
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      >
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#2F80ED] text-[#2F80ED]" />
                          ))}
                        </div>

                        <p className={`text-[#F9FAFB] text-base leading-relaxed mb-2 ${isExpanded ? '' : 'line-clamp-3'}`}>
                          "{testimonial.text}"
                        </p>
                        {shouldShowReadMore ? (
                          <button
                            type="button"
                            onClick={() => {
                              setExpandedTestimonials((prev) => ({
                                ...prev,
                                [baseIndex]: !prev[baseIndex],
                              }));
                            }}
                            className="mb-6 w-fit text-sm font-semibold text-[#66B7FF] hover:text-[#8FCBFF] transition-colors"
                          >
                            {isExpanded ? 'Read less' : 'Read more'}
                          </button>
                        ) : (
                          <div className="mb-6" />
                        )}

                        <div className="mt-auto flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center text-white font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-[#F9FAFB] font-semibold text-xl">{testimonial.name}</div>
                            {testimonial.company ? (
                              <div className="text-[#9CA3AF] text-base">{testimonial.company}</div>
                            ) : null}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )
                })}
              </motion.div>
            </div>

            {canSlide && (
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-screen -translate-x-1/2 -translate-y-1/2 px-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => {
                    if (testimonialIndex === 0) {
                      setTestimonialTransitionOn(false);
                      setTestimonialIndex(testimonialsData.length);
                      window.requestAnimationFrame(() => {
                        window.requestAnimationFrame(() => {
                          setTestimonialTransitionOn(true);
                          setTestimonialIndex(testimonialsData.length - 1);
                        });
                      });
                    } else {
                      setTestimonialIndex((prev) => prev - 1);
                    }
                  }}
                  className="absolute left-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#111827]/95 text-[#E5E7EB] transition-all hover:border-[#2F80ED]/60 hover:text-[#2F80ED] pointer-events-none group-hover:pointer-events-auto"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setTestimonialIndex((prev) => prev + 1)}
                  className="absolute right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#111827]/95 text-[#E5E7EB] transition-all hover:border-[#2F80ED]/60 hover:text-[#2F80ED] pointer-events-none group-hover:pointer-events-auto"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="whitelabel" className="py-20 relative bg-[#0D1730]">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-[1120px] mx-auto rounded-[28px] border border-[#20355A] bg-[#16233D] px-8 py-10 md:px-12 md:py-12"
          >
            <div className="mb-6 flex justify-center text-[#2F80ED]">
              <Users className="h-9 w-9" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Scale Your Agency Without Hiring Developers
            </h2>
            <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-3xl mx-auto">
              Partner with Techflux Solutions and let our expert developers become an extension of your team. Build, launch, and scale while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/become-partner"
                className="inline-flex h-[52px] px-8 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white text-base font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center justify-center gap-2"
              >
                Become a Partner
              </Link>
              <Link
                to="/learn-more"
                className="inline-flex h-[52px] px-8 rounded-xl border border-[#2F80ED] text-[#2F80ED] text-base font-semibold hover:bg-[#2F80ED]/10 transition-all items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative bg-[#12385A]">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 text-center"
          >
            <div className="relative z-10">
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Ready to Build Something Scalable?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how we can help you build the next generation of digital products.
              </p>
              <Link
                to="/book-strategy-call"
                className="inline-flex px-8 py-4 rounded-xl bg-[#2F80ED] text-white font-bold hover:brightness-110 transition-all shadow-xl items-center gap-2"
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}












