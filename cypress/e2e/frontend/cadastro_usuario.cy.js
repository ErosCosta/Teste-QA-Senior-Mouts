

describe('Cenário 1: Cadastro de Usuário', () => {
    const { generateRandomName, generateRandomEmail } = Cypress.utils;
    const nome = generateRandomName();
    const email = generateRandomEmail('cadastro');
    const senha = 'teste';

    it('Deve realizar o cadastro de um novo usuário com sucesso', () => {
        cy.allure().suite('Frontend E2E');
        cy.allure().feature('Cadastro');
        cy.allure().story('Cadastro de Usuário com sucesso');

        cy.visit('/cadastrarusuarios');
        cy.get('[data-testid="nome"]').type(nome);
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="password"]').type(senha);
        cy.get('[data-testid="cadastrar"]').click();

        cy.get('.alert-link')
            .should('contain', 'Cadastro realizado com sucesso');

        cy.allure().step('Verificação de sucesso');
        cy.url().should('include', '/home');
    });
});