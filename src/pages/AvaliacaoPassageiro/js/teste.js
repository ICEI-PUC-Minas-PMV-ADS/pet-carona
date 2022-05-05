
const estrelaUmCor = document.getElementById('estrelaUmCor');
const estrelaDoisCor = document.getElementById('estrelaDoisCor');
const estrelaTresCor = document.getElementById('estrelaTresCor');
const estrelaQuatroCor = document.getElementById('estrelaQuatroCor');
const estrelaCincoCor = document.getElementById('estrelaCincoCor');

estrelaUmCor.addEventListener('click' , async () => {
    estrelaUmCor.style.fill = '#FFB803';
    estrelaDoisCor.style.fill = '#C4C4C4';
    estrelaTresCor.style.fill = '#C4C4C4';
    estrelaQuatroCor.style.fill = '#C4C4C4';
    estrelaCincoCor.style.fill = '#C4C4C4';
    nota = 1
    console.log(nota)
})

estrelaDoisCor.addEventListener('click' , async () => {
    estrelaUmCor.style.fill = '#FFB803';
    estrelaDoisCor.style.fill = '#FFB803';
    estrelaTresCor.style.fill = '#C4C4C4';
    estrelaQuatroCor.style.fill = '#C4C4C4';
    estrelaCincoCor.style.fill = '#C4C4C4';
    nota = 2
    console.log(nota)
})

estrelaTresCor.addEventListener('click' , async () => {
    estrelaUmCor.style.fill = '#FFB803';
    estrelaDoisCor.style.fill = '#FFB803';
    estrelaTresCor.style.fill = '#FFB803';
    estrelaQuatroCor.style.fill = '#C4C4C4';
    estrelaCincoCor.style.fill = '#C4C4C4';
    nota = 3
    console.log(nota)
})

estrelaQuatroCor.addEventListener('click' , async () => {
    estrelaUmCor.style.fill = '#FFB803';
    estrelaDoisCor.style.fill = '#FFB803';
    estrelaTresCor.style.fill = '#FFB803';
    estrelaQuatroCor.style.fill = '#FFB803';
    estrelaCincoCor.style.fill = '#C4C4C4';
    nota = 4
    console.log(nota)
})

estrelaCincoCor.addEventListener('click' , async () => {
    estrelaUmCor.style.fill = '#FFB803';
    estrelaDoisCor.style.fill = '#FFB803';
    estrelaTresCor.style.fill = '#FFB803';
    estrelaQuatroCor.style.fill = '#FFB803';
    estrelaCincoCor.style.fill = '#FFB803';
    nota = 5
    console.log(nota)
})

export var nota = 0

// link pra outra página

const botaoVoltar = document.getElementById('botaoVoltar');

botaoVoltar.addEventListener('click' , () => {
    window.location.href = 'http://127.0.0.1:5500/src/pages/AvaliacaoMotorista/index.html'
})

// Enviar avaliação

const botaoEnviar = document.getElementById('botaoEnviar');

botaoVoltar.addEventListener('click' , () => {
   
})