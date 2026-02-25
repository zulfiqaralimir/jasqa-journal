import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import HeroBanner from '@/components/HeroBanner'
import Link from 'next/link'

// Revalidate every 60 seconds
export const revalidate = 60

const announcementsQuery = groq`*[_type == "announcement" && publishedAt <= now() && (expiresAt == null || expiresAt > now())] | order(pinned desc, publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  type,
  priority,
  excerpt,
  publishedAt,
  featured,
  pinned
}`

const upcomingEventsQuery = groq`*[_type == "announcement" && type == "event" && publishedAt <= now()] | order(publishedAt desc)[0...2] {
  _id,
  title,
  excerpt,
  publishedAt,
  externalLink
}`

async function getData() {
  const [announcements, upcomingEvents] = await Promise.all([
    client.fetch(announcementsQuery),
    client.fetch(upcomingEventsQuery),
  ])

  return { announcements, upcomingEvents }
}

export default async function News() {
  const { announcements, upcomingEvents } = await getData()

  const getTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      'call-for-papers': 'Call for Papers',
      'special-issue': 'Special Issue',
      'achievement': 'Achievement',
      'new-feature': 'New Feature',
      'editorial': 'Editorial',
      'publication': 'Publication',
      'event': 'Event',
      'conference': 'Conference',
      'award': 'Award',
      'general': 'General',
    }
    return labels[type] || type
  }

  const getPriorityColor = (priority: string) => {
    const colors: { [key: string]: string } = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-blue-100 text-blue-800',
      low: 'bg-gray-100 text-gray-800',
    }
    return colors[priority] || colors.medium
  }

  return (
    <div>
      <HeroBanner
        subtitle="News & Announcements"
        title="Stay Updated with JASQA"
        description="Latest news, announcements, and upcoming events"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Announcements */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Announcements</h2>

            {announcements.length > 0 ? (
              <div className="space-y-6">
                {announcements.map((announcement: any) => (
                  <article key={announcement._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-sm text-gray-500">
                        {new Date(announcement.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(announcement.priority)}`}>
                        {getTypeLabel(announcement.type)}
                      </span>
                      {announcement.pinned && (
                        <span className="text-blue-600 text-sm font-semibold">📌 Pinned</span>
                      )}
                      {announcement.featured && (
                        <span className="text-yellow-600 text-sm font-semibold">⭐ Featured</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {announcement.excerpt}
                    </p>
                    <Link
                      href={`/news/${announcement.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read More &rarr;
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">No announcements at this time.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-blue-100 text-sm mb-4">
                Get the latest updates delivered to your inbox
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg mb-3 text-gray-900"
              />
              <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50">
                Subscribe
              </button>
            </div>

            {/* Upcoming Events */}
            {upcomingEvents.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-6">
                  {upcomingEvents.map((event: any) => (
                    <div key={event._id} className="pb-6 border-b border-gray-200 last:border-0">
                      <p className="text-sm text-blue-600 font-semibold mb-2">
                        {new Date(event.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        {event.excerpt}
                      </p>
                      {event.externalLink && (
                        <a
                          href={event.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm font-medium"
                        >
                          Learn More →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Social Media */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold">
                  Twitter
                </button>
                <button className="flex-1 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 font-semibold">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have News to Share?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            If you have announcements, events, or news relevant to the JASQA community,
            we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  )
}
