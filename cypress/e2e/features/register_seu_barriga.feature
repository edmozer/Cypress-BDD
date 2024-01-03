Feature: Register

    Feature Description

    Scenario: 01 - Success register
        Given the register page is loaded
        When the user fills "Edmozer", "@gmail.com" and "Teste123" fields and clicks on register
        Then the system should show "Usuário inserido com sucesso"

