
//function crearPersona(nombre,apellido){
  //  return {nombre,apellido}
//}
const crearPersona=(nombre,apellido)=>({nombre,apellido});



const persona=crearPersona('Noelia','Argote');
console.log(persona);



function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2=(edad,...args) =>{
    //console.log({edad,args});
    return args;
}




const [casado, vivo,nombre,saludo]= imprimeArgumentos2(10, true, false, 'Noelia', 'Hola');
console.log({casado,vivo,nombre,saludo});

const {apellido: nuevoApellido}= crearPersona('Noelia','Argote');
console.log(nuevoApellido); //undefined


const tony={
    nombre:'Tony Stark',
    codeName:'Ironman',
    vivo: false,
    //edad:40,
    trajes:['Mark I','Mark V','Hulkbuster'],
};

//const imprimePropiedades=(personaje)=>{
    //console.log('nombre',personaje.nombre); //Tony Stark
    //console.log('codeName',personaje.codeName); //Ironman
    //console.log('vivo',personaje.vivo); //false
    //console.log('edad',personaje.edad); //40
    //console.log('trajes',personaje.trajes); //['Mark I','Mark V','Hulkbuster']

     //Hulkbuster
//}

const imprimePropiedades=({nombre,codeName,vivo,edad=15,trajes})=>{
    console.log({nombre}); //Tony Stark
    console.log({codeName}); //Ironman
    console.log({vivo}); //false
    console.log({edad}); //40
    console.log({trajes}); //['Mark I','Mark V','Hulkbuster']
     
}

imprimePropiedades(tony);