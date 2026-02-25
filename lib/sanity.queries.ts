import { groq } from 'next-sanity'

// Article Queries
export const articlesQuery = groq`*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  abstract,
  keywords,
  "authors": authors[]->{ name, affiliation, slug },
  "issue": issue->{ volume, issue, year },
  pages,
  doi,
  publishedAt,
  featured,
  citations
}`

export const featuredArticlesQuery = groq`*[_type == "article" && featured == true] | order(publishedAt desc)[0...4] {
  _id,
  title,
  slug,
  abstract,
  keywords,
  "authors": authors[]->{ name, affiliation, slug },
  "issue": issue->{ volume, issue, year },
  pages,
  publishedAt,
  citations
}`

export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  abstract,
  keywords,
  content,
  "authors": authors[]->{ name, title, affiliation, email, image, slug },
  "issue": issue->{ volume, issue, year, publishedDate },
  pages,
  doi,
  "pdfUrl": pdfFile.asset->url,
  publishedAt,
  featured,
  citations
}`

// Issue Queries
export const issuesQuery = groq`*[_type == "issue"] | order(year desc, volume desc, issue desc) {
  _id,
  volume,
  issue,
  year,
  coverImage,
  publishedDate,
  description,
  isSpecialIssue,
  specialIssueTitle,
  "articleCount": count(*[_type == "article" && references(^._id)])
}`

export const issueByVolumeAndIssueQuery = groq`*[_type == "issue" && volume == $volume && issue == $issue][0] {
  _id,
  volume,
  issue,
  year,
  coverImage,
  publishedDate,
  description,
  isSpecialIssue,
  specialIssueTitle,
  "articles": *[_type == "article" && references(^._id)] {
    _id,
    title,
    slug,
    abstract,
    "authors": authors[]->{ name, affiliation },
    pages,
    publishedAt
  }
}`

// Author Queries
export const authorsQuery = groq`*[_type == "author"] | order(name asc) {
  _id,
  name,
  slug,
  image,
  title,
  affiliation,
  email
}`

export const authorBySlugQuery = groq`*[_type == "author" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  image,
  title,
  affiliation,
  email,
  bio,
  orcid,
  googleScholar,
  researchGate,
  "articles": *[_type == "article" && references(^._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    abstract,
    publishedAt,
    "issue": issue->{ volume, issue, year }
  }
}`

// Editorial Board Queries
export const editorialBoardQuery = groq`*[_type == "editorialBoard" && active == true] | order(order asc) {
  _id,
  "author": author->{ name, title, affiliation, image, email },
  role,
  expertise,
  order
}`

// Announcement Queries
export const announcementsQuery = groq`*[_type == "announcement"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  excerpt,
  publishedAt,
  featured
}`

export const announcementBySlugQuery = groq`*[_type == "announcement" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  excerpt,
  content,
  publishedAt,
  featured
}`

export const featuredAnnouncementsQuery = groq`*[_type == "announcement" && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  category,
  excerpt,
  publishedAt
}`

// Search Query
export const searchQuery = groq`*[_type == "article" && (
  title match $searchTerm ||
  abstract match $searchTerm ||
  $searchTerm in keywords
)] {
  _id,
  title,
  slug,
  abstract,
  "authors": authors[]->{ name, affiliation },
  publishedAt
}`
