

describe('Cenário 2: Login de Usuário', () => {
  before(() => {
    return Cypress.apiUtils.registerUserApi().then(() => {
      const u = Cypress.env('testUser') || {};
      
      if (u.password && !u.senha) {
        u.senha = u.password;
        Cypress.env('testUser', u);
      }
      if (!u.email || !u.senha) {
        throw new Error('testUser não encontrado ou incompleto. Esperado { email, senha } em Cypress.env("testUser").');
      }
    });
  });

  it('Deve realizar o login de um usuário cadastrado com sucesso', () => {
    
    const { email, senha } = Cypress.env('testUser') || {};
    if (!email || !senha) {
      throw new Error('testUser inválido no runtime: ' + JSON.stringify(Cypress.env('testUser')));
    }

    
    cy.allure().suite('Frontend E2E');
    cy.allure().feature('Login');
    cy.allure().story('Login de Usuário com sucesso');

    
    cy.login(email, senha);

    cy.allure().step('Verificação de sucesso');

    
    cy.get('h1', { timeout: 10000 }).should('contain', 'Bem Vindo');
    cy.url({ timeout: 10000 }).should('include', '/home');
  });
});