export default {
        accessLoginPage() {
          cy.visit("https://seubarriga.wcaquino.me/login");
        },
      
        setEmail(email) {
    
          return cy.get('#email').type(email);
        },
      
        setPassword(password) {
          
          return cy.get('#senha').type(password);
        },

        clickLoginButton() {
            cy.get('.btn').click();
        },

        getAlertMessage(message) {
            cy.get('.alert').contains(message);
        }
      };
      