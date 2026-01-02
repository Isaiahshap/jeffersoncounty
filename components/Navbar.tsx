"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center h-full focus:outline-none focus:ring-2 focus:ring-county-blue rounded">
              <Image
                src="/logo.png"
                alt="Jefferson County, West Virginia"
                width={500}
                height={150}
                className="h-[70px] sm:h-[90px] w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5" aria-label="Main navigation">
            {/* About Jefferson County */}
            <div className="relative" data-dropdown="about">
              <button
                className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5 flex items-center gap-1.5 whitespace-nowrap"
                onMouseEnter={() => setOpenDropdown('about')}
                onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                aria-expanded={openDropdown === 'about'}
                aria-haspopup="true"
                aria-label="About Jefferson County menu"
              >
                About
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
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      County History
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Elected Officials
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Demographics
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                      Location & Geography
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* County Government */}
            <div className="relative" data-dropdown="government">
              <button
                className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5 flex items-center gap-1.5 whitespace-nowrap"
                onMouseEnter={() => setOpenDropdown('government')}
                onClick={() => setOpenDropdown(openDropdown === 'government' ? null : 'government')}
                aria-expanded={openDropdown === 'government'}
                aria-haspopup="true"
                aria-label="County Government menu"
              >
                Government
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
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      County Commission
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Agendas, Minutes, and Webcasts
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Budget Information
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Ordinances
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                      Boards and Commissions
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Departments */}
            <Link href="/demo" className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5 whitespace-nowrap">
              Departments
            </Link>

            {/* Visiting */}
            <div className="relative" data-dropdown="visiting">
              <button
                className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5 flex items-center gap-1.5 whitespace-nowrap"
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
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Attractions
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Parks & Recreation
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Events
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                      Tourism Information
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Community */}
            <div className="relative" data-dropdown="community">
              <button
                className="text-county-dark hover:bg-county-blue/10 hover:text-county-blue font-medium transition-all focus:outline-none focus:ring-2 focus:ring-county-blue rounded px-4 py-2.5 flex items-center gap-1.5 whitespace-nowrap"
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
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Community Services
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Education and Training
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Health Resources
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                      Housing & Development
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Find It Fast */}
            <div className="relative ml-3" data-dropdown="find">
              <button
                className="bg-county-blue text-white px-5 py-2.5 rounded font-medium hover:bg-county-blue-secondary transition-all focus:outline-none focus:ring-2 focus:ring-county-blue focus:ring-offset-2 flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                onMouseEnter={() => setOpenDropdown('find')}
                onClick={() => setOpenDropdown(openDropdown === 'find' ? null : 'find')}
                aria-expanded={openDropdown === 'find'}
                aria-haspopup="true"
                aria-label="Find It Fast menu"
              >
                Services
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
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Online Payments
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Property Records
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Employment Opportunities
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      Forms & Documents
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium border-b border-gray-100" role="menuitem">
                      GIS Maps
                    </Link>
                    <Link href="/demo" className="block px-5 py-3 text-county-dark hover:bg-county-blue hover:text-white transition-colors font-medium" role="menuitem">
                      Permits & Licenses
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-county-blue" 
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
              {/* About */}
              <div>
                <button
                  className="w-full px-4 py-3 text-left text-county-dark hover:bg-county-gray rounded-md font-medium flex items-center justify-between"
                  onClick={() => setOpenDropdown(openDropdown === 'mobile-about' ? null : 'mobile-about')}
                  aria-expanded={openDropdown === 'mobile-about'}
                >
                  About
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'mobile-about' && (
                  <div className="pl-4 pt-2 pb-2 space-y-1">
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      County History
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Elected Officials
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Demographics
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Location & Geography
                    </Link>
                  </div>
                )}
              </div>

              {/* Government */}
              <div>
                <button
                  className="w-full px-4 py-3 text-left text-county-dark hover:bg-county-gray rounded-md font-medium flex items-center justify-between"
                  onClick={() => setOpenDropdown(openDropdown === 'mobile-government' ? null : 'mobile-government')}
                  aria-expanded={openDropdown === 'mobile-government'}
                >
                  Government
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-government' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'mobile-government' && (
                  <div className="pl-4 pt-2 pb-2 space-y-1">
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      County Commission
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Agendas, Minutes, and Webcasts
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Budget Information
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Ordinances
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Boards and Commissions
                    </Link>
                  </div>
                )}
              </div>

              {/* Departments */}
              <Link href="/demo" className="px-4 py-3 text-county-dark hover:bg-county-gray rounded-md font-medium">
                Departments
              </Link>

              {/* Visiting */}
              <div>
                <button
                  className="w-full px-4 py-3 text-left text-county-dark hover:bg-county-gray rounded-md font-medium flex items-center justify-between"
                  onClick={() => setOpenDropdown(openDropdown === 'mobile-visiting' ? null : 'mobile-visiting')}
                  aria-expanded={openDropdown === 'mobile-visiting'}
                >
                  Visiting
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-visiting' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'mobile-visiting' && (
                  <div className="pl-4 pt-2 pb-2 space-y-1">
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Attractions
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Parks & Recreation
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Events
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Tourism Information
                    </Link>
                  </div>
                )}
              </div>

              {/* Community */}
              <div>
                <button
                  className="w-full px-4 py-3 text-left text-county-dark hover:bg-county-gray rounded-md font-medium flex items-center justify-between"
                  onClick={() => setOpenDropdown(openDropdown === 'mobile-community' ? null : 'mobile-community')}
                  aria-expanded={openDropdown === 'mobile-community'}
                >
                  Community
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-community' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'mobile-community' && (
                  <div className="pl-4 pt-2 pb-2 space-y-1">
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Community Services
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Education and Training
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Health Resources
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-county-dark hover:bg-county-gray rounded-md text-sm">
                      Housing & Development
                    </Link>
                  </div>
                )}
              </div>

              {/* Services */}
              <div>
                <button
                  className="w-full px-4 py-3 text-left bg-county-blue text-white hover:bg-county-blue-secondary rounded-md font-medium flex items-center justify-between"
                  onClick={() => setOpenDropdown(openDropdown === 'mobile-services' ? null : 'mobile-services')}
                  aria-expanded={openDropdown === 'mobile-services'}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'mobile-services' && (
                  <div className="pl-4 pt-2 pb-2 space-y-1">
                    <Link href="/demo" className="block px-4 py-2 text-white/90 hover:bg-county-blue-secondary rounded-md text-sm">
                      Online Payments
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-white/90 hover:bg-county-blue-secondary rounded-md text-sm">
                      Property Records
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-white/90 hover:bg-county-blue-secondary rounded-md text-sm">
                      Employment Opportunities
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-white/90 hover:bg-county-blue-secondary rounded-md text-sm">
                      Forms & Documents
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-white/90 hover:bg-county-blue-secondary rounded-md text-sm">
                      GIS Maps
                    </Link>
                    <Link href="/demo" className="block px-4 py-2 text-white/90 hover:bg-county-blue-secondary rounded-md text-sm">
                      Permits & Licenses
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

