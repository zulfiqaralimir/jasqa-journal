import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              JASQA
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              About
            </Link>
            <Link href="/aims-scope" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Aims & Scope
            </Link>
            <Link href="/editorial-board" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Editorial Board
            </Link>
            <Link href="/browse-issues" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Browse Issues
            </Link>
            <Link href="/submit-paper" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Submit
            </Link>
            <Link href="/author-guidelines" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              For Authors
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              News
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
