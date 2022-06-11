const buttonAuth = document.getElementById('botao-autentificacao');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');
const nameInput = document.getElementById('nome');
sessionStorage.setItem('usuarioAtual', JSON.stringify({}))
let usuarioAtual = {};

if (!localStorage.getItem('usuarios')) {
	// Preenchimento inicial do localStorage para o primeiro acesso
	const dadosIniciais = {
		usuarios: [{
			nome: 'João Silva',
			avaliacao: '4.9',
			viagens: '13',
			perfil: 'passageiro',
			modeloCarro: 'Fiat',
			tipoCarro: 'SUV',
			portePet: 'P',
			ajudaCusto: '10 reais'
		},
		{
			nome: 'Maria Paula',
			avaliacao: '4.1',
			viagens: '13',
			perfil: 'passageiro',
			modeloCarro: 'Fiat',
			tipoCarro: 'SUV',
			portePet: 'P',
			ajudaCusto: '10 reais'
		},
		{
			nome: 'Celso Ramos',
			avaliacao: '5.0',
			viagens: '13',
			perfil: 'motorista',
			modeloCarro: 'Fiat',
			tipoCarro: 'SUV',
			portePet: 'P',
			ajudaCusto: '10 reais'
		},
		{
			nome: 'Felicia Alves',
			avaliacao: '4.0',
			viagens: '13',
			perfil: 'motorista',
			modeloCarro: 'Fiat',
			tipoCarro: 'SUV',
			portePet: 'P',
			ajudaCusto: '10 reais'
		}]
		
	};
	localStorage.setItem('usuarios', JSON.stringify(dadosIniciais));
}

let dbUsuarios = JSON.parse(localStorage.getItem('usuarios'));

function redirect(url) {
	window.location.href = url;
}

buttonAuth.addEventListener('click', (e) => {
	e.preventDefault();
	if (buttonAuth.innerHTML.includes('ENTRAR')) {
		loginUser(emailInput.value, passwordInput.value);
	} else {
		addUser(nameInput.value, emailInput.value, passwordInput.value);
	}
});

// Login ou cadastro
function loginUser(email, senha) {
	for (let i = 0; i < dbUsuarios.usuarios.length; i++) {
		let usuario = dbUsuarios.usuarios[i];
		if (email === usuario.email && senha === usuario.senha) {
			let usuarioAtual = usuario;
			sessionStorage.setItem('usuarioAtual', JSON.stringify (usuarioAtual));
			return redirect('TipoUsuario.html');
		}
	}
	return alert('Senha ou email incorretos.');
}

function addUser(nome, email, senha) {
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
	for (let i = 0; i < dbUsuarios.usuarios.length; i++) {
		let usuario = dbUsuarios.usuarios[i];
		if (usuario.email === email) {
			return alert('Já existe um usuário com esse email.');
		}
	}
	dbUsuarios.usuarios.push(novoUsuario);
	localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));
	redirect('Cadastro.html');
}
