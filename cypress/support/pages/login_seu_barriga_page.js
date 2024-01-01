export default {
        accessLoginPage() {
          cy.visit("https://seubarriga.wcaquino.me/login");
        },
      
        getEmail(email) {
    
          return cy.get('#email').type(email);
        },
      
        getPassword(password) {
          
          return cy.get('#senha').type(password);
        },

        clickLoginButton() {
            cy.get('.btn').click();
        },

        getAlertMessage(message) {
            cy.get('.alert').contains(message);
        }
      };
      