const nameInput             = document.getElementById('nome-input');

const containerCadastro     = document.getElementById('container-cadastar');
const containerEntrar       = document.getElementById('container-entrar');

const linkCadastrar        = document.getElementById('link-cadastrar');
const linkEntrar           = document.getElementById('link-entrar');

const botaoAutentificacao   = document.getElementById('botao-autentificacao');

containerEntrar.style.display = 'none'
nameInput.style.display = 'none'

botaoAutentificacao.innerHTML = 'ENTRAR'

linkCadastrar.addEventListener('click' , () => {
    containerCadastro.style.display = 'none'
    nameInput.style.display = 'flex'
    containerEntrar.style.display = 'flex'
    botaoAutentificacao.innerHTML = 'CADASTRAR'
})

linkEntrar.addEventListener('click' , () => {
    containerEntrar.style.display = 'none'
    nameInput.style.display = 'none'
    containerCadastro.style.display = 'flex'
    botaoAutentificacao.innerHTML = 'ENTRAR'
})



