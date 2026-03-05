import { motion } from 'motion/react';
import { CheckCircle2, DollarSign, Handshake, Send, Users } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { sendPartnerEmails } from '../lib/leadEmailService';

const perfectFor = [
  {
    icon: Users,
    title: 'Digital Agencies',
    text: 'Expand service offerings without building an in-house dev team',
  },
  {
    icon: Handshake,
    title: 'Consultants',
    text: 'Add technical capabilities to your consulting practice',
  },
  {
    icon: DollarSign,
    title: 'Resellers',
    text: 'Create recurring revenue with SaaS and AI products',
  },
];

const steps = [
  {
    number: '01',
    title: 'You Find Clients',
    text: 'Focus on sales, client relationships, and closing deals',
  },
  {
    number: '02',
    title: 'We Build',
    text: 'Our dedicated team handles all development and delivery',
  },
  {
    number: '03',
    title: 'Your Brand',
    text: 'All deliverables branded with your company identity',
  },
  {
    number: '04',
    title: 'Shared Success',
    text: 'Transparent pricing with healthy margins for your agency',
  },
];

const benefits = [
  {
    title: 'Dedicated Development Team',
    text: 'Experienced developers, designers, and PMs assigned to your projects',
  },
  {
    title: 'White-Label Delivery',
    text: 'All code, documentation, and communication under your brand',
  },
  {
    title: 'Transparent Process',
    text: 'Regular sprint reviews, demos, and progress updates you can share',
  },
  {
    title: 'Flexible Engagement',
    text: 'Project-based, retainer, or dedicated team models available',
  },
  {
    title: 'Quality Assurance',
    text: 'Comprehensive testing before every client delivery',
  },
  {
    title: 'Ongoing Support',
    text: "Maintenance and updates for your clients' projects",
  },
  {
    title: 'Technical Consulting',
    text: 'Help with proposals, estimates, and technical scoping',
  },
  {
    title: 'Revenue Growth',
    text: 'Expand service offerings and increase project values',
  },
];

