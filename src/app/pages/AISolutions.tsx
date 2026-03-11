import { motion } from 'framer-motion';
import {
  MessageSquare,
  Brain,
  Cpu,
  Sparkles,
  TrendingUp,
  Percent,
  Zap,
  Database,
  Target,
  BarChart3,
  Heart,
  DollarSign,
  Headset,
  ShoppingCart,
  GraduationCap,
  LineChart,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { IndustriesSection } from '../components/IndustriesSection';
import { ServiceHeroSection } from '../components/ServiceHeroSection';
import { CaseStudySection } from '../components/CaseStudySection';
import { CardsSection } from '../components/CardsSection';
import { InvestmentCardsSection } from '../components/InvestmentCardsSection';
import { TechnologyStackSection } from '../components/TechnologyStackSection';
import { GetProjectEstimateButton } from '../components/GetProjectEstimateButton';

const aiHeroImage = new URL("../../assets/webp/AI.webp", import.meta.url).href;
const aiCaseImage = new URL("../../assets/webp/3649760.webp", import.meta.url).href;

const aiSolutions = [
  {
    title: 'Natural Language Processing',
    icon: MessageSquare,
    desc: 'Understand and process human language',
  },
  {
    title: 'AI Data Analysis',
    icon: BarChart3,
    desc: 'Extract insights from complex datasets',
  },
  {
    title: 'Automated Workflows',
    icon: Zap,
    desc: 'Intelligent process automation',
  },
  {
    title: 'AI Chat Interfaces',
    icon: Brain,
    desc: 'Conversational AI experiences',
  },
  {
    title: 'Smart Recommendations',
    icon: Target,
    desc: 'Personalized user experiences',
  },
  {
    title: 'AI Insights Dashboard',
    icon: LineChart,
    desc: 'Real-time AI-driven analytics',
  },
];



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
    img: aiCaseImage,
    title: 'Etern 8 – AI Wellness Platform',
    desc: 'AI-powered wellness platform analyzing smartwatch data to deliver personalized health recommendations using machine learning algorithms.',
    result: '100K+ users, 85% engagement',
  },
];

const pricingCards = [
  { title: 'AI Chatbot Integration', bullets: ['GPT integration', 'Custom training', 'Chat interface', 'Basic analytics'] },
  { title: 'AI Automation Systems', bullets: ['Workflow automation', 'ML models', 'API integrations', 'Dashboard'] },
  { title: 'Custom AI Platforms', bullets: ['Custom AI models', 'Advanced features', 'Full integration', 'Data pipelines'] },
];

