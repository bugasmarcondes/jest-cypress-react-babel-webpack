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

<hr />

## Annotations

### Install and Run Cypress

- yarn run dev (run app in localhost)

- npm install --save-dev cypress
  - testing commands
    - npx cypress --help
    - npx cypress open
- npm install --save-dev eslint-plugin-cypress
- configuring .eslintrc to support Cypress
- adding rules into .gitignore

### Write the First Cypress Test

- npx cypress open
  - execute this command to start running tests

### Configure Cypress in cypress.json

- configuring cypress.json

### Installing Cypress Testing Library

- npm install --save-dev in this specific version "@testing-library/cypress": "^5.0.2"
- configure cypress/support/index.js

### Script Cypress for Local Development and Continuous Integration

- npm install --save-dev start-server-and-test
- configurar travis.yml para instalar depências que o cypress precisa
- executar npm run test:e2e
  - executa cy:open para testarmos visualmente
- executar npm run test:e2e:run
  - executa cy:run para testarmos em headless mode
- adicionamos a execução do headless mode também no husky, pois este é um projeto bem pequeno e não teria tanto impacto ao realizar os commits

### Debug a Test with Cypress

- calling methods to debug a test in Cypress

### Test User Registration with Cypress

- npm install --save-dev test-data-bot
- configure test

### Cypress Driven Development

- fail test, then implement it

### Simulate HTTP Errors in Cypress Tests

- configure test

### Test User Login with Cypress

- configure test

### Create a User with cy.request from Cypress

- replace clicks with a single call to a HTTP request for registering a user, making our test simpler to maintain

### Keep Tests Isolated and Focused with Custom Cypress Commands

- configure command for reusability

### Use Custom Cypress Command for Reusable Assertions

- reducing duplication of code

### Run Tests as an Authenticated User with Cypress

- configure test

### Use cy.request from Cypress to Authenticate as a New User

- configure test

### Use a Custom Cypress Command to Login as a User

- configure test

### Combine Custom Cypress Commands into a Single Custom Command

- configure test

### Install React DevTools with Cypress

- install React Developer Tools extension for ChromeCypress
- register our app within Dev Tools