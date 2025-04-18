
let a=5;


if(a>=10){
    console.log('a es mayor o igual  que 10');
} else{
    console.log('a es menor que 10');
}

//console.log('Fin del programa'); //Fin del programa

const hoy =new Date(); //2023-10-05T16:00:00.000Z
let dia= hoy.getDate(); //5
console.log({dia}); //{dia:5}

if (dia===0){
    console.log('Hoy es viernes');
} else if (dia===1){
    console.log('Hoy es lunes');

//if (dia===1){
//    console.log('Hoy es lunes');
//} else{
//    console.log('Hoy no es lunes');}

} else if (dia===2){
    console.log('Hoy es martes');
} else {
    console.log('no es lunes, martes o viernes');
}

// Sin usar If Else, o Switch, unicamente usando objetos
dia-6;
const diasLetras={
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado'
}

const diasLetras2=['domingo','lunes','martes','miercoles','jueves','viernes','sabado'
]
// dia de la semana
console.log(diasLetras2[dia]); //sabado

