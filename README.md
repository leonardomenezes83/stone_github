# stone_github

1) Pré requisitos: NodeJS instalado
                   VScode instalado

2) Através do terminal, instalar cypress => npm install cypress --save-dev

3) Através do terminal, instalar plugins:
   3.1) cucumber => npm install --save-dev cypress-cucumber-preprocessor
        Mais informações e configurações em: 
        https://www.npmjs.com/package/cypress-cucumber-preprocessor

   3.2) xPath => npm install -D cypress-xpath
        Mais informações e configurações em: 
        https://www.npmjs.com/package/cypress-xpath

4) Através do terminal, abrir o cypress =>  npx cypress open
	  obs: na primeira vez que aberto, será criado estrutura padrão das pastas.

5) Baixar do git o projeto stone_github [repositório publico]
       https://github.com/leonardomenezes83/stone_github

6) Para executar os testes:
       Via terminal: npx cypress run
       Via dashboard: npx cypress open > executar todos os testes através da pasta "INTEGRATION TESTS"
                                                                           > Run 5 integration specs

       Sugestão: executar via terminal, para gerar evidências (fotos e vídeos) que estarão sendo armazenadas nas pastas screenshots e videos.