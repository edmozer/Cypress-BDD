const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Register from "..//pages/trek_register_page";

Given("the trek register page is loaded", () =>{
    Register.accessRegisterPage();
});

When("the user enters correct values to the fields and clicks on create new account", () =>{

Register.fillNameField();
Register.fillLastNameField();
Register.fillEmailField();
Register.fillPasswordField();
Register.fillPasswordConfirmationField();
Register.checkAgreeBox();
});

Then("the new user should be registered", () => {
    Register.clickCreateButton();
  });

