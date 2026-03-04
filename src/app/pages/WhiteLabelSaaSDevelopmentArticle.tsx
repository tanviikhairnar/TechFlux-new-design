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
    <section className="mb-12">
      <h2
        className="mb-4 text-2xl font-bold leading-tight text-[#E5E7EB] md:text-3xl"
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-[#93A4BE] md:text-base">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2F80ED]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const strategicChecks = [
  'Infrastructure resilience under user growth',
  'API accessibility and integration depth',
  'Compliance standards and security policies',
  'Data export and portability provisions',
  'Contractual exit flexibility',
];

const economicInputs = [
  'Licensing or revenue-share cost structure',
  'Hosting and infrastructure overhead',
  'Payment processing and support costs',
  'Projected cost per active user',
  'Average revenue per user and customer acquisition cost',
];

const retentionLayers = [
  'Onboarding quality and activation support',
  'Customer education and documentation',
  'Billing and communication consistency',
  'Support response and issue resolution',
  'Lifecycle retention strategy',
];

const conclusionPoints = [
  'Align platform capability with brand promise',
  'Model margin sustainability before scale',
  'Define ownership boundaries and dependency risk clearly',
  'Treat operations and retention as core growth systems',
  'Plan long-term differentiation beyond interface branding',
];

export default function WhiteLabelSaaSDevelopmentArticle() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <article className="relative z-10 mx-auto w-full max-w-[1060px] px-4 pb-20 pt-28 md:pt-32 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#56A9F5] transition-colors hover:text-[#7CC6FF]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-10 rounded-3xl border border-[#22324d] bg-gradient-to-b from-[#111D35] to-[#0E182D] p-7 md:p-10"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#56A9F5]">White-Label SaaS</p>
            <h1
              className="mb-5 text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-[#E5E7EB] md:text-5xl"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              White-Label SaaS Development: The Strategic Infrastructure Behind Sustainable Recurring Revenue
            </h1>
            <p className="max-w-4xl text-base leading-relaxed text-[#93A4BE] md:text-lg">
              White-label SaaS is not a shortcut to ownership. It is a leverage model that shifts technical execution
              to a provider while moving market accountability, operations, and retention responsibility to your team.
            </p>
          </motion.header>

          <div className="rounded-2xl border border-[#21314b] bg-[#101A31] p-6 md:p-8">
            <Section title="The Strategic Reality Behind White-Label SaaS">
              <p>
                White-label SaaS development is often presented as a fast-track entry into recurring revenue. In
                practice, it is a strategic reallocation of complexity rather than a removal of complexity.
              </p>
              <p>
                Engineering, infrastructure, and platform maintenance remain with the provider. Market positioning,
                pricing, acquisition, onboarding, retention, and brand trust remain with you.
              </p>
              <p>
                This is where many businesses misread the model. White-label SaaS is a leverage framework, and leverage
                requires disciplined execution.
              </p>
            </Section>

            <Section title="What White-Label SaaS Development Structurally Represents">
              <p>
                In this model, one company builds and maintains the platform while another rebrands and distributes it
                under its own identity.
              </p>
              <p>
                The reseller controls customer relationships, pricing, and go-to-market strategy. The provider
                typically controls architecture, scaling, security, and roadmap velocity.
              </p>
              <p>
                White-label models perform best when distribution capacity is stronger than internal engineering
                capacity.
              </p>
            </Section>

            <Section title="The Strategic Rationale Behind the SaaS Reseller Model">
              <p>
                Agencies, consultants, and service firms use white-label productization to transition from one-time
                project revenue to recurring subscription revenue.
              </p>
              <p>
                This can improve predictability and valuation potential, but only when product capability matches brand
                promise. Outsourced development does not outsource reputation risk.
              </p>
            </Section>

            <Section title="Control, Customization, and Structural Dependency">
              <p>
                Branding flexibility can create the impression of ownership, but architectural control stays external.
                That distinction becomes critical at scale.
              </p>
              <p>Before selecting a white-label platform, validate:</p>
              <BulletList items={strategicChecks} />
              <p>
                Dependency risk is unavoidable in white-label systems. The objective is to quantify and manage it, not
                ignore it.
              </p>
            </Section>

            <Section title="Economic Architecture and Margin Sustainability">
              <p>
                Revenue growth can mask fragile margins if variable costs scale with user growth. Economic modeling is
                a pre-launch requirement, not a post-launch adjustment.
              </p>
              <p>Core inputs to model include:</p>
              <BulletList items={economicInputs} />
              <p>
                Fixed licensing can improve predictability. Revenue-share models reduce upfront risk but can compress
                margins over time.
              </p>
            </Section>

            <Section title="AI Integration Inside White-Label Platforms">
              <p>
                AI modules in white-label products can increase product value, but they also increase operational cost,
                often through usage-based pricing.
              </p>
              <p>
                AI should be included when it improves measurable outcomes such as speed, accuracy, or efficiency. If
                it is added only for perception, it weakens unit economics.
              </p>
            </Section>

            <Section title="Operational Accountability and Retention Economics">
              <p>
                Even with outsourced engineering, operational accountability remains internal. Retention performance is
                determined by experience quality across the full customer journey.
              </p>
              <p>Critical retention layers include:</p>
              <BulletList items={retentionLayers} />
              <p>
                Customers evaluate your brand as one product experience, regardless of who owns the backend platform.
              </p>
            </Section>

            <Section title="Long-Term Strategic Positioning">
              <p>
                White-label SaaS may be permanent or transitional. The key question is whether the model supports your
                future differentiation requirements.
              </p>
              <p>
                In markets where competitors rely on similar infrastructure, differentiation must come from positioning,
                service design, integrations, and vertical depth.
              </p>
              <p>
                A 3-5 year strategy should include optionality for hybrid models or gradual custom development if
                market conditions demand it.
              </p>
            </Section>

            <Section title="Conclusion">
              <p>
                White-label SaaS development can create scalable recurring revenue when backed by distribution
                strength, operational maturity, and economic discipline.
              </p>
              <p>Execution quality depends on a few non-negotiables:</p>
              <BulletList items={conclusionPoints} />
              <p>
                The model is not defined by ease. It is defined by leverage, responsibility, and disciplined strategy.
              </p>
            </Section>
          </div>

          <div className="mt-10 rounded-2xl border border-[#243452] bg-gradient-to-r from-[#1A2D49] to-[#202E4A] px-7 py-8 text-center md:px-10">
            <h3 className="mb-3 text-2xl font-bold text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Launching a White-Label SaaS Offer?
            </h3>
            <p className="mx-auto mb-6 max-w-3xl text-[#93A4BE]">
              We help teams evaluate platform fit, protect margins, and build resilient recurring revenue models.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/book-strategy-call"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(47,128,237,0.35)]"
              >
                Book Strategy Call
              </Link>
              <Link
                to="/get-estimate"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#364B69] px-8 py-3 text-sm font-semibold text-[#E5E7EB] hover:bg-[#466087]"
              >
                Get Project Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
