import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Clock3, Image, Video } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { sendStrategyCallEmails } from '../lib/leadEmailService';

const coverageItems = [
  'Product feasibility and technical approach',
  'Recommended architecture and tech stack',
  'Timeline and development phases',
  'Budget range and investment breakdown',
  'Team structure and engagement model',
  'Next steps and action plan',
];

const stats = [
  { value: '12+', label: 'Years building scalable platforms' },
  { value: '200+', label: 'Successful projects delivered' },
  { value: '98%', label: 'Client satisfaction rate' },
];

const testimonials = [
  {
    quote:
      'The strategy call was incredibly valuable. They understood our vision immediately and provided clear recommendations.',
    name: 'Sarah Johnson',
    role: 'VP Product, TechVentures',
    avatar: null,
  },
  {
    quote:
      'Their transparent approach to pricing and timeline helped us make an informed decision about our project.',
    name: 'Michael Chen',
    role: 'CEO, DataInsight',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80',
  },
  {
    quote:
      'Best decision we made was booking that initial call. They guided us through the entire process professionally.',
    name: 'David Martinez',
    role: 'Founder, Digital Agency Co.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80',
  },
];

export default function BookStrategyCall() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: 'SaaS Development',
    budget: 'Under $50K',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitError('Please fill all required fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      const delivery = await sendStrategyCallEmails(formData);
      setSubmitSuccess(
        delivery === 'emailjs'
          ? 'Request submitted and email sent successfully.'
          : 'Your email app was opened with a draft. Please click Send there to complete submission.',
      );
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectType: 'SaaS Development',
        budget: 'Under $50K',
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.15),transparent_42%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-[#E5E7EB] sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Let&apos;s Build Something Scalable
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#94A3B8] md:text-xl">
              Discuss your SaaS, AI, or On-Demand project with our product experts. Get clarity on feasibility,
              architecture, timeline, and budget.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-[#E5E7EB] md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                What We&apos;ll Cover in Your Strategy Call
              </h2>

              <div className="mb-8 space-y-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-base text-[#94A3B8] md:text-lg">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1D8CFF]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-7"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <h3 className="mb-4 text-2xl font-semibold text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Call Details
                </h3>

                <div className="space-y-3 text-[#94A3B8]">
                  <div className="flex items-center gap-3 text-base md:text-lg">
                    <Clock3 className="h-4 w-4 text-[#1D8CFF]" />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center gap-3 text-base md:text-lg">
                    <Video className="h-4 w-4 text-[#1D8CFF]" />
                    <span>Video call (Zoom/Google Meet)</span>
                  </div>
                  <div className="flex items-center gap-3 text-base md:text-lg">
                    <Calendar className="h-4 w-4 text-[#1D8CFF]" />
                    <span>Flexible scheduling - pick a time that works for you</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border border-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-8"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <h3 className="mb-6 text-center text-2xl font-semibold text-[#E5E7EB] md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Request Strategy Call
              </h3>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First name *"
                    value={formData.firstName}
                    onChange={(event) => setFormData((prev) => ({ ...prev, firstName: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none placeholder:text-[#64748B] focus:border-[#2F80ED]"
                  />
                  <input
                    type="text"
                    placeholder="Last name *"
                    value={formData.lastName}
                    onChange={(event) => setFormData((prev) => ({ ...prev, lastName: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none placeholder:text-[#64748B] focus:border-[#2F80ED]"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Business email *"
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none placeholder:text-[#64748B] focus:border-[#2F80ED]"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
                  className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none placeholder:text-[#64748B] focus:border-[#2F80ED]"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <select
                    value={formData.projectType}
                    onChange={(event) => setFormData((prev) => ({ ...prev, projectType: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none focus:border-[#2F80ED]"
                  >
                    <option>SaaS Development</option>
                    <option>AI Solutions</option>
                    <option>On-Demand Applications</option>
                    <option>White-Label Development</option>
                    <option>E-Commerce Solutions</option>
                  </select>
                  <select
                    value={formData.budget}
                    onChange={(event) => setFormData((prev) => ({ ...prev, budget: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 text-sm text-[#E5E7EB] outline-none focus:border-[#2F80ED]"
                  >
                    <option>Under $50K</option>
                    <option>$50K - $100K</option>
                    <option>$100K - $250K</option>
                    <option>$250K+</option>
                    <option>Need Guidance</option>
                  </select>
                </div>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project goals *"
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  className="w-full rounded-xl border border-[#22345A] bg-[#0D1930] px-4 py-3 text-sm leading-relaxed text-[#E5E7EB] outline-none placeholder:text-[#64748B] focus:border-[#2F80ED]"
                />

                {submitError ? <p className="text-sm text-[#f87171]">{submitError}</p> : null}
                {submitSuccess ? <p className="text-sm text-[#4ade80]">{submitSuccess}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Strategy Call Request'}
                </button>
              </form>
            </motion.div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 text-center"
          >
            <h2 className="mb-10 text-4xl font-bold text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Why Choose Techflux Solutions
            </h2>

            <div className="grid gap-5 md:grid-cols-3">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-white/5 px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="text-4xl font-bold text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.value}
                  </div>
                  <p className="mt-3 text-sm text-[#64748B] md:text-base">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20"
          >
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              What Our Clients Say
            </h2>

            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-7"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <p className="mb-7 text-base leading-relaxed text-[#94A3B8] md:text-lg">&quot;{item.quote}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-[#1F2937] ring-1 ring-white/10">
                      {item.avatar ? (
                        <img src={item.avatar} alt={item.name} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[#94A3B8]">
                          <Image className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#E5E7EB] md:text-lg">{item.name}</p>
                      <p className="text-sm text-[#64748B]">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-3xl border border-white/5 p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-14"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-base text-[#64748B] md:text-lg">
              No sales pitch, just honest technical advice and recommendations.
            </p>
            <button className="rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all hover:brightness-110">
              Confirm Your Strategy Call
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

