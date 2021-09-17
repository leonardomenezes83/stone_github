const logarGithub = require('../github/util/logarGithub')

it('Remover readme', () => {

    logarGithub()

    cy.get('#dashboard-repos-filter-left').type('XPTO').type('{enter}')
    cy.get('.js-sticky > #dashboard-repos-container > #repos-container > .list-style-none > .private > .width-full > .d-inline-flex').click()
    cy.get('.css-truncate > .js-navigation-open').click()
    
    cy.xpath('/html/body/div[4]/div/main/div[2]/div/div/div[3]/div[1]/div[2]/div[2]/form[2]/button').click()
    cy.get('#submit-file').click()
})             