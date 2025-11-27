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
      image: (
        <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-6 flex items-center justify-center border border-neutral-200">
          <div className="text-center">
            <svg className="w-16 h-16 text-neutral-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="text-xs text-neutral-500 font-medium">Performance Metrics</p>
          </div>
        </div>
      ),
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
      image: (
        <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-6 flex items-center justify-center border border-neutral-200">
          <div className="text-center">
            <svg className="w-16 h-16 text-neutral-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p className="text-xs text-neutral-500 font-medium">Luxury Property</p>
          </div>
        </div>
      ),
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
      image: (
        <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-6 flex items-center justify-center border border-neutral-200">
          <div className="text-center">
            <svg className="w-16 h-16 text-neutral-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-neutral-500 font-medium">Customer Satisfaction</p>
          </div>
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
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4">Proven Results for B2B Clients</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mt-4">
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
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border border-neutral-100"
            >
              {caseStudy.image}

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {caseStudy.industry}
                </span>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-600">{caseStudy.metric}</div>
                  <div className="text-xs text-neutral-500">{caseStudy.metricLabel}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-4">{caseStudy.client}</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm font-semibold text-neutral-700 mb-1">Challenge</div>
                  <p className="text-neutral-600">{caseStudy.challenge}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-neutral-700 mb-1">Solution</div>
                  <p className="text-neutral-600">{caseStudy.solution}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-neutral-700 mb-2">Results</div>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <Link href="/case-studies" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all shadow-lg hover:shadow-xl">
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
