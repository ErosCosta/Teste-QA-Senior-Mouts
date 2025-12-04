

describe('Cenário 1: API - Cadastro de Usuário', () => {

  it('Deve cadastrar um novo usuário com sucesso', () => {

    cy.allure().suite('API');
    cy.allure().feature('Cadastro');
    cy.allure().story('Cadastro de Usuário com sucesso');

    const api = Cypress.env('apiBaseUrl');

    if (!api) {
      throw new Error('ERRO: apiBaseUrl não definido. Verifique cypress.env.json');
    }

    const body = {
      nome: "Usuário Teste",
      email: `teste${Date.now()}@qa.com.br`,
      password: "123456",
      administrador: "true"
    };

    cy.request({
      method: 'POST',
      url: `${api}/usuarios`,
      body
    }).then((resp) => {
      expect(resp.status).to.eq(201);
      expect(resp.body.message).to.contain('Cadastro realizado com sucesso');
    });
  });

});