import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    solutions: [
      { label: 'Large Format Printing', href: '/solutions/large-format' },
      { label: 'Signage Production', href: '/solutions/signage' },
      { label: 'Lamination Systems', href: '/solutions/lamination' },
      { label: 'Vinyl Cutting', href: '/solutions/vinyl-cutting' },
    ],
    products: [
      { label: 'Print Media', href: '/products/print-media' },
      { label: 'Lamination Films', href: '/products/lamination-films' },
      { label: 'Laminators', href: '/products/laminators' },
      { label: 'Vinyl Cutters', href: '/products/vinyl-cutters' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Industries We Serve', href: '/industries' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'Product Catalog', href: '/catalog' },
      { label: 'Technical Support', href: '/support' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
  }

  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800">
      <div className="container section-padding">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <div className="text-xl font-bold font-heading text-white">CLARIT</div>
                <div className="text-xs text-neutral-400 -mt-1">CLARITY MEDIA</div>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed">
              A Print Media Partner You Can Trust. Since 2001, we've been Bangalore's premier supplier.
              Part of Maruthi Associates.
            </p>
            <div className="space-y-3 text-sm text-neutral-400">
              <p className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-600/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>#4, Survey #23, Hulimavu, Bangalore</span>
              </p>
              <p className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-600/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>info@clarit.in</span>
              </p>
              <p className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-600/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+91 9980160821 / +91 9980259596</span>
              </p>
              <p className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-600/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span>www.clarit.in</span>
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Clarit - CLARITY MEDIA. Part of Maruthi Associates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-neutral-400 hover:text-accent-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-accent-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
