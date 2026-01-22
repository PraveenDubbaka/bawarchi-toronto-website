# Deploying Bawarchi Toronto Website to GitHub Pages

## Prerequisites
- Git installed on your machine
- GitHub account
- Node.js and npm installed

## Step 1: Initialize Git Repository

```bash
cd "/Users/praveendubbaka/Documents/Bawarchi Toronto/Bawarchi website"
git init
git add .
git commit -m "Initial commit: Bawarchi Toronto website with modern UI/UX"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `bawarchi-toronto-website`
3. Description: "Modern, futuristic website for Bawarchi Toronto - #1 Indian Restaurant Chain"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have them)
6. Click "Create repository"

## Step 3: Connect Local to GitHub

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/bawarchi-toronto-website.git
git branch -M main
git push -u origin main
```

## Step 4: Install GitHub Pages Deployment Package

```bash
npm install --save-dev gh-pages
```

## Step 5: Update package.json

Your `package.json` has been updated with:
- `"homepage": "https://YOUR_GITHUB_USERNAME.github.io/bawarchi-toronto-website"`
- Deploy scripts in the scripts section

**Important:** Replace `YOUR_GITHUB_USERNAME` in package.json with your actual GitHub username!

## Step 6: Update vite.config.ts

The `vite.config.ts` has been updated with the correct base path for GitHub Pages.

## Step 7: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build your website for production
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub Pages

## Step 8: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "gh-pages" branch
5. Click "Save"

Your website will be live at: `https://YOUR_GITHUB_USERNAME.github.io/bawarchi-toronto-website/`

## Alternative: Deploy to Vercel (Recommended for Better Performance)

### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel
```

### Option B: Using Vercel Dashboard

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

Your website will be live at: `https://your-project-name.vercel.app`

## Alternative: Deploy to Netlify

### Option A: Using Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option B: Using Netlify Dashboard

1. Go to https://netlify.com
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Your website will be live at: `https://your-site-name.netlify.app`

## Custom Domain Setup (Optional)

### For GitHub Pages:
1. Buy a domain (e.g., bawarchitoronto.com)
2. Add a `CNAME` file in the `public` folder with your domain
3. Configure DNS settings with your domain provider
4. Add custom domain in GitHub repository settings

### For Vercel/Netlify:
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables (if needed)

For sensitive data, create a `.env` file locally (already in .gitignore):

```env
VITE_API_KEY=your_api_key
VITE_CONTACT_EMAIL=info@bawarchitoronto.com
```

Access in code: `import.meta.env.VITE_API_KEY`

## Updating Your Website

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main

# Deploy to GitHub Pages
npm run deploy

# OR if using Vercel/Netlify, just push and it auto-deploys
```

## Troubleshooting

### Issue: Blank page after deployment
- Check browser console for errors
- Verify `base` in vite.config.ts matches your repository name
- Ensure all image paths are correct (use `/images/...` not `./images/...`)

### Issue: 404 on routes
- GitHub Pages doesn't support client-side routing by default
- Add a 404.html that redirects to index.html
- Or use hash router instead of browser router

### Issue: Images not loading
- Verify images are in the `public/images` folder
- Check image paths in components
- Ensure images are committed to git

## Need Help?

- GitHub Pages Docs: https://pages.github.com/
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com/
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html

## Website Features Checklist

✅ Modern React + TypeScript setup
✅ Responsive design with Tailwind CSS
✅ Framer Motion animations
✅ Image slider on hero banner
✅ Scroll-based animations (Arcflow-style)
✅ All pages: Home, Menu, Catering, Promotions, Franchise, Contact
✅ Franchise inquiry form
✅ Professional food photography
✅ Mobile-responsive navigation
✅ SEO-friendly structure
✅ Fast loading with Vite

Your website is production-ready! 🚀
