# Deployment Guide - Netlify

This guide walks you through deploying the CSC426 Login Authentication App to Netlify.

## Prerequisites

- ✅ GitHub account
- ✅ Netlify account (free tier: [app.netlify.com](https://app.netlify.com))
- ✅ Git installed locally
- ✅ Node.js installed (for npm)

## 📦 Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)
```bash
cd assignment2
git init
```

### 1.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and login
2. Click "+" → "New repository"
3. Name it: `csc426-login-app` (or similar)
4. Add description: "Web-based login authentication application"
5. Choose public (for deployment) or private
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 1.3 Add Remote and Push
```bash
# Add your GitHub repo (replace USER and REPO)
git remote add origin https://github.com/YOUR_USERNAME/csc426-login-app.git

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Login authentication app with Netlify Functions"

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

Verify files are on GitHub by visiting: `https://github.com/YOUR_USERNAME/csc426-login-app`

## 🚀 Step 2: Deploy on Netlify

### Option A: Automatic Deployment from Git (RECOMMENDED)

#### 2A.1 Connect Netlify to GitHub
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site"
3. Select "Import an existing project"
4. Click "GitHub"
5. Authorize Netlify to access your GitHub account

#### 2A.2 Select Repository
1. Select your repository: `csc426-login-app`
2. Branch: `main`
3. Build command: Leave blank (static site)
4. Publish directory: `.` (root)
5. Click "Deploy site"

#### 2A.3 Wait for Deployment
- Netlify will automatically build and deploy
- You'll see "Site is live!" when complete
- Your URL will be: `https://your-site-name.netlify.app`

### Option B: Manual Deployment with CLI

#### 2B.1 Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2B.2 Login to Netlify
```bash
netlify login
```
This opens a browser to authorize the CLI.

#### 2B.3 Deploy
```bash
# Option 1: Preview deployment (free)
netlify deploy

# Option 2: Production deployment (recommended after testing)
netlify deploy --prod
```

## ✅ Step 3: Test Your Deployment

1. Open your Netlify site URL (check Netlify dashboard)
2. Navigate to `/login.html`
3. Test with demo credentials:
   - Username: `student` / Password: `csc426`
   - Username: `admin` / Password: `admin123`
4. After login, you should see the dashboard
5. Test logout button

## 🔗 Step 4: Configure Custom Domain (Optional)

1. In Netlify dashboard: Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain: `yourdomain.com`
4. Follow DNS configuration instructions
5. Wait for DNS propagation (usually 24-48 hours)

## 📊 Monitoring & Logs

### View Deployment Logs
1. Go to Netlify dashboard
2. Click your site
3. "Deployments" tab to see all deployments
4. Click a deployment to view logs

### View Function Logs
1. Go to "Functions" tab
2. Click a function to see invocation logs
3. Check for errors or issues

## 🔄 Continuous Deployment

Every time you push to GitHub, Netlify automatically redeploys:

```bash
# Make changes locally
echo "// Updated code" >> login.html

# Commit and push
git add .
git commit -m "Update login form styling"
git push

# Netlify automatically deploys!
```

## 📝 Environment Variables (Advanced)

### Add Environment Variable in Netlify
1. Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add variables needed for your app

### Use in Functions
```javascript
const API_KEY = process.env.API_KEY;
```

## 🔒 Security Checklist

- [ ] Enable HTTPS (automatic with Netlify)
- [ ] Set up environment variables for sensitive data
- [ ] Configure CORS properly
- [ ] Use strong demo credentials
- [ ] Test authentication thoroughly
- [ ] Check function logs for errors

## 🐛 Troubleshooting

### Issue: Functions return 404
**Solution**: Check `netlify.toml` has correct redirects
```toml
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

### Issue: CORS errors in browser console
**Solution**: Verify functions have CORS headers:
```javascript
'Access-Control-Allow-Origin': '*'
```

### Issue: Login page loads but functions don't work
**Solution**: 
1. Check Netlify Functions tab for errors
2. Verify API endpoint in login.html matches your site URL
3. Check browser console for network errors (F12 → Network tab)

### Issue: Changes aren't reflecting after push
**Solution**: 
1. Wait 30-60 seconds for deploy to complete
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check Netlify dashboard for deploy status

## 📱 Testing on Different Devices

### Mobile Testing
1. Get your Netlify URL (e.g., `https://my-app.netlify.app`)
2. Open on phone using mobile browser
3. Test login and responsive design

### Browser Compatibility
- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Mobile browsers ✅

## 🚀 Advanced: Custom Deployment Scripts

### Deploy with Script
Create `deploy.sh`:
```bash
#!/bin/bash
git add .
git commit -m "Deploy update: $(date)"
git push
echo "✅ Deployment triggered!"
```

Run with: `chmod +x deploy.sh && ./deploy.sh`

## 📞 Support & Resources

- [Netlify Docs](https://docs.netlify.com)
- [Netlify Functions](https://docs.netlify.com/functions/overview)
- [Contact Netlify Support](https://app.netlify.com/support)

## 🎉 Success!

Your login app is now live on the web! 

- **Live URL**: `https://your-site.netlify.app/login.html`
- **Dashboard**: `https://your-site.netlify.app/dashboard.html`
- **GitHub Repo**: `https://github.com/YOUR_USERNAME/csc426-login-app`

Share your deployment with classmates and instructors!
