describe('Dashboard Application', () => {
    beforeEach(() => {
      cy.visit('/login');
    });
  
    it('should allow successful login', () => {
      cy.get('input[formcontrolname="email"]').type('admin@test.com');
      cy.get('input[formcontrolname="password"]').type('admin');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/dashboard');
      cy.contains('Dashboard').should('be.visible');
      cy.contains('Welcome! your role is').should('be.visible');
    });
  
    it('should show error on invalid password', () => {
      cy.get('input[formcontrolname="email"]').type('admin@test.com');
      cy.get('input[formcontrolname="password"]').type('wrongpassword');
      cy.get('button[type="submit"]').click();
  
      cy.get('.error', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Invalid email or password');
    });
  
    it('should show error on invalid email', () => {
      cy.get('input[formcontrolname="email"]').type('wrong@test.com');
      cy.get('input[formcontrolname="password"]').type('admin');
      cy.get('button[type="submit"]').click();
  
      cy.get('.error', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Invalid email or password');
    });
  
    describe('Dashboard tests after login', () => {
      beforeEach(() => {
        // Login first
        cy.get('input[formcontrolname="email"]').type('admin@test.com');
        cy.get('input[formcontrolname="password"]').type('admin');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
      });
  
      it('should display dashboard toolbar title', () => {
        cy.contains('mat-toolbar', 'Dashboard').should('be.visible');
      });
  
      it('should display user greeting with role', () => {
        cy.contains('Welcome! your role is').should('be.visible');
      });
  
      it('should have Chat button', () => {
        cy.get('button[aria-label="Chat"]', { timeout: 10000 })
          .should('exist')
          .and('be.visible');
      });
  
      it('should have Logout button', () => {
        cy.get('button[aria-label="Logout"]', { timeout: 10000 })
          .should('exist')
          .and('be.visible');
      });
  
      it('should logout and redirect to login', () => {
        cy.get('button[aria-label="Logout"]').click();
        cy.url().should('include', '/login');
      });
  
      it('should click Chat button (optional)', () => {
        cy.get('button[aria-label="Chat"]').click();
  
        // Optionally verify what happens after clicking chat
        // Example: cy.get('.chat-window').should('be.visible');
      });
    });
  });
  