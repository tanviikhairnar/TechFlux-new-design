import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { GetProjectEstimateButton } from '../components/GetProjectEstimateButton';
const servyoImage = "https://techflux.in/public/assets/images/servyoCollage.webp"
const dinerightImage = "https://techflux.in/public/assets/images/dineright.webp"
const allstarImage = "https://techflux.in/public/assets/images/car.webp"
const fashionStoreImage = "https://techflux.in/public/assets/images/MyObscur.webp"
const fuztechImage = "https://techflux.in/public/assets/images/fuztech.webp"
const etern8Image = "https://techflux.in/public/assets/images/return8.webp"
const mobileTechImage = "https://techflux.in/public/assets/images/studionewmedia.webp"
const leaveCertificateImage = "https://techflux.in/public/assets/images/leave-serificate.webp"

type CaseStudy = {
  name: string;
  headline: string;
  description: string;
  image: string;
  tags: string[];
  categoryLabel: string;
  caseStudyUrl?: string;
  inProgress?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    name: 'Servyo',
    headline: 'Service Marketplace',
    description: 'Multi-role platform with real-time booking & subscriptions',
    image: servyoImage,
    tags: ['Flutter', 'Web App', 'Payment Gateway'],
    categoryLabel: 'Service Marketplace',
    caseStudyUrl: '/case-studies/servyo',
  },
  {
    name: 'Dine Right',
    headline: 'Hospitality',
    description: 'Premium multi-course booking experience with loyalty rewards',
    image: dinerightImage,
    tags: ['Flutter', 'React', 'Booking System'],
    categoryLabel: 'Luxury Dining',
    caseStudyUrl: '/case-studies/dine-right',
    inProgress: true,
  },
  
  {
    name: 'Allstar Premier Auto',
    headline: 'Marketplace',
    description: 'Streamlined inventory management & enhanced lead conversion',
    image: allstarImage,
    tags: ['Custom Inventory', 'Analytics', 'Lead Generation'],
    categoryLabel: 'Automotive',
    caseStudyUrl: '/case-studies/allstar-premier-auto',
  },
  {
    name: 'MyObscur',
    headline: 'eCommerce',
    description: 'Personalized fashion discovery with European brand curation',
    image: fashionStoreImage,
    tags: ['eCommerce Platform', 'Logistics', 'UX Optimization'],
    categoryLabel: 'Fashion',
    caseStudyUrl: '/case-studies/myobscur',
  },
  {
    name: 'Leave Certificate',
    headline: 'Education',
    description: 'Automated certificate management for educational institutions',
    image: leaveCertificateImage,
    tags: ['SaaS Platform', 'Digital Records', 'Role-Based Access'],
    categoryLabel: 'Education',
    caseStudyUrl: '/case-studies/leave-certificate',
  },
  {
    name: 'FuzTech',
    headline: 'On-Demand',
    description: 'Simplified repair booking with instant pricing & scheduling',
    image: fuztechImage,
    tags: ['Booking Platform', 'Real-Time Pricing', 'Localization'],
    categoryLabel: 'Repair Services',
    caseStudyUrl: '/case-studies/fuztech',
  },
  {
    name: 'Etern 8',
    headline: 'Healthcare',
    description: 'AI-powered personalized health insights from wearable data',
    image: etern8Image,
    tags: ['AI Engine', 'Smartwatch Integration', 'Health Analytics'],
    categoryLabel: 'AI Wellness',
    caseStudyUrl: '/case-studies/etern8',
  },
  {
    name: 'Studio New Media',
    headline: 'White-Label',
    description: 'White-label CMS platform with centralized hosting control',
    image: mobileTechImage,
    tags: ['PHP', 'CodeIgniter', 'Multi-Tenant'],
    categoryLabel: 'SaaS CMS',
    caseStudyUrl: '/case-studies/studio-new-media',
  },
];

export default function CaseStudies() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center"
          >
            <h1 className="mb-5 text-4xl font-bold text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Real Products. Real Results.
            </h1>
            <p className="mx-auto max-w-3xl text-base text-[#94A3B8] md:text-lg">
              Explore how Techflux builds scalable SaaS, AI, On-Demand, eCommerce, and Enterprise systems.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group overflow-hidden rounded-2xl border border-white/6 bg-[#101A31] transition-all hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.inProgress && (
                    <span className="absolute right-3 top-3 rounded-full bg-[#2F80ED] px-2.5 py-1 text-xs font-medium text-white">
                      Work In Progress
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <span className="mb-3 inline-flex rounded-full bg-[#10284D] px-3 py-1 text-xs text-[#6DB6FF]">
                    {item.categoryLabel}
                  </span>

                  <h3 className="mb-2 text-2xl font-semibold text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.name}
                  </h3>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-[#1B2942] px-2.5 py-1 text-xs text-[#9FB2CD]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-[#94A3B8]">{item.description}</p>
                  {item.caseStudyUrl ? (
                    <Link to={item.caseStudyUrl} className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F80ED] transition-colors hover:text-[#6DB6FF]">
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <button type="button" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F80ED]">
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/5 bg-[#1A2B46] px-8 py-12 text-center md:px-12"
            >
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Create Your Success Story?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-[#94A3B8]">
                Let&apos;s discuss your project and explore how we can help you achieve similar results.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white"
                >
                  Book Strategy Call
                </Link>
                <GetProjectEstimateButton className="rounded-xl border border-[#2F80ED] bg-[#2A3E5D] px-8 py-3 text-sm font-semibold text-[#E5E7EB] hover:bg-[#334b70]" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}




