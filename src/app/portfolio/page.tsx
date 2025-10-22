import Link from 'next/link'
import Image from 'next/image'
import { Building2, ArrowLeft, MapPin, Bed, Bath, Square } from 'lucide-react'

export const dynamic = 'force-dynamic'

const projects = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: 'San Francisco, CA',
    image: '/generated/property-oceanview.png',
    type: 'Residential Construction',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    description: 'Contemporary design with sustainable materials and smart home integration',
    completed: '2024'
  },
  {
    id: 2,
    title: 'Downtown Office Complex',
    location: 'New York, NY',
    image: '/generated/hero-building.png',
    type: 'Commercial Buildings',
    bedrooms: null,
    bathrooms: null,
    sqft: 45000,
    description: 'State-of-the-art commercial space with modern amenities',
    completed: '2023'
  },
  {
    id: 3,
    title: 'Luxury Kitchen Renovation',
    location: 'Los Angeles, CA',
    image: '/generated/property-urban-loft.png',
    type: 'Renovations & Additions',
    bedrooms: null,
    bathrooms: null,
    sqft: 800,
    description: 'Complete kitchen transformation with high-end finishes',
    completed: '2024'
  },
  {
    id: 4,
    title: 'Warehouse Expansion',
    location: 'Chicago, IL',
    image: '/generated/property-hillside.png',
    type: 'Commercial Buildings',
    bedrooms: null,
    bathrooms: null,
    sqft: 60000,
    description: 'Industrial facility expansion with modern logistics design',
    completed: '2023'
  },
  {
    id: 5,
    title: 'Oceanview Residences',
    location: 'Miami Beach, FL',
    image: '/generated/property-oceanview.png',
    type: 'Residential Construction',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    description: 'Luxury coastal living with panoramic ocean views',
    completed: '2024'
  },
  {
    id: 6,
    title: 'Urban Loft Apartments',
    location: 'Seattle, WA',
    image: '/generated/property-urban-loft.png',
    type: 'Residential Construction',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    description: 'Modern urban living spaces in the heart of the city',
    completed: '2024'
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <div className="text-lg font-bold text-foreground">HORIZON BUILDERS</div>
                <div className="text-xs text-muted-foreground">Building Dreams</div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/portfolio" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                PROPERTIES
              </Link>
              <Link href="/#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                SERVICES
              </Link>
              <Link href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <h1 className="text-4xl font-extrabold text-white mb-4">PROJECT PORTFOLIO</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Explore our collection of completed projects showcasing excellence in construction, design, and innovation
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-6 py-2 bg-primary text-white font-semibold text-sm uppercase rounded hover:bg-accent transition-all">
              All Projects
            </button>
            <button className="px-6 py-2 bg-white text-foreground font-semibold text-sm uppercase rounded border border-gray-200 hover:border-primary hover:text-primary transition-all">
              Residential
            </button>
            <button className="px-6 py-2 bg-white text-foreground font-semibold text-sm uppercase rounded border border-gray-200 hover:border-primary hover:text-primary transition-all">
              Commercial
            </button>
            <button className="px-6 py-2 bg-white text-foreground font-semibold text-sm uppercase rounded border border-gray-200 hover:border-primary hover:text-primary transition-all">
              Renovations
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                {/* Project Image */}
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold uppercase rounded">
                      {project.completed}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary uppercase">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Property Stats */}
                  <div className="flex items-center gap-4 text-sm text-foreground mb-4 pb-4 border-b border-gray-200">
                    {project.bedrooms && (
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4 text-muted-foreground" />
                        <span>{project.bedrooms} Bed</span>
                      </div>
                    )}
                    {project.bathrooms && (
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4 text-muted-foreground" />
                        <span>{project.bathrooms} Bath</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4 text-muted-foreground" />
                      <span>{project.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full px-6 py-2 bg-white border-2 border-primary text-primary font-semibold text-sm uppercase rounded hover:bg-primary hover:text-white transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary hover:bg-accent text-white font-semibold text-sm uppercase rounded tracking-wide transition-all shadow-md hover:shadow-lg">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life with our expertise and commitment to excellence
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-navy font-semibold text-sm uppercase rounded tracking-wide transition-all shadow-lg">
              Get Free Quote
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Building2 className="h-10 w-10 text-white" />
              <div>
                <div className="text-xl font-bold text-white">HORIZON</div>
                <div className="text-sm text-blue-200">BUILDERS</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex gap-6">
              <Link href="/" className="text-blue-100 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/portfolio" className="text-blue-100 hover:text-white transition-colors text-sm">
                Portfolio
              </Link>
              <Link href="/contact" className="text-blue-100 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>

            {/* Contact Info */}
            <div className="text-right">
              <p className="text-blue-100 text-sm">info@horizonbuilders.com</p>
              <p className="text-blue-100 text-sm">555-BUILD-NOW</p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-blue-200 text-sm">
              &copy; 2024 Horizon Builders. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
