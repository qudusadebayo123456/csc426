# Testing Guide

This document provides comprehensive testing procedures for the CSC426 Login Application.

## 📋 Test Checklist

### 1. Frontend Tests

#### 1.1 Form Rendering
- [ ] Login form displays on page load
- [ ] All input fields visible and labeled
- [ ] Submit and Reset buttons present
- [ ] Company logo and title display correctly
- [ ] Dark theme applies correctly
- [ ] Page is responsive on mobile/tablet

#### 1.2 Input Fields
- [ ] Username field accepts text input
- [ ] Password field masks input by default
- [ ] Password visibility toggle works
- [ ] Click/focus reveals blue glow effect
- [ ] Placeholders display helpful text

#### 1.3 Validation - Username
- [ ] Empty username shows error: "Username is required"
- [ ] 1-2 character username shows error: "Username must be at least 3 characters"
- [ ] 3+ characters accept without error
- [ ] Error clears on valid input
- [ ] Red border appears on error

#### 1.4 Validation - Password
- [ ] Empty password shows error: "Password is required"
- [ ] 1-3 character password shows error: "Password must be at least 4 characters"
- [ ] 4+ characters accept without error
- [ ] Error clears on valid input
- [ ] Red border appears on error

#### 1.5 Buttons & Interactions
- [ ] "Sign In" button enabled initially
- [ ] "Reset" button clears all fields
- [ ] "Reset" button clears all error messages
- [ ] "Reset" button refocuses on username field
- [ ] "Sign In" button shows loading spinner
- [ ] "Sign In" button text changes to "Signing in..."
- [ ] Button disabled during login request
- [ ] Password toggle icon changes on click

#### 1.6 Toast Notifications
- [ ] Success toast appears on valid login
- [ ] Error toast appears on invalid login
- [ ] Toasts auto-hide or can be dismissed
- [ ] Error message is specific (not generic)
- [ ] Toast displays at top of form

### 2. Backend Authentication Tests

#### 2.1 Valid Credentials
- [ ] Username: "student", Password: "csc426" → Success
- [ ] Username: "admin", Password: "admin123" → Success
- [ ] Shows success message
- [ ] Redirects to dashboard after 1-2 seconds

#### 2.2 Invalid Credentials
- [ ] Wrong username → Error: "Invalid username or password"
- [ ] Wrong password → Error: "Invalid username or password"
- [ ] Non-existent user → Error message
- [ ] Stays on login page
- [ ] Password field cleared for re-entry

#### 2.3 Input Validation Backend
- [ ] Missing username → Error with code 400
- [ ] Missing password → Error with code 400
- [ ] Empty body → Error handling
- [ ] Malformed JSON → Error handling

### 3. Dashboard Tests (After Login)

#### 3.1 Dashboard Display
- [ ] Dashboard loads after successful login
- [ ] URL changes to dashboard.html
- [ ] User welcome message displays
- [ ] User information displays correctly

#### 3.2 User Information
- [ ] Username displays correctly
- [ ] Full name displays correctly
- [ ] Email displays correctly
- [ ] Login timestamp displays correctly

#### 3.3 Dashboard Interactions
- [ ] "Logout" button visible and clickable
- [ ] Logout clears session
- [ ] Logout redirects to login page
- [ ] After logout, clicking back doesn't access dashboard

#### 3.4 Session Management
- [ ] Dashboard requires active session
- [ ] Direct access to dashboard without login redirects
- [ ] Session data persists on page refresh
- [ ] Session clears on logout

### 4. Responsive Design Tests

#### 4.1 Desktop (1024px+)
- [ ] Form centered on screen
- [ ] Full layout visible without scrolling
- [ ] All fonts readable
- [ ] Buttons properly spaced

#### 4.2 Tablet (768px - 1023px)
- [ ] Form still centered
- [ ] Buttons stack horizontally or vertically
- [ ] No horizontal scrolling
- [ ] Touch-friendly button size (>44px)

#### 4.3 Mobile (480px - 767px)
- [ ] Form takes full width with padding
- [ ] Input fields full width
- [ ] Buttons stack vertically
- [ ] Text readable without zoom
- [ ] No overflow or distortion

