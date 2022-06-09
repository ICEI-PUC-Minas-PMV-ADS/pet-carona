// TODO: turn gender radio
let editButton = document.getElementById('edit-button');
const editableFields = document.getElementsByClassName('editable');

// Atualização do localStorage conforme modificações feitas
let usuarioAtual = JSON.parse(sessionStorage.getItem('usuarioAtual'));
document.getElementById('nomeUsuario').innerHTML = usuarioAtual.nome;
document.getElementById('enderecoUsuario').innerHTML = usuarioAtual.endereco;
document.getElementById('bairroUsuario').innerHTML = usuarioAtual.bairro;
document.getElementById('CEPUsuario').innerHTML = usuarioAtual.CEP;

let editions = 0;

// Edição das informações contidas nos campos
let editable = false;

let updateStorage = function () {
	let usuarioAtualizado = {
		...usuarioAtual,
		nome: document.getElementById('nomeUsuario').innerHTML,
		endereco: document.getElementById('enderecoUsuario').innerHTML,
		bairro: document.getElementById('bairroUsuario').innerHTML,
		CEP: document.getElementById('CEPUsuario').innerHTML,
	};
	console.log(usuarioAtualizado);
	sessionStorage.setItem('usuarioAtual', JSON.stringify(usuarioAtualizado));
};

let turnEditable = function () {
	editable = !editable;
	if (editable) {
		editButton.innerHTML = 'Salvar';
		for (let element of editableFields) {
			element.className = 'editable editing';
			element.contentEditable = true;
			editions += 1;
		}
	} else {
		editButton.innerHTML = 'Editar perfil';
		for (let element of editableFields) {
			element.className = 'editable';
			element.contentEditable = false;
		}
		if (editions !== 0) updateStorage();
	}
};

editButton.addEventListener('click', turnEditable);
