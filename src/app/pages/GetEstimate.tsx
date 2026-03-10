import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { SubmissionSuccessPopup } from '../components/SubmissionSuccessPopup';
import { sendEstimateEmails } from '../lib/leadEmailService';

const nextSteps = [
  { title: 'We Review', text: 'Our team analyzes your project requirements' },
  { title: 'Estimate Prepared', text: 'Detailed breakdown of timeline and investment' },
  { title: 'Follow-up Call', text: 'We discuss the estimate and answer questions' },
];

const whyItems = [
  '12+ years of experience',
  '200+ projects delivered',
  'Transparent pricing',
  'No hidden costs',
  'Flexible engagement models',
];

export default function GetEstimate() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: 'SaaS Development',
    budget: 'Under $50K',
    timeline: 'ASAP (within 3 months)',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showSuccessOnButton, setShowSuccessOnButton] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setShowSuccessPopup(false);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitError('Please fill all required fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      await sendEstimateEmails(formData);
      setShowSuccessPopup(true);
      setShowSuccessOnButton(true);
      window.setTimeout(() => setShowSuccessOnButton(false), 2500);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectType: 'SaaS Development',
        budget: 'Under $50K',
        timeline: 'ASAP (within 3 months)',
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

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-24 pt-28 md:pt-32 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-4xl text-center"
          >
            <h1 className="mb-5 text-3xl font-bold leading-tight text-[#E5E7EB] sm:text-4xl md:text-[44px] lg:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Get a Clear Project Estimate Within 24 Hours
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
              Share your project details and receive a detailed estimate including timeline, investment, and recommended
              approach.
            </p>
          </motion.div>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#101A31]/95 p-5 transition-all duration-300 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-7"
            >
              <h2 className="mb-5 text-3xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Project Details
              </h2>

              <form className="space-y-5" onSubmit={onSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">First Name *</label>
                    <input
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(event) => setFormData((prev) => ({ ...prev, firstName: event.target.value }))}
                      className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all placeholder:text-[#64748B] focus:border-[#2F80ED]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Last Name *</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(event) => setFormData((prev) => ({ ...prev, lastName: event.target.value }))}
                      className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all placeholder:text-[#64748B] focus:border-[#2F80ED]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Email *</label>
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all placeholder:text-[#64748B] focus:border-[#2F80ED]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Company</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all placeholder:text-[#64748B] focus:border-[#2F80ED]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Project Type *</label>
                  <select
                    value={formData.projectType}
                    onChange={(event) => setFormData((prev) => ({ ...prev, projectType: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all duration-300 ease-out hover:border-[#2A4B7E] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                  >
                    <option>SaaS Development</option>
                    <option>AI Solutions</option>
                    <option>On-Demand Applications</option>
                    <option>White-Label Development</option>
                    <option>E-Commerce Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Budget Range *</label>
                  <select
                    value={formData.budget}
                    onChange={(event) => setFormData((prev) => ({ ...prev, budget: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all duration-300 ease-out hover:border-[#2A4B7E] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                  >
                    <option>Under $50K</option>
                    <option>$50K - $100K</option>
                    <option>$100K - $250K</option>
                    <option>$250K+</option>
                    <option>Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Desired Timeline *</label>
                  <select
                    value={formData.timeline}
                    onChange={(event) => setFormData((prev) => ({ ...prev, timeline: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none transition-all duration-300 ease-out hover:border-[#2A4B7E] focus:border-[#2F80ED] focus:shadow-[0_0_0_4px_rgba(47,128,237,0.14)]"
                  >
                    <option>ASAP (within 3 months)</option>
                    <option>3-6 months</option>
                    <option>6-12 months</option>
                    <option>12+ months</option>
                    <option>Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB]">Project Details *</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project: What problem does it solve? Who are your users? What are the key features? Any technical requirements or integrations?"
                    value={formData.message}
                    onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                    className="w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 py-3 text-sm leading-relaxed text-[#E5E7EB] outline-none transition-all placeholder:text-[#64748B] focus:border-[#2F80ED]"
                  />
                </div>

                {submitError ? <p className="text-sm text-[#f87171]">{submitError}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_28px_rgba(47,128,237,0.45)]"
                >
                  {showSuccessOnButton && !isSubmitting ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                  {isSubmitting ? 'Submitting...' : showSuccessOnButton ? 'Request Sent' : 'Submit Project Details'}
                </button>
              </form>
            </motion.div>

            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-2xl border border-white/5 bg-[#101A31]/95 p-5 transition-all duration-300 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
              >
                <h3 className="mb-4 text-3xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  What Happens Next
                </h3>
                <div className="space-y-5">
                  {nextSteps.map((item, index) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2F80ED] text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-lg font-semibold text-[#E5E7EB]">{item.title}</p>
                        <p className="text-sm text-[#94A3B8]">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl border border-white/5 bg-[#101A31]/95 p-5 transition-all duration-300 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
              >
                <h3 className="mb-4 text-3xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Why Techflux?
                </h3>
                <div className="space-y-3">
                  {whyItems.map((item) => (
                    <p key={item} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                      <CheckCircle2 className="h-4 w-4 text-[#2F80ED]" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="rounded-2xl border border-white/5 bg-[#101A31]/95 p-5 transition-all duration-300 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    24 Hours
                  </p>
                  <p className="mt-1 text-sm text-[#94A3B8]">Average response time</p>
                  <p className="text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    98%
                  </p>
                  <p className="mt-1 text-sm text-[#94A3B8]">Client satisfaction</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <SubmissionSuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        title="Estimate Request Submitted"
        message="Thanks for sharing your project details. We will send you an estimate and next steps within 24 hours."
      />

      <Footer />
    </div>
  );
}

