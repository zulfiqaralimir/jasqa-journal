# JASQA Journal - Sanity CMS Integration

## 🎯 Overview

Your JASQA journal now has a complete Sanity CMS integration ready to manage:
- Articles with full content
- Authors and their profiles
- Journal issues (volumes/issues)
- Editorial board members
- News & announcements

## 📁 What's Been Created

### Sanity Schemas (`sanity/schemas/`)
```
sanity/schemas/
├── article.ts          # Article schema with rich content
├── author.ts           # Author profiles
├── issue.ts            # Journal issues (volume/issue)
├── editorialBoard.ts   # Editorial board members
├── announcement.ts     # News & announcements
└── index.ts           # Schema exports
```

### Next.js Integration (`lib/`)
```
lib/
├── sanity.client.ts    # Sanity client configuration
├── sanity.queries.ts   # Pre-built GROQ queries
└── sanity.types.ts     # TypeScript types
```

### Configuration Files
```
├── .env.local.example  # Environment variables template
└── sanity/SANITY_SETUP.md  # Detailed setup guide
```

## 🚀 Quick Start

### Step 1: Set Up Sanity Studio

**Important**: You need to run this manually because it requires authentication:

```bash
npm create sanity@latest
```

**When prompted:**
1. Login with Google, GitHub, or Email
2. Project name: **JASQA Journal CMS**
3. Use default dataset: **Yes**
4. Dataset name: **production**
5. Output path: **./studio**
6. Template: **Clean project with no predefined schemas**

### Step 2: Navigate to Studio

```bash
cd studio
```

### Step 3: Copy Schema Files

**Windows:**
```bash
xcopy /E /I ..\\sanity\\schemas .\\schemas
```

**Mac/Linux:**
```bash
cp -r ../sanity/schemas/* ./schemas/
```

### Step 4: Update Studio Config

Edit `studio/sanity.config.ts`:

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'JASQA Journal CMS',
  projectId: 'YOUR_PROJECT_ID',  // From Sanity dashboard
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
```

### Step 5: Install & Run Studio

```bash
npm install
npm run dev
```

Studio will open at: `http://localhost:3333`

### Step 6: Deploy Studio (Optional)

```bash
sanity deploy
```

Choose a hostname like: **jasqa-journal**

Your studio will be at: `https://jasqa-journal.sanity.studio`

### Step 7: Configure Next.js

1. Get your Project ID from: https://www.sanity.io/manage
2. Copy `.env.local.example` to `.env.local`
3. Fill in your credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="optional-for-better-performance"
```

## 📊 Schema Features

### Article Schema
- ✅ Title, slug, abstract
- ✅ Multiple authors (references)
- ✅ Rich text content with images & code blocks
- ✅ Keywords (tags)
- ✅ Issue assignment
- ✅ DOI, page numbers
- ✅ PDF upload
- ✅ Publication date
- ✅ Featured flag
- ✅ Citation count

### Author Schema
- ✅ Name, title, affiliation
- ✅ Profile image
- ✅ Biography
- ✅ Email
- ✅ ORCID ID
- ✅ Google Scholar link
- ✅ ResearchGate link

### Issue Schema
- ✅ Volume & issue number
- ✅ Year
- ✅ Cover image
- ✅ Published date
- ✅ Description
- ✅ Special issue support

### Editorial Board Schema
- ✅ Author reference
- ✅ Role assignment
- ✅ Areas of expertise
- ✅ Display order
- ✅ Active status

### Announcement Schema
- ✅ Title, excerpt
- ✅ Category tags
- ✅ Rich text content
- ✅ Published date
- ✅ Featured flag

## 🔌 Using in Next.js Pages

### Example: Fetch Featured Articles

```typescript
// app/page.tsx
import { client } from '@/lib/sanity.client'
import { featuredArticlesQuery } from '@/lib/sanity.queries'
import { Article } from '@/lib/sanity.types'

export default async function Home() {
  const articles: Article[] = await client.fetch(featuredArticlesQuery)

  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article._id} {...article} />
      ))}
    </div>
  )
}
```

### Example: Article Detail Page

```typescript
// app/article/[slug]/page.tsx
import { client } from '@/lib/sanity.client'
import { articleBySlugQuery } from '@/lib/sanity.queries'

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await client.fetch(articleBySlugQuery, {
    slug: params.slug
  })

  return <div>{/* Render article */}</div>
}
```

## 📦 Installed Packages

The following packages have been installed:
- ✅ `next-sanity` - Official Sanity client for Next.js
- ✅ `@sanity/image-url` - Image URL builder
- ✅ `@portabletext/react` - Render rich text content

## 🎨 Next Steps

1. **Add Sample Data**
   - Open Sanity Studio
   - Create authors
   - Create issues
   - Create articles
   - Add editorial board members
   - Post announcements

2. **Update Pages to Use Real Data**
   - Replace placeholder data in pages
   - Use Sanity queries
   - Implement search functionality

3. **Add Image Optimization**
   ```typescript
   import imageUrlBuilder from '@sanity/image-url'

   const builder = imageUrlBuilder(client)

   function urlForImage(source: any) {
     return builder.image(source)
   }
   ```

4. **Implement Search**
   - Use the `searchQuery` from `lib/sanity.queries.ts`
   - Add search API route
   - Connect to SearchBar component

5. **Enable Draft Mode** (Optional)
   - Preview unpublished content
   - Set up preview API routes

## 📚 Pre-Built Queries

All queries are in `lib/sanity.queries.ts`:
- `articlesQuery` - All articles
- `featuredArticlesQuery` - Featured articles only
- `articleBySlugQuery` - Single article by slug
- `issuesQuery` - All issues
- `issueByVolumeAndIssueQuery` - Specific issue
- `authorsQuery` - All authors
- `authorBySlugQuery` - Single author
- `editorialBoardQuery` - Editorial board
- `announcementsQuery` - All announcements
- `searchQuery` - Search articles

## 🆘 Troubleshooting

**Can't authenticate with Sanity?**
- Try a different login method
- Check internet connection
- Clear browser cache

**Schema errors in Studio?**
- Ensure all schemas are imported in `schemas/index.ts`
- Run `npm install` in studio directory

**Can't fetch data in Next.js?**
- Check `.env.local` has correct project ID
- Verify dataset name is "production"
- Make sure Sanity client is initialized

## 📖 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text Guide](https://www.sanity.io/docs/presenting-block-text)

## 🎓 Learn More

Check out `sanity/SANITY_SETUP.md` for detailed setup instructions.
