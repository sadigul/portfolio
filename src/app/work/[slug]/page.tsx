import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowLeft, ExternalLink } from 'lucide-react'
import FooterSection from '@/app/Home/footer'

// ---------------------------
// Types + DATA (kept HERE)
// ---------------------------
export type Category = 'AgriTech' | 'Education' |  'Fitness' | 'Forex' | 'AI Chatbot' | "E-Commerce"

export type Project = {
  slug: 'fintech' | 'forex' | 'healthcare' |'agricultureapp' |'agriculture' | 'education' |'ecommerce'
  title: string
  client: string
  image: string
  bg: string
  summary: string
  year: string
  timeline: string
  services: string[]
  liveUrl?: string
  featured?: boolean
  challenges: string
  solutions: string
  results: { value: string; label: string }[]
  category: Category
  tags: string[]
  testimonial?: {
    quote: string
    author: string
    role?: string
    avatar?: string
  }
}

export const PROJECTS: Project[] = [
  {
  slug: 'education',
  title: 'TayyariHub',
  client: 'Vinode Kumar',
  image: '/images/TH.png',
  bg: 'bg-[#e4e6ec]',
  summary:
    'TayyariHub is a modern platform helping students prepare for MDCAT, LAT, ECAT, and other competitive entry tests in Pakistan. It offers a unified “Learn → Pay → Track” experience with high performance, accessibility, and secure payments.',
  year: '2025',
  timeline: '1 Month',
  services: ['Website', 'Branding'],
  liveUrl: 'https://tayyarihub.com',
  featured: true,
  challenges:
    'Fragmented learning and payment flow; low trust in online fee payments; poor mobile performance for low-bandwidth users; lack of accessible design for diverse learners.',
  solutions:
    'Developed a Next.js + Firebase-powered unified platform integrating preparation content, secure Stripe payments, and real-time progress tracking; implemented transparent payment states; optimized performance with lazy-loading, caching, and lightweight components; added accessibility features like high-contrast mode, screen reader support, and scalable text; redesigned branding for trust and motivation.',
  results: [
    { value: '15000+', label: 'Course enrollments' },
    { value: '2x', label: 'Longer study sessions per user' },
    { value: '2400 $', label: 'Revenue genrated within 2 Months' },
  ],
  category: 'Education',
  tags: [
    'Next.js',
    'Tailwind',
    'Stripe',
    'CMS',
    'Accessibility',
    'Firebase'
  ],
  testimonial: {
    quote:
      'Working with the team was smooth end-to-end. We now have a platform that truly matches our vision of empowering students to succeed in entry tests.',
    author: 'Vinode Kumar',
    role: 'Founder, TayyariHub',
    // avatar: '/images/avatar-vinode.jpg'
  },
}
,
{
  slug: 'forex',
  title: '4x Hub',
  client: 'Prime OTP',
  image: '/images/fxt.png',
  bg: 'bg-[#e4e6ec]',
  summary:
    '4x Hub is a Forex-focused mobile platform providing live market data, broker reviews, and trading signals in one intuitive dashboard — designed for clarity, speed, and trader confidence.',
  year: '2024',
  timeline: '10 Weeks',
  services: ['Mobile App'],
  challenges:
    'First-time users faced information overload with complex Forex data, and the app had an inconsistent visual language across widgets and broker review sections.',
  solutions:
    'Created a modular card-based dashboard with real-time Forex market data, broker rating modules, and trading signals; added a compare mode for brokers; applied accessible color semantics for different market states; implemented keyboard navigation for power users.',
  results: [
    { value: '3200 +', label: 'Broker Registered' },
    { value: '18 +', label: 'Services' },
    { value: '15000 +', label: 'Users Onboarding' },
  ],
  category: 'Forex',
  tags: [
   
    'Forex Charts',
    'Design System',
    'Broker Reviews',
    'Market Data','Firebase','React Native'
  ],
  testimonial: {
    quote:
      'Clear, confident UI. Our users found what they needed faster — and we shipped new features with less rework.',
    author: 'Qasim Amjad',
    role: 'Product Lead',
  },
}
,
{
  slug: 'healthcare',
  title: 'Pump House',
  client: 'Startup',
  image: '/images/ft.png',
  bg: 'bg-[#e4e6ec]',
  summary:
    'Pump House is a fitness and wellness platform designed specifically for women — offering guided workouts, nutrition plans, progress tracking, and a supportive community in one place.',
  year: '2024',
  timeline: '12 Weeks',
  services: ['Mobile App'],
  challenges:
    'Limited tailored fitness resources for women; lack of trust in workout credibility; difficulty tracking consistent progress; low engagement in existing fitness communities.',
  solutions:
    'Developed a personalized workout library designed for female fitness goals; integrated progress tracking and achievement badges; added secure in-app messaging and community groups; implemented push notifications for workout reminders and nutrition tips.',
  results: [
    { value: '+27%', label: 'Repeat workout sessions' },
    { value: '-45%', label: 'Drop-off rate' },
    { value: '95%', label: 'Workout plan adherence' },
  ],
  category: 'Fitness',
  tags: [
    'Fitness App',
    'Women Wellness',
    'Progress Tracking',
    'Notifications',
    'Community'
  ],
  testimonial: {
    quote:
      'We went from generic workout plans to a platform women actually love and stick with.',
    author: 'Emma Nicole',
    role: 'Founder',
  },
}
,
  // The following entries reuse the same slug "healthcare" (all will open the same details page).
  // Keep if intentional; otherwise give each a unique slug.
{
  slug: 'agriculture',
  title: 'Zarai Link',
  client: 'Startup',
  image: '/images/fw.png',
  bg: 'bg-[#e4e6ec]',
  summary:
    'Zarai Link is a digital agri-commerce platform that connects farmers, input suppliers, and buyers — enabling transparent pricing, reliable logistics, and a direct path to market.',
  year: '2024',
  timeline: '12 Weeks',
  services: ['Website'],
  challenges:
    'Fragmented supply chain between farmers and agri-suppliers; lack of price transparency; manual, error-prone ordering; limited visibility on order status and delivery timelines.',
  solutions:
    'Developed an easy-to-use web platform with farmer and supplier portals; integrated secure payment escrow; implemented product ratings and reviews; added guided checkout with validation; built live delivery tracking and SMS/WhatsApp alerts.',
  results: [
    { value: '3000 +', label: 'Farmers Onboarding' },
    { value: '4', label: 'Sponsorhips' },
    { value: '94%', label: 'Quality Grading Accuracy' },
  ],
  category: 'AgriTech',
  tags: [
    'Marketplace',
    'Supplier Portal',
    'Tracking',
    'Escrow Payments',
    'Logistics',
    'Farmer Network'
  ],
  testimonial: {
    quote:
      'Before Zarai Link, selling our crops was full of delays and confusion. Now we get fair prices, on-time payments, and can track deliveries right from our phone.',
    author: 'Hassan Raza',
    role: 'Farmer, Zarai Link',
  },
}
,
  {
    slug: 'agricultureapp',
    title: 'Zarai Link',
    client: 'Startup',
    image: '/images/z1.png',
    bg: 'bg-[#e4e6ec]',
    summary:
    'Zarai Link is a digital agri-commerce platform that connects farmers, input suppliers, and buyers — enabling transparent pricing, reliable logistics, and a direct path to market.',
  year: '2024',
  timeline: '3 Months',
    services: ['Product UI','Mobile App'],
   challenges:
    'Fragmented supply chain between farmers and agri-suppliers; lack of price transparency; manual, error-prone ordering; limited visibility on order status and delivery timelines.',
  solutions:
    'Developed an easy-to-use  platform with farmer and supplier portals; integrated secure payment escrow; implemented product ratings and reviews; added guided checkout with validation; built live delivery tracking and SMS/WhatsApp alerts.',
  results: [
    { value: '3000 +', label: 'Farmers Onboarding' },
    { value: '4', label: 'Sponsorhips' },
    { value: '94%', label: 'Quality Grading Accuracy' },
  ],
  category: 'AgriTech',
    tags: ['Mobile-first', 'Marketplace', 'Artifical Intelligence'],
    testimonial: {
      quote:       'Before Zarai Link, selling our crops was full of delays and confusion. Now we get fair prices, on-time payments, and can track deliveries right from our phone.',

      author: 'Hassan Raza',
      role: 'Farmer, Zarai Link',
    },
  },
{
  slug: 'ecommerce',
  title: 'StyleLink',
  client: 'Startup',
  image: '/images/E1.png',
  bg: 'bg-[#e4e6ec]',
  summary:
    'StyleLink is a modern e-commerce mobile app for discovering, purchasing, and tracking fashion items — offering a seamless shopping experience with transparent order statuses and fast delivery.',
  year: '2024',
  timeline: '12 Weeks',
  services: ['Product UI','Mobile App'],
  challenges:
    'Fragmented mobile shopping experience; lack of trust in product quality; slow and unclear delivery updates; manual order management prone to errors.',
  solutions:
    'Designed a clean, mobile-first UI with intuitive product discovery and secure checkout; integrated ratings & reviews for credibility; added real-time order tracking with delivery statuses and push notifications; improved checkout flow with guided validation to reduce errors.',
  results: [
    { value: '+27%', label: 'Repeat purchases' },
    { value: '-45%', label: 'Cart abandonment' },
    { value: '95%', label: 'On-time deliveries' },
  ],
  category: 'E-Commerce',
  tags: ['Fashion', 'Order Tracking', 'Notifications', 'Mobile App', 'UI/UX'],
  testimonial: {
    quote:
      'Now I can browse styles, place an order, and track it to my door — all in one app.',
    author: 'Sana Malik',
    role: 'Customer',
  },
}

]

