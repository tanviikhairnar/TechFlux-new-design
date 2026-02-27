import { motion } from 'motion/react';
import { 
  Sparkles, Brain, Zap, Layers, Code2, Rocket, ArrowRight, Check,
  Users, Shield, Gauge, HeadphonesIcon, Database, Settings, BarChart, MessageSquare,
  Cpu, TrendingUp, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';


export default function Home() {
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
              { icon: Gauge, label: '8+ Years Experience', desc: 'In SaaS & AI Development' },
              { icon: Users, label: 'Dedicated In-House Team', desc: 'Expert Engineers' },
              { icon: Database, label: 'Scalable Architecture', desc: 'Enterprise-Grade Systems' },
              { icon: HeadphonesIcon, label: 'Long-Term Support', desc: '24/7 Availability' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-[#2F80ED] mx-auto mb-3" />
                <h3 className="text-[#F9FAFB] font-semibold mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {stat.label}
                </h3>
                <p className="text-sm text-[#9CA3AF]">{stat.desc}</p>
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
              Core Expertise
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
                Build & Scale SaaS Products With Confidence
              </h2>
              <p className="text-[#9CA3AF] mb-8 leading-relaxed">
                Launch robust SaaS platforms that scale with your business growth.
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
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#F9FAFB] font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link 
                to="/book-strategy-call"
                className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center gap-2"
              >
                Explore SaaS Development
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBTYWFTJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjAzNDAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SaaS Dashboard"
                  className="w-full h-auto rounded-2xl"
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
              className="relative order-2 md:order-1"
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
              className="order-1 md:order-2"
            >
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                AI-Powered Product Engineering
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
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#F9FAFB] font-medium">{item}</span>
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
                Real-Time On-Demand Platforms
              </h2>
              <p className="text-[#9CA3AF] mb-8 leading-relaxed">
                Build powerful on-demand applications that connect users in real-time.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Ride-hailing systems',
                  'Delivery apps',
                  'Booking platforms',
                  'Marketplace engines'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#F9FAFB] font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link 
                to="/book-strategy-call"
                className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center gap-2"
              >
                View On-Demand Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyMDAxMjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="On-Demand App"
                  className="w-full h-auto rounded-2xl"
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
              Development Process
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Our proven 6-step methodology
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '01', label: 'Discovery' },
              { icon: '02', label: 'Architecture' },
              { icon: '03', label: 'UI/UX' },
              { icon: '04', label: 'Development' },
              { icon: '05', label: 'QA Testing' },
              { icon: '06', label: 'Launch & Scale' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-[#2F80ED]/30">
                    {step.icon}
                  </div>
                  {index < 5 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-[100%] h-[2px] bg-gradient-to-r from-[#2F80ED] to-transparent" />
                  )}
                </div>
                <span className="text-[#F9FAFB] font-semibold">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section id="portfolio" className="py-24 relative bg-[#111827]/30">
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
              Case Studies
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Recent projects we've delivered
            </p>
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
              className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              What Our Clients Say
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Trusted by startups and enterprises worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "TechFlux transformed our vision into a scalable SaaS platform in record time. Their expertise in multi-tenant architecture and AI integration exceeded our expectations.",
                name: "Sarah Mitchell",
                company: "CEO, DataFlow Analytics"
              },
              {
                text: "Working with TechFlux has been exceptional. They delivered our on-demand marketplace with seamless real-time features and continue to provide outstanding support.",
                name: "Michael Chen",
                company: "Founder, QuickServe Pro"
              },
              {
                text: "The white-label partnership with TechFlux has allowed us to scale our agency significantly. Their team is reliable, skilled, and truly understands enterprise development.",
                name: "Emily Rodriguez",
                company: "CTO, Digital Ventures Agency"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl backdrop-blur-xl border border-white/8 transition-all shadow-lg hover:shadow-[#2F80ED]/20"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#2F80ED] text-[#2F80ED]" />
                  ))}
                </div>
                
                <p className="text-[#F9FAFB] leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[#F9FAFB] font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-[#9CA3AF]">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* White Label Partnership */}
      <section id="whitelabel" className="py-24 relative bg-[#111827]/30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/10 via-transparent to-[#2D9CDB]/10" />
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2F80ED]/10 text-[#2F80ED] font-medium mb-6">
              <Code2 className="w-4 h-4" />
              White Label Development
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Your Reliable Offshore Technology Partner
            </h2>
            <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8">
              Scale your agency's capacity with our white-label development services. We work seamlessly as an extension of your team, delivering enterprise-grade solutions under your brand with dedicated engineers, NDA protection, and scalable engagement models.
            </p>
            <Link 
              to="/become-partner"
              className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center gap-2"
            >
              Become a Partner
              <Rocket className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
            <div className="relative z-10">
              <h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Ready to Build Something Scalable?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how we can help you build the next generation of digital products.
              </p>
              <Link 
                to="/book-strategy-call"
                className="inline-flex px-10 py-5 rounded-xl bg-white text-[#2F80ED] font-bold hover:bg-[#F9FAFB] transition-all shadow-2xl hover:shadow-white/20 items-center gap-2"
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

