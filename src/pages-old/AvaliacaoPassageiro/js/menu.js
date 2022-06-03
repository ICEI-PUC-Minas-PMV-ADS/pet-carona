
const botaoMenu = document.getElementById('botaoMenu')
const menu = document.getElementById('menu')

var openClose = false

//esconder e mostrar o menu
botaoMenu.addEventListener('click' , () => {
    openClose = !openClose
    if(openClose === true){
      menu.style.visibility = 'visible'
    } else {
       menu.style.visibility = "hidden"
       }

})
