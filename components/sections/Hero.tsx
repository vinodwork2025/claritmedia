'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige-100 via-white to-accent-50 pt-20">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff7f27' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-40 -left-20 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 -right-20 w-[30rem] h-[30rem] bg-accent-300 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
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
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-100 to-beige-200 text-accent-700 px-5 py-2.5 rounded-full border border-accent-200 font-semibold text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted Since 2001 • Part of Maruthi Associates
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-neutral-900"
            >
              A Print Media Partner <span className="gradient-text">You Can Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-neutral-600 mb-8 leading-relaxed"
            >
              Since 2001, Maruthi Associates (operating as Clarit Media) has been Bangalore's premier supplier of inkjet media, latex & eco-solvent media, HP Niagara PageWide media, lamination films, and Royal Sovereign laminators.
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
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-neutral-200"
            >
              <div>
                <div className="text-4xl font-bold text-accent-600 mb-2">24+</div>
                <div className="text-sm text-neutral-600 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-600 mb-2">500+</div>
                <div className="text-sm text-neutral-600 font-medium">B2B Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-600 mb-2">99%</div>
                <div className="text-sm text-neutral-600 font-medium">On-Time Delivery</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Ultra Realistic Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Hero Image Placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-neutral-100 to-neutral-200 relative">
                <Image
                  src="https://images.unsplash.com/photo-1612178537253-bccd437b730e?q=80&w=2400&auto=format&fit=crop"
                  alt="Professional large format printing equipment in industrial setting"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-accent-200">
                <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide">Since 2001</p>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-neutral-200 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-neutral-900">Premium Quality</p>
                  <p className="text-sm text-neutral-600">Guaranteed Results</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-accent-500 to-accent-700 text-white rounded-2xl px-6 py-4 shadow-2xl"
            >
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm font-medium opacity-90">Support</p>
            </motion.div>
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-2 bg-accent-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
