class GithubElements {


    botaoSignIn =() => {return '/html/body/div[1]/header/div/div[2]/div[2]/div[2]/a'}
    //campos de login
    username  =() => {return '#login_field'}
    password = () => {return '#password'}
    botaoSignIn =() => {return '.btn'} 
    acessaGitHub =() => {return '.Header'}//sucesso
    mensagemAlerta =() => {return '.flash > .container-lg'}//incorreto
    mensagemAlertaVerificação =() => {return '.h1'}//verificação
    mensagemAlertaCódigo =() => {return'#launch-code-description'}//verificação

    //criarRepositorio =() => {return '#repos-container > div > .btn > :nth-child(1) > [style="vertical-align: inherit;"]'}
    
    
}
export default GithubElements;