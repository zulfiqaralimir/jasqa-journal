# 🎨 Sanity Studio Setup Guide for JASQA Journal

## ✅ What's Already Done

- ✅ Sanity packages installed in Next.js
- ✅ Environment variables configured (.env.local)
- ✅ Project ID: `oK9wnokWK`
- ✅ API Token configured
- ✅ Schema files created (5 schemas ready)
- ✅ Next.js integration files ready

## 🚀 What You Need to Do

### Option A: Using Sanity Management Dashboard (Easiest)

1. **Go to Sanity Dashboard**
   - Visit: https://www.sanity.io/manage/project/oK9wnokWK

2. **Check Dataset**
   - Look for "Datasets" section
   - Verify "production" dataset exists
   - If not, create it

3. **Initialize Studio Locally**
   ```bash
   # Authenticate first
   npx sanity login

   # Then initialize
   npx sanity init --project oK9wnokWK --dataset production --output-path studio
   ```

### Option B: Manual Step-by-Step (Recommended)

#### Step 1: Login to Sanity

Open your terminal and run:

```bash
npx sanity login
```

- Choose your login method (Google, GitHub, or Email)
- A browser window will open
- Complete the authentication
- Return to terminal

#### Step 2: Initialize Studio

```bash
npx sanity init
```

**Answer the prompts:**

```
? Select project to use
  → Use existing project (select this)

? Select project
  → JASQA Journal (oK9wnokWK)

? Select dataset
  → production (or create new if not listed)

? Project output path
  → studio (type this)

? Select project template
  → Clean project with no predefined schemas
```

#### Step 3: Navigate to Studio

```bash
cd studio
```

#### Step 4: Copy Schema Files

**On Windows (Command Prompt):**
```cmd
xcopy /E /I ..\sanity\schemas .\schemas
```

**On Windows (PowerShell):**
```powershell
Copy-Item -Path ..\sanity\schemas -Destination .\schemas -Recurse -Force
```

**On Mac/Linux:**
```bash
cp -r ../sanity/schemas/* ./schemas/
```

#### Step 5: Verify Schemas Were Copied

```bash
# List schema files
dir schemas       # Windows CMD
ls schemas        # Windows PowerShell / Mac / Linux
```

You should see:
- article.ts
- author.ts
- issue.ts
- editorialBoard.ts
- announcement.ts
- index.ts

#### Step 6: Update Studio Config

Open `studio/sanity.config.ts` (or `.js`) and ensure it looks like:

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'JASQA Journal',

  projectId: 'oK9wnokWK',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
```

**Key things to check:**
- ✅ `import {schemaTypes} from './schemas'` is at the top
- ✅ `projectId: 'oK9wnokWK'`
- ✅ `dataset: 'production'`
- ✅ `schema: { types: schemaTypes }` is in config

#### Step 7: Install Dependencies

```bash
npm install
```

This will install all Sanity Studio dependencies.

#### Step 8: Start Sanity Studio

```bash
npx sanity dev
```

or

```bash
npm run dev
```

**Studio will start at:** http://localhost:3333

## 🎯 Expected Result

Once running, you'll have:

1. **Next.js Frontend**: http://localhost:3000
   - Your public-facing journal website

2. **Sanity Studio**: http://localhost:3333
   - Your content management system

## 📝 What to Do in Studio

Once Studio is running:

1. **Create Authors First**
   - Go to "Author" section
   - Add author profiles
   - These will be referenced by articles

2. **Create Issues**
   - Go to "Issue" section
   - Add Volume 1, Issue 1
   - Set year and publication date

3. **Create Articles**
   - Go to "Article" section
   - Write your first article
   - Link authors and issue
   - Add keywords, DOI, etc.

4. **Add Editorial Board**
   - Go to "Editorial Board Member"
   - Link authors with their roles

5. **Post Announcements**
   - Go to "Announcement"
   - Add news and updates

## 🔧 Troubleshooting

### "Dataset not found"
```bash
# Check your datasets
npx sanity dataset list

# Create production dataset if missing
npx sanity dataset create production
```

### "Authentication required"
```bash
# Login again
npx sanity login
```

### "Cannot find module './schemas'"
- Make sure you copied the schemas folder
- Check that `schemas/index.ts` exists
- Verify the import path in `sanity.config.ts`

### "Port 3333 already in use"
```bash
# Kill the process using port 3333
npx kill-port 3333

# Or use a different port
npx sanity dev --port 3334
```

### Schema errors
- Ensure all schema files are in `studio/schemas/`
- Check `schemas/index.ts` exports all schemas
- Restart the studio: Ctrl+C and run `npx sanity dev` again

## 🚀 Optional: Deploy Studio

Once everything works locally, deploy your studio:

```bash
cd studio
npx sanity deploy
```

Choose a studio hostname (e.g., `jasqa-journal`)

Your studio will be available at:
https://jasqa-journal.sanity.studio

## 📞 Need Help?

If you get stuck:
1. Check the error message carefully
2. Verify project ID: `oK9wnokWK`
3. Verify dataset: `production`
4. Ensure you're logged in: `npx sanity login`
5. Check Sanity Dashboard: https://www.sanity.io/manage

## ✅ Checklist

- [ ] Authenticated with Sanity (`npx sanity login`)
- [ ] Initialized studio (`npx sanity init`)
- [ ] Copied schema files to `studio/schemas/`
- [ ] Updated `sanity.config.ts` to import schemas
- [ ] Installed dependencies (`npm install`)
- [ ] Started studio (`npx sanity dev`)
- [ ] Studio opens at http://localhost:3333
- [ ] Can see all 5 content types in studio
- [ ] Created sample content
