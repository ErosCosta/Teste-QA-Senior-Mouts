const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',

    baseUrl: 'https://front.serverest.dev',

    env: {
      apiBaseUrl: 'https://serverest.dev',
      allure: true,  
    },

    setupNodeEvents(on, config) {
      allureWriter(on, config); 
      return config;
    },
  },
});
