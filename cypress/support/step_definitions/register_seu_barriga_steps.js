import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import register_seu_barriga_page from "../pages/register_seu_barriga_page";

Given("the register page is loaded", () => {
    register_seu_barriga_page.accessRegisterPage();
});

When("the user fills {string}, {string} and {string} fields and clicks on register", (name, email, password) => {
    register_seu_barriga_page.setName(name);
    register_seu_barriga_page.setRandomEmail(email);
    register_seu_barriga_page.setPassword(password);
    register_seu_barriga_page.clickRegisterButton();
});

Then("the system should show {string}", (message) => {
    register_seu_barriga_page.getAlertMessage(message);
});

When("the user fills or skips the fields {string}, {string} and {string} and clicks on register", (name, email, password) => {
    register_seu_barriga_page.setName(name);
    register_seu_barriga_page.setRandomEmail(email);
    register_seu_barriga_page.setPassword(password);
    register_seu_barriga_page.clickRegisterButton();
});

Then("the system should show a {string} informing the error", (message) => {
    register_seu_barriga_page.getAlertMessage(message);
});

When("the user inserts an invalid {string}, a correct {string} and {string} and clicks on register", (name, email, password) => {
    register_seu_barriga_page.setName(name);
    register_seu_barriga_page.setRandomEmail(email);
    register_seu_barriga_page.setPassword(password);
    register_seu_barriga_page.clickRegisterButton();
});

When("the user inserts a valid {string}, a invalid {string}, a valid {string} and clicks on register", (name, email, password) => {
        register_seu_barriga_page.setName(name);
        register_seu_barriga_page.setRandomEmail(email);
        register_seu_barriga_page.setPassword(password);
        register_seu_barriga_page.clickRegisterButton();
});

When("the user inserts a valid {string}, a valid {string}, an invalid {string} and clicks on register", (name, email, password) => {
    register_seu_barriga_page.setName(name);
    register_seu_barriga_page.setRandomEmail(email);
    register_seu_barriga_page.setPassword(password);
    register_seu_barriga_page.clickRegisterButton();
});