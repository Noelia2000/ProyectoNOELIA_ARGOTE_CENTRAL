
let a=10;
let b=a;
a=30;

console.log({a,b}); //10,10


let juan={nombre:'Juan'};
let ana = {...juan};
ana.nombre='Ana';


console.log({juan,ana}); //{nombre:'Juan'},{nombre:'Juan'}

const cambiaNombre=({...persona})=>{
    persona.nombre='Tony';
    return persona;
}

let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter); //{nombre:'Tony'}
console.log({peter,tony}); //{nombre:'Tony'},{nombre:'Tony'}

// arreglos

const frutas=['Manzana','Pera','Piña'];

console.time('slice');
const otrasFrutas=frutas.slice(); //['Manzana','Pera','Piña']
console.timeEnd('slice'); //slice: 0.1ms


console.time('spread');
const otrasFrutas2=[...frutas]; 
console.timeEnd('spread'); 

otrasFrutas.push('Mango'); //['Manzana','Pera','Piña','Mango']

console.table({frutas,otrasFrutas}); //{frutas:['Manzana','Pera','Piña','Mango']},{otrasFrutas:['Manzana','Pera','Piña','Mango']}