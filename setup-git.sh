#!/bin/bash

echo "🚀 Bawarchi Toronto Website - Git Setup & Deployment"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Change to project directory
cd "/Users/praveendubbaka/Documents/Bawarchi Toronto/Bawarchi website"

echo "${BLUE}Step 1: Installing gh-pages package...${NC}"
npm install --save-dev gh-pages

echo ""
echo "${BLUE}Step 2: Initializing Git repository...${NC}"
git init

echo ""
echo "${BLUE}Step 3: Adding all files to Git...${NC}"
git add .

echo ""
echo "${BLUE}Step 4: Creating initial commit...${NC}"
git commit -m "Initial commit: Bawarchi Toronto modern website with React, TypeScript, Tailwind, and Framer Motion"

echo ""
echo "${GREEN}✓ Git repository initialized successfully!${NC}"
echo ""
echo "${YELLOW}=================================================="
echo "NEXT STEPS:"
echo "=================================================="
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Go to: https://github.com/new"
echo "   - Name: bawarchi-toronto-website"
echo "   - Make it Public"
echo "   - DO NOT initialize with README"
echo ""
echo "2. Update package.json:"
echo "   - Replace YOUR_GITHUB_USERNAME with your actual username"
echo ""
echo "3. Connect to GitHub (replace YOUR_GITHUB_USERNAME):"
echo "   ${BLUE}git remote add origin https://github.com/YOUR_GITHUB_USERNAME/bawarchi-toronto-website.git${NC}"
echo "   ${BLUE}git branch -M main${NC}"
echo "   ${BLUE}git push -u origin main${NC}"
echo ""
echo "4. Deploy to GitHub Pages:"
echo "   ${BLUE}npm run deploy${NC}"
echo ""
echo "5. Enable GitHub Pages:"
echo "   - Go to repository Settings → Pages"
echo "   - Source: gh-pages branch"
echo "   - Save"
echo ""
echo "Your site will be live at:"
echo "${GREEN}https://YOUR_GITHUB_USERNAME.github.io/bawarchi-toronto-website/${NC}"
echo ""
echo "=================================================="
echo "RECOMMENDED: Deploy to Vercel instead for better performance"
echo "=================================================="
echo ""
echo "1. Install Vercel CLI:"
echo "   ${BLUE}npm install -g vercel${NC}"
echo ""
echo "2. Deploy:"
echo "   ${BLUE}vercel${NC}"
echo ""
echo "For more details, see DEPLOYMENT_GUIDE.md"
echo ""
