import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login from "../pages/login_seu_barriga_page";
import home from "../pages/home_seu_barriga_page";

Given("the sign in page is loaded", () =>{
    login.accessLoginPage()
})

When("the credentials {string} and {string} and the login button is clicked", (email, password) =>{
    login.setEmail(email)
    login.setPassword(password)
    login.clickLoginButton()
})

Then("the system will show a success message saying {string}", (message) =>{
    home.getAlertMessageHome(message).then((element) => {
        expect(element.text()).eq(message)
    })
})

Given("the SeuBarriga login page is loaded", () => {
    login.accessLoginPage();
});

When("the user leaves either {string} and-or {string} empty and tries to login", (username, password) => {
    login.setEmail(username);
    login.setPassword(password);
    login.clickLoginButton();
});

Then("the system shows a {string} that says the fields that are mandatory", (message) => {
    login.getAlertMessage(message).then((element) => {
        expect(element.text()).eq(message)
    })
});

When("the user inserts an invalid {string} and~or {string} and clicks on login", (username, password) => {
    login.setEmail(username);
    login.setPassword(password);
    login.clickLoginButton();
});

Then("the system shows a {string} informing the error", (message) => {
    login.getAlertMessage(message).then((element) => {
        expect(element.text()).eq(message)
    })
 });
 
When("the user inserts a valid email {string} and an invalid password {string} and clicks on login 3 times", (email, password) =>{
    for (let i = 0; i < 3; i++) {
        login_seu_barriga_page.setEmail(email);
        login_seu_barriga_page.setPassword(password);
        login_seu_barriga_page.clickLoginButton();
    }
}) 

Then("the system blocks the account", () => {
    login.getAlertMessage(message).then((element) => {
        expect(element.text()).eq("The account has been temporarily disabled")
    })
 });