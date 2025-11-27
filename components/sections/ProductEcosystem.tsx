'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProductEcosystem() {
  const categories = [
    {
      name: 'Print Media',
      count: '50+',
      image: '🖨️',
      products: ['Latex Media', 'Eco-Solvent Media', 'HP PageWide Media', 'Canvas & Textiles'],
      href: '/products/print-media',
    },
    {
      name: 'Lamination Films',
      count: '30+',
      image: '✨',
      products: ['Matte Films', 'Glossy Films', 'Satin Films', 'Frosted & Glitter'],
      href: '/products/lamination-films',
    },
    {
      name: 'Laminators',
      count: '15+',
      image: '🔧',
      products: ['Wide-Format Laminators', 'Cold Laminators', 'Hot Laminators', 'Mounting Systems'],
      href: '/products/laminators',
    },
    {
      name: 'Vinyl Cutters',
      count: '10+',
      image: '✂️',
      products: ['SHAPECUT Series', 'Design Software', 'Cutting Mats', 'Accessories'],
      href: '/products/vinyl-cutters',
    },
  ]

  return (
    <section className="section-padding bg-dark-200">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Product Ecosystem</span>
          <h2 className="section-title mt-4">Complete Print & Signage Catalog</h2>
          <p className="section-subtitle mx-auto mt-4">
            Everything you need from a single, reliable supplier
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={category.href} className="block card card-hover group h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-6xl">{category.image}</div>
                  <span className="text-sm font-bold text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
                    {category.count} Products
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {category.name}
                </h3>

                <ul className="space-y-2 mb-6">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      {product}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
                  Browse {category.name}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products" className="btn btn-primary inline-flex items-center gap-2">
            View Full Product Catalog
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
