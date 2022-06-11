let editButton = document.getElementById('edit-button');
const editableFields = document.getElementsByClassName('editable');
let usuarioAtual = JSON.parse(sessionStorage.getItem('usuarioAtual'));
let listaUsuarios = JSON.parse(localStorage.getItem('usuarios')).usuarios;
let editable = false;
document.getElementById('nomeUsuario').innerHTML = usuarioAtual.nome;
document.getElementById('enderecoUsuario').innerHTML = usuarioAtual.endereco;
document.getElementById('bairroUsuario').innerHTML = usuarioAtual.bairro;
document.getElementById('CEPUsuario').innerHTML = usuarioAtual.CEP;

// Busca o usuario atual e atualiza a "base de dados" de acordo com as ultimas modificacoes
let updateUsers = function () {
	let usuarioAntes = listaUsuarios.find(
		(usuario) => usuario.email === usuarioAtual.email,
	);
	let index = listaUsuarios.indexOf(usuarioAntes);
	listaUsuarios[index] = usuarioAtual;
	localStorage.setItem(
		'usuarios',
		JSON.stringify({
			usuarios: listaUsuarios,
		})
	);
};

let updateStorage = function () {
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
	sessionStorage.setItem('usuarioAtual', JSON.stringify(usuarioAtualizado));
	updateUsers();
};

let turnEditable = function () {
	updateStorage();
	editable = !editable;
	if (editable) {
		editButton.innerHTML = 'Salvar';
		for (let element of editableFields) {
			element.className = 'editable editing';
			element.contentEditable = true;
		}
	} else {
		editButton.innerHTML = 'Editar perfil';
		for (let element of editableFields) {
			element.className = 'editable';
			element.contentEditable = false;
		}
	}
};
editButton.addEventListener('click', turnEditable);
