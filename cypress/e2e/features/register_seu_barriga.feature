Feature: Register

    Scenario: 01 - Success register
        Given the register page is loaded
        When the user fills "Edmozer", "@gmail.com" and "Teste123" fields and clicks on register
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
        |   name      | email           |  password |              message                       |
        |    A        |   ed@email.com  |  test123  | O nome deve conter mais que 1 caractere    |
        |   Abcdefghijklmnopqrstuvwxyz  |  ed@gmail.com |  test123  | O nome deve conter menos que 20 caracteres |
        |   ed/@      |   ed@gmail.com  |  test123  | O nome não pode conter caracteres especiais |
        |   ed1       |   ed@gmail.com  |  test123  | O nome não pode conter números |    
