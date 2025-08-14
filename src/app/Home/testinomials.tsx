'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Mario Baskoro',
    role: 'CTO of Arjuna',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'We expected a developer — what we got was a true product partner. From backend architecture to UX polish, everything felt intentional and precise.',
  },
  {
    name: 'Evelyn Widjaja',
    role: 'Marketing Lead at PrimOTP',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'Working with a solo engineer who actually understands both product and people was a refreshing change. Communication was clear, and execution was flawless.',
  },
  {
    name: 'Karina Wulandari',
    role: 'Founder at TayyaiHub',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote:
      'I’ve worked with teams before, but the focus and speed I got here felt like an in-house team of five — all handled by one engineer who just gets it.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 px-8 md:px-16 lg:px-32 text-black">
      {/* Header */}
   <div className="flex items-center justify-between w-full mb-8 md:mb-12">
  {/* Left: Services */}
  <h3 className="text-md sm:text-xl md:text-xl  text-gray-600">
    Testinomials
  </h3>

  {/* Center: What Can I Do For You */}
  <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
    <h2
      id="recent-work-heading"
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug"
    >
      <span className="block text-gray-400 font-normal transition-all duration-700 ease-in-out hover:text-black hover:opacity-100 opacity-80">
What They Said      </span>
    </h2>
  </div>
</div>


      {/* Testimonials */}
      <div className="mx-auto flex flex-col gap-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-xl p-8  hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-xl">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-gray-800 text-2xl md:text-2xl lg:text-2xl xl:text-4xl leading-tight ">
              <span className="text-red-500 text-1xl font-bold mr-2">"</span>
              {t.quote}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
