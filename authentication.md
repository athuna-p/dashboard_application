 Authentication Service Documentation
 ------------------------------------
-The AuthService handles authentication logic, including login, logout, and token management. It also manages user role
 data.

 Features
 --------
 -Login with mock user credentials
 -Store JWT or token in localStorage
 -Check authentication status
 -Retrieve user roles
 -Logout user

 Methods
 -------
  login(username: string, password: string)
    -Description: Authenticates user using mock credentials and saves token.
    -Returns: true if login successful, otherwise false

  logout()
    -Description: Removes token from storage and logs out the user.

  isAuthenticated()
    -Description: Checks if the user has a valid token.
    -Returns: true if authenticated, otherwise false. 

   getRole()
    -Description: Retrieves the user’s role from storage (or a decoded token).
    -Returns: Role string (e.g., 'admin' or 'user') or undefined if not set.    