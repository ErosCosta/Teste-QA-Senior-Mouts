# QA Senior — Projeto

## Como executar os testes (local)
1. Instale as dependências:
```bash
npm install
```
2. Para rodar os testes com Cypress (modo aberto):
```bash
npx cypress open
```
3. Para rodar todos os testes em modo headless:
```bash
npx cypress run
```
4. Gerar e abrir relatório Allure (após executar testes e gerar resultados em `allure-results`):
```bash
npm run allure:generate
npm run allure:open
```

**Observação:** Para `npm run allure:generate` é necessário ter o CLI do Allure instalado (via devDependency `allure-commandline`) ou ter o comando `allure` disponível no PATH.

## Estrutura do projeto (resumida)
- `teste-qa-senior-mouts`

## Resumo dos testes detectados
- Total de arquivos com casos (`it(`) detectados: 176
- Arquivos classificados como *frontend* (possíveis E2E): 42
  - teste-qa-senior-mouts/cypress/e2e/frontend/cadastro_usuario.cy.js
  - teste-qa-senior-mouts/cypress/e2e/frontend/login_usuario.cy.js
  - teste-qa-senior-mouts/node_modules/@mmisty/cypress-tags/readme.md
  - teste-qa-senior-mouts/node_modules/@mmisty/cypress-tags/cypress/cypress.d.ts
  - teste-qa-senior-mouts/node_modules/@mmisty/cypress-tags/utils/tags.d.ts
  - teste-qa-senior-mouts/node_modules/@mmisty/cypress-tags/utils/tags.js
  - teste-qa-senior-mouts/node_modules/@types/node/test.d.ts
  - teste-qa-senior-mouts/node_modules/bluebird/js/browser/bluebird.core.min.js
  - teste-qa-senior-mouts/node_modules/cachedir/test.js
  - teste-qa-senior-mouts/node_modules/cypress/angular/angular/dist/index.d.ts
  - teste-qa-senior-mouts/node_modules/cypress/angular/angular/dist/index.js
  - teste-qa-senior-mouts/node_modules/cypress/angular/dist/index.d.ts
  - teste-qa-senior-mouts/node_modules/cypress/angular/dist/index.js
  - teste-qa-senior-mouts/node_modules/cypress/mount-utils/readme.md
  - teste-qa-senior-mouts/node_modules/cypress/mount-utils/mount-utils/readme.md
  - teste-qa-senior-mouts/node_modules/cypress/react/dist/cypress-react.cjs.js
  - teste-qa-senior-mouts/node_modules/cypress/react/dist/cypress-react.esm-bundler.js
  - teste-qa-senior-mouts/node_modules/cypress/react/dist/index.d.ts
  - teste-qa-senior-mouts/node_modules/cypress/react/react/dist/cypress-react.cjs.js
  - teste-qa-senior-mouts/node_modules/cypress/react/react/dist/cypress-react.esm-bundler.js
  - ... +22 arquivos
- Arquivos classificados como *API* (uso de `cy.request` ou pasta api): 13
  - teste-qa-senior-mouts/allure-report/app.js
  - teste-qa-senior-mouts/cypress/e2e/api/busca_produtos_api.cy.js
  - teste-qa-senior-mouts/cypress/e2e/api/cadastro_usuario_api.cy.js
  - teste-qa-senior-mouts/cypress/e2e/api/login_api.cy.js
  - teste-qa-senior-mouts/cypress/e2e/frontend/busca_produto.cy.js
  - teste-qa-senior-mouts/node_modules/@mmisty/cypress-allure-adapter/changelog.md
  - teste-qa-senior-mouts/node_modules/@mmisty/cypress-allure-adapter/readme.md
  - teste-qa-senior-mouts/node_modules/@mmisty/cypress-allure-adapter/node_modules/uuid/readme.md
  - teste-qa-senior-mouts/node_modules/cypress/types/cypress.d.ts
  - teste-qa-senior-mouts/node_modules/fs-extra/changelog.md
  - teste-qa-senior-mouts/node_modules/request-progress/test/test.js
  - teste-qa-senior-mouts/node_modules/rxjs/changelog.md
  - teste-qa-senior-mouts/node_modules/uuid/readme.md