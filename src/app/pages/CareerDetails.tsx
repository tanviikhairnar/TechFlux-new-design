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
        <CareerRoleOverview role={role} showBackLink />

        <section className="mx-auto w-full max-w-[1260px] px-4 pb-20 lg:px-5">
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
