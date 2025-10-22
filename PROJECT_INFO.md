# Horizon Builders - Professional Construction Website

## Overview

A modern, professional building/construction company website featuring stunning project galleries, detailed service offerings, and streamlined contact processes. Built with Next.js 15, TypeScript, and Tailwind CSS with pixel-perfect design replication from the reference mockup.

## Features

### Homepage
- **Hero Section**: Large banner with building imagery and clear call-to-action
- **Featured Properties**: 3-column grid showcasing key projects with hover effects
- **Services Section**: Icon-based service cards on navy background highlighting core offerings
- **Footer CTA**: Contact information and quick quote request

### Portfolio Page
- **Project Gallery**: Grid layout displaying completed projects with filtering
- **Project Details**: Property information including type, location, specs (bed/bath/sqft)
- **Category Filtering**: Filter by Residential, Commercial, Renovations
- **Interactive Cards**: Hover effects and detailed project information

### Contact Page
- **Quote Request Form**: Comprehensive form for project inquiries
- **Instant Estimate Calculator**: Simulated cost and timeline estimation
- **Contact Information**: Email, phone, address with icon-based layout
- **Why Choose Us**: Benefits section highlighting company strengths

## Design System

### Colors (Extracted from Design Reference)
- **Primary Blue**: `#0BA5EC` (HSL: 199 92% 48%) - Buttons, links, accents
- **Navy Blue**: `#1E3A5F` (HSL: 211 55% 25%) - Dark backgrounds, footer
- **Navy Light**: `#2C4A6B` (HSL: 211 45% 30%) - Footer variations
- **Foreground**: `#374151` (HSL: 215 25% 20%) - Text color
- **Background**: `#FFFFFF` - Clean white backgrounds
- **Muted**: `#F3F4F6` (HSL: 210 20% 96%) - Subtle backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extra Bold)
- **Heading Scale**: H1 (2.5rem), H2 (2rem), H3 (1.5rem)
- **Body**: 1rem with 1.6 line-height

### Spacing & Layout
- **Container Max Width**: 1400px
- **Section Padding**: 4rem (64px) vertical
- **Border Radius**: 8px (cards), 4px (buttons)
- **Grid Gaps**: 1.5rem (24px)

### Visual Effects
- **Shadows**: Subtle elevation with `0 2px 8px rgba(0,0,0,0.1)`
- **Transitions**: 0.2s ease for smooth interactions
- **Hover States**: Enhanced shadows and color shifts

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── portfolio/
│   │   └── page.tsx          # Portfolio gallery
│   ├── contact/
│   │   └── page.tsx          # Contact & quote form
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & design system
public/
└── generated/                 # AI-generated property images
    ├── hero-building.png
    ├── property-oceanview.png
    ├── property-urban-loft.png
    └── property-hillside.png
```

## Mock Data

### Company Information
- **Name**: Horizon Builders
- **Tagline**: Building Dreams, Realizing Futures
- **Established**: 2015
- **Contact**: info@horizonbuilders.com, 555-BUILD-NOW
- **Address**: 123 Construction Avenue, Builder City, BC 12345

### Service Categories
1. **Construction Management**: Comprehensive project oversight from planning to completion
2. **Core Estate Development**: Expert development services for residential and commercial projects
3. **Architectural Design**: Innovative design solutions tailored to your vision

### Portfolio Projects
1. Modern Family Home - San Francisco, CA
2. Downtown Office Complex - New York, NY
3. Luxury Kitchen Renovation - Los Angeles, CA
4. Warehouse Expansion - Chicago, IL
5. Oceanview Residences - Miami Beach, FL
6. Urban Loft Apartments - Seattle, WA

## Technical Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts (Inter)

## Key Components

### Reusable Elements
- Navigation header with logo and links
- Property cards with image, title, specs, CTA
- Service cards with icons and descriptions
- Contact info blocks with icons
- Footer with contact details and social links

### Interactive Features
- Hover effects on property cards
- Filter buttons for portfolio categories
- Form validation and submission
- Instant cost/timeline calculator
- Smooth scrolling navigation
- Responsive mobile menu (structure ready)

## Responsive Design

- **Mobile First**: Fully responsive across all screen sizes
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Grid System**: Adapts from 1 column (mobile) to 3 columns (desktop)
- **Touch Friendly**: Large tap targets and accessible navigation

## Future Enhancements

### Potential Expansions
- Client portal for project tracking
- Detailed service pages with pricing calculators
- Blog section for construction tips and company updates
- Integration with scheduling systems for consultations
- Team profiles and certification displays
- Detailed case studies with before/after galleries
- CRM integration for lead management
- Virtual tours of completed projects
- Testimonials section with client reviews
- Live chat support integration

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Next.js Image optimization with lazy loading
- CSS custom properties for theming
- Minimal JavaScript bundle size
- Server-side rendering for SEO
- Optimized font loading with display=swap
- Efficient CSS with Tailwind's JIT compiler

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for interactive elements
- Alt text for all images
- Color contrast meeting WCAG AA standards

---

**Built with precision and attention to detail - Ready for production deployment**
