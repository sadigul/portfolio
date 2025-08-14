'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const services = [
  {
    title: 'Mobile App Development',
    details: [
      'iOS & Android Apps',
      'Flutter & React Native',
      'App Store Deployment',
      'Maintenance & Updates',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Website Development',
    details: [
      'Responsive Web Design',
      'Next.js / React',
      'CMS Integration',
      'Performance Optimization',
    ],
    image: 'https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-wooden-table-iq2RzBMj-Wg',
  },
  {
    title: 'Custom AI Solutions',
    details: [
      'AI Chatbots',
      'Recommendation Engines',
      'LLM Integration (OpenAI)',
      'Data Analysis & Automation',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'UI/UX Design',
    details: [
      'Wireframing & Prototyping',
      'Design Systems',
      'User Research',
      'Accessibility Optimization',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
  },
]

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 bg-white">
     <div className="flex items-center justify-between w-full mb-8 md:mb-12">
  {/* Left: Services */}
  <h3 className="text-md sm:text-xl md:text-xl  text-gray-600">
    Services
  </h3>

  {/* Center: What Can I Do For You */}
  <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
    <h2
      id="recent-work-heading"
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug"
    >
      <span className="block text-gray-400 font-normal transition-all duration-700 ease-in-out hover:text-black hover:opacity-100 opacity-80">
        What I Can Do For You
      </span>
    </h2>
  </div>
</div>


      <div className="space-y-4">
        {services.map((service, index) => {
          const isOpen = openIndex === index
          return (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-lg overflow-hidden"
              onHoverStart={() => setOpenIndex(index)}
              onClick={() => toggle(index)}
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-4 bg-white hover:bg-gray-100 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="text-2xl font-medium text-black">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  {/* <span className="w-2 h-2 rounded-full bg-orange-500"></span> */}
                  <span className="text-5xl font-medium text-black">{service.title}</span>
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <ChevronUp className="w-6 h-6 text-black" /> : <ChevronDown className="w-6 h-6 text-black" />}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex flex-col lg:flex-row"
                  >
                    <div className="lg:w-1/2 p-6">
                      <div className="flex flex-wrap gap-2">
                        {service.details.map((item, i) => (
                          <motion.span
                            key={i}
                            className="inline-block px-3 py-1 bg-black text-white text-base font-medium rounded-md"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.2 }}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}