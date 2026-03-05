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

const appInterfaces = ['A customer application', 'A service provider or partner app', 'An admin dashboard for platform management'];
const realtimeOperations = ['Instant booking requests', 'Real-time service availability', 'Location tracking', 'Status updates for ongoing services'];
const userRoles = ['Customers requesting services', 'Service providers fulfilling requests', 'Administrators managing operations'];
const paymentFlows = ['Customer payments', 'Platform commissions', 'Partner payouts', 'Refund management'];
const scalabilityRisks = ['Slow loading times', 'Booking failures', 'System crashes during peak demand'];
const retentionIssues = ['Complicated booking processes', 'Limited service availability', 'Lack of loyalty incentives'];

export default function OnDemandAppChallengesArticle() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(37,99,235,0.16),transparent_42%)]" />
        <div className="pointer-events-none absolute left-[-90px] top-[420px] h-[350px] w-[350px] rounded-full bg-[#164C9E]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-90px] top-[980px] h-[350px] w-[350px] rounded-full bg-[#39AEFE]/10 blur-3xl" />

        <article className="relative z-10 mx-auto w-full max-w-[980px] px-4 pb-20 pt-28 md:pt-32 lg:px-5">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-7">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#56A9F5] transition-colors hover:text-[#87CBFF]">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.header initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#66BAFF]">On-Demand Applications</p>
            <h1 className="mb-5 text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              On-Demand Applications: Common Challenges in Development and How to Solve Them
            </h1>
            <p className="max-w-4xl text-base leading-relaxed text-[#9CB0CB] md:text-lg">
              On-demand apps are operational systems, not just mobile interfaces. Success depends on real-time reliability, marketplace balance, and scalable backend design.
            </p>
          </motion.header>

          <Section title="Introduction">
            <p>Over the past decade, on-demand platforms have transformed service delivery across transportation, food, logistics, and home services.</p>
            <p>Replicating that success requires strong execution across technology, operations, and user experience.</p>
          </Section>

          <Section title="What is an On-Demand Application?">
            <p>An on-demand application connects users and providers in real time while coordinating booking, payments, and service status updates.</p>
            <p>Typical platform interfaces include:</p>
            <BulletList items={appInterfaces} />
          </Section>

          <Section title="1. Managing Real-Time Operations">
            <p>These systems must synchronize actions across users and providers instantly.</p>
            <BulletList items={realtimeOperations} />
            <p>The solution: use real-time architecture patterns such as WebSockets, event-driven messaging, and scalable notification infrastructure.</p>
          </Section>

          <Section title="2. Building a Multi-User Ecosystem">
            <p>On-demand products are multi-sided marketplaces and must support distinct workflows per role.</p>
            <BulletList items={userRoles} />
            <p>The solution: implement role-based architecture and dedicated interfaces from the beginning.</p>
          </Section>

          <Section title="3. Handling Payments and Transactions">
            <p>Payment reliability and transparency directly impact platform trust.</p>
            <BulletList items={paymentFlows} />
            <p>The solution: secure payment gateway integrations, automated payouts, and clear billing visibility for every transaction.</p>
          </Section>

          <Section title="4. Ensuring Platform Scalability">
            <p>Without proper infrastructure planning, growth introduces instability and booking failures.</p>
            <BulletList items={scalabilityRisks} />
            <p>The solution: modular backend architecture, load balancing, scalable databases, and caching layers.</p>
          </Section>

          <Section title="5. Maintaining Quality of Service Providers">
            <p>Provider quality defines platform reputation and repeat usage.</p>
            <p>The solution: implement ratings, reviews, performance metrics, and quality controls to maintain service consistency.</p>
          </Section>

          <Section title="6. User Retention and Engagement">
            <p>Acquisition alone is not enough; retention determines growth efficiency.</p>
            <BulletList items={retentionIssues} />
            <p>The solution: remove booking friction and add retention mechanisms such as referrals, rewards, and personalization.</p>
          </Section>

          <Section title="7. Regulatory and Operational Challenges">
            <p>Industry-specific regulations around payments, data protection, and service standards can disrupt operations if ignored.</p>
            <p>The solution: include compliance planning, documentation, and legal review as part of the product roadmap.</p>
          </Section>

          <Section title="Final Thoughts">
            <p>On-demand products are high-opportunity but high-complexity systems that require technical depth and operational discipline.</p>
            <p>Teams that address marketplace, reliability, payments, and compliance early are more likely to build sustainable platforms.</p>
          </Section>

          <section className="mt-8 border-t border-white/10 pt-10">
            <div className="rounded-2xl border border-[#29446A] bg-gradient-to-r from-[#182A45] to-[#213554] px-7 py-8 text-center md:px-10">
              <h3 className="mb-3 text-2xl font-bold text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Planning to Build Your Own On-Demand Platform?
              </h3>
              <p className="mx-auto mb-6 max-w-3xl text-[#9CB0CB]">
                A strong architecture and execution strategy can transform your concept into a scalable marketplace for both users and providers.
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
