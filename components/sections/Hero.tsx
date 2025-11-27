'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-200 via-dark-100 to-dark-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231D9BF0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="eyebrow bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full border border-primary-500/20">
                Trusted Since 2001 • Part of Maruthi Associates
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              Powering India's Most Demanding{' '}
              <span className="gradient-text">Print & Signage Projects</span>{' '}
              Since 2001
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Leading B2B supplier of premium large-format print media, lamination films, industrial laminators, and precision vinyl cutters. From signage shops to corporate branding teams—we deliver the quality and reliability your projects demand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn btn-primary text-lg">
                Get Custom Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/solutions" className="btn btn-secondary text-lg">
                Explore Solutions
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-800"
            >
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-1">24+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-1">500+</div>
                <div className="text-sm text-gray-400">B2B Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-1">99%</div>
                <div className="text-sm text-gray-400">On-Time Delivery</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Product Card */}
              <div className="card card-hover p-8 bg-gradient-to-br from-dark-100 to-dark-50 border-primary-500/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Complete Media Solutions</h3>
                    <p className="text-sm text-gray-400">Premium Quality Guaranteed</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: '🖨️', title: 'Large Format Media', desc: 'Latex, Eco-Solvent, HP PageWide' },
                    { icon: '✨', title: 'Lamination Films', desc: 'Matte, Glossy, Frosted, Glitter' },
                    { icon: '🔧', title: 'Industrial Laminators', desc: 'Wide-Format, Heavy-Duty' },
                    { icon: '✂️', title: 'Vinyl Cutters', desc: 'SHAPECUT with Design Software' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-dark-200/50 border border-gray-800 hover:border-primary-500/50 transition-colors"
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                      <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-accent-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-accent-500/50"
              >
                ISO Certified
              </motion.div>

              {/* Floating Badge Bottom */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-primary-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-primary-500/50"
              >
                24/7 Support
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
