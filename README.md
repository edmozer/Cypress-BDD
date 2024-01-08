# FRONT-END AUTOMATION - SEU BARRIGA

**CYPRESS PROJECT AUTOMATION OF SEU BARRIGA WEBSITE**

## Environment Installation
* Install the IDE you want, Visual Studio Code recommended, where the executions will be carried out

* NodeJs with version 18.11.0

* Java with version 11.0.20

* Cypress with version 13.6.2

## * First clone the project

## Command to install project dependencies and plugins:
```sh default
* yarn install
```
**or**
```sh default
* npm install
```
## Command to open Cypress:
```sh default
* yarn cypress open
```
**or**
```sh default
* npx cypress open
```
## Command to run the project in headless
```sh default
* yarn run
```
**or**
```sh default
* npx cypress
```

# Cypress Project Structure

| Directory                | Purpose                                                                         |
|--------------------------|-----------------------------------------------------------------------------------|
| `e2e/features/`  | BDD-format feature files describing related test scenarios. |
| `support/pages/`  | Page objects or modules, such as `register_seu_barriga_page.js`, containing related methods.|
| `support/step_definitions/` | Implementations of steps for scenarios, including a file like `login_seu_barriga_steps.js`. |
| `support/elements/`      | Definitions of common elements used across pages, for example, `homeElements.js`. |
| `cypress.json`           | Main configuration file for Cypress, where global settings for tests can be defined.|


## Contribution

Feel free to contribute to this project! Open issues, submit pull requests, or make improvement suggestions.

## License

This project is licensed under the [MIT License](LICENSE).
