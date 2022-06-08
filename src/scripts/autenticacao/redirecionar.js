/**
 * Constantes
 */
const buttonAuth   = document.getElementById('botao-autentificacao');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');
const nameInput = document.getElementById('nome');

function redirect(url){
    window.location.href = url;
}

buttonAuth.addEventListener('click',(e) => {
    e.preventDefault();
    if(buttonAuth.innerHTML.includes('ENTRAR')) {
        if (emailInput.value === 'teste@gmail.com' && passwordInput.value === 'teste') {
            redirect('PerfilPassageiro.html')
        }
    } else {
        console.log('teste')
        redirect('Cadastro.html')
    }
})

