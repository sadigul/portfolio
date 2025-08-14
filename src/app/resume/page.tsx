'use client'

import Link from 'next/link'
import { Download, ExternalLink } from 'lucide-react'
import FooterSection from '../Home/footer'

export default function ResumePage() {
  const skills = {
    Languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python'],
    'UI/UX Design': ['Figma', 'Tailwind CSS', 'Material UI', 'Responsive & Mobile-first'],
    'Frameworks & Libs': ['React Native', 'React.js', 'Next.js', 'Node.js', 'Express.js'],
    Databases: ['Firebase (Firestore, Realtime DB)', 'MongoDB', 'PostgreSQL'],
    'Dev Tools': ['Git', 'GitHub', 'Docker', 'Firebase Console'],
    'State Management': ['Redux', 'Context API', 'Zustand'],
    'Backend & APIs': ['REST APIs', 'Firebase Functions', 'JWT', 'OAuth2'],
    'Cloud & Deploy': ['Firebase Hosting', 'Vercel', 'Railway', 'Google Play Console'],
    Other: ['CI/CD (GitHub Actions)', 'Performance Optimization'],
  }

  const experience = [
    {
      role: 'React Native Developer',
      company: 'PrimeOTP — Dubai, UAE',
      period: 'Feb 2024 – Feb 2025',
      points: [
        'Built a forex analytics app with broker reviews, fraud alerts, and live trading insights.',
        'Focused on mobile-first UX, app optimization, and scalable architecture.',
        'Integrated third-party APIs for live data + notifications to improve trader responsiveness.',
      ],
    },
    {
      role: 'Founder & Full-Stack Mobile Developer',
      company: 'Zarai Link — Faisalabad, Pakistan',
      period: 'May 2022 – Present',
      points: [
        'Launched an AI-powered agri-marketplace connecting growers and suppliers (Android).',
        'Real-time market rates, escrow-style protection, delivery statuses & notifications.',
        'Led UX, engineering, and go-to-market; incubated at NIC Faisalabad.',
      ],
    },
    {
      role: 'Full-Stack Web Developer',
      company: 'BitLogia Digital — Faisalabad, Pakistan',
      period: 'Jul 2022 – Jul 2023',
      points: [
        'Built CRM tools with automated pipelines, lead scoring, and outreach integrations.',
        'AI-driven e-commerce modules for recommendations, dynamic pricing, segmentation.',
      ],
    },
  ]

  const education = [
    {
      title: 'BS Software Engineering',
      school: 'National University of Modern Languages',
      meta: 'CGPA 3.24 — Sep 2021 – Sep 2025',
    },
  ]

  const certificates = [
    { title: 'Version Control — Meta', date: 'Nov 2024' },
    { title: 'UI/UX Design Specialization — CalArts', date: 'Feb 2024' },
    { title: 'Crash Course on Python — Google', date: 'Oct 2023' },
    { title: 'Design Thinking for Innovation — UVA Darden', date: 'Sep 2023' },
  ]

  const sideProjects = [
    {
      title: 'LinkedIn Message Automation',
      blurb: 'Auto-sending proposals to recent connections with dynamic frequency.',
    },
    {
      title: 'Customized AI Chatbots',
      blurb: 'Chatbots for startups and e-commerce companies.',
    },
    {
      title: 'Tayyarihub.com',
      blurb: 'Custom quiz builder website for MDCAT, ECAT, LAT exam prep.',
    },
  ]

  return (
    <div>
    <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 py-10 text-gray-900">
      {/* Header / Actions */}
      <section className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-gray-200 pb-8">
        <div>
          <h1 className="text-4xl sm:text-5xl  tracking-tight">Saad Hassan</h1>
          <p className="mt-2 text-lg text-gray-600">
            Founder of Zarai Link · React Native & Full-Stack Web Developer
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <Link
              href="https://linkedin.com/in/saadhassan295/"
              target="_blank"
              className="inline-flex items-center gap-1 hover:text-gray-900"
            >
              LinkedIn <ExternalLink size={14} />
            </Link>
            <span className="select-none">·</span>
            <a href="mailto:sadigulx05@gmail.com" className="hover:text-gray-900">
              sadigulx05@gmail.com
            </a>
            <span className="select-none">·</span>
            <Link
              href="https://github.com/sadigul"
              target="_blank"
              className="inline-flex items-center gap-1 hover:text-gray-900"
            >
              GitHub <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        {/* Download CV only (no print) */}
        <div className="flex">
          {/* Place your file at /public/downloads/Saad_Resume.pdf */}
          <a
            href="/download/Saad_CV.pdf"
            download="Saad_Hassan_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-blue-900 text-white px-5 py-2 text-sm font-semibold hover:opacity-90"
            aria-label="Download Saad Hassan Resume (PDF)"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="mt-10">
        <h2 className="text-2xl ">Profile Summary</h2>
        <p className="mt-3 text-[17px] leading-8 text-gray-700">
          React Native and Full-Stack Web Developer with 4+ years of experience building scalable
          cross-platform applications. Founder of Zarai Link, with proven success in leading product
          development, user-centric design, and deployment of production-ready mobile and web apps.
          Proficient in React Native, Next.js, Firebase, and modern workflows, with a focus on UX
          and performance optimization.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="text-2xl ">Skills</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {list.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-10">
        <h2 className="text-2xl ">Work Experience</h2>
        <div className="mt-6 space-y-6">
          {experience.map((job) => (
            <article
              key={job.role + job.company}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {job.role}{' '}
                  <span className="text-gray-500 font-normal">— {job.company}</span>
                </h3>
                <p className="text-sm text-gray-500">{job.period}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1.5">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-10">
        <h2 className="text-2xl ">Education</h2>
        <div className="mt-6 grid gap-4">
          {education.map((ed) => (
            <div key={ed.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">{ed.title}</h3>
              <p className="text-gray-600">{ed.school}</p>
              <p className="text-sm text-gray-500 mt-1">{ed.meta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates & Awards */}
      <section className="mt-10">
        <h2 className="text-2xl ">Certificates & Awards</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c) => (
            <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-gray-500">{c.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Side Projects */}
      <section className="mt-10 mb-16">
        <h2 className="text-2xl ">Side Projects</h2>
        <div className="mt-6 grid gap-4">
          {sideProjects.map((sp) => (
            <div key={sp.title} className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-medium">{sp.title}</p>
              <p className="text-gray-700">{sp.blurb}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
      <FooterSection/>
    </div>
  )
}
