Feature: Register

    Scenario: 01 - Success register
        Given the register page is loaded
        When the user fill the fields and clicks on register
        Then the system should show "Usuário inserido com sucesso"

    Scenario Outline: Empty fields
        Given the register page is loaded
        When the user fills or skips the fields "<name>", "<email>" and "<password>" and clicks on register
        Then the system should show a "<message>" informing the error
    Examples:
        |   name  | email           | password |           message            |
        |         |   ed@email.com  | test123  | Nome é um campo obrigatório  |
        |   ed    |                 | test123  | Email é um campo obrigatório |
        |   ed    |   ed@gmail.com  |          | Senha é um campo obrigatório |
        |         |                 |          | Senha é um campo obrigatório |

    Scenario Outline: Invalid name entries 
        Given the register page is loaded
        When the user inserts an invalid "<name>", a correct "<email>" and "<password>" and clicks on register
        Then the system should show a "<message>" informing the error   
    Examples:
            | name                       | email        | password | message                                     |
            | A                          | ed@email.com | test123  | O nome deve conter mais que 1 caractere     |
            | Abcdefghijklmnopqrstuvwxyz | ed@gmail.com | test123  | O nome deve conter menos que 20 caracteres  |
            | ed/@                       | ed@gmail.com | test123  | O nome não pode conter caracteres especiais |
            | ed1                        | ed@gmail.com | test123  | O nome não pode conter números              |

    Scenario Outline: Invalid email entries 
        Given the register page is loaded
        When the user inserts a valid "<name>", a invalid "<email>", a valid "<password>" and clicks on register
        Then the system should show a "<message>" informing the error   
        Examples:
        |   name   |             email                       | password |        message         |
        |    ed    |   e@e.e                                 | test123  | Insira um email válido |
        |    ed    |   123456789012345678901234567890@oi.net | test123  | Insira um email válido |
        |    ed    |   !#$%&@gmail.com                       | test123  | Insira um email válido |
        |    ed    |   12345@12335.123                       | test123  | Insira um email válido |

    Scenario Outline: Invalid password entries 
        Given the register page is loaded
        When the user inserts a valid "<name>", a valid "<email>", an invalid "<password>" and clicks on register
        Then the system should show a "<message>" informing the error   
        Examples:
        |   name   |    email    | password                           |        message         |
        |    ed    |   @ed.com   | t                                  | A senha não corresponde aos requisitos |
        |    ed    |   @ed.com   | test12345678910111213141516171819  | A senha não corresponde aos requisitos |
        |    ed    |   @ed.com   | test123                            | A senha não corresponde aos requisitos |
        |    ed    |   @ed.com   | TEST123                            | A senha não corresponde aos requisitos |
        |    ed    |   @ed.com   | 1234567                            | A senha não corresponde aos requisitos |
        |    ed    |   @ed.com   | !@#$%^&*                           | A senha não corresponde aos requisitos |