// helper
const bySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug)

// ---------------------------
// PAGE
// ---------------------------
export default function Page({ params }: { params: { slug: string } }) {
  const project = bySlug(params.slug)

  if (!project) {
    return (
      <main className="px-6 py-12">
        <div className="text-sm text-gray-600 mb-4">
          <Link href="/work" className="hover:underline">← Back to all work</Link>
        </div>
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="text-gray-600">Check the URL or pick a case study from the Work page.</p>
      </main>
    )
  }

  return (
    <div>
    <main className="min-h-screen bg-white text-gray-900">
      {/* Breadcrumbs */}
      <div className="w-full border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 py-3 text-sm text-gray-600 flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight size={16} />
          <Link href="/work" className="hover:text-gray-900">Work</Link>
          <ChevronRight size={16} />
          <span className="text-gray-900">{project.title}</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Title + summary */}
          <div className="lg:col-span-7">
            <h1 className="text-[56px] leading-[0.95]  tracking-tight sm:text-[72px] md:text-[96px]">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">{project.summary}</p>
          </div>

          {/* Meta */}
          <div className="lg:col-span-5 lg:pl-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <dt className="text-gray-400 uppercase tracking-widest">(YEAR)</dt>
                <dd className="mt-1 text-lg text-gray-900">{project.year}</dd>
              </div>
              <div>
                <dt className="text-gray-400 uppercase tracking-widest">(TIMELINE)</dt>
                <dd className="mt-1 text-lg text-gray-900">{project.timeline}</dd>
              </div>

              <div>
                <dt className="text-gray-400 uppercase tracking-widest">(CATEGORY)</dt>
                <dd className="mt-1 text-lg text-gray-900">{project.category}</dd>
              </div>

              <div>
                <dt className="text-gray-400 uppercase tracking-widest">(SERVICES)</dt>
                <dd className="mt-1 text-lg text-gray-900 flex flex-wrap gap-2">
                  {project.services.map((s, i) => (
                    <span key={i} className="inline-flex items-center gap-2">
                      {s}
                      {i < project.services.length - 1 && <span className="text-orange-600">•</span>}
                    </span>
                  ))}
                </dd>
              </div>

              <div className="col-span-2">
                <dt className="text-gray-400 uppercase tracking-widest">(TAGS)</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700"
                    >
                      #{t}
                    </span>
                  ))}
                </dd>
              </div>

              {project.liveUrl && (
                <div className="col-span-2">
                  <Link href={project.liveUrl} target="_blank" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-lg">
                    Live Website <ExternalLink size={16} />
                  </Link>
                </div>
              )}
            </dl>
          </div>
        </div>

        {/* Hero image */}
        <div className={`mt-10 relative w-full aspect-[16/9] rounded-3xl overflow-hidden ring-1 ring-gray-200 ${project.bg}`}>
          <Image src={project.image} alt={project.title} fill className="object-contain" />
        </div>
      </section>

      {/* Challenges */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <h2 className="md:col-span-4 text-3xl font-semibold text-gray-800">
            Challenges<span className="text-orange-600">.</span>
          </h2>
          <p className="md:col-span-8 text-xl leading-relaxed text-gray-700">{project.challenges}</p>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <h2 className="md:col-span-4 text-3xl font-semibold text-gray-800">
            Solutions<span className="text-orange-600">.</span>
          </h2>
          <p className="md:col-span-8 text-xl leading-relaxed text-gray-700">{project.solutions}</p>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Results<span className="text-orange-600">.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {project.results.map((r, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-50 ring-1 ring-gray-200 text-center">
              <p className="text-6xl font-extrabold tracking-tight text-gray-900">{r.value}</p>
              <p className="mt-2 text-sm text-gray-600">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial (optional) */}
      {project.testimonial && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 pb-24">
          <blockquote className="rounded-3xl bg-gray-50 ring-1 ring-gray-200 p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-medium leading-tight text-gray-900">
              “{project.testimonial.quote}”
            </p>
            <div className="mt-6">
              <p className="font-semibold text-gray-900">{project.testimonial.author}</p>
              {project.testimonial.role && (
                <p className="text-sm text-gray-600">{project.testimonial.role}</p>
              )}
            </div>
          </blockquote>
        </section>
      )}

      {/* Back link
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 pb-20">
        <Link href="/work" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
          <ArrowLeft size={18} /> Back to all work
        </Link>
      </div> */}
    </main>
     <FooterSection/>
        </div>
  )
}
