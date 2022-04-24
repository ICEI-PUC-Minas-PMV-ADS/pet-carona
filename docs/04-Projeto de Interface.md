
# Projeto de Interface


Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema. Apresentação  das principais interfaces da plataforma Pet Carona :

## User Flow

![User Flow](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-carona/blob/main/docs/img/userflow.PNG)


Fluxo de telas do usuário.

### Especificações:

#### Tela inicial:

![Tela inicial](https://user-images.githubusercontent.com/101114385/164715151-c46dc81c-3118-47e7-8de2-2947201cb99d.png)

A tela de login é a primeira página acessada pelo o usuário, na qual a mesma possui campos de formulários de e-mail, login e senha. Se o usuário não for cadastrado ainda há uma aba para que o mesmo possa fazer o cadastro.

#### Tela de Cadastro:

![Tela de Cadastro](https://user-images.githubusercontent.com/101114385/164715147-66898c8e-c964-4023-9823-f45afa9bd939.png)

Caso o usuário tenha clicado na aba para realizar um cadastro, o mesmo é direcionado para uma página onde pode se cadastrar, preenchendo dados pessoais. Após o preenchimento basta o usuário clicar no botão de cadastrar que ele será redirecionado para a tela de login.

#### Definição de classe:

![Definição de usuario](https://user-images.githubusercontent.com/101114385/164715145-da25f4ee-65e6-41ef-a8b2-9dbacb3d79de.png)

Nessa tela o usuário deve definir se o mesmo irá usar o aplicativo como um passageiro ou como um motorista.

#### Definição e Menu (Na visão do passageiro):

![Tela visão do passageiro](https://user-images.githubusercontent.com/101114385/164715154-87590c97-6f27-4edc-bc56-330ae767a44b.png)

Após o usuário selecionar a opção de passageiro ele será redirecionado para uma aba que exibe os motoristas próximos, uma opção para ver todos os motoristas e um menu. No menu, o usuário pode visualizar e atualizar o perfil e sair da conta na qual está conectado no site. No perfil, o usuário pode visualizar ou alterar informações pessoais e informações do Pet.

#### Vendo todos os motoristas:

![Tela do passageiro na seleção de motorista](https://user-images.githubusercontent.com/101114385/164715150-20c77318-b4d6-491d-9704-635965b67682.png)

Se o usuário desejar ver todos os motoristas cadastrados no site ele verá a foto do mesmo, seu nome, nota geral e total de caronas, podendo visualizar mais do perfil do motorista que desejar.

#### Tela de Perfil do motorista na visão de passageiro:

![Visualização perfil do passageiro](https://user-images.githubusercontent.com/101114385/164715159-b499adde-6700-446f-81ff-5c8ad532074f.png)

Após o usuário selecionar o motorista desejado irá apresentar informações pessoais deste, informações do veículo e informações sobre a viagem.  Se assim o usuário aceitar o perfil do motorista, ele pode solicitar uma corrida clicando no botão no fim da tela.

#### Tela de solicitação de viagem:

![Solicitação para contato com o motorista](https://user-images.githubusercontent.com/101114385/164715146-e56fe5b7-6ab3-45a4-a83f-8ea101a7e5f8.png)

Após o usuário clicar no botão de solicitação de motorista, ele é direcionado para uma tela que diz que a solicitação foi enviada com sucesso e que agora o motorista irá analisar o perfil do usuário é entrar em contato via WhatsApp.

#### Definição de classe Motorista e Menu (Na visão do Motorista):

![Tela do motorista](https://user-images.githubusercontent.com/101114385/164715148-2ae58e0a-738a-4eeb-8df3-84659865ff18.png)

O motorista, após confirmar seu perfil nessa categoria, ao receber uma solicitação de viagem, recebe também opções para ver o perfil do passageiro e aceitar ou recusar a viagem. Além disso o motorista tem acesso ao menu onde pode visualizar e atualizar o seu perfil. Na tela de menu, pode realizar alterações sobre seus dados pessoais, informações sobre o seu veículo e informações sobre a viagem como valor de custo.

#### Analisar perfil do passageiro:

![Visualização do perfil do motorista na visão do passageiro](https://user-images.githubusercontent.com/101114385/164715156-d35ecd98-494e-40f2-80c4-bbdbb09e2ed8.png)

Caso o motorista clique para analisar o perfil do passageiro, ele será direcionado para uma tela com informações sobre o passageiro e seu pet.

#### Caso o motorista aceite a viagem:

![Caso o motorista aceite a viagem](https://user-images.githubusercontent.com/101114385/164715142-7d591ae0-6ffc-4a0c-aebc-617fd910b813.png)

Será redirecionado para uma tela de contato via WhatsApp com o passageiro para que ambos agendem a viagem e definam os detalhes da corrida.

#### Após o horário agendado para a corrida:

![Tela de avaliação de motorista ou passageiro após a corrida](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-carona/blob/main/docs/img/tela%20notas.PNG)

Após o horário agendado para a corrida, ambos usuários (tanto motorista quanto passageiro) recebem uma tela por meio de notificação push em que são convidados a avaliarem com nota de 1 a 5 o outro usuário e a deixarem um comentário opcional.
