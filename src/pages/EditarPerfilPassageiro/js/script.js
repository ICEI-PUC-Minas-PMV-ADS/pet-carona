// TODO: turn CEP numeric
// TODO: turn gender radio
let editButton = document.getElementById('edit-button');
const editableFields = document.getElementsByClassName('editable');

let editable = false;

let turnEditable = function() {
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
            element.contentEditable = false
        }
    }
}

editButton.addEventListener('click', turnEditable)