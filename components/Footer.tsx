import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">JASQA Journal</h3>
            <p className="text-gray-400 text-sm">
              Journal of Agentic Synergy & Quantum AI
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">For Authors</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/submit-paper" className="text-gray-400 hover:text-white">Submit Paper</Link></li>
              <li><Link href="/author-guidelines" className="text-gray-400 hover:text-white">Author Guidelines</Link></li>
              <li><Link href="/peer-review" className="text-gray-400 hover:text-white">Peer Review</Link></li>
              <li><Link href="/publication-ethics" className="text-gray-400 hover:text-white">Publication Ethics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Journal</Link></li>
              <li><Link href="/aims-scope" className="text-gray-400 hover:text-white">Aims & Scope</Link></li>
              <li><Link href="/editorial-board" className="text-gray-400 hover:text-white">Editorial Board</Link></li>
              <li><Link href="/indexing-metrics" className="text-gray-400 hover:text-white">Indexing & Metrics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/browse-issues" className="text-gray-400 hover:text-white">Browse Issues</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white">News & Announcements</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} JASQA Journal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