#### 4.4 Small Mobile (<480px)
- [ ] All elements visible
- [ ] No text overflow
- [ ] Buttons centered
- [ ] Form compact but usable

### 5. Keyboard Navigation Tests

- [ ] Tab key navigates between fields
- [ ] Tab from username → password field
- [ ] Tab from password → buttons
- [ ] Enter key on username focuses password
- [ ] Enter key on password submits form
- [ ] Enter key on submit button triggers login
- [ ] Shift+Tab navigates backwards

### 6. Password Visibility Tests

- [ ] Password field shows dots by default
- [ ] Click eye icon reveals password
- [ ] Click again hides password
- [ ] Icon changes based on state
- [ ] Multiple toggles work correctly

### 7. Error State Tests

- [ ] Multiple validation errors display all
- [ ] Error messages are specific
- [ ] Errors clear independently for each field
- [ ] Red styling applies to error fields
- [ ] Error styling removed on fix

### 8. API/Network Tests

#### 8.1 Function Endpoints
- [ ] `/api/authenticate` POST endpoint works
- [ ] `/api/validate` POST endpoint exists
- [ ] CORS headers present in response
- [ ] Correct HTTP status codes returned

#### 8.2 Response Format
- [ ] Success response includes user object
- [ ] Success response includes loginTime
- [ ] Error response includes error message
- [ ] All JSON responses valid

#### 8.3 Network Conditions
- [ ] Login works on slow network (throttle to 3G)
- [ ] Timeout handled gracefully
- [ ] Connection error shows appropriate message

### 9. Browser Compatibility Tests

Test on the following browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 10. Accessibility Tests

- [ ] Page has proper title
- [ ] Form labels properly associated
- [ ] Color contrast sufficient
- [ ] Focus states visible
- [ ] Error messages linked to inputs
- [ ] Form is keyboard navigable
- [ ] Screen reader friendly (optional)

## 🧪 Manual Test Execution

### Quick Test Sequence

1. **Load Page**
   ```
   Go to: https://localhost:8888/login.html
   Expected: Form loads with all elements
   ```

2. **Try Invalid Login**
   ```
   Username: invalid
   Password: invalid
   Click Sign In
   Expected: Error message "Invalid username or password"
   ```

3. **Try Valid Login**
   ```
   Username: student
   Password: csc426
   Click Sign In
   Expected: Success message, redirect to dashboard
   ```

4. **Test Dashboard**
   ```
   Expected: See user info and welcome message
   Click Logout
   Expected: Return to login page
   ```

5. **Test Reset**
   ```
   Fill form with data
   Click Reset
   Expected: All fields clear
   ```

## 🤖 Automated Testing (Optional)

### Using Jest + Puppeteer

```bash
npm install --save-dev jest puppeteer
```

Example test:
```javascript
test('Valid login redirects to dashboard', async () => {
  await page.goto('http://localhost:8888/login.html');
  await page.type('#username', 'student');
  await page.type('#password', 'csc426');
  await page.click('.btn-login');
  await page.waitForNavigation();
  expect(page.url()).toContain('dashboard.html');
});
```

## 📊 Test Report Template

| Test Case | Expected | Actual | Pass | Notes |
|-----------|----------|--------|------|-------|
| Login form loads | Form visible | ✓ | ✓ | |
| Invalid username | Error message | ✓ | ✓ | |
| Valid login | Dashboard loads | ✓ | ✓ | |
| Mobile responsive | Proper layout | ✓ | ✓ | |

## 🐛 Bug Reporting Template

```
Title: [Component] Brief description

Steps to Reproduce:
1. Navigate to...
2. Fill in...
3. Click...

Expected Behavior:
...

Actual Behavior:
...

Screenshots:
[Attach if possible]

Environment:
- Browser: Chrome 96
- OS: Windows 10
- URL: https://...
```

## ✅ Sign-Off

- Tester Name: _______________
- Date: _______________
- All Tests Passed: Yes / No
- Critical Issues: _______________
- Ready for Production: Yes / No
