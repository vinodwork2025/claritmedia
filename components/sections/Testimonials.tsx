'use client'

import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Clarit has been our go-to supplier for 8 years. Quality is consistent, delivery is always on time, and their team truly understands our business needs.",
      author: "Rajesh Sharma",
      position: "Owner, SignPro Mumbai",
      rating: 5,
    },
    {
      quote: "Switched to Clarit after repeated quality issues with our previous supplier. The difference is night and day. Our client satisfaction has improved dramatically.",
      author: "Priya Patel",
      position: "Operations Manager, Digital Prints Ltd",
      rating: 5,
    },
    {
      quote: "Managing supplies for 30+ locations was a nightmare until we partnered with Clarit. Single point of contact, centralized billing, and consistent quality everywhere.",
      author: "Amit Kumar",
      position: "Director, National Signage Chain",
      rating: 5,
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
          <span className="eyebrow">Client Testimonials</span>
          <h2 className="section-title mt-4">Trusted by Industry Leaders</h2>
          <p className="section-subtitle mx-auto mt-4">
            See why leading businesses choose Clarit as their print media partner
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card card-hover"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-800 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.position}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800"
        >
          {[
            { value: '500+', label: 'Active B2B Clients' },
            { value: '24+', label: 'Years in Business' },
            { value: '99%', label: 'Customer Satisfaction' },
            { value: '50+', label: 'Cities Served' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
