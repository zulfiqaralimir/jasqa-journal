import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import HeroBanner from '@/components/HeroBanner'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

// Revalidate every 60 seconds
export const revalidate = 60

const articleQuery = groq`*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  articleType,
  abstract,
  keywords,
  content,
  "authors": authors[]->{
    name,
    title,
    affiliation,
    email,
    orcid
  },
  "correspondingAuthor": correspondingAuthor->{ name, email },
  "issue": issue->{ volume, issue, year, publishedDate },
  pages,
  doi,
  "pdfUrl": pdfFile.asset->url,
  publishedAt,
  citations,
  views,
  downloads,
  status
}`

// Generate static params for all published articles
export async function generateStaticParams() {
  const slugs = await client.fetch(groq`*[_type == "article" && status == "published"]{ "slug": slug.current }`)
  return slugs.map((item: any) => ({ id: item.slug }))
}

async function getArticle(slug: string) {
  const article = await client.fetch(articleQuery, { slug })
  return article
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = await getArticle(id)

  if (!article || article.status !== 'published') {
    notFound()
  }

  return (
    <div>
      <HeroBanner
        subtitle={`Volume ${article.issue?.volume}, Issue ${article.issue?.issue} • ${article.articleType}`}
        title={article.title}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Metadata */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="space-y-4 mb-4">
            {article.authors.map((author: any, index: number) => (
              <div key={index}>
                <p className="font-semibold text-gray-900">
                  {author.title} {author.name}
                  {article.correspondingAuthor?.name === author.name && (
                    <span className="ml-2 text-sm text-blue-600">✉ Corresponding Author</span>
                  )}
                </p>
                <p className="text-sm text-gray-600">{author.affiliation}</p>
                {author.orcid && (
                  <p className="text-xs text-gray-500">ORCID: {author.orcid}</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-4">
            <span>Published: {new Date(article.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}</span>
            {article.pages && <span>Pages: {article.pages}</span>}
            {article.doi && <span>DOI: {article.doi}</span>}
            <span>Citations: {article.citations}</span>
            <span>Views: {article.views}</span>
            <span>Downloads: {article.downloads}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-8 flex flex-wrap gap-4">
          {article.pdfUrl && (
            <a
              href={article.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Download PDF
            </a>
          )}
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 font-semibold">
            Cite Article
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 font-semibold">
            Share
          </button>
        </div>

        {/* Abstract */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
          <p className="text-gray-700 leading-relaxed">{article.abstract}</p>
        </section>

        {/* Keywords */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Keywords</h2>
          <div className="flex flex-wrap gap-2">
            {article.keywords.map((keyword: string, index: number) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>

        {/* Article Content */}
        {article.content && (
          <section className="mb-12 prose prose-lg max-w-none">
            <PortableText value={article.content} />
          </section>
        )}

        {/* Corresponding Author */}
        {article.correspondingAuthor && (
          <section className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-700">
              <strong>Corresponding Author:</strong> {article.correspondingAuthor.name}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${article.correspondingAuthor.email}`} className="text-blue-600 hover:underline">
                {article.correspondingAuthor.email}
              </a>
            </p>
          </section>
        )}
      </div>
    </div>
  )
}
