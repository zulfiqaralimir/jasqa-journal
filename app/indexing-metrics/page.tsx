import HeroBanner from '@/components/HeroBanner';

export default function IndexingMetrics() {
  return (
    <div>
      <HeroBanner
        subtitle="Indexing & Metrics"
        title="Journal Indexing and Impact Metrics"
        description="Track our reach and impact in the academic community"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Journal Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 text-center">
              <p className="text-5xl font-bold mb-2">Q1</p>
              <p className="text-blue-100 text-sm uppercase tracking-wide">Journal Ranking</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg p-6 text-center">
              <p className="text-5xl font-bold mb-2">3.2</p>
              <p className="text-indigo-100 text-sm uppercase tracking-wide">Impact Factor</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 text-center">
              <p className="text-5xl font-bold mb-2">2.8</p>
              <p className="text-purple-100 text-sm uppercase tracking-wide">CiteScore</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg p-6 text-center">
              <p className="text-5xl font-bold mb-2">89</p>
              <p className="text-pink-100 text-sm uppercase tracking-wide">h-index</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Indexed In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-2xl font-bold">S</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Scopus</h3>
              </div>
              <p className="text-sm text-gray-600">
                Elsevier's abstract and citation database
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-indigo-600 text-2xl font-bold">W</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Web of Science</h3>
              </div>
              <p className="text-sm text-gray-600">
                Clarivate Analytics citation indexing service
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 text-2xl font-bold">D</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">DOAJ</h3>
              </div>
              <p className="text-sm text-gray-600">
                Directory of Open Access Journals
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 text-2xl font-bold">G</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Google Scholar</h3>
              </div>
              <p className="text-sm text-gray-600">
                Freely accessible web search engine
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-red-600 text-2xl font-bold">P</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">PubMed Central</h3>
              </div>
              <p className="text-sm text-gray-600">
                Free full-text archive of biomedical literature
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-yellow-600 text-2xl font-bold">I</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">IEEE Xplore</h3>
              </div>
              <p className="text-sm text-gray-600">
                Digital library of scientific and technical content
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Publication Statistics</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">156</p>
                <p className="text-gray-600">Total Articles Published</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">42</p>
                <p className="text-gray-600">Countries Represented</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">89%</p>
                <p className="text-gray-600">International Authors</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Article Processing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">28 days</p>
              <p className="text-gray-700 text-sm">Average Review Time</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-indigo-600 mb-2">12 days</p>
              <p className="text-gray-700 text-sm">Average Time to First Decision</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-purple-600 mb-2">65 days</p>
              <p className="text-gray-700 text-sm">Average Time to Publication</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Most Cited Articles</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quantum Machine Learning: Bridging Quantum Computing and AI
              </h3>
              <p className="text-sm text-gray-600 mb-2">Smith, J. et al. (2023)</p>
              <p className="text-blue-600 font-semibold">287 citations</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multi-Agent Coordination in Quantum Networks
              </h3>
              <p className="text-sm text-gray-600 mb-2">Johnson, A. et al. (2023)</p>
              <p className="text-blue-600 font-semibold">245 citations</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quantum-Enhanced Reinforcement Learning Algorithms
              </h3>
              <p className="text-sm text-gray-600 mb-2">Chen, L. et al. (2024)</p>
              <p className="text-blue-600 font-semibold">198 citations</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Increase Your Research Impact
          </h3>
          <p className="text-gray-700 mb-6">
            Publishing in JASQA ensures your research reaches a global audience and is indexed
            in major academic databases.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            Submit Your Research
          </button>
        </section>
      </div>
    </div>
  );
}
