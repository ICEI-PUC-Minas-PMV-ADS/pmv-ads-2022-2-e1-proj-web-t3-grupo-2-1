# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita por um membro da equipe a partir da observação do usuário em seu local natural e por meio de entrevista direta. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

Larrissa dos Santos tem 35 anos, psicóloga e empreendedora na área da saúde. Tem como hobbie a meditação, a leitura e ama o contato com a natureza. Busca por meio de uma aplicação a resolução de contra-tempos da sua vida profissional, tais como o acompanhamento de informações de seus clientes e o controle das informações financeiras, que atualmente eram feitas de forma manual. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`       |                     PARA ... `MOTIVO/VALOR`                          |
|--------------------------|------------------------------------|----------------------------------------------------------------------|
|Larissa dos Santos        | Cadastrar clientes                 | Para ter acesso e controle de todos os dados em uma única plataforma.| 
|Larissa dos Santos        | Gerenciar dados                    | Para trabalhar estratégias direcionadas para cada perfil de clientes.|
|Larissa dos Santos        | Controle de fluxo de caixa         | Para poder controlar as receitas e as despesas do empreendimento, além de acompanhar a taxa de                                                                 inadimplência.                                                      |                                                             
## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    |                             Descrição do Requisito                                                           | Prioridade   |
|------|--------------------------------------------------------------------------------------------------------------|--------------|
|RF-001| O site deve apresentar na página principal, uma área de login (Usuário e senha), uma imagem com a logomarca. |     ALTA     | 
|RF-002| O site deve apresentar uma tela de boas vindas e oferecer um menu de funcionalidades                         |     MÉDIA    |
|RF-003| O site deve conter um menu de funcionalidade que permita ao usuário navegar entre elas                       |     MÉDIA    |
|RF-004| O site deve conter no menu de funcionalidades duas opções: Cliente e Financeiro                              |     ALTA     |
|RF-005| O site deve conter dentro do menu cliente as seguintes funcionalidades: Cadastro de clientes e Listagem de 
         Clientes                                                                                                     |     ALTA     |
|RF-006| O site deve oferecer uma funcionalidade para controle financeiro (Painel financeiro, receita, despesas 
         e extrato)                                                                                                   |      ALTA    | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade | MÉDIA |
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) | ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 11/12/2022 |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho |
