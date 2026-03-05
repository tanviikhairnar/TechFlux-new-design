import { motion } from 'motion/react';
import {
  MessageSquare,
  Brain,
  Cpu,
  Sparkles,
  TrendingUp,
  Percent,
  Zap,
  Database,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const aiSolutions = [
  { title: 'Natural Language Processing', icon: MessageSquare },
  { title: 'AI Data Analysis', icon: TrendingUp },
  { title: 'Automated Workflows', icon: Zap },
  { title: 'AI Chat Interfaces', icon: MessageSquare },
  { title: 'Smart Recommendations', icon: Percent },
  { title: 'AI Insights Dashboard', icon: Brain },
];

// removed unused approachCards — not needed for updated layout


const techTags = [
  'OpenAI APIs',
  'Python',
  'TensorFlow',
  'PyTorch',
  'LangChain',
  'Node.js',
  'React',
  'Cloud AI Services',
  'Machine Learning',
  'NLP',
];

const successStories = [
  {
    resultIcon: TrendingUp,
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    title: 'Etern 8 – AI Wellness Platform',
    desc: 'AI-powered wellness platform analyzing smartwatch data to deliver personalized health recommendations using machine learning algorithms.',
    result: '100K+ users, 85% engagement',
  },
];

export default function AiSolutions() {
  const solutionsCards = [
    { icon: MessageSquare, title: 'AI Chatbots', desc: 'Intelligent conversational agents for support and engagement.' },
    { icon: Zap, title: 'AI Automation Systems', desc: 'Automate workflows, tasks and decision logic with AI.' },
    { icon: TrendingUp, title: 'Predictive Analytics Platforms', desc: 'Forecast trends and make data-driven decisions.' },
    { icon: Percent, title: 'AI Recommendation Engines', desc: 'Deliver personalized suggestions and content.' },
    { icon: Database, title: 'AI Data Processing Systems', desc: 'Analyze and organize large datasets with AI.' },
    { icon: Cpu, title: 'Custom GPT Integrations', desc: 'Embed GPT-powered intelligence into your apps.' },
  ];

  const tableRows = [
    { feature: 'Development Time', aiChatbot: '1-2 months', automation: '2-3 months', analytics: '3-4 months' },
    { feature: 'Complexity', aiChatbot: 'Medium', automation: 'High', analytics: 'Very High' },
    { feature: 'Customization', aiChatbot: 'Pre-trained + custom', automation: 'Fully custom', analytics: 'Custom models' },
    { feature: 'Integration', aiChatbot: 'Standard APIs', automation: 'Complex workflows', analytics: 'Data pipelines' },
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Customer Support',
    'E-commerce',
    'Education',
    'Marketing Automation',
  ];

  const whyItems = [
    { title: 'AI Expertise', desc: 'Deep knowledge of AI/ML technologies.' },
    { title: 'Fast Implementation', desc: 'Quick integration with existing systems.' },
    { title: 'Custom Solutions', desc: 'Tailored to your business needs.' },
    { title: 'Data Security', desc: 'Secure handling of sensitive data.' },
    { title: 'Ongoing Support', desc: 'Continuous model optimization.' },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030914]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(47,128,237,0.24),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-24 pt-28 text-center md:pb-32 md:pt-40 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto flex min-h-[420px] w-full flex-col items-center justify-center lg:min-h-[520px]"
          >
            <div className="mx-auto mb-6 inline-flex rounded-full border border-[#2F80ED]/35 bg-[#0A1F43] px-4 py-1 text-sm text-[#7AB9FF]">
              AI Solutions
            </div>
            <h1
              id="ai-solutions-heading"
              className="mx-auto max-w-[820px] text-4xl font-bold leading-tight text-[#D8DEE8] sm:text-5xl md:text-6xl"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              AI-Powered Digital Products
            </h1>
            <p className="mx-auto mt-5 max-w-[780px] text-base leading-relaxed text-[#8A96AA] md:text-lg">
              We help businesses integrate artificial intelligence into their platforms to automate workflows, generate
              insights, and improve user experiences.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/get-estimate"
                className="inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#2F80ED] px-8 text-sm font-semibold text-[#4CA1FF] hover:bg-[#2F80ED]/10 transition-all"
              >
                Get Project Estimate
              </Link>
              <Link
                to="/book-strategy-call"
                className="inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110"
              >
                Book Strategy Call
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Solutions We Build
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">Complete AI solutions designed for measurable business impact.</p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {solutionsCards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl border border-white/5 bg-[#0C1830] p-6 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#102548]">
                    <item.icon className="h-4 w-4 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold leading-6 text-[#E5ECF8]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#95A4BF]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Technology Stack
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">
                We use cutting-edge AI frameworks and platforms to deliver powerful intelligence solutions.
              </p>
            </motion.div>
<div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-4">
              {techTags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex min-h-[72px] min-w-[120px] items-center justify-center rounded-2xl border border-[#1E2D46] bg-[#121F39] px-8 py-4 text-[16px] font-semibold tracking-wide text-[#D8DEE8] transition-all hover:border-[#2F80ED]/45 hover:bg-[#152645]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Features We Implement
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {aiSolutions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.06 }}
                  className="group rounded-2xl border border-white/5 bg-[#0C1830] p-6 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#102548]">
                    <item.icon className="h-4 w-4 text-[#2F80ED]" />
                  </div>
                  <h3 className="text-[15px] font-semibold leading-6 text-[#E5ECF8]">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Choose Your AI Solution
              </h2>
            </motion.div>

            <div className="overflow-x-auto rounded-[24px] border border-[#263550] bg-[#141F36]">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-[#2A3954]">
                    <th className="px-6 py-5 text-left text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Solution Type</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Development Time</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Complexity</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Customization</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Integration</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={i} className="border-b border-[#2A3954] last:border-b-0">
                      <td className="px-6 py-5 text-lg text-[#E5ECF8]">{row.feature}</td>
                      <td className="px-6 py-5 text-center text-lg text-[#9AA7BF]">{row.aiChatbot}</td>
                      <td className="px-6 py-5 text-center text-lg text-[#9AA7BF]">{row.automation}</td>
                      <td className="px-6 py-5 text-center text-lg text-[#9AA7BF]">{row.analytics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Typical Project Investment
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'AI Chatbot Integration', features: ['GPT integration', 'Custom training', 'Chat interface', 'Basic analytics'] },
                { title: 'AI Automation Systems', features: ['Workflow automation', 'ML models', 'API integrations', 'Dashboard'] },
                { title: 'Custom AI Platforms', features: ['Custom AI models', 'Advanced features', 'Full integration', 'Data pipelines'] },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] p-7"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[13px] text-[#8A96AA]">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#2F80ED]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Industries Using AI Solutions
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-6">
              {['Healthcare', 'FinTech', 'Finance', 'Logistics', 'Manufacturing', 'Productivity'].map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-[#0C1527] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#2F80ED]/30 bg-[#0F2A5F] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(90,170,255,0.35)]">
                    <Sparkles className="h-5 w-5 text-[#2F80ED] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(117,192,255,0.55)]" />
                  </div>
                  <p className="text-sm font-medium text-[#D8DEE8]">{industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Platform We've Built
              </h2>
            </motion.div>

            <div className="rounded-xl border border-white/5 bg-[#0F1B31] overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80" alt="AI Wellness Platform" className="h-64 object-cover" />
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Saavn AI - AI Wellness Platform
                  </h3>
                  <p className="mb-6 text-[13px] leading-6 text-[#8A96AA]">
                    Built an AI-powered wellness platform providing personalized health recommendations using machine learning models. Features intelligent chatbot support, predictive analytics for health outcomes, and customized fitness recommendations powered by GPT integration.
                  </p>
                  <div className="flex gap-3">
                    <div>
                      <p className="text-xs text-[#56A9F5] font-semibold">Users</p>
                      <p className="text-sm font-semibold text-[#D8DEE8]">100K+</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#56A9F5] font-semibold">Engagement</p>
                      <p className="text-sm font-semibold text-[#D8DEE8]">85%+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why Businesses Choose TechFlux
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'AI Expertise', desc: 'Deep experience with GPT, ML models, and intelligent automation across industries.' },
                { title: 'Fast Implementation', desc: 'Rapid deployment with proven frameworks and agile development methodology.' },
                { title: 'Custom Solutions', desc: 'Tailored AI systems built specifically for your unique business challenges.' },
                { title: 'Data Security', desc: 'Enterprise-grade security, data privacy, and compliance with regulations.' },
                { title: 'Ongoing Support', desc: 'Continuous monitoring, optimization, and dedicated technical support included.' },
                { title: 'Measurable ROI', desc: 'AI solutions designed to deliver quantifiable business impact and growth.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0C1527] p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Explore Related Services
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { title: 'SaaS Development', link: '/saas-development' },
                { title: 'On-Demand Solutions', link: '/on-demand-solutions' },
                { title: 'E-Commerce Solutions', link: '/e-commerce-solutions' },
                { title: 'White-Label Partnership', link: '/services/white-label-partnership' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.link}
                    className="block rounded-2xl border border-white/5 bg-[#0C1830] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/35 hover:bg-[#112241] hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                  >
                    <p className="font-semibold text-[#D8DEE8]">{item.title}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-[#0D172B] px-8 py-12 text-center md:px-12"
            >
              <h2 className="mb-4 text-[40px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Your AI Platform?
              </h2>
              <p className="mx-auto mb-8 max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Let&apos;s discuss your vision and create a roadmap to launch your AI solution successfully.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 py-3 text-sm font-medium text-white"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="rounded-[10px] border border-[#2F80ED] px-8 py-3 text-sm font-medium text-[#4CA1FF] hover:bg-[#2F80ED]/10"
                >
                  Get Project Estimate
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Something Scalable?
              </h2>
              <p className="mx-auto mb-8 max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Whether you&apos;re launching a SaaS MVP, integrating AI, or building an on-demand platform, we can help you ship faster.
              </p>
              <Link
                to="/book-strategy-call"
                className="inline-flex h-[52px] items-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110"
              >
                Book Strategy Call
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


