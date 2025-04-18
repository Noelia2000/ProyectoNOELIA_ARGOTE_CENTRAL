function saluar(nombre) {
    console.log(arguments);
    console.log('Hola '+nombre);
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
saluar('Noelia',40,true,'CostaRica');
//saludar2('Noelia');
saludarFlecha();
saludarFlecha2('Ana');

