/**
 * Constantes
 */
const buttonAuth   = document.getElementById('botao-autentificacao');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');
// const nameInput = document.getElementById('nome');
/**
 * Funcao dinamica para redirecionar a url
 */
function redirect(url){
    window.location.href = url;
}

/**
 * Condicao para definir a url de acordo com o modo do form
 */
if(buttonAuth.innerHTML.includes('ENTRAR')) {
    buttonAuth.addEventListener('click',(e) => {
        e.preventDefault();
        if (emailInput.value === 'teste@gmail.com' && passwordInput.value === 'teste') {
            redirect('PerfilPassageiro.html')
        }
    })
} 
// else {
//     buttonAuth.addEventListener('click',(e) => {
//         if (emailInput.value && passwordInput.value) {
//             redirect('Cadastro.html')
//         }
//     })
// }

