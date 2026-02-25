import HeroBanner from '@/components/HeroBanner';

export default function PublicationEthics() {
  return (
    <div>
      <HeroBanner
        subtitle="Publication Ethics"
        title="Ethical Standards & Policies"
        description="Our commitment to integrity, transparency, and responsible research practices"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ethical Principles</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JASQA is committed to upholding the highest standards of publication ethics. We
            follow the guidelines established by the Committee on Publication Ethics (COPE) and
            expect all parties involved in the publication process to adhere to these principles.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Author Responsibilities</h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Originality</h3>
              <p className="text-gray-700">
                Authors must ensure that their work is entirely original. Any use of others' work
                or words must be properly cited and quoted.
              </p>
            </div>
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Integrity</h3>
              <p className="text-gray-700">
                Authors must present accurate research data and results. Fabrication or
                falsification of data is strictly prohibited.
              </p>
            </div>
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple Submission</h3>
              <p className="text-gray-700">
                Authors should not submit the same manuscript to multiple journals simultaneously.
                Previously published work cannot be resubmitted.
              </p>
            </div>
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Authorship</h3>
              <p className="text-gray-700">
                All listed authors must have made significant contributions to the research.
                Anyone who contributed significantly should be listed as an author.
              </p>
            </div>
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conflicts of Interest</h3>
              <p className="text-gray-700">
                Authors must disclose any financial or personal relationships that could
                inappropriately influence their work.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reviewer Responsibilities</h2>
          <ul className="space-y-3 text-gray-700 ml-6 list-disc">
            <li>Provide objective, constructive feedback to authors</li>
            <li>Maintain confidentiality of the review process</li>
            <li>Disclose conflicts of interest that may bias their review</li>
            <li>Complete reviews in a timely manner</li>
            <li>Alert editors to any ethical concerns or suspected misconduct</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Editorial Responsibilities</h2>
          <ul className="space-y-3 text-gray-700 ml-6 list-disc">
            <li>Make fair, unbiased decisions based on manuscript quality</li>
            <li>Maintain the confidentiality of the review process</li>
            <li>Handle allegations of misconduct promptly and appropriately</li>
            <li>Ensure the peer review process is rigorous and transparent</li>
            <li>Recuse themselves from decisions where they have conflicts of interest</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plagiarism Policy</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-gray-900 font-semibold mb-3">Zero Tolerance</p>
            <p className="text-gray-700 mb-4">
              JASQA has a zero-tolerance policy toward plagiarism. All submissions are screened
              using plagiarism detection software. Manuscripts found to contain plagiarized
              content will be immediately rejected.
            </p>
            <p className="text-gray-700">
              <strong>Consequences:</strong> Authors found guilty of plagiarism may be banned
              from submitting to JASQA for a period determined by the editorial board.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Handling Misconduct</h2>
          <div className="bg-blue-50 rounded-lg p-6 space-y-4">
            <p className="text-gray-700">
              If you suspect research misconduct, please report it to the editorial office at:
            </p>
            <p className="text-gray-900 font-semibold">ethics@jasqa-journal.org</p>
            <p className="text-gray-700">
              All allegations are investigated thoroughly and confidentially. We follow COPE
              guidelines for addressing publication misconduct.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Corrections and Retractions</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Erratum</h3>
              <p>
                Minor errors that do not affect the main conclusions may be corrected through an
                erratum notice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Retraction</h3>
              <p>
                Articles may be retracted if they contain serious errors, evidence of misconduct,
                or have been published elsewhere. Retraction notices are permanently linked to
                the original article.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About Ethics?</h3>
          <p className="text-gray-700 mb-4">
            If you have questions about our ethical standards or need guidance on ethical
            issues, please contact our ethics committee.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            Contact Ethics Committee
          </button>
        </section>
      </div>
    </div>
  );
}
