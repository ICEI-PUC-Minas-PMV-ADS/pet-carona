const usuariosTotal = JSON.parse(localStorage.getItem('usuarios')).usuarios;
const usuarioAtual = JSON.parse(sessionStorage.getItem('usuarioAtual'));

// Renderiza cada container com as informaçoes do usuario
passageiros = usuariosTotal.filter(
	(usuario) => usuario.perfil === 'motorista' && usuario.email !== usuarioAtual.email,
);

let containerMotoristas = document.getElementById('mainContainer');
const buttonVoltar = document.getElementById('buttonVoltar');

console.log(containerMotoristas);

// Exibindo dinamicamente as informações de cada usuário
passageiros.map((usuario) => {
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
	motoristaContainer.className = 'caracteristicasMotorista';
	motoristaContainer.appendChild(imagemContainer);
    motoristaContainer.appendChild(divInformacoes);
	containerMotoristas.appendChild(motoristaContainer);
});
