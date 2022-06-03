/**
 * Constantes
 */
const buttonAuth   = document.getElementById('botao-autentificacao');

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
        redirect("http://127.0.0.1:5500/src/pages/Cadastro");
    })
}else{
    buttonAuth.addEventListener('click',(e) => {
        redirect("http://127.0.0.1:5500/src/pages/Cadastro");
    })
}

