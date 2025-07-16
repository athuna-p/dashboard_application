Running unit tests
------------------
-Unit tests are small, isolated tests that check if individual pieces of our application (like components, services, pipes, directives) work as expected.
-Uses Karma as the test runner and Jasmine as the test framework.
-Displays test results (pass/fail) in the console and Karma browser window.
-'ng test' is used to run unit tests in an Angular application.
-Supports automatic re-run when code changes.

To generate a coverage report:using 'ng test --code-coverage'
the output is:

8 specs, 0 failures, randomized with seed 88456
ChatComponent
should create
DashboardComponent
should create
App
should render title
should create the app
authGuard
should return true if authenticated
should navigate to login if not authenticated
Auth
should be created
Login
should create



 E2E Tests
 ---------
 -End-to-end (E2E) tests simulate real user workflows in a real browser to verify that the entire application works correctly from start to finish.
 -Tests are written in Cypress using JavaScript or TypeScript.
 -Cypress launches a browser and executes user interactions (e.g., typing, clicking, navigating).
 -Tests cover full flows, such as login, navigating dashboard, sending messages, etc.


 Test file location -/cypress/e2e/
 -login.cy.ts
 -dashboard.cy.ts

 