import Link from 'next/link'
import Image from 'next/image'
import { Building2, Layers, Palette } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <div className="text-lg font-bold text-foreground">HORIZON BUILDERS</div>
                <div className="text-xs text-muted-foreground">Building Dreams</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/portfolio" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                PROPERTIES
              </Link>
              <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                SERVICES
              </Link>
              <Link href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-building.png"
            alt="Modern building with blue glass facade"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              BUILDING DREAMS,
              <br />
              REALIZING FUTURES
            </h1>
            <button className="mt-6 px-8 py-3 bg-primary hover:bg-accent text-white font-semibold text-sm uppercase rounded tracking-wide transition-all shadow-lg hover:shadow-xl">
              View Listings
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">FEATURED PROPERTIES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Property 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/generated/property-oceanview.png"
                  alt="Oceanview Residences"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2">OCEANVIEW RESIDENCES</h3>
                <button className="mt-3 px-6 py-2 bg-primary hover:bg-accent text-white font-semibold text-xs uppercase rounded transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/generated/property-urban-loft.png"
                  alt="Urban Loft Apartments"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2">URBAN LOFT APARTMENTS</h3>
                <button className="mt-3 px-6 py-2 bg-primary hover:bg-accent text-white font-semibold text-xs uppercase rounded transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Property 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/generated/property-hillside.png"
                  alt="Hillside Estate Homes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2">HILLSIDE ESTATE HOMES</h3>
                <button className="mt-3 px-6 py-2 bg-primary hover:bg-accent text-white font-semibold text-xs uppercase rounded transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">OUR SERVICES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/10 rounded-lg">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CONSTRUCTION MANAGEMENT</h3>
              <p className="text-blue-100 text-sm">
                Comprehensive project oversight from planning to completion
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/10 rounded-lg">
                  <Layers className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CORE ESTATE DEVELOPMENT</h3>
              <p className="text-blue-100 text-sm">
                Expert development services for residential and commercial projects
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/10 rounded-lg">
                  <Palette className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ARCHITECTURAL DESIGN</h3>
              <p className="text-blue-100 text-sm">
                Innovative design solutions tailored to your vision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
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

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">READY TO START YOUR PROJECT?</h3>
              <Link href="/contact">
                <button className="px-8 py-3 bg-white hover:bg-gray-100 text-navy font-semibold text-sm uppercase rounded tracking-wide transition-all">
                  Get Free Quote
                </button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="text-right">
              <h4 className="text-lg font-bold text-white mb-2">CONTACT US</h4>
              <p className="text-blue-100 text-sm">info@horizonbuilders.com</p>
              <p className="text-blue-100 text-sm">555-BUILD-NOW</p>
              <div className="flex gap-3 mt-3 justify-end">
                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
