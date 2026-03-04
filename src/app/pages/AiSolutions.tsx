import { motion } from 'motion/react';
import {
  MessageSquare,
  Brain,
  Cpu,
  Sparkles,
  TrendingUp,
  Percent,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const aiSolutions = [
  {
    title: 'Conversational AI & Chatbots',
    desc: 'Natural language processing, intent recognition, multi-channel support, and CRM integration.',
  },
  {
    title: 'Content Generation',
    desc: 'Automated content creation, copywriting assistance, email drafting, and social media posts.',
  },
  {
    title: 'Predictive Analytics',
    desc: 'Forecast trends, predict customer behavior, optimize pricing, and identify opportunities.',
  },
  {
    title: 'Recommendation Engines',
    desc: 'Personalized product suggestions, content recommendations, and collaborative filtering.',
  },
  {
    title: 'Document Processing',
    desc: 'OCR, data extraction, document classification, and intelligent automation.',
  },
  {
    title: 'Sentiment Analysis',
    desc: 'Analyze customer feedback, social media mentions, and sentiment tracking.',
  },
  {
    title: 'Voice & Speech Recognition',
    desc: 'Voice commands, transcription services, voice authentication, and IVR systems.',
  },
  {
    title: 'Image & Video Analysis',
    desc: 'Object detection, facial recognition, content moderation, and visual search.',
  },
];

const approachCards = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    desc: 'Custom conversational AI that understands context, handles complex queries, and integrates with your existing systems.',
  },
  {
    icon: Brain,
    title: 'GPT Integration',
    desc: 'Leverage GPT-4 and other LLMs for content generation, analysis, summarization, and intelligent automation.',
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    desc: 'Custom ML models for prediction, classification, recommendations, and pattern recognition tailored to your data.',
  },
];

const techCards = [
  { title: 'LLMs', stack: 'GPT-4, Claude, Gemini' },
  { title: 'ML Frameworks', stack: 'TensorFlow, PyTorch' },
  { title: 'Cloud AI', stack: 'OpenAI API, AWS AI, Azure AI' },
  { title: 'NLP', stack: 'spaCy, Hugging Face' },
];

const successStories = [
  {
    resultIcon: TrendingUp,
    img: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?auto=format&fit=crop&w=1200&q=80',
    title: 'AI-Powered Shopping Assistant',
    desc: 'Built an intelligent recommendation engine using collaborative filtering and GPT integration.',
    result: '45% increase in conversion rate',
  },
  {
    resultIcon: Percent,
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    title: 'Customer Support Automation',
    desc: 'Deployed AI chatbot handling 70% of customer inquiries with 95% accuracy and satisfaction.',
    result: '70% support cost reduction',
  },
];

export default function AiSolutions() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030914]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(38,132,255,0.22),transparent_40%)]" />

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
              Transform Your Business with Artificial Intelligence
            </h1>
            <p className="mx-auto mt-5 max-w-[780px] text-base leading-relaxed text-[#8A96AA] md:text-lg">
              Integrate cutting-edge AI technology including GPT models, machine learning, intelligent automation,
              and predictive analytics to unlock new possibilities for your business.
            </p>
            <Link
              to="/book-strategy-call"
              className="mt-8 inline-flex h-[52px] items-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto grid w-full max-w-[1260px] items-center gap-8 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-5">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#0F1D34]"
            >
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
                alt="AI Robot"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-6 text-[42px] font-semibold leading-tight text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                The AI Opportunity
              </h2>
              <p className="mb-5 text-sm leading-7 text-[#8A96AA] md:text-[15px]">
                Artificial intelligence is no longer just for tech giants. Modern AI tools and libraries make it
                possible for businesses of all sizes to automate workflows, improve decision making, and create
                personalized experiences at scale.
              </p>
              <p className="text-sm leading-7 text-[#8A96AA] md:text-[15px]">
                We help businesses integrate AI strategically, from chatbot assistants and GPT-powered automation to
                smart recommendations and predictive analytics that drive better outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our AI Implementation Approach
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">
                We don&apos;t just add AI for the sake of it, we identify where it creates real value for your
                business.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {approachCards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative rounded-2xl border border-[#1B263B] bg-[#0F172A] p-8 transition-all hover:border-[#2F80ED]/60"
                >
                  <item.icon className="mb-6 h-11 w-11 text-[#2F80ED]" strokeWidth={2.3} />
                  <h3 className="mb-3 text-xl font-bold text-[#F9FAFB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Solutions We Deliver
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {aiSolutions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] p-5"
                >
                  <div className="mb-2 flex items-center gap-2.5">
                    <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#2F80ED]/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F80ED]" />
                    </span>
                    <h3 className="text-[15px] font-semibold text-[#D8DEE8]">{item.title}</h3>
                  </div>
                  <p className="text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Technologies We Use
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">
                We work with the latest AI frameworks and platforms to deliver cutting-edge solutions.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {techCards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex min-h-[192px] flex-col items-center justify-center rounded-2xl border border-[#1D2A40]/80 bg-[#111A2D] px-8 py-7 text-center"
                >
                  <Sparkles className="mx-auto mb-5 h-7 w-7 text-[#2F80ED]" />
                  <h3 className="mb-3 text-[19px] font-semibold text-[#D8DEE8]">{item.title}</h3>
                  <p className="text-sm text-[#8A96AA]">{item.stack}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Implementation Success Stories
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">See how AI has transformed business across industries.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {successStories.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group overflow-hidden rounded-xl border border-white/5 bg-[#0F1B31] transition-all hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <img src={item.img} alt={item.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="mb-3 text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
                    <p className="flex items-center gap-2 text-[13px] font-medium text-[#2F80ED]">
                      <item.resultIcon className="h-4 w-4 shrink-0" />
                      <span>{item.result}</span>
                    </p>
                  </div>
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
                Ready to Leverage AI for Your Business?
              </h2>
              <p className="mx-auto mb-8 max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Let&apos;s explore how AI can solve your specific business challenges and create competitive
                advantages.
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
      </main>

      <Footer />
    </div>
  );
}
