
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

