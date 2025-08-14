'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function FooterSection() {
  const ref = useRef<HTMLDivElement | null>(null)

  // Track scroll progress relative to the footer section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // when footer enters viewport → when it leaves
  })

  // Parallax mappings (tweak ranges to taste)
  const ySlow = useTransform(scrollYProgress, [0, 1], [40, -40])   // background glow (slow)
  const yMed  = useTransform(scrollYProgress, [0, 1], [30, -30])   // headline
  const yFast = useTransform(scrollYProgress, [0, 1], [50, -50])   // CTA / socials

  const glowScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15])
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.6])

  return (
    <footer
      ref={ref}
      className={`relative overflow-hidden bg-black text-white px-8 md:px-12 lg:px-24 py-24 ${poppins.variable}`}
    >
      {/* Parallax background glow */}
      <motion.div
        aria-hidden="true"
        style={{ y: ySlow, scale: glowScale, opacity: glowOpacity }}
        className="pointer-events-none absolute -inset-40"
      >
        <div className="h-full w-full rounded-[100%] blur-3xl"
             style={{
               background:
                 'radial-gradient(60% 60% at 50% 50%, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.25) 40%, rgba(0, 0, 0, 0) 70%)',
             }}
        />
      </motion.div>

      <div className="relative flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-4">Contact</p>

          <motion.h2
            style={{ y: yMed }}
            className="text-5xl md:text-6xl leading-tight mb-6"
          >
            Let’s start <br /> creating together
          </motion.h2>

          <motion.div style={{ y: yFast }}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-black text-md font-medium py-4 px-6 rounded-full transition hover:bg-gray-200"
            >
              Let’s talk
              <ArrowUpRight className="w-4 h-4 transform transition-transform duration-200 " />
            </Link>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          style={{ y: yFast }}
          className="grid grid-cols-2 gap-12 text-sm"
        >
          {/* Navigation (keep empty or add links later) */}
          <div className="flex flex-col gap-6 text-3xl" />

          {/* Social (updated) */}
          <div className="flex flex-col gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/sadigul295"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              LinkedIn <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sadigul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              GitHub <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/raja.saad_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              Instagram <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/+92335134562"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              WhatsApp <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom note */}
      <div className="relative mt-24 text-2xl text-gray-500">
        © {new Date().getFullYear()} Saad Hassan. Crafted with love.
      </div>
    </footer>
  )
}
