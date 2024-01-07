import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import register from "../pages/register_seu_barriga_page";
const { randomName, randomEmail, randomPassword } = require('../utils');

Given("the register page is loaded", () => {
    register.accessRegisterPage();
});

When("the user fill the fields and clicks on register", () => {
    register.setName(randomName());
    register.setEmail(randomEmail());
    register.setPassword(randomPassword());
    register.clickRegisterButton();
});



When("the user fills or skips the fields {string}, {string} and {string} and clicks on register", (name, email, password) => {
    register.setName(name);
    register.setRandomEmail(email);
    register.setPassword(password);
    register.clickRegisterButton();
});

When("the user inserts an invalid {string}, a correct {string} and {string} and clicks on register", (name, email, password) => {
    register.setName(name);
    register.setRandomEmail(email);
    register.setPassword(password);
    register.clickRegisterButton();
});

When("the user inserts a valid {string}, a invalid {string}, a valid {string} and clicks on register", (name, email, password) => {
    register.setName(name);
    register.setRandomEmail(email);
    register.setPassword(password);
    register.clickRegisterButton();
});

When("the user inserts a valid {string}, a valid {string}, an invalid {string} and clicks on register", (name, email, password) => {
    register.setName(name);
    register.setRandomEmail(email);
    register.setPassword(password);
    register.clickRegisterButton();
});

Then("the system should show {string}", (message) => {
    register.getAlertMessage(message).then((element) => {
        expect(element.text()).eq(message)
    })
});

Then("the system should show a {string} informing the error", (message) => {
    register.getAlertMessage(message).then((element) => {
        expect(element.text()).eq(message)
    })
});