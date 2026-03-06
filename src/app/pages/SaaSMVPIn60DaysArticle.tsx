import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { GetProjectEstimateButton } from '../components/GetProjectEstimateButton';
import { Navigation } from '../components/Navigation';

type SectionProps = {
  title: string;
  children: ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section className="border-t border-white/10 py-10 first:border-t-0 first:pt-0 md:py-12">
      <h2 className="mb-4 text-2xl font-bold leading-tight text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-[#9BB0CC] md:text-base">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#39AEFE]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const mvpGoals = ['Validate the business idea', 'Understand user needs', 'Collect early feedback', 'Launch quickly with minimal investment'];
const quickBenefits = ['Validate the market faster', 'Reduce development costs', 'Start generating early users', 'Improve the product based on real data'];
const step1 = ['Market research', 'Competitor analysis', 'Defining the target audience', 'Mapping the user journey'];
const step2 = ['Frontend framework', 'Backend technology', 'Database structure', 'Cloud infrastructure', 'Security and authentication'];
const step3 = ['Create wireframes or UI prototypes', 'Design key screens and workflows', 'Simplify onboarding and navigation'];
const step4 = ['User registration and authentication', 'Core product functionality', 'Basic dashboard', 'Admin management panel', 'Payment or subscription setup (if applicable)'];
const step5 = ['Functional testing', 'User flow testing', 'Performance checks', 'Security validation'];
const step6 = ['User experience', 'Missing features', 'Performance issues', 'Feature priorities'];
const mistakes = [
  'Building too many features - trying to launch a full product instead of a minimal one.',
  'Ignoring user feedback - assuming what users need instead of validating with real users.',
  'Poor architecture planning - leading to scalability problems later.',
  'Overcomplicating the interface - making the product difficult for first-time users.',
];

export default function SaaSMVPIn60DaysArticle() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(37,99,235,0.16),transparent_42%)]" />
        <div className="pointer-events-none absolute left-[-80px] top-[320px] h-[350px] w-[350px] rounded-full bg-[#1F4E9C]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-80px] top-[980px] h-[350px] w-[350px] rounded-full bg-[#39AEFE]/10 blur-3xl" />

        <article className="relative z-10 mx-auto w-full max-w-[980px] px-4 pb-20 pt-28 md:pt-32 lg:px-5">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-7">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#56A9F5] transition-colors hover:text-[#87CBFF]">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.header initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#66BAFF]">SaaS Development</p>
            <h1 className="mb-5 text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              How to Build a SaaS MVP in 60 Days (A Practical Guide for Startups)
            </h1>
            <p className="max-w-4xl text-base leading-relaxed text-[#9CB0CB] md:text-lg">
              With focused scope and disciplined execution, startups can move from idea to launch in 60 days without overbuilding.
            </p>
          </motion.header>

          <Section title="What is a SaaS MVP?">
            <p>A SaaS MVP is the earliest version of a platform with only the essential capabilities needed to solve one clear user problem.</p>
            <p>The objective is not perfection. The objective is fast validation and structured learning.</p>
            <p>Core MVP goals:</p>
            <BulletList items={mvpGoals} />
          </Section>

          <Section title="Why Building a SaaS MVP Quickly Matters">
            <p>Speed is a strategic advantage in SaaS. Fast release cycles reduce risk and produce market evidence earlier.</p>
            <p>Building in 60 days helps teams:</p>
            <BulletList items={quickBenefits} />
          </Section>

          <Section title="Step 1: Define the Core Problem (Days 1-7)">
            <p>Before writing code, define the exact problem, target user, and simplest valuable outcome.</p>
            <BulletList items={step1} />
          </Section>

          <Section title="Step 2: Plan the Product Architecture (Days 8-15)">
            <p>Technical structure should support both short-term speed and long-term scale.</p>
            <BulletList items={step2} />
            <p>Even at MVP stage, architecture quality matters because poor decisions increase rebuild risk later.</p>
          </Section>

          <Section title="Step 3: Design the User Experience (Days 16-25)">
            <p>Adoption depends on clarity. Powerful features still fail when onboarding and workflows are confusing.</p>
            <BulletList items={step3} />
          </Section>

          <Section title="Step 4: Develop the Core Product (Days 26-50)">
            <p>This is the longest phase. Keep development focused strictly on the core value proposition.</p>
            <BulletList items={step4} />
          </Section>

          <Section title="Step 5: Testing and Optimization (Days 51-57)">
            <p>A focused QA window protects first impressions and reduces launch risk.</p>
            <BulletList items={step5} />
          </Section>

          <Section title="Step 6: Launch and Gather Feedback (Days 58-60)">
            <p>Launch should prioritize learning. Use early users to identify friction and prioritize the next roadmap cycle.</p>
            <p>Collect insights on:</p>
            <BulletList items={step6} />
          </Section>

          <Section title="Common Mistakes When Building a SaaS MVP">
            <BulletList items={mistakes} />
          </Section>

          <Section title="Final Thoughts">
            <p>Building SaaS does not have to take years. With the right approach, teams can launch a working MVP in 60 days and iterate from real usage data.</p>
            <p>Most successful SaaS companies started with focused MVPs, then scaled systematically based on user feedback.</p>
          </Section>

          <section className="mt-8 border-t border-white/10 pt-10">
            <div className="rounded-2xl border border-[#29446A] bg-gradient-to-r from-[#182A45] to-[#213554] px-7 py-8 text-center md:px-10">
              <h3 className="mb-3 text-2xl font-bold text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Thinking About Launching Your SaaS Product?
              </h3>
              <p className="mx-auto mb-6 max-w-3xl text-[#9CB0CB]">
                A well-planned MVP helps validate faster, reduce cost, and build on a scalable architecture from day one.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/book-strategy-call" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(47,128,237,0.35)]">
                  Book Strategy Call
                </Link>
                <GetProjectEstimateButton
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#364B69] px-8 py-3 text-sm font-semibold text-[#E5E7EB] hover:bg-[#466087]"
                  after={<ArrowRight className="h-4 w-4" />}
                />
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
