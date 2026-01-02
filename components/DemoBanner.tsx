import Link from "next/link";

export default function DemoBanner() {
  return (
    <div className="bg-county-gold/10 border-b border-county-gold/30 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm text-county-dark/70 text-center">
          Conceptual sample homepage provided for RFP evaluation. Final structure and content would be refined post-award. <Link href="/news/sample-announcement" className="underline font-medium hover:text-county-blue transition-colors">Interior page pattern can be found here.</Link>
        </p>
      </div>
    </div>
  );
}

