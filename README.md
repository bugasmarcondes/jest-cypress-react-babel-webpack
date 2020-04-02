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

<p align="center" style="font-size: 1.2rem;">
  Write the First Cypress Test
</p>

<hr />

- npx cypress open
  - execute this command to start running tests