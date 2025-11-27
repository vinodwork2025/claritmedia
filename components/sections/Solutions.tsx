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
      title: 'Inkjet & Large Format Media',
      description: 'Premium inkjet media for all applications. From basic vinyl to specialized canvas and textiles for professional large-format printing.',
      features: ['Multiple Finishes', 'Weather-Resistant', 'Color Accurate', 'Wide Width Options'],
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
      title: 'Latex & Ecosolvent Media',
      description: 'Premium vinyl, polypropylene, one-way vision, and canvas for HP Latex and eco-solvent printers. Professional outdoor durability.',
      features: ['Premium Vinyl', 'Polypropylene', 'One Way Vision', 'Canvas'],
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'HP Niagara PageWide Media',
      description: 'Specialized media for HP PageWide printers. Photo papers, polypropylene, and satin cloth for stunning large-format prints.',
      features: ['Photo Papers', 'Polypropylene', 'Satin Cloth', 'HP Certified'],
      href: '/solutions/pagewide',
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Lamination Films & Equipment',
      description: 'Royal Sovereign laminators and premium lamination films. Glossy, matte, frosted, glitter finishes, and mounting solutions.',
      features: ['Royal Sovereign', 'Multiple Finishes', 'Mounting Films', 'Easy Operation'],
      href: '/solutions/lamination',
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

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                {solution.icon}
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{solution.title}</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">{solution.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={solution.href}
                className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:gap-3 transition-all group"
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
