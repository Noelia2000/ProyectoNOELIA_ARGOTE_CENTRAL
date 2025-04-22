

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


const divCartasJugadores= document.querySelectorAll('.divCartas'),
      puntosHTML= document.querySelectorAll('small');

// esta funcion inicializa el juego
const inicializarJuego=(numJugadores=2)=>{
   deck= crearDeck();
  for (let i=0; i<numJugadores; i++){
    puntosJugadores.push(0);
  }
 

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



// turno: 0 = primer jugador y el ultimo sera la computadora
const acumularPuntos = (carta,turno) => {


    puntosJugadores[turno]= puntosJugadores[turno]+ valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno]; // actualiza el puntaje del jugador
    return puntosJugadores[turno]; // retorna el puntaje del jugador

}



const crearCarta=(carta, turno) =>{
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; // 2C.png
    imgCarta.classList.add('carta'); // le agrega la clase carta
    divCartasJugadores[turno].append(imgCarta); // agrega la carta al div correspondiente
  
}


// turno de la computadora
const turnoComputadora = (puntosMinimos) => {

    let puntosComputadora = 0;


do {
const carta = pedirCarta();
puntosComputadora=acumularPuntos(carta, puntosJugadores.length - 1); // acumula los puntos de la computadora
crearCarta(carta, puntosJugadores.length - 1); // crea la carta de la computadora

//<img class="carta" src="assets/cartas/2C.png">
//const  imgCarta = document.createElement('img');
//imgCarta.src = `assets/cartas/${carta}.png`; // 2C.png
//imgCarta.classList.add('carta'); // le agrega la clase carta
//divCartasComputadora.append(imgCarta);

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
const puntosJugador=acumularPuntos(carta, 0); // acumula los puntos del jugador


crearCarta(carta, 0); // crea la carta del jugador


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


//puntosJugador = 0;
//puntosComputadora = 0;

//puntosHTML[0].innerText = 0; // actualiza el puntaje del jugador
//puntosHTML[1].innerText= 0; // actualiza el puntaje de la computadora
//
//divCartasComputadora.innerHTML = ''; // limpia las cartas de la computadora
//divCartasJugador.innerHTML = ''; // limpia las cartas del jugador
//
//btnPedir.disabled = false; // activa el boton de pedir carta
//btnDetener.disabled = false; // activa el boton de detener carta   



});


})();







