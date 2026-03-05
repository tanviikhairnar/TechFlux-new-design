import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
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

const architectureProblems = ['Lack of multi-tenant architecture', 'Inefficient database structure', 'Poor API management', 'Limited scalability'];
const billingChallenges = ['Inflexible pricing plans', 'Failed recurring payments', 'Lack of subscription management tools'];
const onboardingIssues = ['Low activation rates', 'High early-stage churn', 'Poor product adoption'];
const securityRisks = ['Poor authentication systems', 'Insecure APIs', 'Lack of data encryption'];

export default function SaaSStartupChallengesArticle() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(37,99,235,0.16),transparent_42%)]" />
        <div className="pointer-events-none absolute left-[-80px] top-[300px] h-[360px] w-[360px] rounded-full bg-[#1F4E9C]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-80px] top-[920px] h-[360px] w-[360px] rounded-full bg-[#39AEFE]/10 blur-3xl" />

        <article className="relative z-10 mx-auto w-full max-w-[980px] px-4 pb-20 pt-28 md:pt-32 lg:px-5">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-7">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#56A9F5] transition-colors hover:text-[#87CBFF]">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.header initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#66BAFF]">SaaS Strategy</p>
            <h1 className="mb-5 text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              7 Major Problems SaaS Startups Face (And Practical Ways to Solve Them)
            </h1>
            <p className="max-w-4xl text-base leading-relaxed text-[#9CB0CB] md:text-lg">
              Many SaaS startups struggle not because their ideas are weak, but because avoidable technical and strategic issues appear during build and scale.
            </p>
          </motion.header>

          <Section title="Introduction">
            <p>The SaaS industry continues to grow rapidly, with startups and businesses launching platforms across productivity, marketplaces, and AI-powered products.</p>
            <p>Success depends on avoiding common execution mistakes early. The sections below cover the key risks and practical ways to solve them.</p>
          </Section>

          <Section title="1. Building Too Many Features Before Launch">
            <p>Teams often try to launch a perfect product with heavy dashboards, automations, and integrations before validating user demand.</p>
            <p>The solution: start with a focused MVP that solves one clear problem, launch early, and iterate using real user behavior.</p>
          </Section>

          <Section title="2. Poor SaaS Architecture and Scalability Issues">
            <p>Early architecture decisions often become expensive bottlenecks once the product gains traction.</p>
            <BulletList items={architectureProblems} />
            <p>The solution: design with scalability in mind from day one through multi-tenancy, modular systems, and cloud-ready infrastructure.</p>
          </Section>

          <Section title="3. Weak Subscription and Billing Systems">
            <p>Billing is the revenue engine of SaaS. Confusing or unreliable flows directly hurt trust and retention.</p>
            <BulletList items={billingChallenges} />
            <p>The solution: implement reliable billing with clear pricing logic, recurring payment stability, and transparent invoices.</p>
          </Section>

          <Section title="4. Complicated User Onboarding">
            <p>Users drop quickly when they cannot reach value in the first session.</p>
            <BulletList items={onboardingIssues} />
            <p>The solution: guided onboarding, contextual help, and a fast path to the first success moment.</p>
          </Section>

          <Section title="5. Security and Data Protection Risks">
            <p>SaaS platforms handle sensitive data, so weak security patterns create legal and reputational exposure.</p>
            <BulletList items={securityRisks} />
            <p>The solution: secure authentication, RBAC, encryption, periodic audits, and market-specific compliance planning.</p>
          </Section>

          <Section title="6. Difficulty Scaling Infrastructure">
            <p>As user demand rises, poorly planned infrastructure leads to latency, downtime, and service instability.</p>
            <p>The solution: cloud scaling patterns, load balancing, caching, and containerized deployments with observability.</p>
          </Section>

          <Section title="7. Lack of Product Analytics and Data Insights">
            <p>Without analytics, teams make roadmap decisions based on assumptions instead of behavior.</p>
            <p>The solution: track activation, feature usage, and engagement trends to drive evidence-based prioritization.</p>
          </Section>

          <Section title="Final Thoughts">
            <p>Launching SaaS successfully requires strategy, architecture quality, security rigor, and user understanding from the start.</p>
            <p>Solving these seven challenges early reduces costly rework and increases long-term product sustainability.</p>
          </Section>

          <section className="mt-8 border-t border-white/10 pt-10">
            <div className="rounded-2xl border border-[#29446A] bg-gradient-to-r from-[#182A45] to-[#213554] px-7 py-8 text-center md:px-10">
              <h3 className="mb-3 text-2xl font-bold text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Planning to Build Your Own SaaS Platform?
              </h3>
              <p className="mx-auto mb-6 max-w-3xl text-[#9CB0CB]">
                A strong architecture and execution strategy can be the difference between a struggling release and scalable growth.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/book-strategy-call" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(47,128,237,0.35)]">
                  Book Strategy Call
                </Link>
                <Link to="/get-estimate" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#364B69] px-8 py-3 text-sm font-semibold text-[#E5E7EB] hover:bg-[#466087]">
                  Get Project Estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
