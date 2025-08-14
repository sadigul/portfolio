'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const NAV_ITEMS = ['Home', 'Work', 'Resume'] as const
const hrefFor = (item: (typeof NAV_ITEMS)[number]) =>
  item === 'Home' ? '/' : `/${item.toLowerCase()}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Left: Logo + Avatar */}
  <Link href="/" className="flex items-center gap-3">
  <span className="relative h-[50px] w-[50px] overflow-hidden rounded-full">
    <Image
      src="/images/logo.png"
      alt="Profile - Panda"
      fill
      className="object-cover object-center"
      sizes="50px"
      priority
    />
  </span>
</Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex p-[8px] backdrop-blur-md rounded bg-white/70">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={hrefFor(item)}
              className="group relative overflow-hidden h-[40px] w-[90px] flex items-center justify-center px-4 py-2 rounded-full text-md font-medium text-gray-800"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                {item}
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                {item}
              </span>
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="relative inline-block group overflow-hidden p-[5px] rounded-full"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black rounded-full transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10 block h-[32px] w-[110px] overflow-hidden text-sm font-semibold text-white text-center leading-[32px]">
              <span className="absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                Let’s Talk
              </span>
              <span className="absolute top-full left-0 w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-[-100%]">
                Let’s Talk
              </span>
            </span>
            <span className="absolute inset-0 rounded-full bg-black opacity-20 blur-md group-hover:opacity-30 transition duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden px-4 pt-2 pb-4 bg-white/90 backdrop-blur-sm space-y-2 transition-all',
          open ? 'block' : 'hidden'
        )}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item}
            href={hrefFor(item)}
            className="block w-full text-center bg-white py-2 rounded-full text-gray-800 shadow hover:shadow-md transition"
            onClick={() => setOpen(false)}
          >
            {item}
          </Link>
        ))}

        {/* Mobile CTA */}
        <Link
          href="/contact"
          className="block w-full text-center bg-black text-white py-2 rounded-full shadow hover:opacity-90 transition"
          onClick={() => setOpen(false)}
        >
          Let’s Talk
        </Link>
      </div>
    </header>
  )
}
