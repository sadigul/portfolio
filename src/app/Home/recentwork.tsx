'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { memo } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

// TypeScript interface for projects
interface Project {
  title: string
  client: string
  image: string
  href: string
  bg: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'TayyariHub',
    client: 'Vinode Kumar.',
    image: '/images/TH.png',
    href: '/work/education',
    bg: 'bg-[#e4e6ec]',
    featured: true,
  },
  {
    title: '4x Hub',
    client: 'Dazzle Inc.',
    image: '/images/fxt.png',
    href: '/work/forex',
    bg: 'bg-[#e4e6ec]',
  },
  {
    title: 'Zarai Link',
    client: 'Startup',
    image: '/images/z1.png',
    href: '/work/agricultureapp',
    bg: 'bg-[#e4e6ec]',
  },
]

function RecentWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Parallax effect: subtle vertical shift of images
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <section
      id="Work"
      ref={sectionRef}
      className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20"
      aria-labelledby="recent-work-heading"
    >
      {/* Header (Centered) */}
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h2
            id="recent-work-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug max-w-3xl"
          >
            <span className="block mt-2 text-gray-400 font-normal transition-all duration-700 ease-in-out hover:text-black hover:opacity-100 opacity-80">
              Dive into the stories of successful product designs that make a difference.
            </span>
          </h2>
        </div>
        <div className="flex items-center  w-full mb-8 md:mb-12">
          <h3 className="text-md sm:text-xl md:text-xl  text-gray-600">Recent Work</h3>
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 font-medium px-5 py-2 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition"
              aria-label="View all work"
            >
              My Work <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {projects.map((project, i) => {
          const cardRef = useRef<HTMLDivElement>(null)
          const isInView = useInView(cardRef, { once: true, margin: '-50px' })

          return (
            <motion.article
              key={i}
              ref={cardRef}
              className={`group ${project.featured ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              aria-labelledby={`project-title-${i}`}
            >
              {/* Image with parallax and hover arrow */}
              <Link
                href={project.href}
                className={`relative block aspect-video rounded-3xl overflow-hidden ${project.bg} focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition will-change-transform`}
                aria-label={`View case study for ${project.title} by ${project.client}`}
              >
                <motion.div style={{ y: parallaxY }} className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} for ${project.client}`}
                    fill
                    sizes={project.featured ? '100vw' : '(max-width: 768px) 100vw, 100vw'}
                    priority={project.featured}
                    className="object-contain object-center  p-4 transition-transform duration-300 group-hover:scale-[1.01] rounded-3xl touch-none will-change-transform"
                  />
                </motion.div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-1 rounded-full pointer-events-none">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
              </Link>

              {/* Title below image */}
              <div className="mt-4">
                <p className="text-sm text-gray-500">{project.client}</p>
                <h3 id={`project-title-${i}`} className="text-base sm:text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

// Memoize to prevent unnecessary re-renders
export default memo(RecentWork)
