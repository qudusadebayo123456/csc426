// Simple authentication function for Netlify
// In production, use bcrypt and a real database

// Demo credentials (in production, retrieve from database)
const USERS_DB = {
  'student': {
    password: 'csc426',
    email: 'student@example.com',
    name: 'Student User'
  },
  'admin': {
    password: 'admin123',
    email: 'admin@example.com',
    name: 'Admin User'
  }
};

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only accept POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { username, password } = JSON.parse(event.body);

    // Validate input
    if (!username || !password) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: 'Username and password are required' 
        })
      };
    }

    // Check credentials
    const user = USERS_DB[username];
    
    if (!user || user.password !== password) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: 'Invalid username or password' 
        })
      };
    }

    // Successful authentication
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Login successful',
        user: {
          username,
          name: user.name,
          email: user.email,
          loginTime: new Date().toISOString()
        }
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: 'Server error: ' + error.message 
      })
    };
  }
};
