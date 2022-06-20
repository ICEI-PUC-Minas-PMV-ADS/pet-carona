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

# Adicionar ou editar as informações de passageiro
![image](https://user-images.githubusercontent.com/103083123/174585250-450b8a64-7b42-42ab-a9db-3db27c5f2993.png)

### Requisitos atendidos:
RF-004 	O formulário deve apresentar as seguintes informações a serem preenchidas e editadas pelo perfil de passageiro: endereço, bairro, CEP, e pets.
### Artefatos da funcionalidade
- EditarPerfilPassageiro.html
- editarPerfilPassageiro.js
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
# Adicionar ou editar as informações de motorista
![image](https://user-images.githubusercontent.com/103083123/174589568-a23f2d87-7a22-4a4e-9382-17a0cbe8555c.png)

### Requisitos atendidos:
- RF-005 	O formulário deve apresentar as seguintes informações a serem preenchidas e editadas pelo perfil de motorista: endereço, bairro, CEP, modelo do carro, porte dos pets a serem levados, e valor da ajuda de custo necessária.

### Artefatos da funcionalidade
- EditarPerfilMotorista.html
- editarPerfilMotorista.js
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
