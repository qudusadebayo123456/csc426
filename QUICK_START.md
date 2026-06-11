# Quick Start Guide

Get the login application running in **5 minutes**.

## 🚀 Option 1: Netlify Deployment (Recommended)

### Step 1: Push to GitHub (2 minutes)
```bash
cd assignment2
git init
git add .
git commit -m "Login app initial commit"
git remote add origin https://github.com/YOUR_USERNAME/csc426-login-app.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify (1 minute)
1. Visit [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import existing project"
3. Select GitHub → Authorize → Choose your repo
4. Click "Deploy site"
5. Wait for "Site is live!" ✅

### Step 3: Test Your App (2 minutes)
- Open your Netlify URL: `https://your-site.netlify.app/login.html`
- Login with: `student` / `csc426`
- See your live app! 🎉

## 🏠 Option 2: Local Testing

### Prerequisites
- Node.js installed ([download](https://nodejs.org))
- This project folder

### Step 1: Install Dependencies (1 minute)
```bash
cd assignment2
npm install
```

### Step 2: Start Dev Server (1 minute)
```bash
npm run dev
```

You'll see:
```
🔨 Local development server started
✨ Server ready on http://localhost:8888
```

### Step 3: Open in Browser (30 seconds)
- Go to: `http://localhost:8888/login.html`
- Login with: `student` / `csc426`
- Dashboard loads ✅

## 👤 Demo Credentials

| Username | Password  | Account |
|----------|-----------|---------|
| student  | csc426    | Student |
| admin    | admin123  | Admin   |

## 🧪 Quick Tests

✅ Try these immediately:

1. **Valid Login**: student / csc426 → Dashboard
2. **Invalid Login**: wrong / wrong → Error message
3. **Empty Fields**: Leave blank → Validation errors
4. **Reset Button**: Fill form → Click Reset → Cleared
5. **Mobile**: Open on phone → Responsive layout

## 📱 Features

- ✅ Modern dark theme UI
- ✅ Real-time validation
- ✅ Password visibility toggle
- ✅ Responsive design
- ✅ Backend authentication
- ✅ Session management
- ✅ User dashboard

## 📚 Next Steps

- Read [README.md](README.md) for full documentation
- See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment steps
- Check [TESTING.md](TESTING.md) for testing guide
- View source code:
  - `login.html` - Login page
  - `dashboard.html` - User dashboard
  - `netlify/functions/authenticate.js` - Backend logic

## 🔗 Useful Links

- **GitHub**: Push your code here
- **Netlify**: Deploy your site here
- **Live Demo**: Share your `netlify.app` URL

## 💡 Tips

- Use `npm run dev` for local development with hot reload
- Check browser console (F12) for any errors
- Netlify auto-deploys on every git push
- Share your live URL with classmates!

## ❓ Issues?

**Functions not working?**
- Use `npm run dev` not `npm start`
- Netlify CLI must be installed

**Login not persisting?**
- Check browser allows sessionStorage
- Hard refresh: Ctrl+Shift+R

**Can't deploy?**
- Ensure all files pushed to GitHub
- Check netlify.toml syntax
- Verify no syntax errors

## 🎉 Success!

Your login app is live! Share your Netlify URL:
```
https://your-site-name.netlify.app/login.html
```

---

**Time to Deploy**: ~5 minutes ⏱️
