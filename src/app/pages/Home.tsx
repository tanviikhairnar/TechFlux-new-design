import { AnimatePresence, motion } from 'motion/react';
import { 
  Users, Brain, Zap, Layers, ArrowRight, Check,
  Star
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const processSteps = [
  { icon: '01', short: 'Discovery', label: 'Discovery & Planning', desc: 'Define scope, timelines, and success metrics before building starts.' },
  { icon: '02', short: 'Architecture', label: 'Architecture Design', desc: 'Design scalable data and system architecture for long-term growth.' },
  { icon: '03', short: 'UI/UX', label: 'UI/UX Design', desc: 'Create user-focused interfaces with clear journeys and polished visuals.' },
  { icon: '04', short: 'Development', label: 'Development', desc: 'Build in agile sprints with quality code and transparent progress updates.' },
  { icon: '05', short: 'QA Testing', label: 'Testing & QA', desc: 'Run functional, performance, and regression tests before launch.' },
  { icon: '06', short: 'Launch & Scale', label: 'Launch & Support', desc: 'Deploy, monitor, and support your product with continuous improvements.' }
];

export default function Home() {
  const [activeProcessStep, setActiveProcessStep] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#0B0F1A] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2F80ED]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2D9CDB]/10 rounded-full blur-[120px]" />
        
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-5xl md:text-6xl font-bold text-[#F9FAFB] leading-tight mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Building Scalable SaaS, AI & On-Demand Platforms
            </h1>
            <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8">
              TechFlux Solutions partners with startups and agencies to design, develop, and scale high-performance digital products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/book-strategy-call"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all flex items-center gap-2"
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#portfolio"
                className="px-8 py-4 rounded-xl border border-[#2F80ED] text-[#2F80ED] font-semibold hover:bg-[#2F80ED]/10 transition-all"
              >
                View Case Studies
              </a>
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
                src="https://images.unsplash.com/photo-1770169272345-9636d5ef2681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMEFJJTIwdGVjaG5vbG9neSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzcyMDQ0NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Technology"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 border-y border-white/5 bg-[#111827]/30">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '8+', label: 'Years experience' },
              { value: '100%', label: 'Dedicated in-house team' },
              { value: '99.9%', label: 'Scalable architecture' },
              { value: '24/7', label: 'Long-term support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-[#F9FAFB] text-2xl font-semibold mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {stat.value}
                </h3>
                <p className="text-sm text-[#9CA3AF]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise - 3 Glass Cards */}
      <section className="py-24 relative">
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
                description: 'Full-stack SaaS platforms with scalable architecture, multi-tenancy, subscription systems, and seamless integrations.',
                link: '#saas'
              },
              {
                icon: Brain,
                title: 'AI Solutions',
                description: 'Intelligent systems powered by machine learning, NLP, GPT integrations, and advanced automation workflows.',
                link: '#ai'
              },
              {
                icon: Zap,
                title: 'On-Demand Applications',
                description: 'Real-time matching platforms, marketplace apps, ride-hailing, delivery, and service booking systems.',
                link: '#ondemand'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl backdrop-blur-xl border border-white/5 hover:border-[#2F80ED]/50 transition-all"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2D9CDB]/20 to-[#2F80ED]/20 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#2F80ED]/30 transition-all"
                >
                  <service.icon className="w-7 h-7 text-[#2F80ED]" />
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

      {/* Deep SaaS Section */}
      <section id="saas" className="py-24 relative bg-[#111827]/30">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2"
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
                  'MVP in 45–60 days',
                  'Multi-tenant architecture',
                  'Subscription systems',
                  'Admin dashboards',
                  'API integrations'
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
                    <span className="text-[#B9C8E6] text-[16px] md:text-[17px] font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link 
                to="/book-strategy-call"
                className="inline-flex h-[58px] px-9 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white text-[18px] font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center"
              >
                Explore SaaS Development
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111F39] p-3">
                <img 
                  src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBTYWFTJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjAzNDAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SaaS Dashboard"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai" className="py-24 relative">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 md:justify-self-end"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1597600159211-d6c104f408d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwQUklMjBncmFkaWVudCUyMGhvbG9ncmFtfGVufDF8fHx8MTc3MjA0NDU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Gradient"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:pr-4"
            >
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                AI-Powered Innovation
              </h2>
              <p className="text-[#9CA3AF] mb-8 leading-relaxed">
                Integrate cutting-edge AI capabilities into your products with our specialized engineering team.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'AI Chatbots',
                  'GPT Integrations',
                  'Workflow Automation',
                  'Intelligent Analytics',
                  'Predictive Systems'
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
                    <span className="text-[#B9C8E6] text-[16px] md:text-[17px] font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link 
                to="/book-strategy-call"
                className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center gap-2"
              >
                Explore AI Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* On-Demand Section */}
      <section id="ondemand" className="py-24 relative bg-[#111827]/30">
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
                    <span className="text-[#B9C8E6] text-[16px] md:text-[17px] font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link 
                to="/book-strategy-call"
                className="inline-flex h-[58px] px-9 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white text-[18px] font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center"
              >
                View On-Demand Solutions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111F39] p-3">
                <img 
                  src="https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyMDAxMjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="On-Demand App"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="process" className="py-24 relative">
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
              Our Development Process
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Our proven 6-step methodology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
            onMouseLeave={() => setActiveProcessStep(null)}
          >
            <div className="hidden lg:grid lg:grid-cols-6 gap-8 pb-56">
              {processSteps.map((step, index) => (
                <div
                  key={step.icon}
                  className="relative"
                  onMouseEnter={() => setActiveProcessStep(index)}
                >
                  <div className="relative mb-5 flex items-center">
                    <button
                      type="button"
                      onFocus={() => setActiveProcessStep(index)}
                      onBlur={() => setActiveProcessStep(null)}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center font-bold text-white text-3xl shadow-lg shadow-[#2F80ED]/30 outline-none"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {step.icon}
                    </button>
                    {index < processSteps.length - 1 && (
                      <div className="ml-4 h-[2px] flex-1 bg-gradient-to-r from-[#2F80ED]/70 to-transparent" />
                    )}
                  </div>
                  <p className="text-[#F9FAFB] text-xl font-semibold leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {step.short}
                  </p>

                  <AnimatePresence>
                    {activeProcessStep === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 14, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.22 }}
                        className={`absolute top-[118px] z-30 w-[320px] rounded-2xl border border-[#2F80ED]/35 bg-[#0F1C35]/95 p-5 shadow-[0_16px_45px_rgba(47,128,237,0.22)] backdrop-blur-xl ${
                          index === 0
                            ? 'left-0'
                            : index === processSteps.length - 1
                            ? 'right-0'
                            : 'left-1/2 -translate-x-1/2'
                        }`}
                      >
                        <div className="text-[#2F80ED] font-bold text-xl mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {step.icon}
                        </div>
                        <h3 className="text-[#F9FAFB] font-semibold text-lg mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {step.label}
                        </h3>
                        <p className="text-[#9CA3AF] text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
              {processSteps.map((step, index) => (
                <button
                  key={step.icon}
                  type="button"
                  onClick={() => setActiveProcessStep(index)}
                  className="rounded-xl border border-white/10 bg-[#0F1C35] px-4 py-5 text-left"
                >
                  <div className="text-[#2F80ED] text-2xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{step.icon}</div>
                  <div className="text-[#F9FAFB] font-semibold">{step.short}</div>
                </button>
              ))}
            </div>
          </motion.div>

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
                <div className="text-[#2F80ED] font-bold text-2xl mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {processSteps[activeProcessStep].icon}
                </div>
                <h3 className="text-[#F9FAFB] font-semibold text-2xl mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
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

      {/* Case Studies Preview */}
      <section id="portfolio" className="py-24 relative bg-[#111827]/30">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-center justify-between"
          >
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-2"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Success Stories
              </h2>
              <p className="text-lg text-[#9CA3AF]">
                Recent projects we've delivered
              </p>
            </div>
            <a href="#" className="text-[#2F80ED] font-semibold hover:text-[#66B7FF] transition-colors">View All Case Studies</a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBTYWFTJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjAzNDAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Enterprise Analytics Platform',
                description: 'Multi-tenant SaaS dashboard with real-time analytics and AI insights.',
                tags: ['React', 'Node.js', 'PostgreSQL', 'AI/ML']
              },
              {
                image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyMDAxMjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'On-Demand Service App',
                description: 'Mobile-first marketplace connecting service providers with customers.',
                tags: ['React Native', 'Firebase', 'Stripe', 'Maps API']
              },
              {
                image: 'https://images.unsplash.com/photo-1768987439382-894ea4e2a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzE5Nzk2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'E-Commerce Platform',
                description: 'Headless commerce solution with AI-powered recommendations.',
                tags: ['Next.js', 'Shopify', 'GraphQL', 'AWS']
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl backdrop-blur-xl border border-white/5 overflow-hidden hover:border-[#2F80ED]/30 transition-all shadow-lg"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold text-[#F9FAFB] mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full bg-[#2F80ED]/10 text-[#2F80ED] text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="#"
                    className="text-[#2F80ED] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "TechFlux transformed our idea into a fully functional SaaS platform in just 4 months. Their expertise in scalable architecture was exactly what we needed.",
                name: "Michael Chen",
                company: "CEO, DataInsight"
              },
              {
                text: "The AI integration they built for our platform has been a game-changer. Customer engagement increased by 60% within the first month.",
                name: "Sarah Johnson",
                company: "VP Product, TechVentures"
              },
              {
                text: "Working with TechFlux as our white-label partner has allowed us to scale our agency without the overhead of hiring developers.",
                name: "David Martinez",
                company: "Founder, Digital Agency Co."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl backdrop-blur-xl border border-white/8 transition-all shadow-lg hover:shadow-[#2F80ED]/20 min-h-[320px] flex flex-col"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#2F80ED] text-[#2F80ED]" />
                  ))}
                </div>
                
                <p className="text-[#F9FAFB] text-base leading-relaxed mb-8 flex-1">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[#F9FAFB] font-semibold text-xl">{testimonial.name}</div>
                    <div className="text-[#9CA3AF] text-base">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* White Label Partnership */}
      <section id="whitelabel" className="py-24 relative bg-[#0D1730]">
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
              Partner with TechFlux Solutions and let our expert developers become an extension of your team. Build, launch, and scale while you focus on growth.
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

      {/* Final CTA */}
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



