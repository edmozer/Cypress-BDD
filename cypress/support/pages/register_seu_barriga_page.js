/// <reference types="cypress" />
let el = require('../elements/registerElements').REGISTER
const { set, click, get_text } = require('../actions.js');


class Register {

  accessRegisterPage() {
    cy.visit(el.urlRegister);
  }

  setName(name) {
    name && set(el.fieldName, name);
  }

  setEmail(email) {
    email && set(el.fieldEmail, email);
  }

  setPassword(password) {
    password && set(el.fieldPassword, password);
  }

  clickRegisterButton() {
    click(el.btnRegister);
  }

  getAlertMessage() {
    return cy.get(el.alertMessage)
  }

}

export default new Register();
