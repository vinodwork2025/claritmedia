'use client'

import { motion } from 'framer-motion'

export default function Problems() {
  const problems = [
    {
      icon: '⚠️',
      title: 'Inconsistent Print Quality',
      description: 'Projects fail due to unreliable media suppliers delivering substandard materials that waste time and money.',
    },
    {
      icon: '🌧️',
      title: 'Media Fails Outdoors',
      description: 'Signage fades, peels, or deteriorates within months, damaging your reputation and client relationships.',
    },
    {
      icon: '⏱️',
      title: 'Equipment Downtime',
      description: 'Wrong equipment choices or poor-quality laminators and cutters halt production and miss deadlines.',
    },
    {
      icon: '🚚',
      title: 'Complex Logistics',
      description: 'Multi-location deliveries become nightmares without a reliable supplier managing inventory and distribution.',
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
          <span className="eyebrow">Common Challenges</span>
          <h2 className="section-title mt-4">Problems We Solve</h2>
          <p className="section-subtitle mx-auto mt-4">
            Industry challenges that cost you time, money, and client trust
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card card-hover text-center"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
