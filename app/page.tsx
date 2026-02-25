import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import HeroBanner from '@/components/HeroBanner'
import SearchBar from '@/components/SearchBar'
import ArticleCard from '@/components/ArticleCard'
import IssueCard from '@/components/IssueCard'
import Link from 'next/link'

// Revalidate every 60 seconds
export const revalidate = 60

// Fetch featured articles
const featuredArticlesQuery = groq`*[_type == "article" && featured == true && status == "published"] | order(publishedAt desc)[0...4] {
  _id,
  title,
  "slug": slug.current,
  abstract,
  keywords,
  "authors": authors[]->{ name, affiliation },
  "issue": issue->{ volume, issue, year },
  pages,
  publishedAt,
  citations
}`

// Fetch latest issue
const latestIssueQuery = groq`*[_type == "issue" && status == "published"] | order(year desc, volume desc, issue desc)[0] {
  _id,
  volume,
  issue,
  year,
  "articleCount": count(*[_type == "article" && references(^._id) && status == "published"]),
  publishedDate
}`

async function getData() {
  const [featuredArticles, latestIssue] = await Promise.all([
    client.fetch(featuredArticlesQuery),
    client.fetch(latestIssueQuery),
  ])

  return { featuredArticles, latestIssue }
}

export default async function Home() {
  const { featuredArticles, latestIssue } = await getData()

  return (
    <div>
      <HeroBanner
        subtitle="Q1 Academic Journal"
        title="Journal of Agentic Synergy & Quantum AI"
        description="Advancing the frontiers of autonomous intelligent systems and quantum computing research"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="mb-16 flex justify-center">
          <SearchBar />
        </div>

        {/* Latest Issue */}
        {latestIssue && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Issue</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <IssueCard
                volume={latestIssue.volume.toString()}
                issue={latestIssue.issue.toString()}
                year={latestIssue.year.toString()}
                articleCount={latestIssue.articleCount}
                publishedDate={new Date(latestIssue.publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              />
            </div>
          </section>
        )}

        {/* Featured Articles */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            <Link href="/browse-issues" className="text-blue-600 hover:text-blue-800 font-medium">
              View All &rarr;
            </Link>
          </div>

          {featuredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((article: any) => (
                <ArticleCard
                  key={article._id}
                  id={article.slug}
                  title={article.title}
                  authors={article.authors.map((a: any) => a.name)}
                  abstract={article.abstract}
                  publishedDate={new Date(article.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                  volume={article.issue?.volume?.toString()}
                  issue={article.issue?.issue?.toString()}
                  pages={article.pages}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No featured articles yet. Check back soon!</p>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Submit Your Research
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            JASQA welcomes high-quality research papers in agentic AI, quantum computing,
            and their synergistic applications.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/submit-paper"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Submit Paper
            </Link>
            <Link
              href="/author-guidelines"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 font-semibold border border-blue-600"
            >
              Author Guidelines
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
