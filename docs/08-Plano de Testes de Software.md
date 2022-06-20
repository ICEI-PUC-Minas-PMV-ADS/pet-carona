# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 

# Casos de teste
|   Caso de teste    |           CT-01 - Visualizar motoristas disponíveis                         |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | O site deve apresentar uma página para os passageiros visualizarem os motoristas disponíveis. |
| Objetivo do teste | Verificar se o site exibe corretamente os usuários |
| Critérios de êxito | Deve-se mostrar os usuários conforme as informações exibidas no localStorage |


|   Caso de teste    |           CT-02 - Visualizar passageiros disponíveis                         |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | O site deve apresentar um mecanismo de busca para os motoristas visualizarem os passageiros disponíveis. |
| Objetivo do teste | Verificar se o site exibe corretamente os usuários |
| Critérios de êxito | Deve-se mostrar os usuários conforme as informações exibidas no localStorage |


|   Caso de teste    |           CT-03 - Escolher entre perfil de motorista ou passageiro          |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | O site deve apresentar a possibilidade de escolher entre a opção de oferecer ou receber carona|
| Objetivo do teste | Verificar se a funcionalidade de escolha de perfil ocorre de maneira correta |
| Passos | 1) Acessar o navegador |
|        | 2) Criar uma conta na página de cadastro|
|        | 3) Realizar o primeiro login com a conta cadastrada.|
| Critérios de êxito | Deve-se alterar as informações do usuário atual tanto no sessionStorage como no localStorage |


|   Caso de teste    |           CT-04 - Editar informações de passageiro         |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | O site deve apresentar a possibilidade de editar as informações do perfil do passageiro |
| Objetivo do teste | Verificar se as informações são atualizadas da maneira correta |
| Passos | 1) Acessar o navegador |
|        | 2) Realizar o login com uma conta existente|
|        | 3) Clicar no botão "Editar perfil" e realizar as alterações.|
| Critérios de êxito | Deve-se mostrar os usuários conforme as informações exibidas no localStorage e sessionStorage.|

|   Caso de teste    |           CT-05 - Editar informações de motorista         |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | O site deve apresentar a possibilidade de editar as informações do perfil do motorista |
| Objetivo do teste | Verificar se as informações são atualizadas da maneira correta |
| Passos | 1) Acessar o navegador |
|        | 2) Realizar o login com uma conta existente|
|        | 3) Clicar no botão "Editar perfil" e realizar as alterações.|
| Critérios de êxito | Deve-se mostrar os usuários conforme as informações exibidas no localStorage e sessionStorage.|

|   Caso de teste    |           CT-06 - Realizar cadastro e login na plataforma        |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | O site deve apresentar a funcionalidade de se registrar um novo usuário e de logar com um usuário existente. |
| Objetivo do teste | Verificar se as informações são salvas no localStorage corretamente, e se a checagem realizada das informações existentes é correta. |
| Passos | 1) Acessar o navegador |
|        | 2) Visualizar a página de login do site|
|        | 3) Preencher as informações de uma conta existente e clicar em "entrar", ou clicar em "cadastre-se" e realizar o cadastro de uma nova conta.|
| Critérios de êxito | 1) Deve-se inserir um novo usuário na base de usuários existentes no localStorage. 2) Deve-se manter na chave "usuarioAtual" as informações do usuário logado no momento, no sessionStorage. 3) O site deve retornar um alerta caso o usuário tente criar uma conta com um e-mail já existente.|
