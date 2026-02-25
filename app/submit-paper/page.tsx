import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function SubmitPaper() {
  return (
    <div>
      <HeroBanner
        subtitle="Submit Paper"
        title="Submit Your Research to JASQA"
        description="Join our community of leading researchers in agentic AI and quantum computing"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              JASQA welcomes original research articles, review papers, technical notes, and
              case studies in the areas of agentic AI and quantum computing. All submissions
              undergo a rigorous double-blind peer review process.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Before You Submit</h2>
          <div className="bg-blue-50 rounded-lg p-6 space-y-4">
            <div className="flex items-start">
              <span className="text-blue-600 font-bold text-xl mr-3">1.</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Review Author Guidelines</h3>
                <p className="text-gray-700 text-sm">
                  Ensure your manuscript follows our formatting and style requirements.
                </p>
                <Link href="/author-guidelines" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Guidelines →
                </Link>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 font-bold text-xl mr-3">2.</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Understand the Review Process</h3>
                <p className="text-gray-700 text-sm">
                  Learn about our peer review procedures and timeline.
                </p>
                <Link href="/peer-review" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Review Process →
                </Link>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 font-bold text-xl mr-3">3.</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Check Publication Ethics</h3>
                <p className="text-gray-700 text-sm">
                  Familiarize yourself with our ethical standards and policies.
                </p>
                <Link href="/publication-ethics" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Ethics Policy →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Submission Form</h2>
          <form className="space-y-6 bg-white border border-gray-200 rounded-lg p-8">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Manuscript Title *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter the full title of your manuscript"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Article Type *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select article type</option>
                <option>Research Article</option>
                <option>Review Article</option>
                <option>Technical Note</option>
                <option>Case Study</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Author Information *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                placeholder="Lead author name"
              />
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                placeholder="Lead author email"
              />
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Affiliation"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Abstract *
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your abstract (max 300 words)"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Keywords *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter 4-6 keywords separated by commas"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Upload Manuscript *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-2">Drag and drop your file here, or click to browse</p>
                <p className="text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 10MB)</p>
                <button
                  type="button"
                  className="mt-4 bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50"
                >
                  Choose File
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-3"
                id="terms"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I confirm that this manuscript is original work and has not been published
                elsewhere. I agree to JASQA's publication ethics and policies.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg"
            >
              Submit Manuscript
            </button>
          </form>
        </section>

        <section className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            If you have questions about the submission process, please contact our editorial team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
          >
            Contact Editorial Office
          </Link>
        </section>
      </div>
    </div>
  );
}