export default function AISolutions() {
  const solutionsCards = [
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      desc: 'Intelligent conversational AI for customer support, sales, and user engagement.',
    },
    {
      icon: Zap,
      title: 'AI Automation Systems',
      desc: 'Automate repetitive tasks and workflows with machine learning algorithms.',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics Platforms',
      desc: 'Forecast trends and make data-driven decisions with AI-powered insights.',
    },
    {
      icon: Target,
      title: 'AI Recommendation Engines',
      desc: 'Personalized content and product recommendations to boost engagement.',
    },
    {
      icon: Database,
      title: 'AI Data Processing Systems',
      desc: 'Process and analyze large datasets with AI and machine learning.',
    },
    {
      icon: Brain,
      title: 'Custom GPT Integrations',
      desc: 'Integrate OpenAI GPT models into your applications and workflows.',
    },
  ];

  const tableRows = [
    { feature: 'Development Time', aiChatbot: '1-2 months', automation: '2-3 months', analytics: '3-4 months' },
    { feature: 'Complexity', aiChatbot: 'Medium', automation: 'High', analytics: 'Very High' },
    { feature: 'Customization', aiChatbot: 'Pre-trained + custom', automation: 'Fully custom', analytics: 'Custom models' },
    { feature: 'Integration', aiChatbot: 'Standard APIs', automation: 'Complex workflows', analytics: 'Data pipelines' },
  ];

  const industries = [
    { label: 'Healthcare', icon: Heart, tone: 'bg-[#4C2747] text-[#C77DB0]' },
    { label: 'Finance', icon: DollarSign, tone: 'bg-[#185345] text-[#66D5AE]' },
    { label: 'Customer Support', icon: Headset, tone: 'bg-[#19486A] text-[#71B8F5]' },
    { label: 'E-commerce', icon: ShoppingCart, tone: 'bg-[#4A2C62] text-[#C79AF2]' },
    { label: 'Education', icon: GraduationCap, tone: 'bg-[#5A3F1F] text-[#E0B26B]' },
    { label: 'Marketing Automation', icon: LineChart, tone: 'bg-[#2F2E74] text-[#9897FF]' },
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

        <ServiceHeroSection
          containerClassName="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12"
          textWrapClassName="text-center lg:text-left"
          badgeText="AI Solutions"
          title="AI-Powered Digital Products"
          titleId="ai-solutions-heading"
          description="We help businesses integrate artificial intelligence into their platforms to automate workflows, generate insights, and improve user experiences."
          ctaContainerClassName="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-start"
          primaryCta={{
            label: 'Get Project Estimate',
            to: '/get-estimate',
            className:
              'inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110',
          }}
          secondaryCta={{
            label: 'Book Strategy Call',
            to: '/book-strategy-call',
            className:
              'inline-flex h-[52px] items-center justify-center rounded-[10px] border border-white/10 bg-[#111A2D] px-8 text-sm font-semibold text-[#D8DEE8] transition-all hover:border-[#2F80ED]/45 hover:bg-[#15233E]',
          }}
          imageSrc={aiHeroImage}
          imageAlt="AI brain visual"
          imageVariant="framed"
          imageFit="cover"
        />

        <CardsSection
          title="AI Solutions We Build"
          subtitle="Complete AI solutions designed for measurable business impact."
          items={solutionsCards}
          headingWrapClassName="mb-14 text-center"
          headingClassName="mb-3 text-3xl font-semibold text-[#D8DEE8]"
          transitionStep={0.06}
        />

        <TechnologyStackSection
          title="AI Technology Stack"
          description="We use cutting-edge AI frameworks and platforms to deliver powerful intelligence solutions."
          items={techTags}
        />

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Features We Implement
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {aiSolutions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.06 }}
                  className="group rounded-2xl border border-white/8 bg-[linear-gradient(110deg,#141F38_0%,#121C33_100%)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg">
                    <item.icon className="h-7 w-7 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold leading-tight text-[#E5ECF8] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="tf-muted-card">{item.desc}</p>
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
                      <td className="px-6 py-5 text-center tf-muted-table">{row.aiChatbot}</td>
                      <td className="px-6 py-5 text-center tf-muted-table">{row.automation}</td>
                      <td className="px-6 py-5 text-center tf-muted-table">{row.analytics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <InvestmentCardsSection title="Typical Project Investment" cards={pricingCards} showEstimateButton />

        <IndustriesSection title="Industries Using AI Solutions" items={industries} />

        <CaseStudySection
          title="AI Platform We've Built"
          headingWrapClassName="mb-14 text-center"
          headingClassName="mb-3 text-3xl font-semibold text-[#D8DEE8]"
          cardClassName="overflow-hidden rounded-2xl border border-white/5 bg-[linear-gradient(110deg,#0F1B31_0%,#101A2D_55%,#0E1728_100%)]"
          gridClassName="grid items-stretch md:grid-cols-[1.05fr_1fr]"
          imageWrapClassName="h-[280px] md:h-[440px]"
          imageSrc={aiCaseImage}
          imageAlt="AI wellness platform"
          imageFit="cover"
          contentClassName="flex flex-col justify-center p-7 md:p-12"
          badgeText="AI Wellness Platform"
          badgeClassName="mb-6 inline-flex w-fit rounded-full border border-[#2F80ED]/30 bg-[#0F2A5F] px-5 py-2 text-sm font-medium text-[#56A9F5]"
          cardTitle="Etern 8 - AI Wellness Platform"
          cardTitleClassName="mb-4 text-2xl font-semibold leading-tight text-[#D8DEE8] md:text-[44px]"
          description="AI-powered wellness platform that analyzes smartwatch data to deliver personalized health insights and recommendations using machine learning algorithms."
          descriptionClassName="mb-8 max-w-[620px] text-sm leading-8 text-[#8A96AA] md:text-[17px]"
          linkTo="/case-studies/etern8"
          linkClassName="inline-flex items-center gap-2 text-xl font-semibold text-[#2F80ED] transition-colors hover:text-[#66B7FF]"
        />

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why Businesses Choose Techflux
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
                  <p className="tf-muted-card">{item.desc}</p>
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
                <GetProjectEstimateButton className="rounded-[10px] border border-[#2F80ED] px-8 py-3 text-sm font-medium text-[#4CA1FF] hover:bg-[#2F80ED]/10" />
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







