Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('[data-testid="email"]', { timeout: 10000 }).should('be.visible').clear().type(email);
    cy.get('[data-testid="senha"]', { timeout: 10000 }).should('be.visible').clear().type(password);
    cy.get('[data-testid="entrar"]', { timeout: 10000 }).should('be.visible').click();
});