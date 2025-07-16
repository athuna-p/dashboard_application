describe('Dashboard Application', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display dashboard title', () => {
    cy.contains('dashboard-application');
  });

 
  it('should allow login', () => {
    cy.visit('/login');

    cy.get('input[formcontrolname="email"]').type('admin@test.com');
    cy.get('input[formcontrolname="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome');
  });

  it('should show error on invalid password', () => {
    cy.visit('/login');
  
    cy.get('input[formcontrolname="email"]').type('admin@test.com');
    cy.get('input[formcontrolname="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
  
    cy.get('.error', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Invalid email or password');
  });
    
});