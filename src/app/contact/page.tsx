'use client'

import Link from 'next/link'
import { Building2, ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    budget: '',
    timeline: '',
    message: ''
  })

  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)
  const [estimatedTimeline, setEstimatedTimeline] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate cost and timeline calculation
    const budgetNum = parseFloat(formData.budget.replace(/,/g, ''))
    if (budgetNum > 0) {
      const cost = budgetNum * (0.9 + Math.random() * 0.2)
      setEstimatedCost(Math.round(cost))

      const timelineMap: Record<string, string> = {
        'immediate': '2-3 months',
        '3-6-months': '4-6 months',
        '6-12-months': '6-9 months',
        'flexible': '3-12 months'
      }
      setEstimatedTimeline(timelineMap[formData.timeline] || '3-6 months')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setEstimatedCost(null)
    setEstimatedTimeline(null)
  }

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
              <Link href="/portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                PROPERTIES
              </Link>
              <Link href="/#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                SERVICES
              </Link>
              <Link href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="text-sm font-medium text-primary hover:text-accent transition-colors">
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
          <h1 className="text-4xl font-extrabold text-white mb-4">GET A FREE QUOTE</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Tell us about your project and receive an instant estimate. Our team will follow up within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">PROJECT DETAILS</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-foreground mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Buildings</option>
                      <option value="renovation">Renovations & Additions</option>
                      <option value="custom">Custom Home Design</option>
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-foreground mb-2">
                        Estimated Budget ($) *
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="100,000"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-foreground mb-2">
                        Preferred Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (ASAP)</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="6-12-months">6-12 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Tell us about your project vision, requirements, and any specific details..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary hover:bg-accent text-white font-semibold text-sm uppercase rounded tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Get Instant Estimate
                  </button>
                </form>

                {/* Estimate Results */}
                {estimatedCost && estimatedTimeline && (
                  <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-primary">
                    <h3 className="text-xl font-bold text-foreground mb-4">INSTANT ESTIMATE</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Estimated Cost</p>
                        <p className="text-3xl font-bold text-primary">
                          ${estimatedCost.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Project Timeline</p>
                        <p className="text-3xl font-bold text-primary">
                          {estimatedTimeline}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      * This is a preliminary estimate. Our team will contact you within 24 hours with a detailed quote.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Info Card */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h3 className="text-xl font-bold text-foreground mb-6">CONTACT INFORMATION</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Email</p>
                      <a href="mailto:info@horizonbuilders.com" className="text-primary hover:text-accent transition-colors">
                        info@horizonbuilders.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Phone</p>
                      <a href="tel:555-BUILD-NOW" className="text-primary hover:text-accent transition-colors">
                        555-BUILD-NOW
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri: 8AM - 6PM</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Office</p>
                      <p className="text-muted-foreground">
                        123 Construction Avenue<br />
                        Builder City, BC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-navy rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-white mb-6">WHY CHOOSE US?</h3>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Established Since 2015</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Licensed & Insured</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Free Consultations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Quality Guaranteed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>On-Time Delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
