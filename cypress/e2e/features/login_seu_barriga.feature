Feature: Login

    Scenario: Login com sucesso
    Given the SeuBarriga login page is loaded
    When  the credentials "ed1234@gmail.com" and "abc123" and the login button is clicked
    Then the system will show a success message saying "Bem vindo"


    Scenario Outline: 002/003 - Login (Empty) - Fields are Required
        Given the SeuBarriga login page is loaded
        When the user leaves either "<username>" and-or "<password>" empty and tries to login
        Then the system shows a "<message>" that says the fields that are mandatory
        Examples:
        | username            | password       | message                      |
        |                     |    12345       | Email é um campo obrigatório |
        | itlins@yopmail.com  |                | Senha é um campo obrigatório |

    Scenario Outline: 004/005/006 - Login (Invalid) Invalid credentials
        Given the SeuBarriga login page is loaded
        When the user inserts an invalid "<username>" and~or "<password>" and clicks on login
        Then the system shows a "<message>" informing the error
        Examples:
        | username            | password          | message  |
        | itlins@yopmail.com  | 123456!           | Problema |
        | itlins@yopmail.co   | 12345             | Problema |