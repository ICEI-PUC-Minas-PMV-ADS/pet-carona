const buttonLogin = document.getElementById('buttonLogin')

function redirect(url){
    window.location.href = url;
}
buttonLogin.addEventListener('click',(e) =>{
    e.preventDefault();
    redirect('http://127.0.0.1:5500/src/pages/Autenticacao/index.html')
} )