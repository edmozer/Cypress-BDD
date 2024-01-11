/// <reference types="cypress" />
const { set, click, get_text } = require('../actions.js');
let el = require('../elements/trekRegisterElements').TrekRegisterElements

class Register {

  accessRegisterPage() {
    cy.visit(el.urlTrekRegister);

}

  fillNameField(){
    cy.get(el.firstNameField).type("teste");
  }

  fillLastNameField(){
    cy.get(el.lastNameField).type("testador");
  }
  
  fillEmailField(){
    cy.get(el.emailField).type("testador123@teste.com")
  }
  fillPasswordField(){
        cy.get(el.passwordField).type("Testador123!");
  }
  fillPasswordConfirmationField(){
    cy.get(el.confirmPasswordField).type("Testador123!");
  }
  checkAgreeBox(){
    cy.get(el.agreeBox).click();
  }
  clickCreateButton(){
    cy.get(el.createButton).click();
  }

}

export default new Register();
