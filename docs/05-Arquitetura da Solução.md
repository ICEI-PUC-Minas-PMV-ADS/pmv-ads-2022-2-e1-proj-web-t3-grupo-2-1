# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção serão apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem.

## Diagrama de componentes

Os componentes que fazem parte da solução serão apresentados na Figura a baixo.

![figura015](https://user-images.githubusercontent.com/111931438/194447550-c2fc99f0-faaa-4efd-be21-52cd3f7c52e6.png)
<center>Figura - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:

Navegador - Interface básica do sistema

Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.

Local Storage - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 

Cadastro - registro de dados dos clientes e dados da empresa. 

Cadastro empresa - registro dos dados da empresa que adquiriu a interface.

Financeiro - registro de receitas e despesas da empresa.

Hospedagem - local na Internet onde as páginas são mantidas e acessadas pelo navegador.  

A imagem a seguir ilustra o fluxo do usuário em nossa solução. O usuário deverá acessar o navegador, digitar a URL para acesso a plataforma, após o acesso na plataforma, é apresentado à tela de login. Dentro da tela de login, o usuário deverá se autenticar na plataforma digitando o seu usúario e senha.

Após realizar o acesso, o usuário será redirecionado para a tela inicial onde será possível escolher entre o menu de clientes, menu financeiro e o perfil do usuário.

Caso opte por seguir pelo menu de clientes, será aberta uma nova janela onde o usuário pode realizar o cadastro de novos clientes após clicar em cadaastra novo cliente e preenchendo os campos  solicitados além da lsitagem de todos os clientes cadastrados. 

Caso opte pelo menu financeiro, será redirecionado a área financeiraaberto onde também é possível cadsatrar novas movimentações financeiras e visualizar as movimenções cadastradas.

Caso opte por seguir pelo pefil do usuário, ele é redirecionado para a tela de edição de perfil, onde pode redefinir a sua senha cadastrada.
![_(copy) (1)](https://user-images.githubusercontent.com/111931438/194721805-d266c116-13d5-413f-abf4-870b5aa379bb.png)
<center>Figura - Fluxo de navegação</center>

## Tecnologias Utilizadas

|Tecnologia/Ferramenta|Utilização|
|:-----:|:-----|
|VS. Code|IDE utilizada para codificação|
|PhotoShop|Edição de imagens|
|HTML 5|Estruturação da página|
|CSS3|Estilo da página|
|JavaScript|Funcionalidades|
|Git|Controle de versões da aplicação|
|GitHub|Repositório do código fonte e ferramenta de gerenciamento de projeto|
|MarvelApp|Projeto de Interface e  Wireframes|
|MiroApp|Projeto de Interface e  Wireframes|
|Trello|Gerenciamento do projeto|
|Git Hub Pages |Hospedagem|

Na figura abaixo , podemos exemplificar como a interação do usuário com o sistema vai ser conduzida.

![nova1](https://user-images.githubusercontent.com/111931438/194776376-cfe6ce45-3a65-47c9-b363-71715bf2273e.png)
<center>Figura - Exemplificação da interação do usuário com o sistema</center>

Acessando o navegador e digitando a URL, é feito uma solicitação ao servido de hospedagem Git Hub Pages que envie a página web construída através da IDE do VS Code onde é feito a junção do HTML (Estruturação) + CSS (Estilo) + JS (Funcionalidade). Dentro da página que será retornada é possível acessar o os menus clientes e financeiro.

Todo o processo de gerenciamento do projeto, construção das interfaces e wireframes, foi construído dentro do Trello, MarvelApp e MiroApp.

Para realizar o controle de versões da aplicação utilizamos o Git e mantemos o repositório dentro do GitHub.


## Hospedagem

O site utiliza a plataforma do Git Hub Pages como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: 
(https://marlloncas.github.io/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1/src/Radix/login.html)
A publicação do site no Git Hub Pages é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço: 
(https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1)




