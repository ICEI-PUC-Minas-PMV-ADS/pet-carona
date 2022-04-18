const divForm       =       document.getElementById('form-login')
const buttonLogin   =       document.querySelector('.button-login')

divForm.style.visibility = 'hidden'

buttonLogin.addEventListener("click", (e) => {
    divForm.style.visibility = 'visible'
    buttonLogin.style.visibility = 'hidden'
})