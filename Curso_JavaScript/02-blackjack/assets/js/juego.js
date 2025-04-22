/**
 * 2C= Two of Clubs
 * 2D= Two of Diaminds
 * 2H= Two of Hearts
 * 2S= Two of spades 
 * 
 */


let deck = [];

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
    puntosComputadora = 0;


//Referencias HTML
const btnPedir = document.querySelector('#btnPedir');

const puntosHTML= document.querySelectorAll('small');

// esta funcion crea una nueva baraja
const crearDeck = () => {

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


//console.log(deck);
deck = _.shuffle(deck);
console.log(deck);
return deck;
}

crearDeck();

// esta funcion me permite tomar una carta 
const pedirCarta= () => {


    if(deck.length === 0){
        throw new Error('No hay cartas en la baraja');
    }

    const carta = deck.pop(); // saca la ultima carta de la baraja

    //console.log(deck);
    ///console.log(carta);// carta debe ser de la baraja
    return carta;
}
   

//pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1); // 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
    return (isNaN(valor)) ? 
    (valor === 'A') ? 11 : 10 
    : valor * 1; // si es un numero lo multiplica por 1, si es una letra lo convierte en numero
}
//const valor = valorCarta(pedirCarta());
//console.log({valor});

    //let puntos = 0;
    //console.log({valor});
    // 2=2  10=10  3=3
// 
    // if (isNaN(valor)){
// 
        // puntos=(valor ==='A')? 11:10;
            //  
// }else{
//    
    // puntos= valor*1;
// }
// console.log(puntos);
 


//Eventos
btnPedir.addEventListener('click', () => {

const carta = pedirCarta();

puntosJugador= puntosJugador + valorCarta(carta);
puntosHTML[0].innerText = puntosJugador; // actualiza el puntaje del jugador




});