import Image from "next/image";
import DemoBanner from "@/components/DemoBanner";
import TopUtilityBar from "@/components/TopUtilityBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <DemoBanner />
      <TopUtilityBar />
      <Navbar />

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
                    <a href="/news/sample-announcement" className="hover:text-county-blue focus:outline-none focus:ring-2 focus:ring-county-blue rounded">
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

      <Footer />
    </div>
  );
}

