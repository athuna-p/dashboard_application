Angular Dashboard Application with Real-Time Chat
-------------------------------------------------
This project is a performance-optimized Angular dashboard application that includes:

- JWT authentication with mock data
- Lazy-loaded modules for faster performance
- Real-time group and private chat with simulated replies
- File/image attachment support
- Angular Material UI
- Global HTTP error handling
- Testing (unit & e2e)

Features
--------

- Login with reactive forms & validation  
- Protected dashboard route with role-based guard  
- Group and private chat functionality  
- Simulated broadcast messages in group chat  
- File and image attachment support in chat  
- Lazy loading & code splitting for performance  
- Optimized change detection (OnPush)  
- Global error interceptor for HTTP errors  
- Toast/snackbar feedback for user actions  
- Unit tests (Jasmine & Karma)  
- E2E tests (Cypress ) 

Technologies Used
-----------------
- Angular 20
- Angular Material
- RxJS
- ngx-socket-io 
- Jasmine & Karma for unit tests
- Cypress  for e2e tests

Authentication
--------------
 Email               Password       Role  
 -----               --------       ----

 admin@demo.com      admin          admin
 user@demo.com       user           user


 Chat Functionality
 ------------------
 -Group chat (broadcast to all mock users)
 -Private chat (simulate one-to-one conversations)
 -Simulated automatic replies
 -Message bubbles styled similar to WhatsApp
 -Image/file attachments supported 



 Project Structure
 -----------------
 src/
│
├── app/
│   ├── auth/           # Login and authentication logic
│   ├── chat/           # Chat component and service
│   ├── dashboard/      # Dashboard component and routing
│   ├── shared/         # Shared modules (e.g., Material)
│   ├── app.routes.ts   # Application routes
│   ├── app.config.ts   # Application configuration
│


Testing
-------
-Jasmine & Karma setup

E2E Tests
---------
-Cypress
-Validate login