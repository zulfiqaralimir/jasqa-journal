import HeroBanner from '@/components/HeroBanner';

export default function About() {
  return (
    <div>
      <HeroBanner
        subtitle="About"
        title="About JASQA Journal"
        description="Learn more about our mission, vision, and commitment to excellence"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Journal of Agentic Synergy & Quantum AI (JASQA) is dedicated to advancing
            the frontiers of autonomous intelligent systems and quantum computing research.
            We provide a premier platform for researchers, practitioners, and academics to
            share groundbreaking discoveries and innovations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            To be the leading Q1 journal at the intersection of agentic AI and quantum
            computing, fostering collaboration and driving transformative research that
            shapes the future of intelligent systems.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Publication Standards</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Rigorous double-blind peer review process</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Open access publication model</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Rapid review and publication timeline</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>High ethical and quality standards</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Global editorial board of leading experts</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> editor@jasqa-journal.org
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Publisher:</strong> JASQA Publishing House
            </p>
            <p className="text-gray-700">
              <strong>ISSN:</strong> 1234-5678 (Online)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
