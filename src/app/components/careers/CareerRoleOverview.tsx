import { motion } from 'motion/react';
import { ArrowLeft, BriefcaseBusiness, CheckCircle2, Clock3, MapPin, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CareerRole } from '../../data/careers';

export function CareerRoleOverview({ role, showBackLink = false }: { role: CareerRole; showBackLink?: boolean }) {
  return (
    <>
      <section className="relative z-10 border-b border-white/5 bg-[#09152B]/80">
        <div className="mx-auto w-full max-w-[1260px] px-4 pb-14 pt-28 md:pt-32 lg:px-5">
          {showBackLink ? (
            <Link
              to="/careers"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#60A5FA] transition-colors hover:text-[#93C5FD]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Careers
            </Link>
          ) : null}
          <h1 className="mb-4 text-4xl font-bold text-[#E5E7EB] md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
            {role.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#9AB0CF] md:text-base">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#2F80ED]" />
              {role.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#2F80ED]" />
              {role.experience}
            </span>
            <span className="inline-flex items-center gap-2">
              <Monitor className="h-4 w-4 text-[#2F80ED]" />
              {role.mode}
            </span>
            <span className="inline-flex items-center gap-2">
              <BriefcaseBusiness className="h-4 w-4 text-[#2F80ED]" />
              {role.department}
            </span>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 py-14 md:py-20 lg:px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <RoleList title="About the Role" items={[role.summary, role.localPreference ?? 'Work From Office - Nashik']} />
            <RoleList title="Key Skills" items={role.skills} />
            <RoleList title="Responsibilities" items={role.responsibilities} />
            <RoleList title="Required Skills" items={role.requiredSkills} />
            <RoleList title="Nice to Have" items={role.niceToHave} />
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-3xl border border-white/8 bg-[#0E1A30]/95 p-7 lg:sticky lg:top-28"
          >
            <h3 className="mb-3 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Interested in this role?
            </h3>
            <p className="mb-6 text-sm text-[#8FA5C7]">
              Submit your application and our HR team will contact you within 2-3 business days.
            </p>
            <a
              href="#apply-form"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] text-base font-semibold text-white shadow-[0_10px_28px_rgba(47,128,237,0.35)] transition-all duration-300 hover:brightness-110"
            >
              Apply Now
            </a>
          </motion.aside>
        </div>
      </section>
    </>
  );
}

function RoleList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mb-12 last:mb-0">
      <h2 className="mb-5 text-3xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[#9AB0CF]">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2F80ED]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
