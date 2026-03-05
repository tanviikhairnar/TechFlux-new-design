import { Building2, Globe, MapPin, Phone } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CareerRoleOverview } from '../components/careers/CareerRoleOverview';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { getCareerRoleBySlug } from '../data/careers';

export default function CareerDetails() {
  const { slug = '' } = useParams();
  const role = getCareerRoleBySlug(slug);

  if (!role) return <Navigate to="/careers" replace />;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.16),transparent_42%)]" />
        <section className="relative z-10 bg-[#0A152B]">
          <div className="mx-auto w-full max-w-[1260px] px-4 pb-6 pt-28 lg:px-5">
            <div className="rounded-2xl border border-[#23406A] bg-[#11213B] px-5 py-4 text-[#D4E3F8] md:px-6">
              <p className="text-sm font-medium md:text-base">
                We Are Hiring - Techflux Solutions | Nashik (Work From Office)
              </p>
            </div>
          </div>
        </section>
        <CareerRoleOverview role={role} showBackLink />

        <section className="mx-auto w-full max-w-[1260px] px-4 pb-20 lg:px-5">
          <div className="mb-8 rounded-3xl border border-white/8 bg-[#12213C] p-7 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Hiring Details
            </h2>
            <div className="grid gap-3 text-sm text-[#9AB0CF] md:grid-cols-2 md:text-base">
              <p className="inline-flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#2F80ED]" />
                Company: Techflux Solutions
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#2F80ED]" />
                Location: Nashik
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#2F80ED]" />
                HR Contact: (+91) 9096698947
              </p>
              <p className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#2F80ED]" />
                Website: Techflux Solutions
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/8 bg-[#12213C] p-10 text-center md:p-14">
            <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB] md:text-[50px]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Ready to Apply?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-[#9AB0CF] md:text-lg">
              Join Techflux Solutions and contribute to impactful software products from our Nashik office.
            </p>
            <Link
              to={`/careers/apply?position=${encodeURIComponent(role.title)}`}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-9 text-base font-semibold text-white shadow-[0_10px_28px_rgba(47,128,237,0.35)] transition-all duration-300 hover:brightness-110"
            >
              Apply for This Position
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
