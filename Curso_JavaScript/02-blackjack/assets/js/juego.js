

(()=>{
'use strict'; // modo estricto de javascript



let deck = [];

const tipos = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores=[];

//Referencias HTML
const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');


const divCartasJugador = document.querySelector('#jugador-cartas'),
      divCartasComputadora = document.querySelector('#computadora-cartas'),
      puntosHTML= document.querySelectorAll('small');

// esta funcion inicializa el juego
const inicializarJuego=(numJugadores=2)=>{
   deck= crearDeck();
  for (let i=0; i<numJugadores; i++){
    puntosJugadores.push(0);
  }
  console.log({puntosJugadores});

}
// esta funcion crea una nueva baraja
const crearDeck = () => {

    deck = []; // reinicia la baraja

for(let i=2; i<=10; i++){
    for( let tipo of tipos){
    deck.push(i + tipo);
}
}

for (let tipo of tipos){
    for(let esp of especiales){
        deck.push(esp + tipo);
    }
}



return _.shuffle(deck);;
}


// esta funcion me permite tomar una carta 
const pedirCarta= () => {


    if(deck.length === 0){
        throw 'No hay cartas en la baraja';
    }

    return deck.pop(); // saca la ultima carta de la baraja
}
   

//pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1); // 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
    return (isNaN(valor)) ? 
    (valor === 'A') ? 11 : 10 
    : valor * 1; // si es un numero lo multiplica por 1, si es una letra lo convierte en numero
}




const acumularPuntos = (carta, turno) => {




}


// turno de la computadora
const turnoComputadora = (puntosMinimos) => {
do {
    
const carta = pedirCarta();

puntosComputadora= puntosComputadora + valorCarta(carta);
puntosHTML[1].innerText = puntosComputadora; // actualiza el puntaje del jugador

//<img class="carta" src="assets/cartas/2C.png">
const  imgCarta = document.createElement('img');
imgCarta.src = `assets/cartas/${carta}.png`; // 2C.png
imgCarta.classList.add('carta'); // le agrega la clase carta

divCartasComputadora.append(imgCarta);

if (puntosMinimos > 21) {
    break; // si el puntaje de la computadora es mayor a 21, se detiene el juego
}

}while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );


setTimeout(() => {






if (puntosComputadora === puntosMinimos) {
    alert('Nadie gana, es un empate');


}else if (puntosMinimos > 21) {
    alert('Perdiste, la computadora gana')
}else if (puntosComputadora > 21) {
    alert('Ganaste, la computadora pierde');
}else{
    alert('La computadora gana');
}
},10);
}
 


//Eventos
btnPedir.addEventListener('click', () => {

const carta = pedirCarta();

puntosJugador= puntosJugador + valorCarta(carta);
puntosHTML[0].innerText = puntosJugador; // actualiza el puntaje del jugador

//<img class="carta" src="assets/cartas/2C.png">
const  imgCarta = document.createElement('img');
imgCarta.src = `assets/cartas/${carta}.png`; // 2C.png
imgCarta.classList.add('carta'); // le agrega la clase carta

divCartasJugador.append(imgCarta);


if (puntosJugador > 21) {
    console.warn('Perdiste');
    btnPedir.disabled = true; // desactiva el boton de pedir carta
    btnDetener.disabled = true; // desactiva el boton de detener carta
turnoComputadora(puntosJugador); // llama a la funcion turnoComputadora
}
else if (puntosJugador === 21) {
    console.warn('Ganaste');
    btnPedir.disabled = true; // desactiva el boton de pedir carta
    btnDetener.disabled = true; // desactiva el boton de detener carta
    turnoComputadora(puntosJugador); // llama a la funcion turnoComputadora
}
});


btnDetener.addEventListener('click', () => {
btnPedir.disabled = true; // desactiva el boton de pedir carta
btnDetener.disabled = true; // desactiva el boton de detener carta


turnoComputadora(puntosJugador); // llama a la funcion turnoComputadora

});

btnNuevo.addEventListener('click', () => {


console.clear(); // limpia la consola
inicializarJuego(); // inicializa el juego
//deck = []; // reinicia la baraja
//deck= crearDeck(); // crea una nueva baraja


puntosJugador = 0;
puntosComputadora = 0;

puntosHTML[0].innerText = 0; // actualiza el puntaje del jugador
puntosHTML[1].innerText= 0; // actualiza el puntaje de la computadora

divCartasComputadora.innerHTML = ''; // limpia las cartas de la computadora
divCartasJugador.innerHTML = ''; // limpia las cartas del jugador

btnPedir.disabled = false; // activa el boton de pedir carta
btnDetener.disabled = false; // activa el boton de detener carta    
});


})();







