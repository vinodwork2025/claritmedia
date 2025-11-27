import Hero from '@/components/sections/Hero'
import TrustBanner from '@/components/sections/TrustBanner'
import Problems from '@/components/sections/Problems'
import Solutions from '@/components/sections/Solutions'
import ProductEcosystem from '@/components/sections/ProductEcosystem'
import WhyClarit from '@/components/sections/WhyClarit'
import CaseStudies from '@/components/sections/CaseStudies'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <Problems />
      <Solutions />
      <ProductEcosystem />
      <WhyClarit />
      <CaseStudies />
      <Testimonials />
      <CTASection />
    </>
  )
}
