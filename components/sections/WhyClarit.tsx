'use client'

import { motion } from 'framer-motion'

export default function WhyClarit() {
  const comparisons = [
    {
      feature: 'Product Quality',
      competitor: 'Inconsistent quality, frequent defects',
      clarit: 'Premium certified media, <1% defect rate',
      highlight: true,
    },
    {
      feature: 'Delivery Time',
      competitor: '5-7 days, unreliable',
      clarit: '24-48 hours, 99% on-time delivery',
      highlight: false,
    },
    {
      feature: 'Technical Support',
      competitor: 'Limited hours, basic help',
      clarit: '24/7 dedicated support team',
      highlight: true,
    },
    {
      feature: 'Pricing',
      competitor: 'Hidden costs, no bulk discounts',
      clarit: 'Transparent pricing, volume discounts',
      highlight: false,
    },
    {
      feature: 'Multi-location Service',
      competitor: 'Single warehouse, complex logistics',
      clarit: 'Pan-India network, centralized billing',
      highlight: true,
    },
  ]

  const advantages = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: '24+ Years Expertise',
      description: 'Since 2001, we\'ve been the backbone of India\'s signage industry',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality Guaranteed',
      description: 'ISO certified processes, premium materials only',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Delivery',
      description: '99% on-time delivery across India',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Best Value',
      description: 'Competitive pricing with volume discounts',
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
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4">The Clarit Advantage</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mt-4">
            More than a supplier—your strategic partner for growth
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-2xl mb-16 overflow-hidden border border-neutral-200"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="text-left py-4 px-6 text-neutral-700 font-semibold">Feature</th>
                  <th className="text-left py-4 px-6 text-neutral-700 font-semibold">Other Suppliers</th>
                  <th className="text-left py-4 px-6 text-primary-600 font-semibold bg-primary-50">Clarit</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`border-b border-neutral-100 ${item.highlight ? 'bg-primary-50/30' : ''}`}
                  >
                    <td className="py-4 px-6 font-semibold text-neutral-900">{item.feature}</td>
                    <td className="py-4 px-6 text-neutral-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item.competitor}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-900 bg-primary-50/30">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item.clarit}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{advantage.title}</h3>
              <p className="text-neutral-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
