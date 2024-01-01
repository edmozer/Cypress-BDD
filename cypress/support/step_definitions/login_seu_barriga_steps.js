import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login_seu_barriga_page from "../pages/login_seu_barriga_page";

Given("the sign in page is loaded", () =>{
    login_seu_barriga_page.accessLoginPage()
})

When("the credentials {string} and {string} and the login button is clicked", (email, password) =>{
    login_seu_barriga_page.getEmail(email)
    login_seu_barriga_page.getPassword(password)
    login_seu_barriga_page.clickLoginButton()
})

Then("the system will show a success message saying {string}", (message) =>{
    login_seu_barriga_page.getAlertMessage(message)
})

Given("the SeuBarriga login page is loaded", () => {
    login_seu_barriga_page.accessLoginPage();
});

When("the user leaves either {string} and-or {string} empty and tries to login", (username, password) => {
    if (username !== "") {
        login_seu_barriga_page.getEmail(username);
    }

    if (password !== "") {
        login_seu_barriga_page.getPassword(password);
    }

    login_seu_barriga_page.clickLoginButton();
});

Then("the system shows a {string} that says the fields that are mandatory", (message) => {
   login_seu_barriga_page.getAlertMessage(message);
});

When("the user inserts an invalid {string} and~or {string} and clicks on login", (username, password) => {
    if (username !== "") {
        login_seu_barriga_page.getEmail(username);
    }

    if (password !== "") {
        login_seu_barriga_page.getPassword(password);
    }

    login_seu_barriga_page.clickLoginButton();
});

Then("the system shows a {string} informing the error", (message) => {
    login_seu_barriga_page.getAlertMessage(message);
 });