(()=>{

//?las clases abstract sirven para crear otras clases o asegurarse de que otras clases implementen 
//? lo que uno espera 
abstract class Mutante{
    constructor(
        public name:string,
        public realName: string
    ){}
}

class Xmen extends Mutante{
    salvarMundo(){
        return'Mundo a salvo!';
    }
}
class Villian extends Mutante{
    conquistarMundo(){
        return'Mundo Conquistado';
    }
}


const wolverine = new Xmen ('Wolverine','Logan');
const magneto = new Villian ('Mageto','Magnus');

// console.log(wolverine.salvarMundo());
// console.log(magneto.conquistarMundo());
const printName= (character: Mutante)=>{
console.log(character.realName);



}


// printName (wolverine);
})()

//? Una clase abstracta no sirve para crear instancias, sirve para crear otras clases
//?o que otras clases sen extendidas de ella 