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
    }

    acessaGitHub(){
        cy.get(githubElements.acessaGitHub()).should('be.visible')
    }

    mensagemAlerta(resultado){
        cy.get(githubElements.mensagemAlerta()).should('contain','Incorrect username or password')
        //cy.xpath(githubElements.mensagemAlerta()).should('contain',resultado)
    }
    
    mensagemAlertaVerificação(resultado){
        cy.get(githubElements.mensagemAlertaVerificação()).should('contain','Device verification')
    }

    mensagemAlertaCódigo(resultado){
        cy.get(githubElements.mensagemAlertaCódigo()).should('contain','Enter code')
    }
}
export default GithubPage;
