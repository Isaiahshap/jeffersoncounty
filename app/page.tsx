"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation (Escape key)
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Demo Notice Banner */}
      <div className="bg-county-gold/10 border-b border-county-gold/30 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-county-dark/70 text-center">
            Conceptual sample homepage provided for RFP evaluation. Final structure and content would be refined post-award.
          </p>
        </div>
      </div>

      {/* Top Utility Bar */}
      <div className="bg-county-blue text-white" role="navigation" aria-label="Utility navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <nav className="flex items-center space-x-6" aria-label="Quick links">
              <a href="/demo" className="hover:text-county-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-county-blue rounded px-1" aria-label="Employee portal">
                Employees
              </a>
              <a href="/demo" className="hover:text-county-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-county-blue rounded px-1" aria-label="Career opportunities">
                Careers
              </a>
              <a href="/demo" className="hover:text-county-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-county-blue rounded px-1" aria-label="Bids and Requests for Proposals">
                Bids &amp; RFPs
              </a>
              <a href="/demo" className="hover:text-county-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-county-blue rounded px-1" aria-label="Contact information">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <label htmlFor="site-search" className="sr-only">Search website</label>
                <input
                  id="site-search"
                  type="search"
                  placeholder="Search..."
                  className="bg-white/10 border border-white/20 rounded px-3 py-1 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 w-48"
                  aria-label="Search the Jefferson County website"
                />
              </div>
              <button 
                className="hover:text-county-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded p-1" 
                aria-label="Accessibility options and settings"
                title="Accessibility options"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header & Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex items-center h-full focus:outline-none focus:ring-2 focus:ring-county-blue rounded">
                <Image
                  src="/logo.png"
                  alt="Jefferson County, West Virginia"
                  width={300}
                  height={50}
                  className="h-[50px] w-auto object-contain"
                  priority
                />
              </a>
            </div>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center space-x-0.5" aria-label="Main navigation">
              {/* About Jefferson County */}
              <div className="relative" data-dropdown="about">
                <button
                  className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5 flex items-center gap-1.5"
                  onMouseEnter={() => setOpenDropdown('about')}
                  onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                  aria-expanded={openDropdown === 'about'}
                  aria-haspopup="true"
                  aria-label="About Jefferson County menu"
                >
                  About Jefferson County
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'about' && (
                  <div
                    className="absolute left-0 top-full mt-1 w-72 bg-white border border-gray-200 shadow-xl rounded-md z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                    role="menu"
                    aria-label="About Jefferson County submenu"
                  >
                    <div className="py-2">
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        County History
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Elected Officials
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Demographics
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                        Location & Geography
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* County Government */}
              <div className="relative" data-dropdown="government">
                <button
                  className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5 flex items-center gap-1.5"
                  onMouseEnter={() => setOpenDropdown('government')}
                  onClick={() => setOpenDropdown(openDropdown === 'government' ? null : 'government')}
                  aria-expanded={openDropdown === 'government'}
                  aria-haspopup="true"
                  aria-label="County Government menu"
                >
                  County Government
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'government' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'government' && (
                  <div
                    className="absolute left-0 top-full mt-1 w-80 bg-white border border-gray-200 shadow-xl rounded-md z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                    role="menu"
                    aria-label="County Government submenu"
                  >
                    <div className="py-2">
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        County Commission
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Agendas, Minutes, and Webcasts
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Budget Information
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Ordinances
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                        Boards and Commissions
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Departments */}
              <a href="/demo" className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5">
                Departments
              </a>

              {/* Visiting */}
              <div className="relative" data-dropdown="visiting">
                <button
                  className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5 flex items-center gap-1.5"
                  onMouseEnter={() => setOpenDropdown('visiting')}
                  onClick={() => setOpenDropdown(openDropdown === 'visiting' ? null : 'visiting')}
                  aria-expanded={openDropdown === 'visiting'}
                  aria-haspopup="true"
                  aria-label="Visiting menu"
                >
                  Visiting
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'visiting' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'visiting' && (
                  <div
                    className="absolute left-0 top-full mt-1 w-64 bg-white border border-gray-200 shadow-xl rounded-md z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                    role="menu"
                    aria-label="Visiting submenu"
                  >
                    <div className="py-2">
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Attractions
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Parks & Recreation
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Events
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                        Tourism Information
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Community */}
              <div className="relative" data-dropdown="community">
                <button
                  className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5 flex items-center gap-1.5"
                  onMouseEnter={() => setOpenDropdown('community')}
                  onClick={() => setOpenDropdown(openDropdown === 'community' ? null : 'community')}
                  aria-expanded={openDropdown === 'community'}
                  aria-haspopup="true"
                  aria-label="Community menu"
                >
                  Community
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'community' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'community' && (
                  <div
                    className="absolute left-0 top-full mt-1 w-72 bg-white border border-gray-200 shadow-xl rounded-md z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                    role="menu"
                    aria-label="Community submenu"
                  >
                    <div className="py-2">
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Community Services
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Education and Training
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Health Resources
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                        Housing & Development
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Find It Fast */}
              <div className="relative ml-3" data-dropdown="find">
                <button
                  className="bg-county-blue text-white px-5 py-2.5 rounded font-medium hover:bg-county-blue-secondary transition-all focus:outline-none focus:ring-2 focus:ring-county-blue focus:ring-offset-2 flex items-center gap-1.5 shadow-sm"
                  onMouseEnter={() => setOpenDropdown('find')}
                  onClick={() => setOpenDropdown(openDropdown === 'find' ? null : 'find')}
                  aria-expanded={openDropdown === 'find'}
                  aria-haspopup="true"
                  aria-label="Find It Fast menu"
                >
                  Find It Fast
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'find' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'find' && (
                  <div
                    className="absolute right-0 top-full mt-1 w-72 bg-white border border-gray-200 shadow-xl rounded-md z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                    role="menu"
                    aria-label="Find It Fast submenu"
                  >
                    <div className="py-2">
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Online Payments
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Property Records
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Employment Opportunities
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        Forms & Documents
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                        GIS Maps
                      </a>
                      <a href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                        Permits & Licenses
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-county-blue" 
              aria-label="Open navigation menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-county-blue text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2947]/95 via-[#2f4e8a]/85 to-[#3f5fa3]/70"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          {/* Editorial width for intentional feel */}
          <div className="max-w-2xl">
            <p className="text-sm tracking-widest uppercase text-white mb-4 font-semibold drop-shadow-lg">
              Official website of Jefferson County, West Virginia
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-2xl">
              Welcome to Jefferson County, West Virginia
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white leading-relaxed drop-shadow-lg font-medium">
              Serving our community with responsive government services, rich history, and natural beauty.
            </p>
            <a
              href="/demo"
              className="inline-block bg-county-gold text-county-dark px-8 py-4 rounded font-bold text-lg hover:bg-county-gold/90 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-county-blue shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Navigate to county services section"
            >
              Find County Services
            </a>
          </div>
        </div>
      </section>

      {/* Quick Access Section - Key Improvement */}
      <section id="services" className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-county-dark mb-5 tracking-tight">
              Quick Access to Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find the services and information you need quickly and easily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <a
              href="/demo"
              className="group bg-county-gray border border-gray-200 hover:border-county-blue rounded-lg p-7 transition-all focus:outline-none focus:ring-2 focus:ring-county-blue focus:ring-offset-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-county-blue rounded-lg flex items-center justify-center group-hover:bg-county-blue-secondary transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-county-dark mb-2 group-hover:text-county-blue transition-colors">
                    Emergency Alerts
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get important updates and emergency notifications.
                  </p>
                </div>
              </div>
            </a>

            {/* Service Card 2 */}
            <a
              href="/demo"
              className="group bg-county-gray border border-gray-200 hover:border-county-blue rounded-lg p-7 transition-all focus:outline-none focus:ring-2 focus:ring-county-blue focus:ring-offset-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-county-blue rounded-lg flex items-center justify-center group-hover:bg-county-blue-secondary transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-county-dark mb-2 group-hover:text-county-blue transition-colors">
                    Parks &amp; Recreation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Explore parks, trails, and recreational facilities.
                  </p>
                </div>
              </div>
            </a>

            {/* Service Card 3 */}
            <a
              href="/demo"
              className="group bg-county-gray border border-gray-200 hover:border-county-blue rounded-lg p-7 transition-all focus:outline-none focus:ring-2 focus:ring-county-blue focus:ring-offset-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-county-blue rounded-lg flex items-center justify-center group-hover:bg-county-blue-secondary transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-county-dark mb-2 group-hover:text-county-blue transition-colors">
                    Meetings &amp; Agendas
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    View upcoming meetings and meeting agendas.
                  </p>
                </div>
              </div>
            </a>

            {/* Service Card 4 */}
            <a
              href="/demo"
              className="group bg-county-gray border border-gray-200 hover:border-county-blue rounded-lg p-7 transition-all focus:outline-none focus:ring-2 focus:ring-county-blue focus:ring-offset-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-county-blue rounded-lg flex items-center justify-center group-hover:bg-county-blue-secondary transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-county-dark mb-2 group-hover:text-county-blue transition-colors">
                    Public Notices
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Read official public notices and announcements.
                  </p>
                </div>
              </div>
            </a>

            {/* Service Card 5 */}
            <a
              href="/demo"
              className="group bg-county-gray border border-gray-200 hover:border-county-blue rounded-lg p-7 transition-all focus:outline-none focus:ring-2 focus:ring-county-blue focus:ring-offset-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-county-blue rounded-lg flex items-center justify-center group-hover:bg-county-blue-secondary transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-county-dark mb-2 group-hover:text-county-blue transition-colors">
                    Online Payments
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Pay taxes, fees, and fines securely online.
                  </p>
                </div>
              </div>
            </a>

            {/* Service Card 6 */}
            <a
              href="/demo"
              className="group bg-county-gray border border-gray-200 hover:border-county-blue rounded-lg p-7 transition-all focus:outline-none focus:ring-2 focus:ring-county-blue focus:ring-offset-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-county-blue rounded-lg flex items-center justify-center group-hover:bg-county-blue-secondary transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-county-dark mb-2 group-hover:text-county-blue transition-colors">
                    Clerk Services
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Access county clerk records and services.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="pt-20 pb-20 bg-county-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* News Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-county-dark mb-10 tracking-tight">News &amp; Announcements</h2>
              <div className="space-y-5">
                {/* News Item 1 */}
                <article className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <time className="text-xs uppercase tracking-wider text-county-blue font-semibold" dateTime="2026-01-02">
                    January 2, 2026
                  </time>
                  <h3 className="text-lg font-semibold text-county-dark mt-3 mb-2">
                    <a href="/demo" className="hover:text-county-blue focus:outline-none focus:ring-2 focus:ring-county-blue rounded">
                      County Commission Meeting Schedule for January Released
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The Jefferson County Commission has announced the meeting schedule for January. All meetings are open to the public and will be held in the Commission chambers.
                  </p>
                </article>

                {/* News Item 2 */}
                <article className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <time className="text-xs uppercase tracking-wider text-county-blue font-semibold" dateTime="2025-12-28">
                    December 28, 2025
                  </time>
                  <h3 className="text-lg font-semibold text-county-dark mt-3 mb-2">
                    <a href="/demo" className="hover:text-county-blue focus:outline-none focus:ring-2 focus:ring-county-blue rounded">
                      New Recreation Programs Available for Winter 2026
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Registration is now open for winter recreation programs including youth basketball, indoor swimming lessons, and senior fitness classes.
                  </p>
                </article>

                {/* News Item 3 */}
                <article className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <time className="text-xs uppercase tracking-wider text-county-blue font-semibold" dateTime="2025-12-20">
                    December 20, 2025
                  </time>
                  <h3 className="text-lg font-semibold text-county-dark mt-3 mb-2">
                    <a href="/demo" className="hover:text-county-blue focus:outline-none focus:ring-2 focus:ring-county-blue rounded">
                      Property Tax Payment Deadline Approaching
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Property owners are reminded that the first half of property taxes are due by January 15, 2026. Online payment options are available.
                  </p>
                </article>

                <div className="text-center pt-6">
                  <a
                    href="/demo"
                    className="inline-flex items-center text-county-blue hover:text-county-blue-secondary font-semibold focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-2 py-1"
                  >
                    View All News
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Events Calendar - Visual separation */}
            <div className="lg:border-l-2 lg:border-gray-300 lg:pl-10">
              <h2 className="text-3xl font-semibold text-county-dark mb-10 tracking-tight">Upcoming Events</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                {/* Calendar Header */}
                <div className="text-center mb-6 pb-4 border-b-2 border-county-blue/20">
                  <h3 className="text-lg font-semibold text-county-dark">January 2026</h3>
                </div>

                {/* Event List */}
                <div className="space-y-5">
                  <div className="border-l-3 border-county-blue pl-4 py-2">
                    <time className="text-xs uppercase tracking-wider text-county-blue font-bold" dateTime="2026-01-08">
                      JAN 8
                    </time>
                    <h4 className="font-semibold text-county-dark mt-2">County Commission Meeting</h4>
                    <p className="text-sm text-gray-500 mt-1">9:00 AM - Commission Chambers</p>
                  </div>

                  <div className="border-l-3 border-county-blue pl-4 py-2">
                    <time className="text-xs uppercase tracking-wider text-county-blue font-bold" dateTime="2026-01-15">
                      JAN 15
                    </time>
                    <h4 className="font-semibold text-county-dark mt-2">Planning Commission Meeting</h4>
                    <p className="text-sm text-gray-500 mt-1">6:00 PM - County Building</p>
                  </div>

                  <div className="border-l-3 border-county-blue pl-4 py-2">
                    <time className="text-xs uppercase tracking-wider text-county-blue font-bold" dateTime="2026-01-20">
                      JAN 20
                    </time>
                    <h4 className="font-semibold text-county-dark mt-2">Parks Advisory Board</h4>
                    <p className="text-sm text-gray-500 mt-1">5:30 PM - Recreation Center</p>
                  </div>

                  <div className="border-l-3 border-county-blue pl-4 py-2">
                    <time className="text-xs uppercase tracking-wider text-county-blue font-bold" dateTime="2026-01-22">
                      JAN 22
                    </time>
                    <h4 className="font-semibold text-county-dark mt-2">County Commission Meeting</h4>
                    <p className="text-sm text-gray-500 mt-1">9:00 AM - Commission Chambers</p>
                  </div>
                </div>

                <div className="mt-6 text-center pt-4 border-t border-gray-200">
                  <a
                    href="/demo"
                    className="text-county-blue hover:text-county-blue-secondary font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-2 py-1"
                  >
                    View Full Calendar →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2f4e8a] text-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* About Column */}
            <div>
              <h3 className="text-base font-semibold mb-5 text-white">About Jefferson County</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                    County History
                  </a>
                </li>
                <li>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                    Elected Officials
                  </a>
                </li>
                <li>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                    Employment
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-base font-semibold mb-5 text-white">Services</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                    Permits &amp; Licenses
                  </a>
                </li>
                <li>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                    Property Records
                  </a>
                </li>
                <li>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                    Tax Information
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-base font-semibold mb-5 text-white">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                    Forms &amp; Documents
                  </a>
                </li>
                <li>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                    GIS Maps
                  </a>
                </li>
                <li>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-base font-semibold mb-5 text-white">Contact Us</h3>
              <address className="not-italic text-sm space-y-2 leading-relaxed">
                <p>Jefferson County Courthouse</p>
                <p>100 E. Washington Street</p>
                <p>Charles Town, WV 25414</p>
                <p className="pt-3">Phone: (304) 728-3000</p>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-white/80">
                &copy; 2026 Jefferson County, West Virginia. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a href="/demo" className="text-sm hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                  Privacy Policy
                </a>
                <a href="/demo" className="text-sm hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">
                  Terms of Use
                </a>
                {/* Social Icons */}
                <div className="flex items-center space-x-3 ml-4">
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="/demo" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

