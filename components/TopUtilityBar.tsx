"use client";

import Link from "next/link";

export default function TopUtilityBar() {
  return (
    <div className="bg-county-blue text-white" role="navigation" aria-label="Utility navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          <nav className="flex items-center space-x-4 sm:space-x-6" aria-label="Quick links">
            <Link href="/demo" className="hover:text-county-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-county-blue rounded px-1" aria-label="Employee portal">
              Employees
            </Link>
            <Link href="/demo" className="hover:text-county-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-county-blue rounded px-1" aria-label="Career opportunities">
              Careers
            </Link>
            <Link href="/demo" className="hover:text-county-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-county-blue rounded px-1" aria-label="Bids and Requests for Proposals">
              Bids
            </Link>
            <Link href="/demo" className="hover:text-county-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-county-blue rounded px-1" aria-label="Contact information">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="relative">
              <label htmlFor="site-search" className="sr-only">Search website</label>
              <input
                id="site-search"
                type="search"
                placeholder="Search..."
                className="bg-white/10 border border-white/20 rounded px-2 sm:px-3 py-1 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 w-32 sm:w-48"
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
  );
}

