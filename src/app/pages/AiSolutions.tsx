import { motion } from 'motion/react';
import {
  Bot,
  BrainCircuit,
  Cpu,
  CheckCircle2,
  Sparkles,
  Network,
  CloudCog,
  MessageSquareText,
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

export default function AiSolutions() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-20 pt-28 text-center md:pb-24 md:pt-32 lg:px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mx-auto mb-6 inline-flex rounded-full border border-[#2F80ED]/40 bg-[#0C2146] px-4 py-1 text-sm text-[#72B5FF]">
              AI Solutions
            </div>
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Transform Your Business with Artificial Intelligence
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#94A3B8]">
              Integrate cutting-edge AI technology including GPT models, machine learning, intelligent automation,
              and predictive analytics to unlock new possibilities for your business.
            </p>
            <Link
              to="/book-strategy-call"
              className="inline-flex rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all hover:brightness-110"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto grid w-full max-w-[1260px] items-center gap-8 px-4 lg:grid-cols-2 lg:px-5">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
                alt="AI Robot"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-6 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                The AI Opportunity
              </h2>
              <p className="mb-5 text-base leading-relaxed text-[#94A3B8]">
                Artificial intelligence is no longer just for tech giants. Modern AI tools and libraries make it
                possible for businesses of all sizes to automate workflows, improve decision making, and create
                personalized experiences at scale.
              </p>
              <p className="text-base leading-relaxed text-[#94A3B8]">
                We help businesses integrate AI strategically, from chatbot assistants and GPT-powered automation to
                smart recommendations and predictive analytics that drive better outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our AI Implementation Approach
              </h2>
              <p className="text-[#94A3B8]">
                We don&apos;t just add AI for the sake of it, we identify where it creates real value for your
                business.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Bot,
                  title: 'AI Chatbots',
                  desc: 'Custom conversational AI that understands context, handles complex queries, and integrates with your existing systems.',
                },
                {
                  icon: BrainCircuit,
                  title: 'GPT Integration',
                  desc: 'Leverage GPT-4 and other LLMs for content generation, analysis, summarization, and intelligent automation.',
                },
                {
                  icon: Cpu,
                  title: 'Machine Learning',
                  desc: 'Custom ML models for prediction, classification, recommendations, and pattern recognition tailored to your data.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-white/5 bg-[#0F1B33] p-6"
                >
                  <item.icon className="mb-4 h-6 w-6 text-[#2F80ED]" />
                  <h3 className="mb-3 text-xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
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
                  className="rounded-xl border border-white/5 bg-[#111D35] p-5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2F80ED]" />
                    <h3 className="text-base font-semibold text-[#E5E7EB]">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Technologies We Use
              </h2>
              <p className="text-[#94A3B8]">
                We work with the latest AI frameworks and platforms to deliver cutting-edge solutions.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { icon: Sparkles, title: 'LLMs', stack: 'GPT-4, Claude, Gemini' },
                { icon: Network, title: 'ML Frameworks', stack: 'TensorFlow, PyTorch' },
                { icon: CloudCog, title: 'Cloud AI', stack: 'OpenAI API, AWS, Azure AI' },
                { icon: MessageSquareText, title: 'NLP', stack: 'spaCy, Hugging Face' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B33] p-6 text-center"
                >
                  <item.icon className="mx-auto mb-4 h-5 w-5 text-[#2F80ED]" />
                  <h3 className="mb-1 text-base font-semibold text-[#E5E7EB]">{item.title}</h3>
                  <p className="text-xs text-[#94A3B8]">{item.stack}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                AI Implementation Success Stories
              </h2>
              <p className="text-[#94A3B8]">See how AI has transformed business across industries.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  img: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?auto=format&fit=crop&w=1200&q=80',
                  title: 'AI-Powered Shopping Assistant',
                  desc: 'Built an intelligent recommendation engine using collaborative filtering and GPT integration.',
                  result: '45% increase in conversion rate',
                },
                {
                  img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
                  title: 'Customer Support Automation',
                  desc: 'Deployed AI chatbot handling 70% of customer inquiries with 95% accuracy and satisfaction.',
                  result: '70% support cost reduction',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group overflow-hidden rounded-2xl border border-white/5 bg-[#101C34] transition-all hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <img src={item.img} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                    <p className="text-sm font-medium text-[#2F80ED]">{item.result}</p>
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
              className="rounded-3xl border border-white/5 bg-[#0F1A31] px-8 py-12 text-center md:px-12"
            >
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Leverage AI for Your Business?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-[#94A3B8]">
                Let&apos;s explore how AI can solve your specific business challenges and create competitive
                advantages.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="rounded-xl border border-[#2F80ED] px-8 py-3 text-sm font-semibold text-[#2F80ED] hover:bg-[#2F80ED]/10"
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
