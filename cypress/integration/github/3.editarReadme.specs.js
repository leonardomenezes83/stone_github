const logarGithub = require('../github/util/logarGithub')

it('Editar/salvar arquivo readme', () => {
    
    logarGithub()

    cy.get('#dashboard-repos-filter-left').type('XPTO').type('{enter}')
    cy.get('.js-sticky > #dashboard-repos-container > #repos-container > .list-style-none > .private > .width-full > .d-inline-flex').click()
    
    cy.get(':nth-child(2) > .Box-btn-octicon > .octicon').click()
    cy.get('.CodeMirror-scroll').type('...editando readme...')

    cy.get('#submit-file').click()
})

