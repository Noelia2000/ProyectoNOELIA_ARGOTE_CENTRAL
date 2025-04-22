

const fher= {
    nombre: 'Fernando',
    edad: 30,
    imprimir (){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);

    }
}

const pedro={
    nombre: 'Pedro',
    edad: 25,
    imprimir (){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);

    }
    
}
 //fher.imprimir();

// ok esto se puede crear con la palabra new
 function Persona(nombre, edad){

    console.log('Se ejecutó esta línea');
    
    this.nombre= nombre;
    this.edad= edad;

    this.imprimir= function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
    

 }

 const maria= new Persona('Maria', 20);
 const melissa = new Persona('Melissa', 25);
 console.log(maria); //undefined

 maria.imprimir(); //undefined
 melissa.imprimir(); //undefined
//console.log(maria.imprimir()); //undefined