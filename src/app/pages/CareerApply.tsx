import { motion } from 'motion/react';
import {
  ArrowLeft,
  BriefcaseBusiness,
  FileText,
  Link as LinkIcon,
  Mail,
  MapPin,
  Phone,
  Upload,
  User,
} from 'lucide-react';
import { ChangeEvent, ComponentType, FormEvent, useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

const roleOptions = [
  'Flutter Developer',
  'React Developer',
  'Backend Developer',
  'QA Tester',
  'UI/UX Designer',
];

type ApplyFormState = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  yearsOfExperience: string;
  position: string;
  portfolioUrl: string;
  coverLetter: string;
};

const defaultFormState: ApplyFormState = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  yearsOfExperience: '',
  position: roleOptions[0],
  portfolioUrl: '',
  coverLetter: '',
};

export default function CareerApply() {
  const [searchParams] = useSearchParams();
  const preselectedRole = searchParams.get('position');
  const matchedRole = useMemo(() => {
    if (!preselectedRole) return roleOptions[0];
    return roleOptions.includes(preselectedRole) ? preselectedRole : roleOptions[0];
  }, [preselectedRole]);

  const [form, setForm] = useState<ApplyFormState>({
    ...defaultFormState,
    position: matchedRole,
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    setForm((prev) => ({ ...prev, position: matchedRole }));
  }, [matchedRole]);

  const updateField = (field: keyof ApplyFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onResumeFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setResumeFile(event.target.files?.[0] ?? null);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setSubmitMessage('');

    if (!form.fullName || !form.email || !form.phone || !form.location || !form.yearsOfExperience || !resumeFile) {
      setSubmitError('Please fill all required fields and upload your resume.');
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Application submitted successfully. Our HR team will contact you within 2-3 business days.');
      setForm({
        ...defaultFormState,
        position: matchedRole,
      });
      setResumeFile(null);
    }, 750);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.16),transparent_42%)]" />

        <section className="relative z-10 border-b border-white/5 bg-[#09152B]/80">
          <div className="mx-auto w-full max-w-[1260px] px-4 pb-14 pt-28 md:pt-32 lg:px-5">
            <Link
              to="/careers"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#60A5FA] transition-colors hover:text-[#93C5FD]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Careers
            </Link>
            <h1 className="mb-3 text-4xl font-bold text-[#E5E7EB] md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Apply for This Position
            </h1>
            <p className="text-base text-[#9FB2CD] md:text-[22px]">
              Submit your details and our HR team will get back to you within 2-3 business days.
            </p>
          </div>
        </section>

        <section className="relative z-10 py-16 md:py-20">
          <div className="mx-auto w-full max-w-[760px] px-4 lg:px-5">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/8 bg-[#0D172B]/95 p-7 md:p-10"
            >
              <h2 className="mb-7 text-3xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Personal Information
              </h2>

              <div className="space-y-5">
                <InputLabel label="Full Name" required />
                <InputWithIcon
                  icon={User}
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={(value) => updateField('fullName', value)}
                />

                <InputLabel label="Email Address" required />
                <InputWithIcon
                  icon={Mail}
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(value) => updateField('email', value)}
                />

                <InputLabel label="Phone Number" required />
                <InputWithIcon
                  icon={Phone}
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(value) => updateField('phone', value)}
                />

                <InputLabel label="Current Location" required />
                <InputWithIcon
                  icon={MapPin}
                  placeholder="San Francisco, CA"
                  value={form.location}
                  onChange={(value) => updateField('location', value)}
                />

                <InputLabel label="Years of Experience" required />
                <InputWithIcon
                  icon={BriefcaseBusiness}
                  placeholder="e.g., 3 years"
                  value={form.yearsOfExperience}
                  onChange={(value) => updateField('yearsOfExperience', value)}
                />
              </div>

              <h2 className="mb-7 mt-10 text-3xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Position Details
              </h2>

              <div className="space-y-5">
                <InputLabel label="Position Applying For" required />
                <select
                  value={form.position}
                  onChange={(event) => updateField('position', event.target.value)}
                  className="h-12 w-full rounded-xl border border-[#233755] bg-[#0A1830] px-4 text-sm text-[#E5E7EB] outline-none transition-all focus:border-[#2F80ED]"
                >
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>

                <InputLabel label="Portfolio / GitHub Link" optional />
                <InputWithIcon
                  icon={LinkIcon}
                  placeholder="https://github.com/yourusername"
                  value={form.portfolioUrl}
                  onChange={(value) => updateField('portfolioUrl', value)}
                />

                <InputLabel label="Cover Letter / Why you want to join" optional />
                <div className="relative">
                  <FileText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-[#6B7E9D]" />
                  <textarea
                    rows={5}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    value={form.coverLetter}
                    onChange={(event) => updateField('coverLetter', event.target.value)}
                    className="w-full rounded-xl border border-[#233755] bg-[#0A1830] px-10 py-3 text-sm text-[#E5E7EB] outline-none transition-all placeholder:text-[#6B7E9D] focus:border-[#2F80ED]"
                  />
                </div>
              </div>

              <h2 className="mb-7 mt-10 text-3xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Resume Upload
              </h2>

              <InputLabel label="Upload Your Resume" required />
              <label className="mt-3 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#2A3D5D] bg-[#0A1830] px-5 py-8 text-center transition-all hover:border-[#2F80ED]">
                <Upload className="mb-2 h-7 w-7 text-[#7AAEE8]" />
                <span className="text-base font-semibold text-[#C9DDF8]">Click to upload resume</span>
                <span className="mt-1 text-sm text-[#7F91AF]">PDF or DOC (Max 5MB)</span>
                {resumeFile ? <span className="mt-2 text-sm text-[#60A5FA]">{resumeFile.name}</span> : null}
                <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={onResumeFileChange} />
              </label>

              {submitError ? <p className="mt-4 text-sm text-[#F87171]">{submitError}</p> : null}
              {submitMessage ? <p className="mt-4 text-sm text-[#4ADE80]">{submitMessage}</p> : null}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] text-base font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                <Link
                  to="/careers"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-[#2C3C56] bg-[#1B2434] text-base font-medium text-[#E5E7EB] transition-all hover:bg-[#25334B]"
                >
                  Cancel
                </Link>
              </div>

              <p className="mt-5 text-center text-xs text-[#7F91AF]">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function InputLabel({ label, required, optional }: { label: string; required?: boolean; optional?: boolean }) {
  return (
    <p className="text-sm font-medium text-[#D2E2FA]">
      {label}
      {required ? <span className="ml-1 text-[#60A5FA]">*</span> : null}
      {optional ? <span className="ml-1 text-[#7F91AF]">(Optional)</span> : null}
    </p>
  );
}

function InputWithIcon({
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  icon: ComponentType<{ className?: string }>;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7E9D]" />
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-[#233755] bg-[#0A1830] px-10 text-sm text-[#E5E7EB] outline-none transition-all placeholder:text-[#6B7E9D] focus:border-[#2F80ED]"
      />
    </div>
  );
}
