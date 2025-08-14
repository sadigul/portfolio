'use client'

import { ArrowUpRight, Github, Linkedin, Instagram } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import clsx from 'clsx'
import emailjs from '@emailjs/browser'
import FooterSection from '../Home/footer'

// 🔧 EmailJS config (from your screenshots)
const EMAILJS_PUBLIC_KEY = 'ZoePAb4uiaqOBUXnq'            // <-- put your real PUBLIC KEY here
const EMAILJS_SERVICE_ID = 'service_ckse2yq'            // Gmail (default)
const EMAILJS_TEMPLATE_ID = 'template_dj26wpb'          // "Contact Us" template

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

type FormState = {
  name: string
  email: string
  purpose: string
  message: string
  website?: string // honeypot
}

const PURPOSES = ['Project Inquiry', 'Collaboration', 'Hiring', 'Support', 'Other'] as const
const MESSAGE_LIMIT = 800

export default function ContactUs() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    purpose: '',
    message: '',
    website: '', // honeypot
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  // Initialize EmailJS once on mount
  useEffect(() => {
    if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') return
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((s) => ({ ...s, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((err) => ({ ...err, [name]: undefined }))
    }
  }

  const validate = (data: FormState) => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!data.name.trim()) next.name = 'Please enter your name.'
    if (!data.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'Enter a valid email.'
    if (!data.purpose.trim()) next.purpose = 'Pick a purpose.'
    if (!data.message.trim()) next.message = 'Say hello with a short message.'
    if (data.message.length > MESSAGE_LIMIT) next.message = `Keep it under ${MESSAGE_LIMIT} characters.`
    // Honeypot: if filled, silently block
    if (data.website && data.website.trim().length > 0) next.website = 'Bot detected.'
    return next
  }

  const handleQuickPurpose = (p: string) => {
    setFormData((s) => ({ ...s, purpose: p }))
    if (errors.purpose) setErrors((e) => ({ ...e, purpose: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate(formData)
    if (Object.values(v).filter(Boolean).length) {
      setErrors(v)
      return
    }

    // Honeypot: pretend success but do nothing
    if (formData.website && formData.website.trim().length > 0) {
      setSent(true)
      return
    }

    setSubmitting(true)
    setSent(false)

    try {
      if (
        !EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID ||
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
      ) {
        throw new Error('EmailJS keys are not configured.')
      }

      // Map your fields -> EmailJS template variables
      const templateParams = {
        // used in Subject: "Contact Us: {{title}}"
        title: formData.purpose || 'General',

        // body content variables you showed in the template
        name: formData.name,
        time: new Date().toLocaleString(),   // {{time}}
        message: formData.message,

        // “Reply To” field in your template uses {{email}}
        email: formData.email,
      }

      const resp = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      if (resp.status >= 200 && resp.status < 300) {
        setSent(true)
        setFormData({ name: '', email: '', purpose: '', message: '', website: '' })
      } else {
        throw new Error('Failed to send email.')
      }
    } catch (err) {
      console.error(err)
      alert('Could not send your message right now. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const remaining = Math.max(0, MESSAGE_LIMIT - formData.message.length)

  return (
    <div>
    <section className={clsx('bg-white px-4 md:px-8 lg:px-16 py-12', poppins.variable)}>
      <div className="mx-auto max-w-5xl">
        {/* Header + Socials */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl ">Get in Touch</h1>
            <p className="mt-2 text-base md:text-lg text-gray-600">
              Reach out to learn more about my work and how I can help you with your projects.
            </p>
          </div>

        
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Contact Details */}
          <div className="relative rounded-2xl  bg-white/70 p-6 shadow-sm backdrop-blur">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-2xl [background:linear-gradient(110deg,rgba(0,0,0,0.06),rgba(0,0,0,0)_40%,rgba(0,0,0,0.06))]"
            />
            <p className="text-sm md:text-base text-gray-400 mb-4">Contact Me</p>
            <div className="space-y-5">
              <div>
                <p className="text-xs md:text-sm text-gray-500">Email</p>
                <a
                  href="mailto:sadigulx05@gmail.com"
                  className="group block text-lg md:text-xl font-medium hover:underline flex items-center gap-2"
                >
                  sadigulx05@gmail.com
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                </a>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500">WhatsApp</p>
                <a
                  href="https://wa.me/+92335134562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block text-lg md:text-xl font-medium hover:underline flex items-center gap-2"
                >
                  +92 335 134 562
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                </a>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500">Address</p>
                <p className="text-lg md:text-xl font-medium">
                  123 Tech Lane, Unit 5
                  <br />
                  Lahore, Pakistan
                </p>
              </div>
            </div>
  {/* Socials with icons */}
          <div className="flex items-center mt-5 gap-3">
            <a
              href="https://github.com/saadhassan"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm md:text-base hover:border-black hover:bg-black hover:text-white transition"
            >
              <Github className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/saad-hassan"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm md:text-base  hover:bg-blue-500 hover:text-white transition"
            >
              <Linkedin className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm md:text-base  hover:bg-orange-500 hover:text-white transition"
            >
              <Instagram className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Instagram
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          </div>

          {/* Right: Form */}
          <div className="relative rounded-2xl  bg-white p-6 shadow-sm">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-2xl [background:linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0))]"
            />
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm md:text-base text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={clsx(
                    'w-full p-3 text-base md:text-lg border rounded-lg focus:outline-none focus:ring-2',
                    errors.name ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-black'
                  )}
                  placeholder="Your Name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm md:text-base text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={clsx(
                    'w-full p-3 text-base md:text-lg border rounded-lg focus:outline-none focus:ring-2',
                    errors.email ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-black'
                  )}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="purpose" className="block text-sm md:text-base text-gray-700 mb-2">
                  Purpose
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className={clsx(
                    'w-full p-3 text-base md:text-lg border rounded-lg focus:outline-none focus:ring-2 bg-white',
                    errors.purpose ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-black'
                  )}
                  aria-invalid={Boolean(errors.purpose)}
                  aria-describedby={errors.purpose ? 'purpose-error' : undefined}
                >
                  <option value="" disabled>
                    Select a purpose
                  </option>
                  {PURPOSES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {errors.purpose && (
                  <p id="purpose-error" className="mt-1 text-sm text-red-600">
                    {errors.purpose}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm md:text-base text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={clsx(
                    'w-full p-3 text-base md:text-lg border rounded-lg focus:outline-none focus:ring-2 h-28 resize-none',
                    errors.message ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-black'
                  )}
                  placeholder="Tell me a bit about your project, scope, timeline, and goals…"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : 'message-help'}
                  maxLength={MESSAGE_LIMIT}
                />
                <div className="mt-1 flex items-center justify-between">
                  {errors.message ? (
                    <p id="message-error" className="text-sm text-red-600">
                      {errors.message}
                    </p>
                  ) : (
                    <p id="message-help" className="text-sm text-gray-500">
                      I usually reply within 24 hours.
                    </p>
                  )}
                  <span className={clsx('text-xs', remaining < 60 ? 'text-amber-600' : 'text-gray-400')}>
                    {remaining} left
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={clsx(
                  'w-full md:w-auto px-6 py-3 rounded-lg font-semibold transition-colors',
                  'bg-black text-white hover:bg-gray-800',
                  submitting && 'opacity-70 cursor-not-allowed'
                )}
              >
                {submitting ? 'Sending…' : sent ? 'Sent!' : 'Send'}
              </button>

              {/* Optional: alt contact */}
              <div className="pt-3 text-sm text-gray-500">
                Prefer email?{' '}
                <a href="mailto:sadigulx05@gmail.com" className="underline">
                  sadigulx05@gmail.com
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
      <FooterSection/>
      </div>
  )
}
