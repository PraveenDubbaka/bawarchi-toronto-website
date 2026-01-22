# 🚀 GitHub Pages Deployment - Step by Step

## Your website is ready! Follow these exact steps:

### Step 1: Create GitHub Repository

1. Open your browser and go to: **https://github.com/new**
2. Fill in the details:
   - **Repository name**: `bawarchi-toronto-website`
   - **Description**: "Modern website for Bawarchi Toronto - #1 Indian Restaurant Chain"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **Important**: DO NOT check any boxes (no README, no .gitignore, no license)
3. Click **"Create repository"**

### Step 2: Copy Your GitHub Username

After creating the repo, you'll see a URL like:
`https://github.com/YOUR_USERNAME/bawarchi-toronto-website`

Copy the **YOUR_USERNAME** part (this is your GitHub username)

### Step 3: Update Configuration Files

Open these files and replace `YOUR_GITHUB_USERNAME` with your actual username:

**File 1: package.json** (Line 6)
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/bawarchi-toronto-website",
```
Change to (example if username is "johndoe"):
```json
"homepage": "https://johndoe.github.io/bawarchi-toronto-website",
```

**File 2: vite.config.ts** (Line 7)
```typescript
base: '/bawarchi-toronto-website/',
```
This should stay as is (already correct!)

### Step 4: Run Deployment Commands

Open Terminal and run these commands ONE BY ONE:

```bash
# Navigate to project folder
cd "/Users/praveendubbaka/Documents/Bawarchi Toronto/Bawarchi website"

# Connect to GitHub (replace YOUR_USERNAME with your GitHub username!)
git remote add origin https://github.com/YOUR_USERNAME/bawarchi-toronto-website.git

# Push to GitHub
git branch -M main
git push -u origin main

# Build and deploy to GitHub Pages
npm run deploy
```

**IMPORTANT**: Replace `YOUR_USERNAME` in the `git remote add` command with your actual GitHub username!

Example if your username is "johndoe":
```bash
git remote add origin https://github.com/johndoe/bawarchi-toronto-website.git
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub:
   `https://github.com/YOUR_USERNAME/bawarchi-toronto-website`
2. Click on **"Settings"** tab (top right)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**:
   - Select branch: **`gh-pages`** (not main!)
   - Folder: **`/ (root)`**
5. Click **"Save"**

### Step 6: Wait and Access Your Website

- GitHub Pages takes 2-5 minutes to build
- Your website will be live at:
  **`https://YOUR_USERNAME.github.io/bawarchi-toronto-website/`**

Example: If your username is "johndoe":
**`https://johndoe.github.io/bawarchi-toronto-website/`**

---

## 🎉 That's it! Your website is now live!

### Share with Your Client:

Send them this link:
**`https://YOUR_USERNAME.github.io/bawarchi-toronto-website/`**

### Making Updates Later:

Whenever you make changes to the website:

```bash
# Save changes
git add .
git commit -m "Description of your changes"
git push origin main

# Deploy updates
npm run deploy
```

The website will automatically update in 2-5 minutes!

---

## ⚠️ Troubleshooting

### Issue: "Remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/bawarchi-toronto-website.git
```

### Issue: Blank page after deployment
1. Check that you updated `package.json` with your GitHub username
2. Make sure `gh-pages` branch is selected in Settings → Pages
3. Wait 5 minutes and try again

### Issue: 404 Page Not Found
1. Verify the repository name is exactly: `bawarchi-toronto-website`
2. Check that GitHub Pages is enabled in Settings
3. Make sure the branch is `gh-pages` not `main`

---

## 📞 Need Help?

If you run into any issues:
1. Check the error message carefully
2. Make sure you replaced YOUR_USERNAME with your actual GitHub username
3. Verify you're using the correct repository name
4. Wait 5 minutes after deployment before checking the website

---

## ✨ Features of Your Website

✅ Dynamic hero banner with automatic image slider
✅ Smooth scroll animations (Arcflow-style)
✅ All 6 pages: Home, Menu, Catering, Promotions, Franchise, Contact
✅ Franchise inquiry form
✅ Promotions with promo codes
✅ Mobile responsive design
✅ Professional food photography
✅ Fast loading performance

Your client will love it! 🎊
