# Sanity CMS Setup Guide for JASQA Journal

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Sanity account (free at sanity.io)

## 🚀 Step-by-Step Setup

### 1. Create Sanity Project

Run this command in your terminal:

```bash
npm create sanity@latest
```

When prompted, provide these answers:
- **Login method**: Choose your preferred authentication (Google, GitHub, or Email)
- **Project name**: "JASQA Journal CMS"
- **Use the default dataset configuration?**: Yes
- **Dataset name**: production
- **Project output path**: ./studio (or keep default)
- **Select project template**: Clean project with no predefined schemas

### 2. Navigate to Sanity Studio

```bash
cd studio  # or whatever path you chose
```

### 3. Copy Schema Files

Copy the schema files from `../sanity/schemas/` to your new `studio/schemas/` directory:

```bash
# Windows
xcopy /E /I ..\\sanity\\schemas .\\schemas

# Mac/Linux
cp -r ../sanity/schemas/* ./schemas/
```

### 4. Update sanity.config.ts

Open `studio/sanity.config.ts` and update it to include the schemas:

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'JASQA Journal CMS',

  projectId: 'YOUR_PROJECT_ID',  // You'll get this after login
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
```

### 5. Install Dependencies

```bash
npm install
```

### 6. Start Sanity Studio

```bash
npm run dev
```

Your Sanity Studio will be available at `http://localhost:3333`

### 7. Deploy Sanity Studio (Optional)

To host your studio on Sanity's servers:

```bash
sanity deploy
```

Choose a unique studio hostname (e.g., `jasqa-journal`)

Your studio will be available at: `https://jasqa-journal.sanity.studio`

## 📦 Schema Structure

The following schemas have been created for your journal:

### 1. **Article** (`article.ts`)
- Title, slug, abstract
- Authors (reference to Author)
- Keywords, content (rich text)
- Issue reference
- DOI, pages, PDF file
- Publication date
- Featured flag, citation count

### 2. **Author** (`author.ts`)
- Name, slug, image
- Title/position, affiliation
- Email, biography
- ORCID, Google Scholar, ResearchGate links

### 3. **Issue** (`issue.ts`)
- Volume, issue number, year
- Cover image
- Published date, description
- Special issue flag and title

### 4. **Editorial Board** (`editorialBoard.ts`)
- Author reference
- Role (Editor-in-Chief, Associate Editor, etc.)
- Areas of expertise
- Display order, active status

### 5. **Announcement** (`announcement.ts`)
- Title, slug, category
- Excerpt, content (rich text)
- Published date
- Featured flag

## 🔗 Next Steps

After setting up Sanity Studio:

1. **Add sample data** through the Studio interface
2. **Get API credentials** from your Sanity project dashboard
3. **Configure Next.js** to fetch data from Sanity
4. **Install Sanity client** in your Next.js app:
   ```bash
   npm install @sanity/client @sanity/image-url next-sanity
   ```

5. **Create .env.local** in your Next.js project root:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   SANITY_API_TOKEN="your-read-token"
   ```

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity + Next.js Guide](https://www.sanity.io/guides/nextjs-app-router-live-preview)
- [Schema Types Reference](https://www.sanity.io/docs/schema-types)

## 🆘 Troubleshooting

**Problem**: Can't authenticate
- Solution: Make sure you have a stable internet connection and try a different login method

**Problem**: Schema errors
- Solution: Ensure all schema files are properly imported in `schemas/index.ts`

**Problem**: Build errors
- Solution: Run `npm install` to ensure all dependencies are installed
