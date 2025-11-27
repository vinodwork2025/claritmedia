# Clarit - CLARITY MEDIA Website

A production-ready, ultra-modern B2B marketing website for Clarit (CLARITY MEDIA), a leading supplier of large-format print media, lamination films, laminators, and vinyl cutters based in Bangalore, India.

## 🎯 Project Overview

**Company**: Clarit / CLARITY MEDIA
**Location**: Bangalore, India
**Parent Entity**: Maruthi Associates (Serving since 2001)

### What They Do

- Supply **large format inkjet media** (latex, eco-solvent)
- Supply **HP PageWide / HP Niagara media**
- Supply **PVC lamination films** (matte, glossy, satin, frosted, glitter)
- Supply **wide-format laminators** (Royal Sovereign type)
- Supply **heavy-duty vinyl cutters** (SHAPECUT brand with design software)

### Target Audience

- Signage shops
- Print chains
- Real estate developers
- Textile/export houses
- Corporate branding teams

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Fonts**: Inter (body), Poppins (headings)

## 📁 Project Structure

```
claritmedia/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── Header.tsx          # Sticky header with navigation
│   ├── Footer.tsx          # Footer with links
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── TrustBanner.tsx
│       ├── Problems.tsx
│       ├── Solutions.tsx
│       ├── ProductEcosystem.tsx
│       ├── WhyClarit.tsx
│       ├── CaseStudies.tsx
│       ├── Testimonials.tsx
│       └── CTASection.tsx
├── public/
│   └── images/             # Static images
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Design System

### Colors

- **Primary**: Electric Blue (#1D9BF0) - for CTAs and accents
- **Accent**: Industrial Orange (#FF7A1A) - for highlights
- **Dark Background**: Very dark charcoal (#050709 - #0B0E11)
- **Neutrals**: Light grey (#E5E7EB), Mid grey (#4B5563)

### Typography

- **Headings**: Poppins (geometric, bold)
- **Body**: Inter (clean, highly legible)

### Components

- Buttons (primary, secondary, accent)
- Cards with hover effects
- Section layouts with consistent padding
- Gradient text effects
- Smooth animations on scroll

## 🏠 Homepage Sections

1. **Hero**: Main value proposition with product showcase
2. **Trust Banner**: Client logos strip
3. **Problems**: Common challenges the company solves
4. **Solutions**: Four main solution categories
5. **Product Ecosystem**: Complete product catalog preview
6. **Why Clarit**: Comparison table showing advantages
7. **Case Studies**: Real client success stories
8. **Testimonials**: Client feedback and satisfaction stats
9. **CTA Section**: Final call-to-action with contact info

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) to view the site.

The page auto-updates as you edit files.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)

## 🔍 SEO Features

- Optimized meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Clean, semantic URLs
- Fast page load times
- Mobile-first indexing ready

## 📊 Performance

- Optimized images (WebP format recommended)
- Code splitting with Next.js
- Lazy loading for images
- Minimal JavaScript bundle
- CSS optimization with Tailwind

## 🎯 Conversion Optimization

- Clear CTAs throughout the page
- Trust signals (years in business, client count)
- Social proof (testimonials, case studies)
- Multiple contact methods
- Easy quote request process

## 📝 Content Strategy

### Key Messages

- "Solution-driven, not just a media supplier"
- 24+ years of industry expertise
- Quality guaranteed with ISO certification
- Fast, reliable delivery across India
- Complete product ecosystem

### Tone & Voice

- Professional and authoritative
- Technical but accessible
- B2B focused
- Trust-building
- Results-oriented

## 🛠️ Future Enhancements

- [ ] Product catalog pages
- [ ] Solutions detail pages
- [ ] Industries served pages
- [ ] About us page
- [ ] Contact form with backend
- [ ] Blog for content marketing
- [ ] Customer portal for orders
- [ ] Live chat integration

## 📞 Contact

**Clarit - CLARITY MEDIA**
Bangalore, India
📧 info@clarit.in
📱 +91 80 1234 5678

---

**Part of Maruthi Associates** | Serving the signage & print industry since 2001
