#!/bin/bash

echo "🚀 Building portfolio for GitHub Pages deployment..."

# Build the project
npm run build

echo "📦 Deploying to GitHub Pages..."

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/portfolio-app/browser --name="Saransh Sharma" --email=Saransh1220@gmail.com --no-silent

echo "✅ Deployment complete! Your portfolio should be live at https://saransh1220.github.io/"
echo "⏳ If you still see the README, wait 2-3 minutes for GitHub Pages to update, then refresh the page."