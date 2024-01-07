/// <reference types="cypress" />
var el = require('../elements/loginElements').LOGIN
const { set, click } = require('../actions.js');

class Login {

  accessLoginPage() {
    cy.visit(el.url);
  }

  setEmail(email) {
    email && set(el.fieldEmail, email);
  }

  setPassword(password) {
    password && set(el.fieldPassword, password);
  }

  clickLoginButton() {
    click(el.btnLogin);
  }

  getAlertMessage() {
    return cy.get(el.alertMessage)
  }

}

export default new Login();
      