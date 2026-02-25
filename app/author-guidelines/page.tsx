import HeroBanner from '@/components/HeroBanner';

export default function AuthorGuidelines() {
  return (
    <div>
      <HeroBanner
        subtitle="For Authors"
        title="Author Guidelines"
        description="Comprehensive instructions for preparing and submitting your manuscript"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Manuscript Preparation</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Format Requirements</h3>
              <ul className="space-y-2 text-gray-700 ml-6 list-disc">
                <li>File format: Microsoft Word (.docx) or LaTeX</li>
                <li>Font: Times New Roman, 12pt</li>
                <li>Line spacing: Double-spaced</li>
                <li>Margins: 1 inch (2.54 cm) on all sides</li>
                <li>Page numbers: Bottom center</li>
                <li>Maximum length: 8,000 words for research articles</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manuscript Structure</h3>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">1. Title Page</p>
                  <p className="text-sm text-gray-700">
                    Include title, author names, affiliations, corresponding author contact
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">2. Abstract</p>
                  <p className="text-sm text-gray-700">
                    250-300 words, summarizing objectives, methods, results, and conclusions
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">3. Keywords</p>
                  <p className="text-sm text-gray-700">4-6 keywords for indexing purposes</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">4. Introduction</p>
                  <p className="text-sm text-gray-700">
                    Background, literature review, research objectives
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">5. Methodology</p>
                  <p className="text-sm text-gray-700">Detailed description of methods and materials</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">6. Results</p>
                  <p className="text-sm text-gray-700">Present findings with tables and figures</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">7. Discussion</p>
                  <p className="text-sm text-gray-700">Interpret results and compare with literature</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">8. Conclusion</p>
                  <p className="text-sm text-gray-700">Summarize key findings and implications</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">9. References</p>
                  <p className="text-sm text-gray-700">APA 7th edition format</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Figures and Tables</h2>
          <ul className="space-y-3 text-gray-700 ml-6 list-disc">
            <li>Submit figures in high resolution (minimum 300 dpi)</li>
            <li>Accepted formats: TIFF, EPS, or high-quality JPEG</li>
            <li>Number all figures and tables consecutively</li>
            <li>Include clear, descriptive captions</li>
            <li>Refer to all figures and tables in the text</li>
            <li>Place tables and figures after references or embed in text</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Citation Style</h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-900 font-semibold mb-3">
              JASQA uses APA 7th Edition citation style
            </p>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">In-text citation:</p>
                <p className="text-gray-700 font-mono bg-white p-2 rounded mt-1">
                  (Smith & Johnson, 2023)
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Reference list:</p>
                <p className="text-gray-700 font-mono bg-white p-2 rounded mt-1">
                  Smith, J., & Johnson, A. (2023). Quantum algorithms for machine learning.
                  Journal of Quantum Computing, 15(2), 123-145.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Supplementary Materials</h2>
          <p className="text-gray-700 mb-4">
            Authors may submit supplementary materials including:
          </p>
          <ul className="space-y-2 text-gray-700 ml-6 list-disc">
            <li>Appendices with additional data or analysis</li>
            <li>Source code and datasets</li>
            <li>Video demonstrations</li>
            <li>Extended mathematical proofs</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">LaTeX Template</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              We provide a LaTeX template to help authors format their manuscripts correctly.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
              Download LaTeX Template
            </button>
          </div>
        </section>

        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Important Note</h3>
          <p className="text-gray-700">
            Manuscripts not following these guidelines may be returned to authors for revision
            before entering the peer review process. Please ensure all requirements are met
            before submission.
          </p>
        </section>
      </div>
    </div>
  );
}
