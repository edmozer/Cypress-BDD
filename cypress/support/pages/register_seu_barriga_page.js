export default {
    accessRegisterPage() {
      cy.visit("https://seubarriga.wcaquino.me/cadastro");
    },
  
    setName(name) {

      return cy.get('#nome').type(name);
    },

    setEmail(email) {
        const randomString = Math.random().toString(36).substring(7); 
        const randomEmail = `${randomString}${email}`; 
        return cy.get('#email').type(randomEmail);
    },
    setEmail2(email) {
      return cy.get('#email').type(email);
  },

    setPassword(password) {
      
      return cy.get('#senha').type(password);
    },

    clickRegisterButton() {
        cy.get('.btn').click();
    },

    getAlertMessage(message) {
        cy.get('.alert').contains(message);
    }
}