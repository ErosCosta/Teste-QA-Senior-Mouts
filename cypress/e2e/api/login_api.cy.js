

describe('Cenário 2: API - Login de Usuário', () => {
  let testUser;

  before(() => {
    return Cypress.apiUtils.registerUserApi().then(() => {
      const u = Cypress.env('testUser') || {};
      if (u.senha && !u.password) {
        u.password = u.senha;
        Cypress.env('testUser', u);
      }
      testUser = Cypress.env('testUser');
    });
  });

  it('Deve realizar o login e obter um token de autenticação', () => {
    cy.allure().suite('API Tests');
    cy.allure().feature('Login');
    cy.allure().story('Login de Usuário com sucesso');

    
    if (!testUser || !testUser.email || !testUser.password) {
      throw new Error('testUser inválido. Esperado { email, password } em Cypress.env("testUser")');
    }

    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiBaseUrl')}/login`,
      body: {
        email: testUser.email,
        password: testUser.password
      }
    }).then((response) => {
      cy.allure().step('Verificação de status code e token');
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('authorization');
      Cypress.env('authToken', response.body.authorization);
    });
  });
});