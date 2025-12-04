

describe('Cenário 3: API - Busca de Produtos', () => {
    it('Deve buscar todos os produtos e verificar a estrutura da resposta', () => {
        cy.allure().suite('API Tests');
        cy.allure().feature('Produtos');
        cy.allure().story('Busca de todos os produtos');

        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiBaseUrl')}/produtos`
        }).then((response) => {
            cy.allure().step('Verificação de status code e estrutura');
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('quantidade');
            expect(response.body).to.have.property('produtos').to.be.an('array');

            if (response.body.quantidade > 0) {
                cy.allure().step('Verificação da estrutura de um produto');
                expect(response.body.produtos[0]).to.have.all.keys(
                    'nome', 'preco', 'descricao', 'quantidade', '_id'
                );
            }
        });
    });
});