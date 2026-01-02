import Image from "next/image";
import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-county-gray flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Jefferson County, West Virginia"
              width={250}
              height={75}
              className="h-20 w-auto mx-auto"
            />
          </Link>
        </div>

        {/* Demo Notice Card */}
        <div className="bg-white rounded-lg shadow-xl border-2 border-county-blue/20 p-8 md:p-12">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-county-gold/20 rounded-full mb-4">
              <svg className="w-12 h-12 text-county-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-county-dark mb-3">
              Demonstration Website
            </h1>
            <div className="w-24 h-1 bg-county-blue mx-auto mb-6"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This is a conceptual sample homepage created as part of a website modernization proposal for Jefferson County, West Virginia.
            </p>

            <div className="bg-county-blue/5 border-l-4 border-county-blue p-6 my-8 rounded-r">
              <p className="font-semibold text-county-dark mb-3 text-lg">
                Proposal Prepared By:
              </p>
              <p className="text-xl font-bold text-county-blue mb-2">
                Yeshaya.dev LLC
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Principal:</span> Yeshaya Shapiro
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Purpose:</span> RFP Response - Website Modernization
              </p>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              This demonstration showcases improved usability, modern design standards, and accessibility compliance while respecting Jefferson County's existing brand identity.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              In a full implementation, this page would be replaced with actual county content, integrated systems, and live data sources.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-county-blue text-white px-8 py-4 rounded font-semibold hover:bg-county-blue-secondary transition-all focus:outline-none focus:ring-2 focus:ring-county-blue focus:ring-offset-2 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Homepage
            </Link>
            <a
              href="mailto:yeshaya@yeshaya.dev"
              className="inline-flex items-center justify-center bg-county-gold text-county-dark px-8 py-4 rounded font-semibold hover:bg-county-gold/90 transition-all focus:outline-none focus:ring-2 focus:ring-county-gold focus:ring-offset-2 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Yeshaya.dev
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Final structure, content, and functionality would be refined post-award in collaboration with Jefferson County stakeholders.
        </p>
      </div>
    </div>
  );
}

