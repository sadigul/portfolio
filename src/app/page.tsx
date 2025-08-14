import Hero from './Home/hero'
import FooterSection from './Home/footer'
import Partners from './Home/Partners'
import RecentWork from './Home/recentwork'
import ServicesSection from './Home/services'
import TestimonialsSection from './Home/testinomials'

export default function Home() {
  return (
    <>
      <Hero />
      <RecentWork/>
      <ServicesSection/>
      <Partners/>
      <TestimonialsSection/>
      <FooterSection/>
      {/* Add more sections below */}
\    </>
  )
}
