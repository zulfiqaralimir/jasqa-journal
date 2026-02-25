# JASQA Journal - Deployment Guide

## 🚀 Quick Deployment Checklist

### Prerequisites
- [x] GitHub repository created and code pushed
- [ ] Vercel account created
- [ ] Sanity Studio deployed
- [ ] Environment variables configured

---

## 1. Deploy Sanity Studio

### Option A: Automatic Deployment (Recommended)
```bash
npx sanity deploy
```

**What it does:**
- Builds and deploys your Sanity Studio
- Hosts it at: `https://jasqa-journal.sanity.studio`
- Allows you to manage content from anywhere

### Option B: Manual Deployment
If automatic deployment fails, you can:
1. Build the studio: `npx sanity build`
2. Deploy the `dist` folder to your preferred hosting

---

## 2. Deploy to Vercel

### Step-by-Step Instructions:

#### A. Via Vercel Dashboard (Easiest)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select `zulfiqaralimir/jasqa-journal`
4. Configure project:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

#### B. Add Environment Variables
In Vercel dashboard, add these environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=yhv6w713
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=sklI1MpQIIFxav7ThGWoGz5ve4YNO2bMkib94LZVP12UPFUYP2TFwcBsefBz6iOIbICTjZ33B3mgHoiLBrMilyG4NOGRvYeeA7fGgVuEQ25bl2k1ycGxCgDhc7zyBHup6ZAQWvNXbqEgvI21A9J56HxSWoIygQ3wYIElMrVKCGAoJirXfPYB
NEXT_PUBLIC_SITE_URL=https://jasqa-journal.vercel.app
```

> ⚠️ **Important:** Replace `NEXT_PUBLIC_SITE_URL` with your actual Vercel domain after deployment

#### C. Deploy
Click "Deploy" and wait for the build to complete (usually 2-3 minutes)

### Via Vercel CLI (Alternative)
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 3. Configure CORS for Sanity

After deploying to Vercel, add your production domain to Sanity CORS settings:

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project: `yhv6w713`
3. Navigate to **API** → **CORS Origins**
4. Add these origins:
   - `http://localhost:3000` (for local development)
   - `https://jasqa-journal.vercel.app` (your production URL)
   - `https://*.vercel.app` (for preview deployments)

---

## 4. Update Production URL

After deployment, update the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Edit `NEXT_PUBLIC_SITE_URL` to your actual domain
3. Redeploy to apply changes

---

## 5. Configure Custom Domain (Optional)

### In Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `jasqa-journal.com`)
3. Follow DNS configuration instructions

### Update Environment Variables:
Update `NEXT_PUBLIC_SITE_URL` to your custom domain and redeploy

---

## 6. Post-Deployment Tasks

### A. Test the Deployment
- [ ] Homepage loads correctly
- [ ] Sanity data appears (articles, issues, etc.)
- [ ] Navigation works
- [ ] Article pages render with content
- [ ] News and announcements display
- [ ] Editorial board shows members

### B. Add Content via Sanity Studio
1. Go to your Sanity Studio: `https://jasqa-journal.sanity.studio`
2. Login with your Sanity credentials
3. Start adding:
   - Authors
   - Issues (Volume 1, Issue 1, etc.)
   - Articles
   - Editorial Board Members
   - Announcements

### C. Set Up Webhooks (Optional)
For instant content updates without waiting for ISR:

1. In Sanity Dashboard → API → Webhooks
2. Add webhook: `https://jasqa-journal.vercel.app/api/revalidate`
3. Trigger on: Document changes
4. This will trigger revalidation immediately when content is updated

---

## 7. Monitoring & Analytics

### Enable Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Enable Vercel Speed Insights
```bash
npm install @vercel/speed-insights
```

---

## 8. Troubleshooting

### Build Fails on Vercel
- Check build logs for specific errors
- Verify all environment variables are set
- Ensure `package.json` has correct dependencies
- Check Node.js version compatibility

### Sanity Data Not Appearing
- Verify environment variables are correct
- Check CORS settings in Sanity
- Ensure API token has read permissions
- Check browser console for errors

### Studio Not Accessible
- Verify `basePath: '/studio'` in `sanity.config.ts`
- Check that the route is not blocked
- Clear browser cache and try again

---

## 🎯 Expected Results

After successful deployment:

- **Frontend:** `https://jasqa-journal.vercel.app`
- **Sanity Studio:** `https://jasqa-journal.sanity.studio`
- **Build Time:** ~2-3 minutes
- **ISR Revalidation:** 60 seconds
- **Lighthouse Score:** 90+ (Performance, Accessibility, SEO)

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Project Repository:** https://github.com/zulfiqaralimir/jasqa-journal

---

## 🔐 Security Checklist

- [ ] API tokens are stored as environment variables (not in code)
- [ ] `.env.local` is in `.gitignore`
- [ ] CORS origins are restricted to your domains
- [ ] Sanity API token has minimal required permissions
- [ ] Production site uses HTTPS
- [ ] Environment variables are set in Vercel dashboard

---

**Last Updated:** 2026-02-25
**Status:** Ready for Production Deployment
