import HeroBanner from '@/components/HeroBanner';

export default function Contact() {
  return (
    <div>
      <HeroBanner
        subtitle="Contact Us"
        title="Get in Touch"
        description="We're here to help with your questions and inquiries"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john.doe@university.edu"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select a subject</option>
                  <option>Submission Inquiry</option>
                  <option>Peer Review</option>
                  <option>Subscription</option>
                  <option>Technical Support</option>
                  <option>Editorial Board</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

            <div className="space-y-8">
              {/* Editorial Office */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Editorial Office
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Email:</span>
                    <a href="mailto:editor@jasqa-journal.org" className="text-blue-600 hover:text-blue-800">
                      editor@jasqa-journal.org
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Phone:</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Address:</span>
                    <span>123 Academic Way<br />Cambridge, MA 02138<br />United States</span>
                  </div>
                </div>
              </div>

              {/* Specific Contacts */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Specific Inquiries
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Manuscript Submissions</p>
                    <a href="mailto:submissions@jasqa-journal.org" className="text-blue-600 hover:text-blue-800 text-sm">
                      submissions@jasqa-journal.org
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Peer Review</p>
                    <a href="mailto:review@jasqa-journal.org" className="text-blue-600 hover:text-blue-800 text-sm">
                      review@jasqa-journal.org
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ethics & Misconduct</p>
                    <a href="mailto:ethics@jasqa-journal.org" className="text-blue-600 hover:text-blue-800 text-sm">
                      ethics@jasqa-journal.org
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Technical Support</p>
                    <a href="mailto:support@jasqa-journal.org" className="text-blue-600 hover:text-blue-800 text-sm">
                      support@jasqa-journal.org
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Subscriptions</p>
                    <a href="mailto:subscriptions@jasqa-journal.org" className="text-blue-600 hover:text-blue-800 text-sm">
                      subscriptions@jasqa-journal.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * We typically respond to inquiries within 1-2 business days
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Stay connected and get the latest updates
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 font-semibold">
                    Twitter
                  </button>
                  <button className="bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 font-semibold">
                    LinkedIn
                  </button>
                  <button className="bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 font-semibold">
                    Facebook
                  </button>
                  <button className="bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 font-semibold">
                    YouTube
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for Quick Answers?
          </h3>
          <p className="text-gray-700 mb-6">
            Check out our Frequently Asked Questions section for immediate answers to
            common inquiries about submissions, peer review, and publication.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            View FAQ
          </button>
        </section>
      </div>
    </div>
  );
}
