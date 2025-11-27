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
      icon: '🏆',
      title: '24+ Years Expertise',
      description: 'Since 2001, we\'ve been the backbone of India\'s signage industry',
    },
    {
      icon: '✅',
      title: 'Quality Guaranteed',
      description: 'ISO certified processes, premium materials only',
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: '99% on-time delivery across India',
    },
    {
      icon: '💰',
      title: 'Best Value',
      description: 'Competitive pricing with volume discounts',
    },
  ]

  return (
    <section className="section-padding bg-dark-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title mt-4">The Clarit Advantage</h2>
          <p className="section-subtitle mx-auto mt-4">
            More than a supplier—your strategic partner for growth
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card mb-16 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 text-gray-400 font-semibold">Feature</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-semibold">Other Suppliers</th>
                  <th className="text-left py-4 px-6 text-primary-400 font-semibold bg-primary-500/5">Clarit</th>
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
                    className={`border-b border-gray-800/50 ${item.highlight ? 'bg-primary-500/5' : ''}`}
                  >
                    <td className="py-4 px-6 font-semibold text-white">{item.feature}</td>
                    <td className="py-4 px-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item.competitor}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-white bg-primary-500/5">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20"
            >
              <div className="text-5xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
              <p className="text-gray-400">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
