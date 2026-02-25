import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import HeroBanner from '@/components/HeroBanner'
import IssueCard from '@/components/IssueCard'
import SearchBar from '@/components/SearchBar'

// Revalidate every 60 seconds
export const revalidate = 60

const issuesQuery = groq`*[_type == "issue"] | order(year desc, volume desc, issue desc) {
  _id,
  volume,
  issue,
  year,
  title,
  isSpecialIssue,
  specialIssueTitle,
  status,
  "articleCount": count(*[_type == "article" && references(^._id) && status == "published"]),
  publishedDate
}`

async function getData() {
  const issues = await client.fetch(issuesQuery)
  return { issues }
}

export default async function BrowseIssues() {
  const { issues } = await getData()

  // Group issues by year
  const issuesByYear = issues.reduce((acc: any, issue: any) => {
    if (!acc[issue.year]) {
      acc[issue.year] = []
    }
    acc[issue.year].push(issue)
    return acc
  }, {})

  const years = Object.keys(issuesByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div>
      <HeroBanner
        subtitle="Browse Issues"
        title="Explore Published Issues"
        description="Access all published volumes and issues of JASQA"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="mb-12 flex justify-center">
          <SearchBar placeholder="Search by volume, issue, or year..." />
        </div>

        {/* Issues by Year */}
        {years.length > 0 ? (
          years.map((year) => (
            <section key={year} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{year}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {issuesByYear[year].map((issue: any) => (
                  <IssueCard
                    key={issue._id}
                    volume={issue.volume.toString()}
                    issue={issue.issue.toString()}
                    year={issue.year.toString()}
                    articleCount={issue.articleCount}
                    publishedDate={new Date(issue.publishedDate).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No issues published yet.</p>
          </div>
        )}

        {/* Coming Soon */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Upcoming Issues
          </h3>
          <p className="text-gray-700 mb-2">
            Stay tuned for new volumes and special issues
          </p>
          <p className="text-sm text-gray-600">
            Submissions are always open
          </p>
        </section>
      </div>
    </div>
  )
}
