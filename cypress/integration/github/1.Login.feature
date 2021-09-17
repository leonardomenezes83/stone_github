Feature: Login

    Scenario Outline: Login com sucesso.
        Given Acessar site do github
        And realizar login no site
        And inserir username: <username>
        And inserir password: <password>
        When clicar no botão sign in 
        Then é apresentado todos os repositórios existentes

Examples:
    | username             | password            | 
    | leoonardoo@gmail.com | stOne@123           | 


    Scenario Outline: Login incorreto
        Given Acessar site do github
        And realizar login no site
        And inserir username: <username>
        And inserir password: <password>
        When clicar no botão sign in 
        Then é apresentado Incorrect username or password

Examples:
    | username             | password            |
    | leoonardoo@gmail.com | 123                 |
    | emailteste@gmail.com | stOne@123           |
    

    Scenario Outline: Login pendente de verificação.
        Given Acessar site do github
        And realizar login no site
        And inserir username: <username>
        And inserir password: <password>
        When clicar no botão sign in 
        Then é apresentado Device verification

Examples:
    | username             | password            |
    |st-e2e-tests          | 6fQ8MM4Hk4QckKe3    |
#este usuário estava solicitando confirmação

    Scenario Outline: Login pendente código
        Given Acessar site do github
        And realizar login no site
        And inserir username: <username>
        And inserir password: <password>
        When clicar no botão sign in 
        Then é apresentado Enter code

Examples:
    | username             | password            |
    |stonemenezes          | st0n3@123           |