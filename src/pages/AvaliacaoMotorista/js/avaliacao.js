// Futuro banco de dados

var listaPerfil = [
  {
      nome : "Igor",
      
  },
  {
      nome : "Edilson",
      
  },
  {
      nome : "Mauro",
      
  }
];

// renderização da lista de perfis 

var renderPerfis = listaPerfil.map(function(perfil){
  return `
    <div class="cardPerfil">
      <img class="historicoImage" src="./../../../public/perfil1.png" alt="foto do perfil"/>
      <span class="avaliacaoPerfil">
        <p>${perfil.nome}</p>
        <span>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="estrelaUmCor" d="M11 0L13.4697 7.9463H21.4616L14.996 12.8574L17.4656 20.8037L11 15.8926L4.53436 20.8037L7.00402 12.8574L0.538379 7.9463H8.53035L11 0Z" fill="#C4C4C4"/>
          </svg>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="estrelaDoisCor" d="M11 0L13.4697 7.9463H21.4616L14.996 12.8574L17.4656 20.8037L11 15.8926L4.53436 20.8037L7.00402 12.8574L0.538379 7.9463H8.53035L11 0Z" fill="#C4C4C4"/>
          </svg>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="estrelaTresCor" d="M11 0L13.4697 7.9463H21.4616L14.996 12.8574L17.4656 20.8037L11 15.8926L4.53436 20.8037L7.00402 12.8574L0.538379 7.9463H8.53035L11 0Z" fill="#C4C4C4"/>
          </svg>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="estrelaQuatroCor" d="M11 0L13.4697 7.9463H21.4616L14.996 12.8574L17.4656 20.8037L11 15.8926L4.53436 20.8037L7.00402 12.8574L0.538379 7.9463H8.53035L11 0Z" fill="#C4C4C4"/>
          </svg>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="estrelaCincoCor" d="M11 0L13.4697 7.9463H21.4616L14.996 12.8574L17.4656 20.8037L11 15.8926L4.53436 20.8037L7.00402 12.8574L0.538379 7.9463H8.53035L11 0Z" fill="#C4C4C4"/>
          </svg>
        </span>
        <button id="botaoEnviar" class="botaoEnviar">Enviar</button>
      </span>
    </div>
    `;
});

document.getElementById("render").innerHTML = renderPerfis.join("");

// Estrelas do forEach

const estrelaUm = document.querySelectorAll('#estrelaUmCor');
const estrelaDois = document.querySelectorAll('#estrelaDoisCor');
const estrelaTres = document.querySelectorAll('#estrelaTresCor');
const estrelaQuatro = document.querySelectorAll('#estrelaQuatroCor');
const estrelaCinco = document.querySelectorAll('#estrelaCincoCor');

var nota = 0

estrelaUm.forEach(function(estrela){
  estrela.addEventListener('click' , () => {
    estrela.style.fill = '#FFB803';
 
    nota = 1
    console.log(nota)
  })
})
estrelaDois.forEach(function(estrela){
  estrela.addEventListener('click' , () => {
    estrela.style.fill = '#FFB803';

    nota = 2
    console.log(nota)
  })
})
estrelaTres.forEach(function(estrela){
  estrela.addEventListener('click' , () => {
    estrela.style.fill = '#FFB803';

    nota = 3
    console.log(nota)
  })
})
estrelaQuatro.forEach(function(estrela){
  estrela.addEventListener('click' , () => {
    estrela.style.fill = '#FFB803';

    nota = 4
    console.log(nota)
  })
})
estrelaCinco.forEach(function(estrela){
  estrela.addEventListener('click' , () => {
    estrela.style.fill = '#FFB803';

    nota = 5
    console.log(nota)
  })
})




// valor da avaliação

export default nota = 0

// link pra outra página

const botaoVoltar = document.getElementById('botaoVoltar');

botaoVoltar.addEventListener('click' , () => {
    window.location.href = 'http://127.0.0.1:5500/src/pages/AvaliacaoMotorista/index.html'
})

// Enviar avaliação

const botaoEnviar = document.getElementById('botaoEnviar');

botaoVoltar.addEventListener('click' , () => {
   //futuro post
})

