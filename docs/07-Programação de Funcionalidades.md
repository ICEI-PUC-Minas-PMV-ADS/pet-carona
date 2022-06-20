# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

# Sistema de autenticação
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/62656936/173402311-fe243238-2ab5-46ef-b201-c82cb6e7e430.gif)

### Requisitos atendidos:
- RF-007 	O site deve apresentar a possibilidade de se criar uma conta, realizar login e salvar as informações associadas.
### Artefatos da funcionalidade
- cadastroLogin.js
- Autenticacao.html
### Estrutura de dados
```js
	let novoUsuario = {
		nome: nome,
		email: email,
		senha: senha,
		endereco: 'Preencha aqui seu endereço',
		bairro: 'Preencha aqui seu bairro',
		CEP: 'Preencha aqui seu CEP',
		avaliacao: '0.0',
		viagens: '0'
	};
```
### Instruções de acesso
Após o redirecionamento inicial, deve-se preencher as informações do formulário para logar com uma conta existente, ou clicar em "cadastre-se" e realizar o cadastramento.

# Adicionar ou editar as informações de passageiro
![image](https://user-images.githubusercontent.com/103083123/174585250-450b8a64-7b42-42ab-a9db-3db27c5f2993.png)

### Requisitos atendidos:
RF-004 	O formulário deve apresentar as seguintes informações a serem preenchidas e editadas pelo perfil de passageiro: endereço, bairro, CEP, e pets.
### Artefatos da funcionalidade
- EditarPerfilPassageiro.html
- editarPerfilPassageiro.js
- checarLogin.js
### Estrutura de dados
```js
	let nomeAtualizado = document.getElementById('nomeUsuario').innerHTML;
	let enderecoAtualizado = document.getElementById('enderecoUsuario').innerHTML;
	let bairroAtualizado = document.getElementById('bairroUsuario').innerHTML;
	let CEPAtualizado = document.getElementById('CEPUsuario').innerHTML;
	let usuarioAtualizado = {
		...usuarioAtual,
		nome: nomeAtualizado,
		endereco: enderecoAtualizado,
		bairro: bairroAtualizado,
		CEP: CEPAtualizado,
	};
```
### Instruções de acesso
Ao realizar o login, caso não seja o primeiro acesso, basta clicar no botão de "editar perfil", realizar as mudanças e clicar em "salvar".

# Adicionar ou editar as informações de motorista
![image](https://user-images.githubusercontent.com/103083123/174589568-a23f2d87-7a22-4a4e-9382-17a0cbe8555c.png)

### Requisitos atendidos:
- RF-005 	O formulário deve apresentar as seguintes informações a serem preenchidas e editadas pelo perfil de motorista: endereço, bairro, CEP, modelo do carro, porte dos pets a serem levados, e valor da ajuda de custo necessária.

### Artefatos da funcionalidade
- EditarPerfilMotorista.html
- editarPerfilMotorista.js
- checarLogin.js
### Estrutura de dados
```js
	let nomeAtualizado = document.getElementById('nomeUsuario').innerHTML;
	let enderecoAtualizado = document.getElementById('enderecoUsuario').innerHTML;
	let bairroAtualizado = document.getElementById('bairroUsuario').innerHTML;
	let CEPAtualizado = document.getElementById('CEPUsuario').innerHTML;
	let modeloCarroAtualizado =document.getElementById('modeloCarro').innerHTML;
	let tipoCarroAtualizado = document.getElementById('tipoCarro').innerHTML;
	let portePetAtualizado = document.getElementById('portePet').innerHTML;
	let ajudaCustoAtualizado = document.getElementById('ajudaCusto').innerHTML;

	let usuarioAtualizado = {
		...usuarioAtual,
		nome: nomeAtualizado,
		endereco: enderecoAtualizado,
		bairro: bairroAtualizado,
		CEP: CEPAtualizado,
		modeloCarro: modeloCarroAtualizado,
		tipoCarro: tipoCarroAtualizado,
		portePet: portePetAtualizado,
		ajudaCusto: ajudaCustoAtualizado
	};
```
### Instruções de acesso
Ao realizar o login, caso não seja o primeiro acesso, basta clicar no botão de "editar perfil", realizar as mudanças e clicar em "salvar".

# Escolher entre motorista ou passageiro
![image](https://user-images.githubusercontent.com/103083123/174665596-488487e9-867b-4754-9a43-59431c24cf4b.png)
### Requisitos atendidos:
- RF-003 	O site deve oferecer a opção de escolher o tipo do perfil (motorista ou passageiro).
### Artefatos da funcionalidade
- tipoUsuario.html
- checarLogin.js
### Estrutura de dados
```js
	// perfil motorista
                let usuarioAtualizado = {
                    ...usuarioAtual,
                    perfil: 'motorista',
                    modeloCarro: 'Insira aqui o modelo do veículo',
                    tipoCarro: 'Insira aqui o tipo do veículo',
                    portePet: 'Insira aqui o porte dos pets para a carona',
                    ajudaCusto: 'Insira aqui a ajuda de custo desejada'
                }
	// perfil passageiro
	            let usuarioAtualizado = {
                    ...usuarioAtual,
                    perfil: 'passageiro'
                }
```
### Instruções de acesso
Após cadastrar a conta, deve-se realizar o primeiro login, que redirecionará a essa página.

![image](https://user-images.githubusercontent.com/103083123/174670906-0b4ff5a6-d1dc-4760-ab2c-d4a4cccfc3fd.png)
### Requisitos atendidos
- RF-001 O site deve apresentar um mecanismo de busca para os passageiros pesquisarem os motoristas disponíveis.

### Artefatos da funcionalidade
- ListaMotoristas.html
- listarMotoristas.js
- checarLogin.js

### Estrutura de dados 
```js
motoristas.map((usuario) => {
	let button = document.createElement('input');
	button.setAttribute('type', 'button');
	button.setAttribute('value', 'Ver Motorista');
	button.className = 'button';
	let motoristaContainer = document.createElement('div');
	let imagemContainer = document.createElement('div');
	imagemContainer.innerHTML += '<img class="foto" src="../../public/placeholder.png" alt="">';
	let divInformacoes = document.createElement('div');
	let nome = document.createElement('div');
	nome.className = 'flex info';
	let avaliacao = document.createElement('div');
	avaliacao.className = 'flex info';
	let viagens = document.createElement('div');
	viagens.className = 'flex info';

	nome.innerHTML += `<p>Nome: </p> <p>${usuario.nome}</p>`;
	avaliacao.innerHTML += `<p>Avaliação: </p> <p>${usuario.avaliacao}</p>`;
	viagens.innerHTML += `<p>Viagens:</p> <p>${usuario.viagens}</p>`;

	divInformacoes.appendChild(nome);
	divInformacoes.appendChild(avaliacao);
	divInformacoes.appendChild(viagens);
	divInformacoes.appendChild(button);
	motoristaContainer.className = 'caracteristicasMotorista';
	motoristaContainer.appendChild(imagemContainer);
	motoristaContainer.appendChild(divInformacoes);
	containerMotoristas.appendChild(motoristaContainer);
});
```
### Instruções de acesso
Ao logar numa conta como passageiro, clicar no botão "oferecer carona", que irá redirecionar à página dos motoristas.

# Visualizar os passageiros disponíveis
![image](https://user-images.githubusercontent.com/103083123/174671091-5cbf003b-747c-4cd2-b6c1-8b2bdf9fa7c5.png)
### Requisitos atendidos
- RF-002 O site deve apresentar um mecanismo de busca para os motoristas pesquisarem os passageiros disponíveis.

### Artefatos da funcionalidade
- listarPassageiros.js
- ListaPassageiros.html
- checarLogin.js

### Estrutura de dados 
```js
passageiros.map((usuario) => {
	let button = document.createElement('input');
	button.setAttribute('type', 'button');
	button.setAttribute('value', 'Ver Passageiro');
	button.className = 'button';
	let passageiroContainer = document.createElement('div');
	let imagemContainer = document.createElement('div');
	imagemContainer.innerHTML += '<img class="foto" src="../../public/placeholder.png" alt="">';
	let divInformacoes = document.createElement('div');
	let nome = document.createElement('div');
	nome.className = 'flex info';
	let avaliacao = document.createElement('div');
	avaliacao.className = 'flex info';
	let viagens = document.createElement('div');
	viagens.className = 'flex info';

	nome.innerHTML += `<p>Nome: </p> <p>${usuario.nome}</p>`;
	avaliacao.innerHTML += `<p>Avaliação: </p> <p>${usuario.avaliacao}</p>`;
	viagens.innerHTML += `<p>Viagens:</p> <p>${usuario.viagens}</p>`;

	divInformacoes.appendChild(nome);
	divInformacoes.appendChild(avaliacao);
	divInformacoes.appendChild(viagens);
	divInformacoes.appendChild(button);
	passageiroContainer.className = 'caracteristicasMotorista';
	passageiroContainer.appendChild(imagemContainer);
	passageiroContainer.appendChild(divInformacoes);
	containerPassageiros.appendChild(passageiroContainer);
});
```
### Instruções de acesso
Ao logar numa conta como motorista, clicar no botão "oferecer carona", que irá redirecionar à página dos passageiros.
