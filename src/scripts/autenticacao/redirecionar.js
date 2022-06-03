/**
 * Constantes
 */
const buttonAuth   = document.getElementById('botao-autentificacao');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');
/**
 * Funcao dinamica para redirecionar a url
 */
function redirect(url){
    window.location.href = url;
}



/**
 * Condicao para definir a url de acordo com o modo do form
 */
if(buttonAuth.innerHTML.includes('ENTRAR')){
    buttonAuth.addEventListener('click',(e) => {
        e.preventDefault();
        if (emailInput.value === 'teste@gmail.com' && passwordInput.value === 'teste') {
            redirect('/src/pages/PerfilPassageiro.html')
        }
        // redirect("http://127.0.0.1:5500/src/pages/Cadastro");
    })
}else{
    buttonAuth.addEventListener('click',(e) => {
        redirect('/src/pages/Cadastro.html');
    })
}

