# CSC426 Web-Based Login Authentication Application

A modern, responsive web-based authentication system with frontend validation, backend authentication, and serverless deployment on Netlify.

## 🎯 Features

- ✅ **User Authentication** - Username and password validation
- ✅ **Input Validation** - Client-side and server-side validation
- ✅ **Responsive Design** - Mobile-friendly UI with dark theme
- ✅ **Password Toggle** - Show/hide password functionality
- ✅ **Error Handling** - Clear error messages for invalid inputs
- ✅ **Success Messages** - Toast notifications for user feedback
- ✅ **Dashboard** - User profile page after successful login
- ✅ **Session Management** - Session storage for user data
- ✅ **Netlify Functions** - Serverless backend for authentication
- ✅ **Production Ready** - Deploy with zero configuration

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js with Netlify Functions
- **Hosting**: Netlify
- **Storage**: Demo credentials (can integrate with database)

## 📁 Project Structure

```
assignment2/
├── login.html              # Login page
├── dashboard.html          # User dashboard after login
├── netlify.toml            # Netlify configuration
├── netlify/functions/
│   ├── authenticate.js     # Authentication function
│   └── validate.js         # Input validation function
├── package.json            # Project dependencies
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone or download the project**
   ```bash
   cd assignment2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start local development server**
   ```bash
   npm run dev
   ```
   
   This will start Netlify dev server at `http://localhost:8888`

4. **Test the application**
   - Open `http://localhost:8888/login.html`
   - Use demo credentials:
     - Username: `student` / Password: `csc426`
     - Username: `admin` / Password: `admin123`

### Demo Credentials

| Username | Password | Name |
|----------|----------|------|
| student  | csc426   | Student User |
| admin    | admin123 | Admin User |

## 📋 Form Fields & Validation

### Login Form
- **Username**: Required, min 3 characters, alphanumeric + underscore/hyphen
- **Password**: Required, min 4 characters
- **Submit Button**: Sign In (with loading state)
- **Reset Button**: Clear form and focus on username

### Validation Features
- **Client-side**: Real-time validation as user types
- **Server-side**: Additional validation on backend
- **Error Display**: Clear error messages below each field
- **Toast Notifications**: Success/error messages at top of form

## 🔐 Security Features

- Input validation on both client and server
- CORS headers configured for cross-origin requests
- Password visibility toggle for better UX
- Session-based authentication with sessionStorage
- Protected dashboard (requires active session)

## 🌐 Deployment on Netlify

### Prerequisites
- GitHub account with repository
- Netlify account (free tier available)

### Step 1: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Login authentication app"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/assignment2.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

#### Option A: Automatic Deployment (Recommended)
1. Go to [Netlify](https://app.netlify.com)
2. Click "New site from Git"
3. Select GitHub and authorize
4. Choose your repository
5. Click "Deploy site"

#### Option B: Manual Deployment
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Step 3: Verify Deployment
- Check your Netlify dashboard for deployment status
- Your app will be available at `https://your-site-name.netlify.app`
- Test login functionality at `https://your-site-name.netlify.app/login.html`

## 🔧 Advanced Configuration

### Environment Variables
Create a `.env` file for sensitive data (not included in git):
```env
DB_CONNECTION=your_database_connection
API_KEY=your_api_key
```

### Database Integration
To use a real database instead of demo credentials:

1. Install database package (e.g., MongoDB):
   ```bash
   npm install mongodb
   ```

2. Update `netlify/functions/authenticate.js` to query database

3. Use Netlify environment variables for credentials

### Custom Domain
1. In Netlify dashboard, go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration steps

## 📝 File Descriptions

### login.html
- Main login form
- Responsive dark theme UI
- Client-side validation
- Password visibility toggle
- Toast notifications
- Calls Netlify Function for authentication

### dashboard.html
- User profile page
- Displays user information
- Logout functionality
- Session validation
- Responsive design

### netlify/functions/authenticate.js
- Serverless function for user authentication
- Validates credentials against user database
- Returns user data on success
- CORS-enabled for cross-origin requests

### netlify/functions/validate.js
- Input validation function
- Email format validation
- Password strength requirements
- Username format validation

### netlify.toml
- Netlify configuration file
- Function routing setup
- Build commands
- Environment configuration

## 🧪 Testing

### Test Cases
1. ✅ Login with valid credentials → Redirect to dashboard
2. ✅ Login with invalid username → Error message
3. ✅ Login with invalid password → Error message
4. ✅ Empty username field → Validation error
5. ✅ Empty password field → Validation error
6. ✅ Password too short → Validation error
7. ✅ Reset button → Clear all fields
8. ✅ Toggle password visibility → Show/hide password
9. ✅ Logout from dashboard → Return to login
10. ✅ Direct dashboard access without login → Redirect to login

## 📱 Responsive Design

- **Desktop**: Full-width card with centered content
- **Tablet**: Adjusted padding and button layout
- **Mobile**: Optimized layout with stacked buttons

## 🐛 Troubleshooting

### Functions not working locally
- Ensure Netlify CLI is installed: `npm install -g netlify-cli`
- Start dev server: `npm run dev` (not just opening HTML file)

### CORS errors
- Check netlify.toml has correct redirects
- Verify function endpoints are correct

### Login not persisting
- Check browser allows sessionStorage
- Verify dashboard.html is in same directory

### Deployment fails
- Check `netlify.toml` syntax
- Ensure functions directory exists
- Verify all files are in git repository

## 📚 Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Functions Guide](https://docs.netlify.com/functions/overview)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

## 🔐 Production Recommendations

1. **Use bcrypt** for password hashing:
   ```bash
   npm install bcryptjs
   ```

2. **Connect to real database** (MongoDB, PostgreSQL, Firebase)

3. **Implement JWT tokens** for session management

4. **Add rate limiting** to prevent brute force attacks

5. **Use HTTPS** (automatic with Netlify)

6. **Set up email verification** for new accounts

7. **Implement password reset** functionality

8. **Add two-factor authentication** for extra security

## 📄 License

MIT License - Feel free to use this project for educational purposes

## 👨‍💻 Author

CSC426 - Web Development Course Assignment

## 📞 Support

For issues or questions, please check the troubleshooting section or consult the Netlify documentation.

---

**Last Updated**: June 2026
