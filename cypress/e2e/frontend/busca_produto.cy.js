

describe('Cenário 3: Busca de Produtos (Admin) - /admin/listarprodutos', () => {
  it('Deve buscar um produto e verificar se ele está na lista (admin/listarprodutos)', () => {

    const apiBase = Cypress.env('apiBaseUrl') || 'https://serverest.dev';
    const frontBase = Cypress.env('frontBaseUrl') || 'https://front.serverest.dev';

    
    
    
    cy.request('GET', `${apiBase}/produtos`).then((resp) => {
      expect(resp.status).to.eq(200);
      const produtos = resp.body.produtos;
      const produtoNome = produtos[0].nome;

      
      
      
      return cy.request('POST', `${apiBase}/usuarios`, {
        nome: "QA Test",
        email: `qa_${Date.now()}@mail.com`,
        password: "teste",
        administrador: "true"
      }).then(() => {

        
        
        
        cy.visit(`${frontBase}/login`);

        cy.get('[data-testid="email"]').type(`qa_${Cypress._.now()}@mail.com`, { log: false });

        
        

      });
    });
  });
});