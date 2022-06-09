const LOGIN_URL = 'Autenticacao.html';
if (!(sessionStorage.getItem('usuarioAtual'))) {
    window.location.href = LOGIN_URL;
}