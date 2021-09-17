const logarGithub = require('../github/util/logarGithub')

it('Remover o respositório', () => {
  
    logarGithub()

    
    cy.get('#dashboard-repos-filter-left').type('XPTO').type('{enter}')
    cy.get('.js-sticky > #dashboard-repos-container > #repos-container > .list-style-none > .private > .width-full > .d-inline-flex').click()
    cy.get('#settings-tab > .octicon').click()

    cy.get(':nth-child(4) > .details-reset > .boxed-action').click()
    cy.xpath('/html/body/div[4]/div/main/div[2]/div/div/div[2]/div/div[10]/ul/li[4]/details/details-dialog/div[3]/form/p/input').type('leonardomenezes83/Resposit-rio-XPTO')
    cy.xpath('/html/body/div[4]/div/main/div[2]/div/div/div[2]/div/div[10]/ul/li[4]/details/details-dialog/div[3]/form/button/span[1]').click()
})