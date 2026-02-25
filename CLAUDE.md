# CLAUDE.md - JASQA Journal Project Context

> **Purpose:** This file provides complete project context for Claude Code sessions. Read this file at the start of each session to understand the full project structure, architecture, and decisions.

---

## 📖 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [All Pages (16 Total)](#all-pages-16-total)
5. [Sanity CMS Configuration](#sanity-cms-configuration)
6. [GROQ Queries Reference](#groq-queries-reference)
7. [Design System](#design-system)
8. [Environment Variables](#environment-variables)
9. [Deployment Configuration](#deployment-configuration)
10. [Common Tasks & Workflows](#common-tasks--workflows)
11. [Architectural Decisions](#architectural-decisions)
12. [Known Issues & Limitations](#known-issues--limitations)

---

## Project Overview

**Project Name:** Journal of Agentic Synergy & Quantum AI (JASQA)

**Description:** A modern academic journal website built with Next.js, featuring full content management through Sanity CMS. JASQA is positioned as a Q1 journal focused on AI research, quantum computing, and autonomous systems.

**Purpose:**
- Showcase published research articles with full metadata (DOI, citations, authors)
- Provide submission and peer review information for authors
- Display editorial board and journal information
- Manage announcements, news, and events
- Enable browsing by volume, issue, and article

**Repository:** https://github.com/zulfiqaralimir/jasqa-journal

**Status:** ✅ Production Ready (as of 2026-02-25)

---

## Tech Stack

### Frontend
- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS v4
- **React:** 19.x
- **Build Tool:** Turbopack (Next.js default)

### Content Management
- **CMS:** Sanity Studio v4.22.0
- **Query Language:** GROQ (Graph-Relational Object Queries)
- **Rich Text:** Portable Text (@portabletext/react)
- **Image Handling:** @sanity/image-url

### Deployment
- **Frontend Hosting:** Vercel
- **CMS Hosting:** Sanity Cloud (sanity.studio)
- **Version Control:** Git + GitHub

### Key Dependencies
```json
{
  "next": "16.1.6",
  "react": "19.0.0",
  "sanity": "^4.22.0",
  "@sanity/vision": "^4.22.0",
  "next-sanity": "^9.8.19",
  "tailwindcss": "^4.0.0"
}
```

---

## Project Structure

```
jasqa-journal/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   │   └── page.tsx             # Static content about JASQA
│   ├── aims-scope/              # Aims & Scope page
│   │   └── page.tsx             # Journal's focus areas
│   ├── article/                 # Dynamic article pages
│   │   └── [id]/                # [id] = article slug
│   │       └── page.tsx         # SSG + ISR article detail (connected to Sanity)
│   ├── author-guidelines/       # Author Guidelines page
│   │   └── page.tsx             # Submission formatting requirements
│   ├── browse-issues/           # Browse Issues page
│   │   └── page.tsx             # All volumes and issues (connected to Sanity)
│   ├── contact/                 # Contact page
│   │   └── page.tsx             # Contact form and information
│   ├── editorial-board/         # Editorial Board page
│   │   └── page.tsx             # Board members by role (connected to Sanity)
│   ├── indexing-metrics/        # Indexing & Metrics page
│   │   └── page.tsx             # Journal impact factor, indexing databases
│   ├── news/                    # News listing and detail pages
│   │   ├── page.tsx             # All announcements (connected to Sanity)
│   │   └── [slug]/              # Individual announcement pages
│   │       └── page.tsx         # SSG + ISR news detail (connected to Sanity)
│   ├── peer-review/             # Peer Review Process page
│   │   └── page.tsx             # Review workflow and guidelines
│   ├── publication-ethics/      # Publication Ethics page
│   │   └── page.tsx             # Ethical standards and policies
│   ├── studio/                  # Sanity Studio route
│   │   └── [[...tool]]/         # Catch-all for Studio UI
│   │       └── page.tsx         # Sanity Studio component wrapper
│   ├── submit-paper/            # Submit Paper page
│   │   └── page.tsx             # Submission portal information
│   ├── favicon.ico              # Site favicon
│   ├── globals.css              # Global styles + Tailwind imports
│   ├── layout.tsx               # Root layout with Navbar + Footer
│   └── page.tsx                 # Homepage (connected to Sanity)
│
├── components/                   # Reusable React components
│   ├── ArticleCard.tsx          # Article preview card (used in browse, homepage)
│   ├── Footer.tsx               # Site footer with links
│   ├── HeroBanner.tsx           # Page header banner with title/description
│   ├── IssueCard.tsx            # Issue preview card (used in browse)
│   ├── Navbar.tsx               # Main navigation bar
│   └── SearchBar.tsx            # Search input component (UI only, no logic yet)
│
├── lib/                         # Library code and utilities
│   ├── sanity.client.ts         # Sanity client configuration + image URL builder
│   ├── sanity.queries.ts        # All GROQ queries organized by entity
│   └── sanity.types.ts          # TypeScript types for Sanity documents
│
├── sanity/                      # Sanity CMS configuration
│   └── schemas/                 # Content type schemas
│       ├── announcement.ts      # News/announcements schema
│       ├── article.ts           # Research article schema
│       ├── author.ts            # Author profile schema
│       ├── boardMember.ts       # Editorial board member schema
│       ├── category.ts          # Article category/topic schema
│       ├── index.ts             # Schema exports
│       └── issue.ts             # Journal issue schema
│
├── .env.local                   # Environment variables (not in git)
├── .gitignore                   # Git ignore rules
├── .vercelignore                # Vercel deployment ignore rules
├── CLAUDE.md                    # This file - project context
├── DEPLOYMENT_GUIDE.md          # Deployment instructions
├── PROJECT_STATUS.md            # Project completion status
├── README.md                    # Project readme
├── deploy-sanity.bat            # Windows batch script for Sanity deployment
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── sanity.config.ts             # Sanity Studio configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── vercel.json                  # Vercel deployment configuration
```

---

## All Pages (16 Total)

### Homepage - `/`
- **File:** `app/page.tsx`
- **Type:** Server Component with ISR (revalidate: 60)
- **Connected to Sanity:** ✅ Yes
- **Purpose:** Main landing page showcasing featured articles and latest issue
- **Data Fetched:**
  - Featured articles (4 most recent with `featured: true`)
  - Latest published issue
- **GROQ Queries:**
  - `featuredArticlesQuery` - Featured articles with authors and issue
  - `latestIssueQuery` - Most recent published issue with article count
- **Components Used:** HeroBanner, ArticleCard

---

### About - `/about`
- **File:** `app/about/page.tsx`
- **Type:** Static Server Component
- **Connected to Sanity:** ❌ No (static content)
- **Purpose:** Information about the journal, mission, and vision
- **Content:** Hardcoded content about JASQA journal
- **Components Used:** HeroBanner

---

### Aims & Scope - `/aims-scope`
- **File:** `app/aims-scope/page.tsx`
- **Type:** Static Server Component
- **Connected to Sanity:** ❌ No (static content)
- **Purpose:** Journal's research focus areas and topics covered
- **Content:** Research areas: Agentic AI, Quantum Computing, Human-AI Interaction, Ethical AI, Autonomous Systems, AI in Healthcare/Finance/Education
- **Components Used:** HeroBanner

---

### Editorial Board - `/editorial-board`
- **File:** `app/editorial-board/page.tsx`
- **Type:** Server Component with ISR (revalidate: 60)
- **Connected to Sanity:** ✅ Yes
- **Purpose:** Display editorial team organized by role
- **Data Fetched:** All active board members with their author profiles
- **GROQ Query:** `boardMembersQuery` - Board members with author details
- **Member Roles:**
  - Editor-in-Chief
  - Co-Editor-in-Chief
  - Managing Editor
  - Associate Editors
  - Editorial Board Members
  - Advisory Board
- **Components Used:** HeroBanner

---

### Browse Issues - `/browse-issues`
- **File:** `app/browse-issues/page.tsx`
- **Type:** Server Component with ISR (revalidate: 60)
- **Connected to Sanity:** ✅ Yes
- **Purpose:** Browse all published issues and articles
- **Features:**
  - Query parameters: `?volume=X&issue=Y`
  - Filter by volume and issue
  - View all articles in selected issue
  - Search functionality (UI only, no backend yet)
- **Data Fetched:**
  - All published issues
  - Articles for selected issue (if volume/issue params provided)
- **GROQ Queries:**
  - `issuesQuery` - All published issues ordered by date
  - `articlesQuery` - Articles filtered by issue
- **Components Used:** HeroBanner, IssueCard, ArticleCard, SearchBar

---

### Article Detail - `/article/[id]`
- **File:** `app/article/[id]/page.tsx`
- **Type:** SSG + ISR (revalidate: 60)
- **Connected to Sanity:** ✅ Yes
- **Purpose:** Display full article with metadata, abstract, content, authors
- **Dynamic Route:** `[id]` = article slug
- **Static Generation:** `generateStaticParams()` pre-renders all published articles
- **Data Fetched:**
  - Complete article with full content
  - All authors with ORCID and affiliations
  - Corresponding author details
  - Related issue information
  - DOI, citations, views, downloads
- **GROQ Query:** `articleQuery` - Full article by slug
- **Features:**
  - PDF download button
  - Citation metrics
  - Author affiliations with ORCID links
  - Portable Text content rendering
  - Related issue link
- **Components Used:** HeroBanner, PortableText

---

### Submit Paper - `/submit-paper`
- **File:** `app/submit-paper/page.tsx`
- **Type:** Static Server Component
- **Connected to Sanity:** ❌ No (static content)
- **Purpose:** Submission portal information and guidelines
- **Content:**
  - Submission process steps
  - Article types accepted
  - Editorial process timeline
  - Submission checklist
- **Components Used:** HeroBanner

---

### Author Guidelines - `/author-guidelines`
- **File:** `app/author-guidelines/page.tsx`
- **Type:** Static Server Component
- **Connected to Sanity:** ❌ No (static content)
- **Purpose:** Detailed formatting and submission requirements
- **Content:**
  - Manuscript formatting rules
  - Citation style (APA)
  - Figure and table guidelines
  - File format requirements
  - Supplementary materials
- **Components Used:** HeroBanner

---

### Peer Review Process - `/peer-review`
- **File:** `app/peer-review/page.tsx`
- **Type:** Static Server Component
- **Connected to Sanity:** ❌ No (static content)
- **Purpose:** Explanation of peer review workflow
- **Content:**
  - Double-blind review process
  - Review timeline
  - Reviewer responsibilities
  - Editor decision types
- **Components Used:** HeroBanner

---

### Publication Ethics - `/publication-ethics`
- **File:** `app/publication-ethics/page.tsx`
- **Type:** Static Server Component
- **Connected to Sanity:** ❌ No (static content)
- **Purpose:** Ethical standards and policies
- **Content:**
  - Authorship criteria
  - Plagiarism policy
  - Data availability
  - Conflicts of interest
  - Human/animal research ethics
- **Components Used:** HeroBanner

---

### Indexing & Metrics - `/indexing-metrics`
- **File:** `app/indexing-metrics/page.tsx`
- **Type:** Static Server Component
- **Connected to Sanity:** ❌ No (static content)
- **Purpose:** Journal metrics and indexing information
- **Content:**
  - Impact factor: 8.42 (placeholder)
  - Indexed in: Web of Science, Scopus, PubMed, IEEE Xplore, etc.
  - Citation metrics
  - Open access policy
- **Components Used:** HeroBanner

---

### News & Announcements Listing - `/news`
- **File:** `app/news/page.tsx`
- **Type:** Server Component with ISR (revalidate: 60)
- **Connected to Sanity:** ✅ Yes
- **Purpose:** Display all announcements, events, and news
- **Data Fetched:**
  - All active announcements (published and not expired)
  - Upcoming events (2 most recent)
- **GROQ Queries:**
  - `announcementsQuery` - Active announcements ordered by pinned/date
  - `upcomingEventsQuery` - Recent event-type announcements
- **Announcement Types:**
  - Call for Papers
  - Special Issue
  - Achievement
  - New Feature
  - Editorial
  - Publication
  - Event
  - Conference
  - Award
  - General
- **Features:**
  - Priority badges (high/medium/low)
  - Pinned announcements
  - Featured announcements
  - Newsletter subscription (UI only)
  - Social media links
  - Upcoming events sidebar
- **Components Used:** HeroBanner

---

### News Detail - `/news/[slug]`
- **File:** `app/news/[slug]/page.tsx`
- **Type:** SSG + ISR (revalidate: 60)
- **Connected to Sanity:** ✅ Yes
- **Purpose:** Full announcement/news article page
- **Dynamic Route:** `[slug]` = announcement slug
- **Static Generation:** `generateStaticParams()` pre-renders all announcements
- **Data Fetched:**
  - Full announcement with rich content
  - Related announcements (same type, 3 most recent)
- **GROQ Queries:**
  - `announcementQuery` - Full announcement by slug
  - `relatedAnnouncementsQuery` - Similar announcements
- **Features:**
  - Portable Text content rendering
  - External link (if applicable)
  - Related announcements
  - Share buttons (UI only)
- **Components Used:** HeroBanner, PortableText

---

### Contact - `/contact`
- **File:** `app/contact/page.tsx`
- **Type:** Static Server Component
- **Connected to Sanity:** ❌ No (static content)
- **Purpose:** Contact information and form
- **Content:**
  - Editorial office address
  - Email contacts
  - Contact form (UI only, no backend)
  - Office hours
- **Components Used:** HeroBanner

---

### Sanity Studio - `/studio`
- **File:** `app/studio/[[...tool]]/page.tsx`
- **Type:** Client Component
- **Connected to Sanity:** ✅ Yes (Admin interface)
- **Purpose:** Content management interface
- **Access:** Requires authentication via Sanity
- **URL:** http://localhost:3000/studio (dev) or https://domain.com/studio (prod)
- **Features:**
  - Create/edit/delete all content types
  - Image uploads
  - Rich text editing
  - Vision tool for GROQ query testing
  - Custom navigation structure

---

## Sanity CMS Configuration

### Project Details
- **Project ID:** `yhv6w713`
- **Dataset:** `production`
- **API Version:** `2024-02-25`
- **Studio Base Path:** `/studio`
- **Hosted Studio URL:** `https://jasqa-journal.sanity.studio` (after deployment)

### Configuration Files
- **Main Config:** `sanity.config.ts`
- **Client Setup:** `lib/sanity.client.ts`
- **Schema Definitions:** `sanity/schemas/`

---

## All 6 Sanity Schemas

### 1. Article Schema (`article.ts`)
**Purpose:** Research articles with full academic metadata

**Fields:**
| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | `string` | ✅ | Article title (10-250 chars) |
| `slug` | `slug` | ✅ | URL-friendly identifier (auto from title) |
| `articleType` | `string` | ✅ | Type: research, review, technical-note, case-study, perspective, editorial, letter |
| `authors` | `array` | ✅ | References to Author documents (at least 1) |
| `correspondingAuthor` | `reference` | ✅ | Reference to Author document |
| `abstract` | `text` | ✅ | Article abstract (150-500 chars) |
| `keywords` | `array` | ✅ | Keywords as strings (4-8 required) |
| `content` | `array` | ✅ | Portable Text with blocks, images, lists, links |
| `issue` | `reference` | ❌ | Reference to Issue document |
| `pages` | `string` | ❌ | Page range (e.g., "45-67") |
| `doi` | `string` | ❌ | Digital Object Identifier (validation: 10.XXXX/...) |
| `pdfFile` | `file` | ❌ | Upload PDF file |
| `publishedAt` | `datetime` | ❌ | Publication date |
| `submittedAt` | `datetime` | ❌ | Submission date |
| `acceptedAt` | `datetime` | ❌ | Acceptance date |
| `status` | `string` | ✅ | Status: draft, under-review, accepted, published, rejected |
| `featured` | `boolean` | ❌ | Show on homepage (default: false) |
| `openAccess` | `boolean` | ❌ | Open access article (default: true) |
| `citations` | `number` | ❌ | Citation count (default: 0) |
| `views` | `number` | ❌ | View count (default: 0) |
| `downloads` | `number` | ❌ | Download count (default: 0) |
| `categories` | `array` | ❌ | References to Category documents |
| `relatedArticles` | `array` | ❌ | References to other Article documents |
| `funding` | `text` | ❌ | Funding information |
| `conflictOfInterest` | `text` | ❌ | COI statement |

**Validation:**
- Title: 10-250 characters
- Abstract: 150-500 characters
- Keywords: 4-8 required
- Authors: At least 1 required
- DOI format: `10.XXXX/...`

---

### 2. Author Schema (`author.ts`)
**Purpose:** Academic researcher profiles

**Fields:**
| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `name` | `string` | ✅ | Full name (2-100 chars) |
| `slug` | `slug` | ✅ | URL-friendly identifier |
| `title` | `string` | ❌ | Academic title (Dr., Prof., etc.) |
| `email` | `string` | ✅ | Email address (validated format) |
| `affiliation` | `string` | ✅ | Institution name |
| `department` | `string` | ❌ | Department/Division |
| `country` | `string` | ❌ | Country |
| `orcid` | `string` | ❌ | ORCID ID (format: 0000-0002-1825-0097) |
| `bio` | `text` | ❌ | Biography (max 500 chars) |
| `researchInterests` | `array` | ❌ | Research topics as strings |
| `image` | `image` | ❌ | Profile photo |
| `website` | `url` | ❌ | Personal website |
| `googleScholar` | `url` | ❌ | Google Scholar profile |
| `publications` | `number` | ❌ | Publication count (default: 0) |
| `citations` | `number` | ❌ | Total citations (default: 0) |
| `hIndex` | `number` | ❌ | h-index (default: 0) |

**Validation:**
- Name: 2-100 characters
- Email: Valid email format
- ORCID: Format `XXXX-XXXX-XXXX-XXXX` (with X or digits)
- Bio: Max 500 characters

---

### 3. Issue Schema (`issue.ts`)
**Purpose:** Journal volumes and issues

**Fields:**
| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `volume` | `number` | ✅ | Volume number |
| `issue` | `number` | ✅ | Issue number |
| `year` | `number` | ✅ | Publication year (1900-2100) |
| `title` | `string` | ❌ | Special issue title |
| `description` | `text` | ❌ | Issue description/theme |
| `coverImage` | `image` | ❌ | Issue cover image |
| `publishedDate` | `date` | ❌ | Publication date |
| `status` | `string` | ✅ | Status: upcoming, current, published, archived |

**Title Format:** Auto-generated as "Volume X, Issue Y (Year)"

**Validation:**
- Volume: Minimum 1
- Issue: Minimum 1
- Year: Between 1900 and 2100

---

### 4. Board Member Schema (`boardMember.ts`)
**Purpose:** Editorial board composition

**Fields:**
| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `author` | `reference` | ✅ | Reference to Author document |
| `role` | `string` | ✅ | Role type (see below) |
| `startDate` | `date` | ❌ | Start date |
| `endDate` | `date` | ❌ | End date (if applicable) |
| `expertise` | `array` | ❌ | Areas of expertise as strings |
| `active` | `boolean` | ✅ | Currently active (default: true) |
| `order` | `number` | ❌ | Display order |
| `featured` | `boolean` | ❌ | Feature on board page |

**Role Types:**
- `editor-in-chief`
- `co-editor-in-chief`
- `managing-editor`
- `associate-editor`
- `editorial-board`
- `advisory-board`
- `guest-editor`

**Title Format:** Auto-generated as "Author Name - Role"

---

### 5. Announcement Schema (`announcement.ts`)
**Purpose:** News, events, and announcements

**Fields:**
| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | `string` | ✅ | Announcement title (10-150 chars) |
| `slug` | `slug` | ✅ | URL-friendly identifier |
| `type` | `string` | ✅ | Type (see below) |
| `priority` | `string` | ✅ | Priority: high, medium, low |
| `excerpt` | `text` | ✅ | Short summary (50-300 chars) |
| `content` | `array` | ✅ | Portable Text content |
| `publishedAt` | `datetime` | ✅ | Publication date |
| `expiresAt` | `datetime` | ❌ | Expiration date |
| `featured` | `boolean` | ❌ | Featured announcement |
| `pinned` | `boolean` | ❌ | Pinned to top |
| `externalLink` | `url` | ❌ | External URL |
| `image` | `image` | ❌ | Featured image |

**Announcement Types:**
- `call-for-papers`
- `special-issue`
- `achievement`
- `new-feature`
- `editorial`
- `publication`
- `event`
- `conference`
- `award`
- `general`

**Validation:**
- Title: 10-150 characters
- Excerpt: 50-300 characters

---

### 6. Category Schema (`category.ts`)
**Purpose:** Article topics and classification

**Fields:**
| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `name` | `string` | ✅ | Category name (unique) |
| `slug` | `slug` | ✅ | URL-friendly identifier |
| `description` | `text` | ❌ | Category description |
| `color` | `string` | ❌ | Hex color code for UI |
| `icon` | `string` | ❌ | Icon name/emoji |

**Validation:**
- Name: Unique across all categories
- Color: Hex format validation

---

## GROQ Queries Reference

All queries are located in `lib/sanity.queries.ts`

### Homepage Queries

#### Featured Articles Query
```groq
*[_type == "article" && featured == true && status == "published"]
| order(publishedAt desc)[0...4] {
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
}
```
**Purpose:** Fetch 4 most recent featured articles for homepage hero section
**Returns:** Article metadata with author names and issue details
**Used In:** `app/page.tsx`

#### Latest Issue Query
```groq
*[_type == "issue" && status == "published"]
| order(year desc, volume desc, issue desc)[0] {
  _id,
  volume,
  issue,
  year,
  "articleCount": count(*[_type == "article" && references(^._id) && status == "published"]),
  publishedDate
}
```
**Purpose:** Get most recently published issue with article count
**Returns:** Single issue object with computed article count
**Used In:** `app/page.tsx`

---

### Browse Issues Queries

#### All Issues Query
```groq
*[_type == "issue" && status == "published"]
| order(year desc, volume desc, issue desc) {
  _id,
  volume,
  issue,
  year,
  title,
  description,
  "articleCount": count(*[_type == "article" && references(^._id) && status == "published"]),
  publishedDate,
  status
}
```
**Purpose:** List all published issues with article counts
**Returns:** Array of issues sorted by date
**Used In:** `app/browse-issues/page.tsx`

#### Articles by Issue Query
```groq
*[_type == "article" && issue->volume == $volume && issue->issue == $issue && status == "published"]
| order(pages asc) {
  _id,
  title,
  "slug": slug.current,
  articleType,
  abstract,
  keywords,
  "authors": authors[]->{ name, affiliation },
  pages,
  publishedAt,
  citations,
  views,
  downloads
}
```
**Purpose:** Get all articles for a specific volume and issue
**Parameters:** `$volume` (number), `$issue` (number)
**Returns:** Array of articles sorted by page number
**Used In:** `app/browse-issues/page.tsx`

---

### Article Detail Queries

#### Single Article Query
```groq
*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  articleType,
  abstract,
  keywords,
  content,
  "authors": authors[]->{ name, title, affiliation, email, orcid },
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
}
```
**Purpose:** Fetch complete article data including content and authors
**Parameters:** `$slug` (string)
**Returns:** Single article object with nested references resolved
**Used In:** `app/article/[id]/page.tsx`

#### Generate Static Paths Query
```groq
*[_type == "article" && status == "published"]{ "slug": slug.current }
```
**Purpose:** Get all article slugs for static generation
**Returns:** Array of `{ slug: string }` objects
**Used In:** `generateStaticParams()` in `app/article/[id]/page.tsx`

---

### Editorial Board Query

#### Board Members Query
```groq
*[_type == "boardMember" && active == true]
| order(order asc) {
  _id,
  "author": author->{ name, title, affiliation, department, image, email, bio, researchInterests },
  role,
  expertise,
  order,
  featured
}
```
**Purpose:** Get all active board members with full author details
**Returns:** Array of board members sorted by display order
**Used In:** `app/editorial-board/page.tsx`

---

### News & Announcements Queries

#### Active Announcements Query
```groq
*[_type == "announcement" && publishedAt <= now() && (expiresAt == null || expiresAt > now())]
| order(pinned desc, publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  type,
  priority,
  excerpt,
  publishedAt,
  featured,
  pinned
}
```
**Purpose:** Get all currently active announcements (published and not expired)
**Returns:** Array of announcements, pinned items first
**Used In:** `app/news/page.tsx`

#### Upcoming Events Query
```groq
*[_type == "announcement" && type == "event" && publishedAt <= now()]
| order(publishedAt desc)[0...2] {
  _id,
  title,
  excerpt,
  publishedAt,
  externalLink
}
```
**Purpose:** Get 2 most recent event announcements
**Returns:** Array of up to 2 event announcements
**Used In:** `app/news/page.tsx`

#### Single Announcement Query
```groq
*[_type == "announcement" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  type,
  priority,
  excerpt,
  content,
  publishedAt,
  expiresAt,
  featured,
  pinned,
  externalLink,
  image
}
```
**Purpose:** Fetch complete announcement with content
**Parameters:** `$slug` (string)
**Returns:** Single announcement object
**Used In:** `app/news/[slug]/page.tsx`

#### Related Announcements Query
```groq
*[_type == "announcement" && slug.current != $slug && type == $type && publishedAt <= now()]
| order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  type,
  excerpt,
  publishedAt
}
```
**Purpose:** Get 3 similar announcements of the same type
**Parameters:** `$slug` (string), `$type` (string)
**Returns:** Array of up to 3 related announcements
**Used In:** `app/news/[slug]/page.tsx`

---

## Design System

### Color Palette

**Primary Colors:**
- Primary Blue: `#2563eb` (blue-600)
- Primary Blue Hover: `#1d4ed8` (blue-700)
- Primary Blue Light: `#3b82f6` (blue-500)

**Secondary Colors:**
- Indigo: `#4f46e5` (indigo-600)
- Indigo Hover: `#4338ca` (indigo-700)

**Semantic Colors:**
- Success: `#10b981` (green-500)
- Warning: `#f59e0b` (amber-500)
- Error: `#ef4444` (red-500)
- Info: `#3b82f6` (blue-500)

**Neutral Colors:**
- Gray 50: `#f9fafb` (backgrounds)
- Gray 100: `#f3f4f6` (light backgrounds)
- Gray 200: `#e5e7eb` (borders)
- Gray 600: `#4b5563` (secondary text)
- Gray 700: `#374151` (primary text)
- Gray 900: `#111827` (headings)

**Priority Badge Colors:**
- High Priority: `bg-red-100 text-red-800`
- Medium Priority: `bg-blue-100 text-blue-800`
- Low Priority: `bg-gray-100 text-gray-800`

---

### Typography

**Font Family:**
- System Font Stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
- Default: Tailwind's `font-sans`

**Heading Sizes:**
- H1: `text-4xl` (36px) or `text-5xl` (48px) for hero sections
- H2: `text-3xl` (30px)
- H3: `text-2xl` (24px)
- H4: `text-xl` (20px)

**Body Text:**
- Base: `text-base` (16px)
- Small: `text-sm` (14px)
- Extra Small: `text-xs` (12px)

**Font Weights:**
- Normal: `font-normal` (400)
- Medium: `font-medium` (500)
- Semibold: `font-semibold` (600)
- Bold: `font-bold` (700)

---

### Spacing Scale

**Container Padding:**
- Mobile: `px-4`
- Tablet: `sm:px-6`
- Desktop: `lg:px-8`

**Section Spacing:**
- Small: `py-8` (2rem)
- Medium: `py-12` (3rem)
- Large: `py-16` (4rem)

**Component Spacing:**
- Gap Small: `gap-4` (1rem)
- Gap Medium: `gap-6` (1.5rem)
- Gap Large: `gap-8` (2rem)

---

### Component Patterns

#### Buttons
**Primary Button:**
```tsx
className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors"
```

**Secondary Button:**
```tsx
className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 font-semibold"
```

**Link Button:**
```tsx
className="text-blue-600 hover:text-blue-800 font-medium"
```

#### Cards
**Standard Card:**
```tsx
className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
```

**Feature Card:**
```tsx
className="bg-gray-50 rounded-lg p-6"
```

#### Badges
**Tag Badge:**
```tsx
className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800"
```

#### Hero Banner
```tsx
className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20"
```

---

### Responsive Breakpoints

- **Mobile:** Default (< 640px)
- **Tablet:** `sm:` (≥ 640px)
- **Desktop:** `lg:` (≥ 1024px)
- **Wide:** `xl:` (≥ 1280px)
- **Max Width:** `max-w-7xl` (1280px) for content containers

---

### Layout Patterns

#### Grid Layout (Browse Issues, Editorial Board)
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

#### Two-Column Layout (News Page)
```tsx
className="grid grid-cols-1 lg:grid-cols-3 gap-8"
// Main content: lg:col-span-2
// Sidebar: lg:col-span-1
```

#### Article List Layout
```tsx
className="space-y-6" // Vertical stack with consistent spacing
```

---

## Environment Variables

### Required for Development

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=       # Sanity project ID
NEXT_PUBLIC_SANITY_DATASET=          # Dataset name (usually "production")
SANITY_API_READ_TOKEN=               # Sanity read token (for server-side)
NEXT_PUBLIC_SITE_URL=                # Site URL (http://localhost:3000 for dev)
```

### Required for Production

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=       # Sanity project ID (yhv6w713)
NEXT_PUBLIC_SANITY_DATASET=          # Dataset name (production)
SANITY_API_READ_TOKEN=               # Sanity read token (server-side only)
NEXT_PUBLIC_SITE_URL=                # Production URL (https://domain.com)
```

### Security Notes
- **NEVER** commit `.env.local` to version control
- `NEXT_PUBLIC_*` variables are exposed to the browser
- `SANITY_API_READ_TOKEN` (without NEXT_PUBLIC) is server-only
- Store sensitive tokens in Vercel environment variables for production

---

## Deployment Configuration

### GitHub Repository
- **URL:** https://github.com/zulfiqaralimir/jasqa-journal
- **Branch:** `master` (main development branch)
- **Remote:** `origin`

### Vercel Deployment

**Configuration File:** `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

**Ignored Files:** `.vercelignore`
- `studio/` folder (Sanity Studio deployed separately)
- `.env.local`

**Deployment Steps:**
1. Connect GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to `master`

**Expected Build Time:** 2-3 minutes

---

### Sanity Studio Deployment

**Hosted URL:** `https://jasqa-journal.sanity.studio` (after deployment)

**Deployment Command:**
```bash
npx sanity deploy
```

**Studio Hostname:** `jasqa-journal`

**Access Control:**
- Requires Sanity authentication
- Manage users in Sanity dashboard
- CORS configuration required for production domain

---

### CORS Configuration

**Required Origins in Sanity Dashboard:**
- `http://localhost:3000` (development)
- `https://jasqa-journal.vercel.app` (production)
- `https://*.vercel.app` (preview deployments)

**Configure at:** https://manage.sanity.io → Project → API → CORS Origins

---

## Common Tasks & Workflows

### 1. Adding a New Page

**Step-by-step:**

1. **Create page file:**
   ```bash
   # For static page
   mkdir app/new-page
   touch app/new-page/page.tsx

   # For dynamic page
   mkdir -p app/new-page/[slug]
   touch app/new-page/[slug]/page.tsx
   ```

2. **Basic page template:**
   ```tsx
   import HeroBanner from '@/components/HeroBanner'

   export default function NewPage() {
     return (
       <div>
         <HeroBanner
           subtitle="Category"
           title="Page Title"
           description="Page description"
         />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
           {/* Page content */}
         </div>
       </div>
     )
   }
   ```

3. **Add to navigation** (if needed):
   Edit `components/Navbar.tsx` to add navigation link

4. **For Sanity-connected pages:**
   - Add revalidate: `export const revalidate = 60`
   - Create GROQ query in `lib/sanity.queries.ts`
   - Fetch data in page component
   - Add types to `lib/sanity.types.ts`

---

### 2. Creating a New Sanity Schema

**Step-by-step:**

1. **Create schema file:**
   ```bash
   touch sanity/schemas/newSchema.ts
   ```

2. **Schema template:**
   ```typescript
   import { defineField, defineType } from 'sanity'

   export default defineType({
     name: 'schemaName',
     title: 'Schema Title',
     type: 'document',
     fields: [
       defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required(),
       }),
       defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
           source: 'title',
           maxLength: 96,
         },
         validation: (Rule) => Rule.required(),
       }),
       // Add more fields...
     ],
   })
   ```

3. **Export schema:**
   Add to `sanity/schemas/index.ts`:
   ```typescript
   import newSchema from './newSchema'

   export const schemaTypes = [
     // ... existing schemas
     newSchema,
   ]
   ```

4. **Add to Studio navigation** (optional):
   Edit `sanity.config.ts` to add to structure

5. **Create TypeScript types:**
   Add type definition to `lib/sanity.types.ts`

6. **Restart dev server** to see changes

---

### 3. Adding a New Component

**Step-by-step:**

1. **Create component file:**
   ```bash
   touch components/NewComponent.tsx
   ```

2. **Component template:**
   ```tsx
   interface NewComponentProps {
     title: string
     description?: string
   }

   export default function NewComponent({ title, description }: NewComponentProps) {
     return (
       <div className="bg-white border border-gray-200 rounded-lg p-6">
         <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
         {description && <p className="text-gray-700">{description}</p>}
       </div>
     )
   }
   ```

3. **Import and use:**
   ```tsx
   import NewComponent from '@/components/NewComponent'

   <NewComponent title="Hello" description="World" />
   ```

4. **For shared components:**
   - Place in `components/` folder
   - Use consistent naming (PascalCase)
   - Include proper TypeScript types
   - Follow existing design patterns

---

### 4. Writing a GROQ Query

**Step-by-step:**

1. **Test in Vision Tool:**
   - Go to `/studio` → Vision tab
   - Write and test query
   - Verify returned data structure

2. **Add to queries file:**
   ```typescript
   // lib/sanity.queries.ts
   export const myQuery = groq`
     *[_type == "article" && featured == true]
     | order(publishedAt desc)[0...10] {
       _id,
       title,
       "slug": slug.current,
       "authors": authors[]->{ name, affiliation }
     }
   `
   ```

3. **Fetch in page:**
   ```tsx
   import { client } from '@/lib/sanity.client'
   import { groq } from 'next-sanity'

   async function getData() {
     const data = await client.fetch(myQuery, { param1: value1 })
     return data
   }

   export default async function Page() {
     const data = await getData()
     // Use data...
   }
   ```

4. **Add ISR if needed:**
   ```tsx
   export const revalidate = 60 // Revalidate every 60 seconds
   ```

---

### 5. Updating Content via Sanity Studio

**Step-by-step:**

1. **Access Studio:**
   - Development: http://localhost:3000/studio
   - Production: https://jasqa-journal.sanity.studio

2. **Create/Edit Content:**
   - Select content type from sidebar
   - Fill in required fields
   - Upload images if needed
   - Click "Publish" to make live

3. **Content appears on site:**
   - Instantly for new page loads (with CDN)
   - Within 60 seconds for ISR pages
   - Immediately if webhooks configured

4. **Delete/Unpublish:**
   - Draft: Content not shown on site
   - Unpublish: Remove from published
   - Delete: Permanently remove (be careful with references!)

---

### 6. Local Development Workflow

**Standard workflow:**

```bash
# Start development server
npm run dev

# In another terminal, start Sanity Studio (if needed)
cd studio && npx sanity dev

# Or access Studio via Next.js route
# http://localhost:3000/studio

# Make changes to code
# Browser auto-refreshes

# Before committing
npm run build  # Check for TypeScript errors
npm run lint   # Check for linting issues

# Commit changes
git add .
git commit -m "Description of changes"
git push origin master
```

---

### 7. Deploying Changes

**Deployment workflow:**

1. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin master
   ```

2. **Vercel auto-deploys:**
   - Detects push to `master`
   - Runs build
   - Deploys automatically
   - ~2-3 minutes

3. **Check deployment:**
   - Vercel dashboard shows status
   - Preview URL available
   - Production URL updates

4. **Sanity content changes:**
   - No deployment needed
   - Changes propagate via API
   - ISR updates within 60 seconds

---

## Architectural Decisions

### 1. Next.js App Router (vs Pages Router)

**Decision:** Use App Router

**Reasoning:**
- Modern React features (Server Components)
- Better performance with streaming
- Simplified data fetching
- Native support for layouts
- Future-proof architecture

**Trade-offs:**
- Newer API, less Stack Overflow answers
- Some libraries not yet fully compatible
- Learning curve for Pages Router users

---

### 2. Incremental Static Regeneration (ISR)

**Decision:** Use ISR with 60-second revalidation for Sanity pages

**Reasoning:**
- Balance between static and dynamic
- Fast page loads (pre-rendered)
- Content stays reasonably fresh
- Reduces API calls to Sanity
- Better SEO than pure client-side

**Configuration:**
```tsx
export const revalidate = 60 // 60 seconds
```

**Trade-offs:**
- Content can be stale for up to 60 seconds
- First visitor after revalidation sees old content
- Increases build complexity slightly

---

### 3. Static Site Generation (SSG) for Articles

**Decision:** Pre-render all article pages at build time

**Reasoning:**
- Articles rarely change after publication
- Maximum performance
- Better SEO
- Reduced server load
- Works well with ISR for updates

**Implementation:**
```tsx
export async function generateStaticParams() {
  const slugs = await client.fetch(groq`*[_type == "article" && status == "published"]{ "slug": slug.current }`)
  return slugs.map((item: any) => ({ id: item.slug }))
}
```

**Trade-offs:**
- Longer build times with many articles
- Need revalidation for content updates
- Build fails if Sanity unavailable

---

### 4. Sanity Hosted Studio (vs Self-hosted)

**Decision:** Host Studio on Sanity Cloud

**Reasoning:**
- Zero maintenance
- Automatic updates
- Better performance
- Dedicated domain
- Professional appearance

**Alternative considered:**
- Self-hosted via `/studio` route (currently used in dev)
- Would require authentication setup
- More control but more complexity

---

### 5. Component Library Choice

**Decision:** No UI library (custom Tailwind components)

**Reasoning:**
- Full design control
- Smaller bundle size
- No library lock-in
- Easier customization
- Simpler to understand

**Libraries considered but not used:**
- shadcn/ui
- Chakra UI
- Material UI

**Trade-offs:**
- Need to build components from scratch
- Less standardization
- More code to maintain

---

### 6. TypeScript Over JavaScript

**Decision:** Use TypeScript throughout

**Reasoning:**
- Type safety catches errors early
- Better IDE autocomplete
- Easier refactoring
- Self-documenting code
- Industry standard

**Configuration:**
- Strict mode enabled
- Sanity types auto-generated (potential)
- Props interfaces for all components

---

### 7. Monorepo Structure (Single Project)

**Decision:** Keep all code in one repository

**Reasoning:**
- Simpler deployment
- Easier to develop locally
- Shared types and utilities
- Single version control
- Fewer moving parts

**Alternative considered:**
- Separate frontend and CMS repos
- Would complicate sync
- More overhead

---

### 8. No Authentication System (Yet)

**Decision:** No user auth for public site, Sanity handles CMS auth

**Reasoning:**
- Public journal content
- No user-specific features needed yet
- Reduces complexity
- Sanity auth sufficient for editors

**Future considerations:**
- Author dashboards
- Submission portals
- Reviewer systems
- Would require: NextAuth.js or similar

---

### 9. Image Handling Strategy

**Decision:** Store images in Sanity, use their CDN

**Reasoning:**
- Automatic optimization
- Global CDN delivery
- No storage management
- Built-in transformations
- Reliable and fast

**Usage:**
```tsx
import { urlForImage } from '@/lib/sanity.client'

<img src={urlForImage(image).width(800).url()} />
```

---

### 10. SEO Strategy

**Decision:** Server-side rendering + metadata API

**Reasoning:**
- Better crawlability
- Dynamic meta tags per page
- Open Graph support
- Structured data potential

**Implementation:**
```tsx
export const metadata = {
  title: 'Page Title',
  description: 'Page description',
}
```

**Future improvements:**
- JSON-LD structured data
- XML sitemap
- robots.txt
- Dynamic OG images

---

## Known Issues & Limitations

### 1. Search Functionality Not Implemented

**Status:** ❌ UI only, no backend

**Location:** `components/SearchBar.tsx`, used on browse issues page

**Current State:**
- Input field renders
- No submit handler
- No search logic
- No results display

**Future Implementation:**
- Could use Sanity's search API
- Or implement Algolia/ElasticSearch
- Or use simple GROQ query with `$searchTerm`

**Example GROQ search:**
```groq
*[_type == "article" && [title, abstract] match $searchTerm] {
  // fields
}
```

---

### 2. Newsletter Subscription Non-functional

**Status:** ❌ UI only, no backend

**Location:** `app/news/page.tsx` (sidebar)

**Current State:**
- Email input renders
- Subscribe button does nothing
- No form submission
- No email collection

**Future Implementation:**
- Mailchimp integration
- SendGrid API
- Custom email service
- Database to store emails

---

### 3. Contact Form Non-functional

**Status:** ❌ UI only, no backend

**Location:** `app/contact/page.tsx`

**Current State:**
- Form fields render
- Submit button does nothing
- No form validation
- No email sending

**Future Implementation:**
- Email service (SendGrid, Resend, etc.)
- Form validation with react-hook-form
- Server Action or API route
- Success/error feedback

---

### 4. Social Media Links are Placeholders

**Status:** ❌ No actual social accounts linked

**Locations:**
- Footer: Twitter, LinkedIn, GitHub links
- News page: Follow buttons

**Current State:**
- Buttons render but go nowhere
- No actual social media accounts

**To Fix:**
- Create social media accounts
- Update links in `components/Footer.tsx`
- Update buttons in `app/news/page.tsx`

---

### 5. PDF Generation Not Implemented

**Status:** ⚠️ Partial - Upload supported, generation not

**Location:** Article schema has `pdfFile` field

**Current State:**
- Can upload PDF manually in Studio
- No automatic PDF generation
- No preview before download
- No citation export (BibTeX, etc.)

**Future Implementation:**
- Puppeteer for PDF generation from HTML
- Citation export formats
- Download tracking
- Preview modal

---

### 6. No Article Submission System

**Status:** ❌ Information only

**Location:** `app/submit-paper/page.tsx`

**Current State:**
- Describes submission process
- No actual submission form
- External system would be needed

**Future Implementation:**
- Custom submission portal
- File upload system
- Manuscript management
- Editorial workflow
- Or integrate with existing systems (e.g., Open Journal Systems)

---

### 7. Citation/View/Download Counters

**Status:** ❌ Fields exist, no tracking logic

**Location:** Article schema (`citations`, `views`, `downloads`)

**Current State:**
- Fields in schema
- Can be manually set in Studio
- No automatic increment
- No analytics integration

**Future Implementation:**
- Vercel Analytics for views
- API route for download tracking
- Citation import from Google Scholar
- Database for persistent counters

---

### 8. No Related Articles Algorithm

**Status:** ⚠️ Manual only

**Location:** Article schema has `relatedArticles` field

**Current State:**
- Manual selection in Studio
- No automatic suggestions
- Not displayed on article pages

**Future Implementation:**
- Keyword matching algorithm
- Category-based suggestions
- Author-based suggestions
- ML-based recommendations

---

### 9. CORS Warnings in Development

**Status:** ⚠️ Warning only, not breaking

**Location:** Next.js dev server console

**Warning:**
```
⚠ Cross origin request detected from 172.31.128.1 to /_next/* resource
```

**Impact:** None in development, informational only

**To Fix:**
Add to `next.config.ts`:
```typescript
{
  allowedDevOrigins: ['http://172.31.128.1:3000']
}
```

---

### 10. No Email Notifications

**Status:** ❌ Not implemented

**Use Cases:**
- Notify authors of submission status
- Alert editors of new submissions
- Newsletter sending
- Comment notifications (if comments added)

**Future Implementation:**
- Email service integration
- Template system
- Scheduled sends
- Unsubscribe management

---

### 11. No User Comments/Discussion

**Status:** ❌ Not implemented

**Potential Locations:**
- Article pages
- News pages

**Future Implementation:**
- Custom comment system
- Third-party (Disqus, etc.)
- Sanity schema for comments
- Moderation system

---

### 12. Limited Content Validation

**Status:** ⚠️ Basic validation only

**Current State:**
- Schema-level validation (string lengths, required fields)
- No duplicate detection
- No plagiarism checking
- No DOI format verification beyond regex

**Future Implementation:**
- Custom validation functions
- External service integrations
- Pre-publish checks
- DOI registration integration

---

### 13. No Internationalization (i18n)

**Status:** ❌ English only

**Current State:**
- All content in English
- No language selection
- Hardcoded text

**Future Implementation:**
- next-intl or similar
- Translation management
- Sanity localization
- RTL support if needed

---

### 14. Analytics Not Configured

**Status:** ❌ Not implemented

**Tools to Add:**
- Vercel Analytics
- Google Analytics
- Plausible Analytics
- Search Console

**Installation:**
```bash
npm install @vercel/analytics
```

Add to layout:
```tsx
import { Analytics } from '@vercel/analytics/react'
```

---

### 15. No Automated Testing

**Status:** ❌ No tests written

**Testing Needs:**
- Unit tests (components)
- Integration tests (API routes)
- E2E tests (Playwright)
- Visual regression tests

**Tools to Add:**
- Jest + React Testing Library
- Playwright
- Cypress (alternative)

---

## Future Feature Ideas

**High Priority:**
- ✅ Implement search functionality
- ✅ Add contact form backend
- ✅ Configure analytics
- ✅ Add SEO metadata to all pages

**Medium Priority:**
- Citation export (BibTeX, RIS)
- Author profiles pages
- Advanced filtering (by year, author, topic)
- RSS feed
- Sitemap generation

**Low Priority:**
- Dark mode
- Comments system
- Reading progress indicator
- Print styles
- Accessibility improvements

---

## Maintenance Notes

### Regular Tasks

**Weekly:**
- Review Sanity Studio for new submissions (once submission system added)
- Check Vercel deployment logs
- Monitor error rates

**Monthly:**
- Update dependencies (`npm update`)
- Review analytics data
- Backup Sanity data
- Check for security alerts

**As Needed:**
- Add new issues/volumes
- Update board members
- Post announcements
- Moderate comments (when added)

---

### Dependency Updates

**Check for updates:**
```bash
npm outdated
```

**Update all (carefully):**
```bash
npm update
npm run build  # Test build
```

**Major version updates:**
- Review changelog
- Test thoroughly
- Update code if needed
- Check for breaking changes

---

### Sanity Maintenance

**Backup data:**
```bash
npx sanity dataset export production backup.tar.gz
```

**Clean up drafts:**
- Regularly review unpublished drafts
- Delete outdated drafts
- Archive old content

**Monitor usage:**
- Check API request counts
- Review storage usage
- Optimize queries if needed

---

## Performance Optimization Notes

### Current Performance
- Lighthouse Score: ~90+ (estimated)
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- ISR: 60-second revalidation

### Optimization Opportunities
1. Image optimization (use Next.js Image component)
2. Font optimization (preload, display swap)
3. Code splitting (dynamic imports)
4. Bundle analysis (next-bundle-analyzer)
5. CDN optimization (Vercel Edge)

### Image Optimization Example
```tsx
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity.client'

<Image
  src={urlForImage(image).width(800).url()}
  alt={alt}
  width={800}
  height={600}
  loading="lazy"
/>
```

---

## Support Resources

### Documentation
- **Next.js:** https://nextjs.org/docs
- **Sanity:** https://www.sanity.io/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **GROQ:** https://www.sanity.io/docs/groq

### Community
- Next.js Discord
- Sanity Slack
- Stack Overflow
- GitHub Issues

### Project Files
- `PROJECT_STATUS.md` - Implementation status
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `README.md` - Getting started guide

---

## Contact & Credits

**Project Maintainer:** Zulfiqar Ali Mir
**Repository:** https://github.com/zulfiqaralimir/jasqa-journal
**Created:** 2026-02-25
**Last Updated:** 2026-02-25

**Built with:**
- Next.js by Vercel
- Sanity CMS
- Tailwind CSS
- TypeScript
- Deployed on Vercel

---

**End of CLAUDE.md**

> This file should be read at the start of every Claude Code session to provide full project context. Update this file whenever significant architectural decisions are made or new features are added.
