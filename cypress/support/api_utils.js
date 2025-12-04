import { generateRandomName, generateRandomEmail } from './utils';

export function registerUserApi() {
  const nome = generateRandomName();
  const email = generateRandomEmail('login');
  const password = 'teste';  

  return cy.request({
    method: 'POST',
    url: `${Cypress.env('apiBaseUrl')}/usuarios`,
    body: {
      nome,
      email,
      password, 
      administrador: 'true'
    },
  }).then((response) => {
    expect(response.status).to.be.oneOf([200, 201]);

    Cypress.env('testUser', { email, senha: password });
    return response;
  });
}