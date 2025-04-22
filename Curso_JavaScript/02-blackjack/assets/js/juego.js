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

    console.log(deck);
    console.log(carta);// carta deb ser de la baraja
    return carta;
}
   

//pedirCarta();

