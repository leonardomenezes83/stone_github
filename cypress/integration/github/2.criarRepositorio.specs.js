const logarGithub = require('../github/util/logarGithub')

it('Criar repositório com readme', () => {

    logarGithub()
    
    cy.get(':nth-child(6) > .details-overlay > .Header-link').click() //menu
    cy.get('.dropdown-menu > [href="/new"]').click() // novo repositório

    cy.get('#repository_name').type('Respositório XPTO') //nome do repositório
    cy.get('#repository_description').type('Respositório Desafio stone!') //descrição do repositório
    cy.get('#repository_visibility_private').click() //repositório: privado
    cy.get('#repository_auto_init').click() //adicionar arquivo readme
    cy.get('.btn-primary').click()
})
