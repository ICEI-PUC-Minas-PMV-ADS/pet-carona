const buttonAuth   = document.getElementById('botao-autentificacao');


function redirect(url){
    window.location.href = url;
}

if(buttonAuth.innerHTML.includes('ENTRAR')){
    buttonAuth.addEventListener('click',(e) => {
        e.preventDefault();
        console.log('porra');
        redirect("http://127.0.0.1:5500/src/pages/Cadastro");
    })
}else{
    buttonAuth.addEventListener('click',(e) => {
        redirect("http://127.0.0.1:5500/src/pages/Cadastro");
        console.log('porra');
    })
}

// mostrar e esconder
