/// <reference types="Cypress" />

module.exports = function(){
        cy.visit(Cypress.env('url'))
        cy.get('#login_field').type(Cypress.env('login'))
        cy.get('#password').type(Cypress.env('senha'))
        cy.get('.btn').click()
    }
