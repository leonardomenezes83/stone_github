import GithubPage from '../pageobjects/GithubPage'
import GithubElements from '../elements/GitHubElements';

const githubPage = new GithubPage

Given("Acessar site do github", () => {
    githubPage.acessarSite()
});

And ("realizar login no site", () => {

});

And ("inserir username: {}",(username) => {
    githubPage.inserirUsername(username)
});

And ("inserir password: {}",(password) => {
    githubPage.inserirPassword(password)
});

When ("clicar no botão sign in{}", () =>{
    githubPage.clicarBotaoSignIn()
});

Then("é apresentado todos os repositórios existentes",() => {
    githubPage.acessaGitHub()
});

Then("é apresentado Incorrect username or password",() => {
    githubPage.mensagemAlerta()    
});

Then("é apresentado Device verification",() => {
    githubPage.mensagemAlertaVerificação()    
});

Then("é apresentado Enter code",() => {
    githubPage.mensagemAlertaCódigo()    
});