export default function BecomePartner() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    agencyType: '',
    services: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.message) {
      setSubmitError('Please fill all required fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      await sendPartnerEmails(formData);
      setSubmitSuccess('Request submitted successfully.');
      window.alert('Form submitted successfully.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        agencyType: '',
        services: '',
        message: '',
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-20 pt-40 md:pb-24 md:pt-52 lg:px-5">
          <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto mb-32 max-w-4xl text-center">
            <h1 className="mb-7 text-4xl font-bold leading-[1.06] tracking-[-0.02em] text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Scale Your Agency Without Hiring Developers
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#93A4BE] md:text-lg">
              Partner with TechFlux to deliver enterprise-grade development services to your clients under your brand.
              Focus on growth while we handle the technical execution.
            </p>
          </motion.section>

          <section className="mb-16">
            <h2 className="mb-7 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Perfect For
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {perfectFor.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#1F2D46] bg-[#111B31] p-7 text-center transition-all duration-300 hover:border-[#2C4B78] hover:bg-[#132039]">
                  <item.icon className="mx-auto mb-5 h-8 w-8 text-[#2F80ED]" />
                  <h3 className="mb-2.5 text-lg font-semibold text-[#E5E7EB]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#93A4BE]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-7 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              How Partnership Works
            </h2>
            <div className="grid gap-5 md:grid-cols-4">
              {steps.map((item) => (
                <div key={item.number} className="rounded-2xl border border-[#1F2D46] bg-[#111B31] p-6 transition-all duration-300 hover:border-[#2C4B78] hover:bg-[#132039]">
                  <p className="mb-3 text-4xl font-bold text-[#2F80ED]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.number}
                  </p>
                  <h3 className="mb-2.5 text-base font-semibold text-[#E5E7EB]">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-[#93A4BE]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-7 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Partnership Benefits
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#1F2D46] bg-[#111B31] p-6 transition-all duration-300 hover:border-[#2C4B78] hover:bg-[#132039]">
                  <p className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2F80ED]" />
                    <span>
                      <span className="block text-base font-semibold text-[#E5E7EB]">{item.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-[#93A4BE]">{item.text}</span>
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid items-start gap-7 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-2xl border border-[#1F2D46] bg-[#111B31] p-6 md:p-7">
              <h2 className="mb-5 text-3xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Partner Application
              </h2>
              <form className="space-y-4.5" onSubmit={onSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">First Name *</label>
                    <input
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(event) => setFormData((prev) => ({ ...prev, firstName: event.target.value }))}
                      className="h-11 w-full rounded-xl border border-[#243A62] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all duration-300 placeholder:text-[#6F83A2] hover:border-[#2B4D7F] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Last Name *</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(event) => setFormData((prev) => ({ ...prev, lastName: event.target.value }))}
                      className="h-11 w-full rounded-xl border border-[#243A62] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all duration-300 placeholder:text-[#6F83A2] hover:border-[#2B4D7F] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Email *</label>
                  <input
                    type="email"
                    placeholder="your.email@agency.com"
                    value={formData.email}
                    onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#243A62] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all duration-300 placeholder:text-[#6F83A2] hover:border-[#2B4D7F] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Agency/Company Name *</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#243A62] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all duration-300 placeholder:text-[#6F83A2] hover:border-[#2B4D7F] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Agency Type</label>
                  <input
                    type="text"
                    placeholder="Agency, Consultant, Reseller..."
                    value={formData.agencyType}
                    onChange={(event) => setFormData((prev) => ({ ...prev, agencyType: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#243A62] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all duration-300 placeholder:text-[#6F83A2] hover:border-[#2B4D7F] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Current Services *</label>
                  <textarea
                    rows={3}
                    placeholder="What services do you currently offer?"
                    value={formData.services}
                    onChange={(event) => setFormData((prev) => ({ ...prev, services: event.target.value }))}
                    className="w-full rounded-xl border border-[#243A62] bg-[#0D1930] px-4 py-3 text-sm text-[#E5E7EB] outline-none transition-all duration-300 placeholder:text-[#6F83A2] hover:border-[#2B4D7F] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Why Partner With Us? *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals and what you're looking for in a development partner..."
                    value={formData.message}
                    onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                    className="w-full rounded-xl border border-[#243A62] bg-[#0D1930] px-4 py-3 text-sm text-[#E5E7EB] outline-none transition-all duration-300 placeholder:text-[#6F83A2] hover:border-[#2B4D7F] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                  />
                </div>

                {submitError ? <p className="text-sm text-[#f87171]">{submitError}</p> : null}
                {submitSuccess ? <p className="text-sm text-[#4ade80]">{submitSuccess}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] text-sm font-semibold text-white shadow-[0_10px_28px_rgba(47,128,237,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? 'Submitting...' : 'Submit Partnership Application'}
                </button>
              </form>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-[#1F2D46] bg-[#111B31] p-6 md:p-7">
                <h3 className="mb-4 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Partner Success Story
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#93A4BE]">
                  "Working with TechFlux as our white-label partner has allowed us to scale our agency without the overhead of hiring developers. We have tripled our revenue in the past year by offering development services we couldn't provide before. Their team is professional, reliable, and consistently delivers quality work on time."
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] text-xs font-semibold text-white">DM</div>
                  <div>
                    <p className="text-sm font-semibold text-[#E5E7EB]">David Martinez</p>
                    <p className="text-xs text-[#93A4BE]">Founder, Digital Agency Co.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#1F2D46] bg-[#111B31] p-6 md:p-7">
                <h3 className="mb-4 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Next Steps
                </h3>
                <ol className="space-y-2.5 text-xs leading-relaxed text-[#93A4BE]">
                  <li><span className="mr-2 font-semibold text-[#2F80ED]">1.</span>Submit your partnership application</li>
                  <li><span className="mr-2 font-semibold text-[#2F80ED]">2.</span>Schedule an introductory call (usually within 24 hours)</li>
                  <li><span className="mr-2 font-semibold text-[#2F80ED]">3.</span>Discuss partnership terms and engagement models</li>
                  <li><span className="mr-2 font-semibold text-[#2F80ED]">4.</span>Sign partnership agreement and start collaborating</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
