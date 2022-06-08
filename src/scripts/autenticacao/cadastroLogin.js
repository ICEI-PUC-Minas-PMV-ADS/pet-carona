const buttonAuth = document.getElementById('botao-autentificacao');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');
const nameInput = document.getElementById('nome');
let usuarioAtual = {};

if (!localStorage.getItem('usuarios')) {
	// Preenchimento inicial do localStorage para o primeiro acesso
	const dadosIniciais = {
		usuarios: [
			{
				id: '1',
				nome: 'João Silva',
				endereco: 'Rua Pereira Neto, 456',
				bairro: 'Mooca',
				CEP: '01200-020',
				funcao: 'motorista',
			},
		],
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
		let emailCadastro = emailInput.value;
		for (let i = 0; i < dbUsuarios.usuarios.length; i++) {
			let usuario = dbUsuarios.usuarios[i];
			if (usuario.email === emailCadastro) {
				return alert('Já existe um usuário com esse email.');
			}
		}
		addUser(nameInput.value, emailInput.value, passwordInput.value);
	}
});

// Login ou cadastro
function loginUser(email, senha) {
	for (let i = 0; i < dbUsuarios.usuarios.length; i++) {
		let usuario = dbUsuarios.usuarios[i];
		if (email === usuario.email && senha === usuario.senha) {
			usuarioAtual.email = usuario.email;
			usuarioAtual.nome = usuario.nome;
		}
		sessionStorage.setItem('usuarioAtual', JSON.stringify(usuarioAtual));
		redirect('PerfilPassageiro.html');
	}
	return alert('Senha ou email incorretos.');
}

function addUser(nome, email, senha) {
	let novoUsuario = {
		nome: nome,
		email: email,
		senha: senha,
	};
	dbUsuarios.usuarios.push(novoUsuario);
	localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));
}
