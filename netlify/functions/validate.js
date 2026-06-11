// Input validation function for Netlify

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { username, email, password, confirmPassword } = JSON.parse(event.body);

    const errors = [];

    // Username validation
    if (!username || username.trim().length < 3) {
      errors.push('Username must be at least 3 characters long');
    }
    if (username && !/^[a-zA-Z0-9_-]+$/.test(username)) {
      errors.push('Username can only contain letters, numbers, underscores, and hyphens');
    }

    // Email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please enter a valid email address');
    }

    // Password validation
    if (!password || password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }
    if (password && !/(?=.*[a-z])/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (password && !/(?=.*[A-Z])/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (password && !/(?=.*[0-9])/.test(password)) {
      errors.push('Password must contain at least one number');
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      errors.push('Passwords do not match');
    }

    if (errors.length > 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ valid: false, errors })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ valid: true, message: 'All validations passed' })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Server error: ' + error.message })
    };
  }
};
