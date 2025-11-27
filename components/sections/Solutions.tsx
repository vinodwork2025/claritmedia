'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Solutions() {
  const solutions = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Large Format Printing Solutions',
      description: 'Complete range of premium inkjet media for latex, eco-solvent, and HP PageWide systems. Consistent quality for flawless prints every time.',
      features: ['HP Certified Media', 'Weather-Resistant', 'Color Accurate', 'Wide Width Options'],
      href: '/solutions/large-format',
      image: (
        <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-6 flex items-center justify-center border border-neutral-200">
          <div className="text-center">
            <svg className="w-20 h-20 text-neutral-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-neutral-500 font-medium">Large Format Printer</p>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Signage Production Systems',
      description: 'Professional-grade signage media and equipment. From indoor displays to outdoor billboards—built to last.',
      features: ['UV Resistant', 'Anti-Curl Technology', 'Long-Term Durability', 'Multiple Finishes'],
      href: '/solutions/signage',
      image: (
        <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-6 flex items-center justify-center border border-neutral-200">
          <div className="text-center">
            <svg className="w-20 h-20 text-neutral-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-neutral-500 font-medium">Professional Signage Display</p>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Lamination & Finishing Systems',
      description: 'Industrial laminators and premium PVC films. Protect your prints and add professional finishing touches.',
      features: ['Royal Sovereign Quality', 'Multiple Film Options', 'Easy Operation', 'Consistent Results'],
      href: '/solutions/lamination',
      image: (
        <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-6 flex items-center justify-center border border-neutral-200">
          <div className="text-center">
            <svg className="w-20 h-20 text-neutral-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
            </svg>
            <p className="text-sm text-neutral-500 font-medium">Lamination Machine</p>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
      title: 'Vinyl Cutting & Graphic Systems',
      description: 'SHAPECUT heavy-duty vinyl cutters with professional design software. Precision cutting for complex graphics.',
      features: ['Design Software Included', 'High Precision', 'Fast Cutting Speed', 'Technical Support'],
      href: '/solutions/vinyl-cutting',
      image: (
        <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-6 flex items-center justify-center border border-neutral-200">
          <div className="text-center">
            <svg className="w-20 h-20 text-neutral-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <p className="text-sm text-neutral-500 font-medium">Vinyl Cutting System</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Complete Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4">Integrated Print & Signage Solutions</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mt-4">
            End-to-end solutions designed for professional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border border-neutral-100 group"
            >
              {solution.image}

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                {solution.icon}
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{solution.title}</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">{solution.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={solution.href}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all group"
              >
                View Solution
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
