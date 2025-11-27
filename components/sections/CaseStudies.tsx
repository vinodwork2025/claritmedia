'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CaseStudies() {
  const cases = [
    {
      industry: 'Signage Chain',
      client: 'National Signage Network',
      challenge: 'Needed reliable supplier for 50+ locations across India',
      solution: 'Centralized ordering, regional warehouses, dedicated account manager',
      results: [
        '40% cost reduction',
        '99% on-time delivery',
        'Single invoice for all locations',
      ],
      metric: '40%',
      metricLabel: 'Cost Savings',
    },
    {
      industry: 'Real Estate',
      client: 'Premium Property Developer',
      challenge: 'High-quality signage for luxury projects with tight deadlines',
      solution: 'Premium media selection, express delivery, installation support',
      results: [
        'Zero defects delivered',
        '24-hour turnaround',
        'Installation guidance provided',
      ],
      metric: '100%',
      metricLabel: 'Quality Rate',
    },
    {
      industry: 'Print Shop',
      client: 'Digital Print Services',
      challenge: 'Inconsistent quality from previous suppliers affecting reputation',
      solution: 'Certified media, technical training, ongoing support',
      results: [
        'Client satisfaction up 85%',
        'Repeat business increased',
        'Fewer reprints needed',
      ],
      metric: '85%',
      metricLabel: 'Satisfaction Increase',
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
          <span className="eyebrow">Success Stories</span>
          <h2 className="section-title mt-4">Proven Results for B2B Clients</h2>
          <p className="section-subtitle mx-auto mt-4">
            Real businesses, real improvements, measurable outcomes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
                  {caseStudy.industry}
                </span>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-400">{caseStudy.metric}</div>
                  <div className="text-xs text-gray-500">{caseStudy.metricLabel}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{caseStudy.client}</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">Challenge</div>
                  <p className="text-gray-300">{caseStudy.challenge}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">Solution</div>
                  <p className="text-gray-300">{caseStudy.solution}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-2">Results</div>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/case-studies" className="btn btn-secondary inline-flex items-center gap-2">
            View All Case Studies
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
