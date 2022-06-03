const botaoEntrar = document.getElementById('botao-entrar')

function redirect(url){
    window.location.href = url;
}


botaoEntrar.addEventListener('click', () => {
    redirect('http://127.0.0.1:5500/src/pages/Autentificacao')
})