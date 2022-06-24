# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 

# Casos de teste
|   Caso de teste    |           CT-01 - Visualizar motoristas disponíveis                         |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | RF-001 	O site deve apresentar um mecanismo de busca para os passageiros pesquisarem os motoristas disponíveis. |
| Objetivo do teste | Verificar se o site exibe corretamente os usuários |
| Critérios de êxito | Deve-se mostrar os usuários conforme as informações exibidas no localStorage |
| Passos | 1) Acessar o navegador |
|        | 2) Realizar o login com uma conta cadastrada como passageiro|
|        | 3) Clicar no botão "pedir carona" na página do passageiro.|

|   Caso de teste    |           CT-02 - Visualizar passageiros disponíveis                         |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | RF-002 	O site deve apresentar um mecanismo de busca para os motoristas pesquisarem os passageiros disponíveis. |
| Objetivo do teste | Verificar se o site exibe corretamente os usuários |
| Critérios de êxito | Deve-se mostrar os usuários conforme as informações exibidas no localStorage |
| Passos | 1) Acessar o navegador |
|        | 2) Realizar o login com uma conta cadastrada como motorista|
|        | 3) Clicar no botão "oferecer carona" na página do motorista.|


|   Caso de teste    |           CT-03 - Escolher entre perfil de motorista ou passageiro          |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | RF-003 	O site deve oferecer a opção de escolher o tipo do perfil (motorista ou passageiro).|
| Objetivo do teste | Verificar se a funcionalidade de escolha de perfil ocorre de maneira correta |
| Passos | 1) Acessar o navegador |
|        | 2) Criar uma conta na página de cadastro|
|        | 3) Realizar o primeiro login com a conta cadastrada.|
| Critérios de êxito | Deve-se alterar as informações do usuário atual tanto no sessionStorage como no localStorage |


|   Caso de teste    |           CT-04 - Editar informações de passageiro         |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados |RF-004 	O formulário deve apresentar as seguintes informações a serem preenchidas e editadas pelo perfil de passageiro: endereço, bairro, CEP, e pets. |
| Objetivo do teste | Verificar se as informações são atualizadas da maneira correta |
| Passos | 1) Acessar o navegador |
|        | 2) Realizar o login com uma conta existente|
|        | 3) Clicar no botão "Editar perfil" e realizar as alterações.|
| Critérios de êxito | Deve-se mostrar os usuários conforme as informações exibidas no localStorage e sessionStorage.|

|   Caso de teste    |           CT-05 - Editar informações de motorista         |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | RF-005 O formulário deve apresentar as seguintes informações a serem preenchidas e editadas pelo perfil de motorista: endereço, bairro, CEP, modelo do carro, porte dos pets a serem levados, e valor da ajuda de custo necessária. |
| Objetivo do teste | Verificar se as informações são atualizadas da maneira correta |
| Passos | 1) Acessar o navegador |
|        | 2) Realizar o login com uma conta existente|
|        | 3) Clicar no botão "Editar perfil" e realizar as alterações.|
| Critérios de êxito | Deve-se mostrar os usuários conforme as informações exibidas no localStorage e sessionStorage.|

|   Caso de teste    |           CT-06 - Realizar cadastro e login na plataforma        |
|--------------------|-----------------------------------------------------------------------------|
|Requisitos associados | RF-007 	O site deve apresentar a possibilidade de se criar uma conta, realizar login e salvar as informações associadas. |
| Objetivo do teste | Verificar se as informações são salvas no localStorage corretamente, e se a checagem realizada das informações existentes é correta. |
| Passos | 1) Acessar o navegador |
|        | 2) Visualizar a página de login do site|
|        | 3) Preencher as informações de uma conta existente e clicar em "entrar", ou clicar em "cadastre-se" e realizar o cadastro de uma nova conta.|
| Critérios de êxito | 1) Deve-se inserir um novo usuário na base de usuários existentes no localStorage. 2) Deve-se manter na chave "usuarioAtual" as informações do usuário logado no momento, no sessionStorage. 3) O site deve retornar um alerta caso o usuário tente criar uma conta com um e-mail já existente.|
