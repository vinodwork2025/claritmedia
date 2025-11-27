'use client'

import { motion } from 'framer-motion'

export default function TrustBanner() {
  const logos = [
    'Client Logo 1',
    'Client Logo 2',
    'Client Logo 3',
    'Client Logo 4',
    'Client Logo 5',
    'Client Logo 6',
  ]

  return (
    <section className="py-12 bg-white border-y border-neutral-200">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-neutral-600 text-sm uppercase tracking-wider font-semibold">
            Trusted by leading print and signage businesses across India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-32 h-16 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-400 text-xs font-medium border border-neutral-200 hover:border-accent-500/50 hover:shadow-md hover:shadow-accent-500/10 transition-all">
                {logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
