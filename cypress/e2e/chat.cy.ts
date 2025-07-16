describe('Chat Page', () => {
    beforeEach(() => {
      // Login first
      cy.visit('/login');
      cy.get('input[formcontrolname="email"]').type('admin@test.com');
      cy.get('input[formcontrolname="password"]').type('admin');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
  
      // Click Chat button to open chat page
      cy.get('button[aria-label="Chat"]').click();
    });
  
    it('should load chat page UI', () => {
      cy.contains('button', 'Group Chat').should('be.visible');
      cy.get('button').contains('Group Chat').should('exist');
      cy.get('input[placeholder="Type a message"]').should('exist');
      cy.get('button mat-icon').contains('send').should('exist');
    });
  
    it('should select group chat', () => {
      cy.contains('button', 'Group Chat').click();
      cy.get('h3').should('contain', 'Group Chat');
    });
    
    it('should select user chat', () => {
      cy.get('button').contains('Group Chat').should('exist');
      cy.get('button').not(':contains("Group Chat")').first().click();
      cy.get('h3').invoke('text').should('not.eq', '').and('not.contain', 'Group Chat');
    });
  
    it('should send a text message', () => {
      cy.get('input[placeholder="Type a message"]').type('Hello from Cypress!');
      cy.get('button mat-icon').contains('send').click();
  
      cy.get('.messages-container')
        .should('contain', 'Hello from Cypress!');
    });
  
    // it('should attach a file', () => {
      // Create fake file
      // const fileName = 'test-image.png';
      // cy.fixture(fileName, 'base64').then(fileContent => {
      //   cy.get('input[type="file"]').attachFile(
      //     { fileContent, fileName, mimeType: 'image/png' }
      //   );
      // });
  
      // Optionally click send if needed
    //   cy.get('button mat-icon').contains('send').click();
  
    //   // Check if image preview appears
    //   cy.get('.messages-container img').should('exist');
    // });
  
    it('should go back to dashboard on back button', () => {
      cy.get('button mat-icon').contains('arrow_back').click();
      cy.url().should('include', '/dashboard');
    });
  });
  