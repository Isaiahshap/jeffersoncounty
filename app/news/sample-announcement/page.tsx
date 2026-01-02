import Link from "next/link";
import DemoBanner from "@/components/DemoBanner";
import TopUtilityBar from "@/components/TopUtilityBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SampleAnnouncement() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoBanner />
      <TopUtilityBar />
      <Navbar />

      {/* Breadcrumb */}
      <nav className="bg-county-gray border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-county-blue hover:text-county-blue-secondary">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <Link href="/" className="text-county-blue hover:text-county-blue-secondary">
                News &amp; Announcements
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-county-dark font-medium" aria-current="page">
              County Commission Meeting Schedule for January Released
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to News Link */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-county-blue hover:text-county-blue-secondary font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-county-blue rounded"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to News &amp; Announcements
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8 pb-8 border-b-2 border-gray-200">
            <time className="text-sm text-county-blue font-semibold uppercase tracking-wide" dateTime="2026-01-02">
              January 2, 2026
            </time>
            <h1 className="text-4xl font-bold text-county-dark mt-4 mb-4 leading-tight">
              County Commission Meeting Schedule for January Released
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Jefferson County Commission has announced the meeting schedule for January 2026. All meetings are open to the public and will be held in the Commission chambers at the County Courthouse.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              The Jefferson County Commission has released its meeting schedule for the month of January 2026. Regular commission meetings will be held on the second and fourth Thursdays of the month, beginning at 9:00 AM in the Commission Chambers located at the Jefferson County Courthouse, 100 E. Washington Street, Charles Town, West Virginia.
            </p>

            <h2 className="text-2xl font-bold text-county-dark mt-8 mb-4">Meeting Dates</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>Thursday, January 8, 2026 - 9:00 AM</li>
              <li>Thursday, January 22, 2026 - 9:00 AM</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              All commission meetings are open to the public. Citizens are encouraged to attend and participate in the public comment period, which is held at the beginning of each regular meeting. Agendas and meeting materials will be available on the county website 48 hours prior to each meeting.
            </p>

            <h2 className="text-2xl font-bold text-county-dark mt-8 mb-4">Public Participation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Members of the public who wish to address the commission during the public comment period should register with the County Clerk's office by 4:00 PM on the Wednesday preceding the meeting. Written comments may also be submitted via email or in person at the County Clerk's office.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              For more information about commission meetings, agendas, or to request accommodations, please contact the County Clerk's office at (304) 728-3000 or visit the County Government section of our website.
            </p>
          </div>

          {/* Attachments/Links Section */}
          <div className="bg-county-gray rounded-lg p-6 mb-12">
            <h3 className="text-xl font-semibold text-county-dark mb-4">Related Documents &amp; Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/demo" className="flex items-center text-county-blue hover:text-county-blue-secondary font-medium">
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  January 2026 Meeting Agenda (PDF, 245 KB)
                </Link>
              </li>
              <li>
                <Link href="/demo" className="flex items-center text-county-blue hover:text-county-blue-secondary font-medium">
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Watch Live Meeting Webcast
                </Link>
              </li>
              <li>
                <Link href="/demo" className="flex items-center text-county-blue hover:text-county-blue-secondary font-medium">
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Full Commission Meeting Calendar
                </Link>
              </li>
              <li>
                <Link href="/demo" className="flex items-center text-county-blue hover:text-county-blue-secondary font-medium">
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Public Comment Guidelines (PDF, 156 KB)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="border-t-2 border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-county-dark mb-4">For More Information</h3>
            <div className="bg-county-gray rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">County Clerk's Office</span>
              </p>
              <p className="text-gray-700 mb-1">
                100 E. Washington Street
              </p>
              <p className="text-gray-700 mb-4">
                Charles Town, WV 25414
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Phone:</span> (304) 728-3000
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> <Link href="/demo" className="text-county-blue hover:text-county-blue-secondary">clerk@jeffersoncountywv.org</Link>
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

