/// <reference types="cypress" />
var el = require('../elements/homeElements').HOME
const { set, click } = require('../actions.js');

class Home {

    getAlertMessageHome() {
        return cy.get(el.alertMessage)
    }

}

export default new Home();
      
