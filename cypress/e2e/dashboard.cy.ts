describe('Dashboard Application', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200');
    });
  
    it('should display dashboard title', () => {
      cy.contains('dashboard-application');
    });
  
    it('should navigate to login page', () => {
       cy.get('a[href="http://localhost:4200"]').click();
      cy.url().should('include', '/login');
    });
  
    it('should allow login', () => {
      cy.visit('/login');
  
      cy.get('input[formcontrolname="email"]').type('admin@test.com');
      cy.get('input[formcontrolname="password"]').type('admin');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome');
    });
  
  });