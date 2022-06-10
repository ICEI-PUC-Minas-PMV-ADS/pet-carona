// TODO: turn gender radio

let editButton = document.getElementById('edit-button');
const editableFields = document.getElementsByClassName('editable');
let usuarioAtual = JSON.parse(sessionStorage.getItem('usuarioAtual'));
document.getElementById('nomeUsuario').innerHTML = usuarioAtual.nome;
document.getElementById('enderecoUsuario').innerHTML = usuarioAtual.endereco;
document.getElementById('bairroUsuario').innerHTML = usuarioAtual.bairro;
document.getElementById('CEPUsuario').innerHTML = usuarioAtual.CEP;

// Edição das informações contidas nos campos
let editable = false;

function updateStorage() {
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
	console.log(usuarioAtualizado);
	sessionStorage.setItem('usuarioAtual', JSON.stringify(usuarioAtualizado));
}

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
