import HeroBanner from '@/components/HeroBanner';

export default function PeerReview() {
  return (
    <div>
      <HeroBanner
        subtitle="Peer Review"
        title="Peer Review Process"
        description="Understanding our rigorous double-blind peer review system"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Review Process Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JASQA employs a rigorous double-blind peer review process to ensure the highest
            quality of published research. All submissions are evaluated by at least two
            independent experts in the field.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Review Timeline</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Initial Screening (1-2 days)
                </h3>
                <p className="text-gray-700">
                  The editorial team reviews the manuscript for scope, quality, and adherence
                  to submission guidelines. Papers not meeting basic criteria may be desk-rejected.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Reviewer Assignment (3-5 days)
                </h3>
                <p className="text-gray-700">
                  The editor assigns at least two qualified reviewers based on their expertise
                  and availability.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Peer Review (3-4 weeks)
                </h3>
                <p className="text-gray-700">
                  Reviewers evaluate the manuscript for originality, methodology, significance,
                  and clarity. They provide detailed feedback and recommendations.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Editorial Decision (1 week)
                </h3>
                <p className="text-gray-700">
                  The editor synthesizes reviewer comments and makes a decision: Accept,
                  Minor Revisions, Major Revisions, or Reject.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Revision & Re-review (if needed)
                </h3>
                <p className="text-gray-700">
                  Authors address reviewer comments and resubmit. Revised manuscripts are
                  re-evaluated by the original reviewers.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Publication
                </h3>
                <p className="text-gray-700">
                  Once accepted, the manuscript undergoes copyediting and formatting before
                  being published online and assigned a DOI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Review Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Originality</h3>
              <p className="text-gray-700 text-sm">
                Is the research novel and does it make a significant contribution to the field?
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Methodology</h3>
              <p className="text-gray-700 text-sm">
                Are the methods sound, appropriate, and clearly described?
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
              <p className="text-gray-700 text-sm">
                Are the results clearly presented and properly analyzed?
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Significance</h3>
              <p className="text-gray-700 text-sm">
                Does the work have important implications for theory or practice?
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Clarity</h3>
              <p className="text-gray-700 text-sm">
                Is the manuscript well-written and logically organized?
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">References</h3>
              <p className="text-gray-700 text-sm">
                Is the literature review comprehensive and up-to-date?
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">For Reviewers</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <p className="text-gray-700 mb-6">
              We are always looking for qualified researchers to serve as peer reviewers.
              Reviewing manuscripts is an important service to the academic community and
              helps maintain the quality of published research.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Contribute to advancing your field</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Stay current with cutting-edge research</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Receive reviewer certificates</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Build your academic profile</span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
              Join Our Reviewer Pool
            </button>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Average Review Time</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">5-7</p>
              <p className="text-gray-700 text-sm">Days to first decision</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">4-6</p>
              <p className="text-gray-700 text-sm">Weeks for full review</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">8-10</p>
              <p className="text-gray-700 text-sm">Weeks to publication</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
