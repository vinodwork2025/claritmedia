'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductEcosystem() {
  const categories = [
    {
      name: 'Inkjet Media',
      count: '50+',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      products: ['Basic Vinyl', 'Photo Paper', 'Canvas', 'Textiles'],
      href: '/products/inkjet-media',
      image: (
        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-4 overflow-hidden relative border border-neutral-200">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2400&auto=format&fit=crop"
            alt="Professional print media rolls and materials"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      name: 'Latex & Ecosolvent',
      count: '40+',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
        </svg>
      ),
      products: ['Premium Vinyl', 'Polypropylene', 'One Way Vision', 'Canvas'],
      href: '/products/latex-ecosolvent',
      image: (
        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-4 overflow-hidden relative border border-neutral-200">
          <Image
            src="https://images.unsplash.com/photo-1612178537253-bccd437b730e?q=80&w=2400&auto=format&fit=crop"
            alt="Professional printing setup with large format printer"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      name: 'HP PageWide Media',
      count: '25+',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      products: ['Photo Papers', 'Polypropylene', 'Satin Cloth', 'Specialty Media'],
      href: '/products/hp-pagewide',
      image: (
        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-4 overflow-hidden relative border border-neutral-200">
          <Image
            src="https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?q=80&w=2400&auto=format&fit=crop"
            alt="High-quality photo prints and professional media"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      name: 'Lamination Films',
      count: '35+',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      products: ['Glossy Films', 'Matte Films', 'Frosted & Glitter', 'Mounting Films'],
      href: '/products/lamination-films',
      image: (
        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-4 overflow-hidden relative border border-neutral-200">
          <Image
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2400&auto=format&fit=crop"
            alt="Lamination machine and professional finishing equipment"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Product Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4">Complete Print & Signage Catalog</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mt-4">
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
              <Link href={category.href} className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-neutral-100 group h-full">
                {category.image}

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <span className="text-sm font-bold text-accent-700 bg-accent-100 px-3 py-1 rounded-full">
                    {category.count} Products
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-accent-600 transition-colors">
                  {category.name}
                </h3>

                <ul className="space-y-2 mb-6">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-600" />
                      {product}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-accent-600 font-semibold group-hover:gap-3 transition-all">
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
          <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-700 text-white rounded-lg font-semibold hover:shadow-accent-500/30 transition-all shadow-xl hover:shadow-2xl">
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
