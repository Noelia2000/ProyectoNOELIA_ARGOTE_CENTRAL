function saluar(nombre) {
    //console.log(arguments);
    //console.log('Hola '+nombre);
return [1,2];
//esto nunca se va a ejecutar
console.log('Soy un codigo que esta despues de un return');

}
const saludar2 = function (nombre) {
  console.log('Hola'+nombre);
}


const saludarFlecha=()=>{
    console.log('Hola flecha');
}
const saludarFlecha2=(nombre)=>{
    console.log('Hola '+nombre);
}

const retornoDeDaludar= saluar('Noelia',40,true,'CostaRica');

//saludar2('Noelia');
//saludarFlecha();
//saludarFlecha2('Ana');

function sumar(a,b){
    return a+b;
}

//const sumar2=(a,b)=>{
    //return a+b;
//}

const sumar2=(a,b)=>a+b; //return implicito



function getAleatorio(){
    return Math.random();
} 

// en una funcion de flecha, que no tenga llaves{
//getAleatorio2()

const getAleatorio2=()=>Math.random(); //return implicito



console.log(getAleatorio()); 