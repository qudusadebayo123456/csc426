# GitHub & Git Setup Guide

Complete guide to creating and managing your GitHub repository for the login application.

## 📌 What You Need

- ✅ GitHub account (free at [github.com](https://github.com))
- ✅ Git installed on your computer
- ✅ SSH key or Personal Access Token (for authentication)

## 🔑 Step 1: Set Up Git (One-time)

### Install Git
- **Windows**: [git-scm.com/download/win](https://git-scm.com/download/win)
- **Mac**: `brew install git`
- **Linux**: `sudo apt install git`

### Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Verify:
```bash
git config --list
```

## 🗂️ Step 2: Create GitHub Repository

### 2.1 On GitHub.com
1. Log in to [GitHub.com](https://github.com)
2. Click **"+"** (top right) → **"New repository"**
3. Fill in details:
   - **Repository name**: `csc426-login-app` (or similar)
   - **Description**: "Web-based login authentication application"
   - **Visibility**: Public (for Netlify deployment)
   - **Initialize**: Leave unchecked (we have files)
4. Click **"Create repository"**

### 2.2 Copy Repository URL
- You'll see two options: **HTTPS** or **SSH**
- Copy the HTTPS URL: `https://github.com/YOUR_USERNAME/csc426-login-app.git`

## 🚀 Step 3: Initialize Local Repository

### In Your Project Folder
```bash
# Navigate to project
cd assignment2

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Login authentication app with Netlify Functions"

# Add remote (paste your URL)
git remote add origin https://github.com/YOUR_USERNAME/csc426-login-app.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Verify on GitHub
- Go to `https://github.com/YOUR_USERNAME/csc426-login-app`
- You should see all your files!

## 🔄 Step 4: Daily Git Workflow

### Make Changes
```bash
# Check status
git status

# See differences
git diff

# Stage specific file
git add filename.html

# Or stage all changes
git add .
```

### Commit Changes
```bash
git commit -m "Brief description of changes"
```

Good commit messages:
- ✅ "Add password validation"
- ✅ "Fix mobile responsive layout"
- ✅ "Update README with deployment steps"
- ❌ "fixes" or "update"

### Push to GitHub
```bash
git push
```

This triggers automatic Netlify deployment!

## 🌿 Step 5: Branching (For Features)

### Create Feature Branch
```bash
git checkout -b feature/add-registration
```

### Work on Feature
```bash
git add .
git commit -m "Add user registration form"
git push origin feature/add-registration
```

### Create Pull Request
1. Go to GitHub repo
2. Click "Pull requests"
3. Click "New pull request"
4. Select your branch
5. Add description
6. Click "Create pull request"
7. Review changes
8. Click "Merge pull request"

### Delete Branch
```bash
git branch -d feature/add-registration
```

## 📋 Useful Git Commands

### Check History
```bash
# View commits
git log

# View commits (one line)
git log --oneline

# View commits for specific file
git log -- filename.html
```

### Undo Changes
```bash
# Discard changes to file
git checkout -- filename.html

# Revert specific commit
git revert COMMIT_HASH

# Reset to previous commit
git reset --hard HEAD~1
```

### View Differences
```bash
# Compare working directory with last commit
git diff

# Compare staged changes
git diff --staged

# Compare with specific commit
git diff COMMIT_HASH
```

### Stash Changes
```bash
# Save changes temporarily
git stash

# List stashes
git stash list

# Restore changes
git stash pop
```

## 🔐 Authentication

### Option 1: HTTPS (Recommended for Beginners)
```bash
# Push will prompt for username/password
git push

# Or use Personal Access Token (PAT):
# 1. Generate at github.com/settings/tokens
# 2. Use as password when prompted
```

### Option 2: SSH (More Secure)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to GitHub:
# 1. Copy: cat ~/.ssh/id_ed25519.pub (Mac/Linux)
# 2. Go to github.com/settings/keys
# 3. Click "New SSH key"
# 4. Paste and save

# Test connection
ssh -T git@github.com
```

## 📁 Repository Structure Best Practices

```
csc426-login-app/
├── README.md              ← Main documentation
├── QUICK_START.md         ← Quick setup
├── DEPLOYMENT.md          ← Deployment guide
├── TESTING.md             ← Testing procedures
├── ARCHITECTURE.md        ← Technical architecture
├── CHECKLIST.md           ← Project checklist
├── .gitignore             ← What to exclude
├── .github/               ← GitHub workflows
│   └── workflows/
│       └── ci.yml         ← CI/CD pipeline
├── login.html             ← Main app files
├── dashboard.html
├── package.json
├── netlify.toml
├── index.js
└── netlify/
    └── functions/
        ├── authenticate.js
        └── validate.js
```

## 🏷️ Using Tags for Versions

```bash
# Create tag
git tag -a v1.0.0 -m "Version 1.0.0 - Initial release"

# Push tag
git push origin v1.0.0

# Push all tags
git push origin --tags

# View tags
git tag -l

# Delete tag
git tag -d v1.0.0
git push origin :v1.0.0
```

## 🤝 Collaboration

### Add Collaborators
1. Go to repository Settings
2. Click "Manage access"
3. Click "Invite collaborators"
4. Add GitHub usernames
5. They'll get invitation

### Code Review Process
1. Create pull request
2. Request reviewers
3. Collaborators review code
4. Make requested changes
5. Merge when approved

## 🔔 GitHub Notifications

- Watch repository: Click "Watch" button
- Get notified of: Issues, PRs, discussions
- Adjust settings: github.com/settings/notifications

## 📊 GitHub Profile

### Contribute to Your Profile
- Commits show on contribution graph
- Create meaningful commit history
- Profile link: `github.com/YOUR_USERNAME`

### Share Your Repository
```
Link: https://github.com/YOUR_USERNAME/csc426-login-app
Badge: ![GitHub](https://img.shields.io/badge/GitHub-View%20Repo-blue?logo=github)
```

## 🛡️ Security Best Practices

### Never Commit
- ❌ Passwords
- ❌ API keys
- ❌ Token secrets
- ❌ Private data

### Use .gitignore
```
# Already set up in your project
node_modules/
.env
.env.local
.netlify/
```

### Protect Secrets
```bash
# Create .env file (not committed)
API_KEY=your_secret_here

# Reference in code
const apiKey = process.env.API_KEY;
```

## 🚨 Troubleshooting

### Issue: "fatal: not a git repository"
```bash
# You're not in project folder
cd assignment2
git init
```

### Issue: "Permission denied (publickey)"
```bash
# SSH key issues
ssh-keygen -t ed25519
# Add new key to GitHub settings
```

### Issue: "fatal: The current branch main has no upstream"
```bash
git push -u origin main
```

### Issue: "CONFLICT: merge conflict in filename"
```bash
# Edit file to resolve conflicts
# Then:
git add filename
git commit -m "Resolve merge conflict"
git push
```

### Issue: "committed sensitive data"
```bash
# For small projects, delete and recreate
git rm --cached filename
git commit -m "Remove sensitive file"

# For large files, use BFG
# https://rtyley.github.io/bfg-repo-cleaner/
```

## 📚 Resources

- **Git Documentation**: [git-scm.com/docs](https://git-scm.com/docs)
- **GitHub Guides**: [guides.github.com](https://guides.github.com)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Interactive Git Tutorial**: [learngitbranching.js.org](https://learngitbranching.js.org)

## ✅ Quick Reference

```bash
# Common workflow
git status              # Check status
git add .              # Stage all changes
git commit -m "msg"    # Commit
git push               # Push to GitHub

# View history
git log --oneline

# Create and switch branch
git checkout -b feature/name

# Switch branch
git checkout main

# Merge branch
git merge feature/name

# Delete branch
git branch -d feature/name

# Undo last commit
git reset --soft HEAD~1

# View remote
git remote -v

# Fetch latest
git fetch

# Pull latest
git pull
```

---

## 🎯 Next Steps

1. ✅ Create GitHub account (if needed)
2. ✅ Create repository
3. ✅ Push code to GitHub
4. ✅ Connect to Netlify
5. ✅ Deploy!

Your code is now version controlled and ready for deployment!

---

**Happy Coding! 🚀**
