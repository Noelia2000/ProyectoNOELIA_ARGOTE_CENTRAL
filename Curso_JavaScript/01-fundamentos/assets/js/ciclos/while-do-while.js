

const carros =['Ford','Chevrolet','Fiat','Volkswagen','Toyota','Honda','Nissan','Hyundai','Kia','Peugeot'];

let i = 0;

//while(i<carros.length){
    //console.log(carros[i]);
    //i++;
//}
console.warn('While');
// undefined
// null
// false

while ( carros[i] ){
   if (i ===1){
   // break; //salir del ciclo
   i++; //incrementar el contador
continue; //saltar la iteracion
   }

   console.log(carros[i]);
   i++;
}



console.warn('Do While');
let j=0;
do{
    console.log(carros[j]);
    j++;

} while(carros[j]);