import GithubElements from '../elements/GithubElements'
const githubElements = new GithubElements 

//const url = Cypress.json('url')
const url = 'https://github.com/login'
//const url = (Cypress.env(ambiente).url_econtador)


class GithubPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    clicarBotaoSignIn2(){
        //cy.get(githubElements.botaoSignIn()).click()
        cy.xpath(githubElements.botaoSignIn()).click()
    }

    inserirUsername(username){
        cy.get(githubElements.username()).type(username)
    }

    inserirPassword(password){
        cy.get(githubElements.password()).type(password)
    }

    clicarBotaoSignIn(){
        cy.get(githubElements.botaoSignIn()).click()
        cy.screenshot()
    }

    acessaGitHub(){
        cy.get(githubElements.acessaGitHub()).should('be.visible')
        cy.screenshot()
    }

    mensagemAlerta(resultado){
        cy.get(githubElements.mensagemAlerta()).should('contain','Incorrect username or password')
        //cy.xpath(githubElements.mensagemAlerta()).should('contain',resultado)
        cy.screenshot()
    }
    
    mensagemAlertaVerificação(resultado){
        cy.get(githubElements.mensagemAlertaVerificação()).should('contain','Device verification')
        cy.screenshot()
    }

    mensagemAlertaCódigo(resultado){
        cy.get(githubElements.mensagemAlertaCódigo()).should('contain','Enter code')
        cy.screenshot()
    }
}
export default GithubPage;
