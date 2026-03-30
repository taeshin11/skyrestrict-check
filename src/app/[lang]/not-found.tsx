import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-[#1A202C] mb-3">Restricted Airspace</h1>
        <p className="text-[#64748B] mb-8">
          This page doesn&apos;t exist — looks like you&apos;ve entered a no-fly zone.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-xl transition-colors"
        >
          Back to Map
        </Link>
      </div>
    </main>
  );
}
