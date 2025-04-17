
let personaje={
    nombre:'Tony Stark',
    codeName:'Ironman',
    vivo: false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes:[
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ],
    direccion:{
        zip:'10880, 90265',
        ubicacion:'Malibu, California'
    },
    'ultima-pelicula':'Infinity War',




};
console.log(personaje);
console.log('Nombre',personaje.nombre); //Tony Stark
console.log('Nombre',personaje['nombre']); 
console.log('Edad',personaje.edad); //40
console.log('Coordenadas',personaje.coords); //{lat:34.034,lng:-118.70}
console.log('Latitud',personaje.coords.lat); //34.034

console.log('No.Trajes',personaje.trajes.length); //3


console.log('Ultimo Traje',personaje.trajes[personaje.trajes.length-1]); //Hulkbuster

const x ='vivo';
console.log('Vivo',personaje[x]); //false
console.log('Ultima Pelicula',personaje['ultima-pelicula']); //Infinity War
