// TypeScript types for Sanity documents

export interface Author {
  _id: string
  name: string
  slug: { current: string }
  image?: any
  title?: string
  affiliation: string
  email?: string
  bio?: any[]
  orcid?: string
  googleScholar?: string
  researchGate?: string
}

export interface Issue {
  _id: string
  volume: number
  issue: number
  year: number
  coverImage?: any
  publishedDate: string
  description?: string
  isSpecialIssue: boolean
  specialIssueTitle?: string
  articleCount?: number
}

export interface Article {
  _id: string
  title: string
  slug: { current: string }
  authors: Author[]
  abstract: string
  keywords: string[]
  content?: any[]
  issue: Issue
  pages?: string
  doi?: string
  pdfUrl?: string
  publishedAt: string
  featured: boolean
  citations: number
}

export interface EditorialBoardMember {
  _id: string
  author: Author
  role: 'editor-in-chief' | 'associate-editor' | 'board-member' | 'managing-editor' | 'section-editor'
  expertise?: string[]
  order: number
  active: boolean
}

export interface Announcement {
  _id: string
  title: string
  slug: { current: string }
  category: 'call-for-papers' | 'achievement' | 'new-feature' | 'editorial' | 'publication' | 'event' | 'general'
  excerpt: string
  content?: any[]
  publishedAt: string
  featured: boolean
}
