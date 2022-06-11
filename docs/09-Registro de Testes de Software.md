# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## CT-03 - Escolher entre perfil de motorista ou passageiro
O usuário escolhe qual tipo de perfil é o seu, e após isso é redirecionado para uma página na qual consegue atualizar suas informações.
Essa escolha é então armazenada tanto no sessionStorage quanto no localStorage
![image](https://user-images.githubusercontent.com/103083123/173204305-c5d07d9b-eb1e-46cc-8515-05e7163ec31b.png)
![image](https://user-images.githubusercontent.com/103083123/173204366-1297dec0-6ede-4f67-afb4-b9893b6e56e5.png)

## CT-03 - Editar informações de passageiro
O usuário consegue editar as informações exibidas no seu perfil através de um botão que torna os campos editáveis
![image](https://user-images.githubusercontent.com/103083123/173204406-167dc956-a58a-4dd0-acc7-d1a903443f75.png)

## CT-04 - Editar informações de motorista
O usuário consegue editar as informações exibidas no seu perfil através de um botão que torna os campos editáveis
![image](https://user-images.githubusercontent.com/103083123/173204722-c1fa463f-5dfc-4ff2-b03d-9ed0821ac817.png)


## CT-01 - Visualizar motoristas disponíveis
O usuário consegue ver uma listagem de motoristas disponíveis. Essa exibição ocorre dinamicamente de acordo com as informações contidas no localStorage (ou seja, a cada novo cadastro, um usuário é adicionado no localStorage e é renderizado um novo contâiner na página.)
![image](https://user-images.githubusercontent.com/103083123/173204610-fb7bbf56-8d7c-4f8a-8a05-086446fb1c44.png)
![image](https://user-images.githubusercontent.com/103083123/173204631-fffd690e-5597-42c1-8adb-2d5620c63193.png)

## CT-04 - Realizar cadastro e login na plataforma
O usuário pode se cadastrar ou realizar login através de algumas informações básicas. Na hora da realização do cadastro, é verificado se já existe algum usuário com o email especificado, evitando a colisão de informações.
![image](https://user-images.githubusercontent.com/103083123/173204677-ac34a8c0-d313-4bce-a6b7-7f0260c7c239.png)
![image](https://user-images.githubusercontent.com/103083123/173204689-44a5c103-e03a-4a3b-9436-25547b750aea.png)
