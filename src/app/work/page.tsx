'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from './[slug]/page'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { MouseEvent } from 'react'
import FooterSection from '../Home/footer'

// Helper to decide layout: full row for Website projects
const isWebsiteProject = (services: string[]) =>
  services.some(s => /website/i.test(s))

function HoverParallaxImage({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  // motion values for subtle parallax
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 180, damping: 20 })
  const y = useSpring(my, { stiffness: 180, damping: 20 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5 // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(px * 20)
    my.set(py * 12)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative block aspect-video rounded-3xl overflow-hidden ring-1 ring-gray-200"
      style={{
        willChange: 'transform',
        backgroundColor: '#e4e6ec', // ✅ Set custom background color here
      }}
    >
      <motion.div
        style={{ x, y }}
        className="relative w-full h-full"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 100vw"
          priority={false}
        />
      </motion.div>
    </div>
  )
}

export default function WorkPage() {
  return (
    <div>
      <main className="px-4 sm:px-6 md:px-12 lg:px-24 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl">All Work</h1>
          <span className="text-sm text-gray-500">{PROJECTS.length} projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => {
            const fullRow = isWebsiteProject(project.services)
            return (
              <article
                key={`${project.slug}-${project.image}`}
                className={fullRow ? 'md:col-span-2' : 'md:col-span-1'}
              >
                <Link
                  href={`/work/${project.slug}`}
                  aria-label={`Open ${project.title} case study`}
                >
                  <HoverParallaxImage src={project.image} alt={project.title} />
                </Link>

                <div className="mt-3">
                  <p className="text-xs sm:text-sm text-gray-500">{project.client}</p>
                  <div className="mt-1 flex items-center gap-1">
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-lg font-semibold text-gray-900 hover:underline"
                    >
                      {project.title}
                    </Link>
                    <ArrowUpRight size={16} className="text-gray-700" />
                  </div>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-1">
                    {project.summary}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
