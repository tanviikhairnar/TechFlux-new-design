import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { sendContactEmails } from '../lib/leadEmailService';

export default function Contact() {
  const contactIconWrapClass = 'mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#13376A]';
  const contactIconClass = 'h-5 w-5 text-[#2F80ED] stroke-[2.1]';
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
      await sendContactEmails(formData);
      setSubmitSuccess('Message submitted successfully.');
      window.alert('Form submitted successfully.');
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
    <div className="w-full min-h-screen overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-16 pt-28 md:pb-24 md:pt-32 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
            <h1 className="mb-5 text-3xl font-bold leading-tight text-[#E5E7EB] sm:text-4xl md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Let&apos;s Discuss Your Project
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#94A3B8] md:text-[17px]">
              Have a project in mind? Get in touch and let&apos;s explore how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1.02fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-2xl border border-white/5 p-5 md:p-7"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <h2 className="mb-5 text-xl font-bold text-[#E5E7EB] md:text-[22px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Send us a message
              </h2>

              <form className="space-y-5" onSubmit={onSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#E5E7EB] md:text-[15px]">First Name</label>
                    <input
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(event) => setFormData((prev) => ({ ...prev, firstName: event.target.value }))}
                      className="w-full rounded-xl border border-[#203A64] bg-[#0E1A31] px-4 py-[11px] text-sm text-[#E5E7EB] placeholder:text-[#6F819E] focus:border-[#2F80ED] focus:outline-none md:text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#E5E7EB] md:text-[15px]">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(event) => setFormData((prev) => ({ ...prev, lastName: event.target.value }))}
                      className="w-full rounded-xl border border-[#203A64] bg-[#0E1A31] px-4 py-[11px] text-sm text-[#E5E7EB] placeholder:text-[#6F819E] focus:border-[#2F80ED] focus:outline-none md:text-[15px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB] md:text-[15px]">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                    className="w-full rounded-xl border border-[#203A64] bg-[#0E1A31] px-4 py-[11px] text-sm text-[#E5E7EB] placeholder:text-[#6F819E] focus:border-[#2F80ED] focus:outline-none md:text-[15px]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB] md:text-[15px]">Company</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
                    className="w-full rounded-xl border border-[#203A64] bg-[#0E1A31] px-4 py-[11px] text-sm text-[#E5E7EB] placeholder:text-[#6F819E] focus:border-[#2F80ED] focus:outline-none md:text-[15px]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB] md:text-[15px]">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(event) => setFormData((prev) => ({ ...prev, projectType: event.target.value }))}
                    className="w-full rounded-xl border border-[#203A64] bg-[#0E1A31] px-4 py-[11px] text-sm text-[#E5E7EB] focus:border-[#2F80ED] focus:outline-none md:text-[15px]"
                  >
                    <option>SaaS Development</option>
                    <option>AI Solutions</option>
                    <option>On-Demand Applications</option>
                    <option>White-Label Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB] md:text-[15px]">Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(event) => setFormData((prev) => ({ ...prev, budget: event.target.value }))}
                    className="w-full rounded-xl border border-[#203A64] bg-[#0E1A31] px-4 py-[11px] text-sm text-[#E5E7EB] focus:border-[#2F80ED] focus:outline-none md:text-[15px]"
                  >
                    <option>Under $50K</option>
                    <option>$50K - $100K</option>
                    <option>$100K - $250K</option>
                    <option>$250K+</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#E5E7EB] md:text-[15px]">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                    className="w-full resize-none rounded-xl border border-[#203A64] bg-[#0E1A31] px-4 py-[11px] text-sm text-[#E5E7EB] placeholder:text-[#6F819E] focus:border-[#2F80ED] focus:outline-none md:text-[15px]"
                  />
                </div>

                {submitError ? <p className="text-sm text-[#f87171]">{submitError}</p> : null}
                {submitSuccess ? <p className="text-sm text-[#4ade80]">{submitSuccess}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all hover:brightness-110 md:text-[15px]"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="rounded-2xl border border-white/5 p-5 md:p-7" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <h2 className="mb-5 text-xl font-bold text-[#E5E7EB] md:text-[22px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={contactIconWrapClass}>
                      <Mail className={contactIconClass} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#E5E7EB] md:text-lg">Email</h3>
                      <p className="text-sm text-[#94A3B8] md:text-base">Sohel@techflux.in</p>
                      <p className="text-sm text-[#94A3B8] md:text-base">Asrar@techflux.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={contactIconWrapClass}>
                      <Phone className={contactIconClass} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#E5E7EB] md:text-lg">Phone</h3>
                      <p className="text-sm text-[#94A3B8] md:text-base">+91 9730960043</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={contactIconWrapClass}>
                      <MapPin className={contactIconClass} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#E5E7EB] md:text-lg">Office 1</h3>
                      <p className="text-sm leading-relaxed text-[#94A3B8] md:text-base">
                        Dhawan Apartment, Maneksha Nagar, Dwarka, Nashik, Maharashtra 422011
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={contactIconWrapClass}>
                      <MapPin className={contactIconClass} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#E5E7EB] md:text-lg">Office 2</h3>
                      <p className="text-sm leading-relaxed text-[#94A3B8] md:text-base">
                        Bavdhan, Pune
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex h-[220px] items-center justify-center rounded-2xl border border-white/5 md:h-[260px]" style={{ background: 'rgba(24,50,88,0.45)' }}>
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 h-12 w-12 text-[#2F80ED]" />
                  <p className="text-base text-[#94A3B8] md:text-lg">Nashik & Pune, India</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 p-6 text-center md:p-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <h3 className="mb-3 text-xl font-bold text-[#E5E7EB] md:text-[22px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Prefer a Direct Conversation?
                </h3>
                <p className="mb-6 text-sm text-[#94A3B8] md:text-[15px]">Schedule a strategy call to discuss your project in detail.</p>
                <Link
                  to="/book-strategy-call"
                  className="inline-flex rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all hover:brightness-110 md:text-[15px]"
                >
                  Book Strategy Call
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

