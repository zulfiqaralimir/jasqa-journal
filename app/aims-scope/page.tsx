import HeroBanner from '@/components/HeroBanner';

export default function AimsScope() {
  return (
    <div>
      <HeroBanner
        subtitle="Aims & Scope"
        title="Journal Focus and Coverage"
        description="Discover the research areas and topics covered by JASQA"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Aims</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            JASQA aims to publish high-quality, peer-reviewed research that advances the
            understanding and application of agentic AI systems and quantum computing
            technologies. We seek papers that demonstrate significant theoretical contributions,
            novel methodologies, or practical applications that push the boundaries of these
            rapidly evolving fields.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Scope</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The journal welcomes submissions across a broad range of topics, including but not
            limited to:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Agentic AI Systems
              </h3>
              <ul className="space-y-2 text-gray-700 ml-6 list-disc">
                <li>Multi-agent systems and coordination</li>
                <li>Autonomous decision-making and planning</li>
                <li>Reinforcement learning and adaptive agents</li>
                <li>Agent-based modeling and simulation</li>
                <li>Swarm intelligence and collective behavior</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Quantum Computing
              </h3>
              <ul className="space-y-2 text-gray-700 ml-6 list-disc">
                <li>Quantum algorithms and complexity</li>
                <li>Quantum machine learning</li>
                <li>Quantum error correction and fault tolerance</li>
                <li>Quantum hardware and architectures</li>
                <li>Quantum cryptography and security</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Synergistic Applications
              </h3>
              <ul className="space-y-2 text-gray-700 ml-6 list-disc">
                <li>Quantum-enhanced agentic systems</li>
                <li>Distributed quantum computing with autonomous agents</li>
                <li>Quantum-classical hybrid intelligent systems</li>
                <li>Applications in optimization, simulation, and AI</li>
                <li>Theoretical foundations of quantum agentic systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Article Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Articles</h3>
              <p className="text-gray-700 text-sm">
                Original research contributions with substantial findings
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Articles</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive surveys of specific research areas
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Notes</h3>
              <p className="text-gray-700 text-sm">
                Brief communications of significant technical results
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-700 text-sm">
                Detailed analysis of real-world implementations
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
