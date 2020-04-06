<h1 align="center">
  Jest and Cypress with React, Babel, and Webpack
</h1>

<p align="center" style="font-size: 1.2rem;">
  See how to configure Jest and Cypress with React, Babel, and Webpack
</p>

<hr />

> Note: This project is intentionally over-engineered. The application itself is
> very simple, but the tooling around it is pretty complicated. The goal is to
> show what configuration would be like for a large real-world application
> without having all the extra complexities of a real-world application.

## License

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). If you
would like to use this material to conduct your own workshop, please contact me
at kent@doddsfamily.us

<h1 align="center">
  Tutorial
</h1>

<p align="center" style="font-size: 1.2rem;">
  Install and Run Cypress
</p>

<hr />

- npm install --save-dev cypress
  - testing commands
    - npx cypress --help
    - npx cypress open
- npm install --save-dev eslint-plugin-cypress
- configuring .eslintrc to support Cypress
- adding rules into .gitignore

<hr />

<p align="center" style="font-size: 1.2rem;">
  Write the First Cypress Test
</p>

<hr />

- npx cypress open
  - execute this command to start running tests

<hr />

<p align="center" style="font-size: 1.2rem;">
  Configure Cypress in cypress.json
</p>

<hr />

- configuring cypress.json

<hr />

<p align="center" style="font-size: 1.2rem;">
  Installing Cypress Testing Library
</p>

<hr />

- npm install --save-dev in this specific version "@testing-library/cypress": "^5.0.2"
- configure cypress/support/index.js

<hr />

<p align="center" style="font-size: 1.2rem;">
  Script Cypress for Local Development and Continuous Integration
</p>

<hr />

- npm install --save-dev start-server-and-test
- configurar travis.yml para instalar depências que o cypress precisa
- executar npm run test:e2e
  - executa cy:open para testarmos visualmente
- executar npm run test:e2e:run
  - executa cy:run para testarmos em headless mode
- adicionamos a execução do headless mode também no husky, pois este é um projeto bem pequeno e não teria tanto impacto ao realizar os commits

<hr />

<p align="center" style="font-size: 1.2rem;">
  Debug a Test with Cypress
</p>

<hr />

- calling methods to debug a test in Cypress

<hr />

<p align="center" style="font-size: 1.2rem;">
  Test User Registration with Cypress
</p>

<hr />

- npm install --save-dev test-data-bot
- configure test

<hr />

<p align="center" style="font-size: 1.2rem;">
  Cypress Driven Development
</p>

<hr />

- fail test, then implement it

<hr />

<p align="center" style="font-size: 1.2rem;">
  Simulate HTTP Errors in Cypress Tests
</p>

<hr />

- configure test

<hr />

<p align="center" style="font-size: 1.2rem;">
  Test User Login with Cypress
</p>

<hr />

- configure test

<hr />

<p align="center" style="font-size: 1.2rem;">
  Create a User with cy.request from Cypress
</p>

<hr />

- replace clicks with a single call to a HTTP request for registering a user, making our test simpler to maintain

<hr />

<p align="center" style="font-size: 1.2rem;">
  Keep Tests Isolated and Focused with Custom Cypress Commands
</p>

<hr />

- configure command for reusability

<hr />

<p align="center" style="font-size: 1.2rem;">
  Use Custom Cypress Command for Reusable Assertions
</p>

<hr />

- reducing duplication of code

<hr />

<p align="center" style="font-size: 1.2rem;">
  Run Tests as an Authenticated User with Cypress
</p>

<hr />

- configure test