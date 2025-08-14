'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Partners from './Partners'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId: number

    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Water wave effect
    const waves = {
      centerX: 0,
      centerY: 0,
      amplitude: window.innerWidth <= 768 ? 10 : 20, // Smaller amplitude on mobile
      frequency: 0.02,
      phase: 0,
      maxRadius: window.innerWidth <= 768 ? 150 : 300, // Smaller radius on mobile
      currentRadius: 0,
      speed: window.innerWidth <= 768 ? 1 : 2, // Slower speed on mobile
      opacity: 1,
      active: true,
    }

    const drawWaterWaves = () => {
      if (!ctx || !waves.active) return
      ctx.save()
      ctx.beginPath()
      ctx.arc(waves.centerX, waves.centerY, waves.currentRadius, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(100, 150, 255, ${waves.opacity})`
      ctx.lineWidth = window.innerWidth <= 768 ? 1 : 2 // Thinner line on mobile
      ctx.stroke()

      // Additional ripple for depth (only on larger screens)
      if (waves.currentRadius > 50 && !isMobile) {
        ctx.beginPath()
        ctx.arc(waves.centerX, waves.centerY, waves.currentRadius - 50, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(100, 150, 255, ${waves.opacity * 0.5})`
        ctx.stroke()
      }

      waves.currentRadius += waves.speed
      waves.opacity = 1 - waves.currentRadius / waves.maxRadius
      if (waves.currentRadius >= waves.maxRadius) {
        waves.active = false
      }
      ctx.restore()
    }

    // Initialize wave position
    waves.centerX = canvas.width / 2
    waves.centerY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePos({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawWaterWaves()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile])

  // Animation variants for hero elements
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  }

  // Parallax effect: Calculate transform based on mouse position (disabled on mobile)
  const parallaxOffset = isMobile
    ? { x: 0, y: 0 }
    : {
        x: -(mousePos.x - window.innerWidth / 2) / 50,
        y: -(mousePos.y - window.innerHeight / 2) / 50,
      }

  return (
    <main className={`relative min-h-screen bg-white overflow-hidden ${poppins.variable}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />
      <section
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-12 lg:px-24 mt-8"
        style={{
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
        }}
      >
        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-3"
        >
          Founder & Software Engineer
        </motion.p>
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-gray-900 leading-tight tracking-tight max-w-4xl"
        >
          Developing Shit That <span className="text-blue-600">Win ❤️</span>
          <br />
          Since 2021
        </motion.h1>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-6 sm:mt-8 md:mt-12 flex gap-4"
        >
          <Link
            href="/work"
            className="inline-block bg-transparent text-blue-600 border-2 border-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium rounded-full transition-transform hover:scale-105 hover:bg-blue-50"
          >
            Explore Work
          </Link>

          {/* <Partners/> */}
        </motion.div>
      </section>

    </main>
  )
}