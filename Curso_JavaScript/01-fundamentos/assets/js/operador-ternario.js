


const dia=1;
const horaActual=10; //10 am


let horaApertura;
let mensaje; // 'El restaurante está cerrado'


//if (dia===0 || dia===6){
//if([0,6].includes(dia)){
   //console.log('Fin de semana');
   //horaApertura=9;
//} else{
    //console.log('Día de semana');
    //horaApertura=11;
//}

horaApertura=( [0,6].includes(dia)) ? 9 : 11; //9 am o 11 am


//if (horaActual>=horaApertura){
    mensaje='El restaurante está abierto';
//}else{
  //  mensaje=`El restaurante está cerrado, hoy abrimos a las ${horaApertura}`;
//}

mensaje=(horaActual>=horaApertura) ? 'El restaurante está abierto' : `El restaurante está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje}); //{horaApertura:9}