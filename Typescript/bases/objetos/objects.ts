(()=>{
//?Objetos con tipos especificos
    let flash:{name:string,age?:number,powers:string[], getName?:()=>string} ={
        name: 'Barry Allen',
        age:24,
        powers: ['Super velcidad', 'Viajar en el tiempo']
    }

    flash ={
        name:'Clark Kent',
        powers:['Super fuerza'],

        getName(){

       return this.name;
    }
}

    // flash = {
    //     name: 'Clark Kent',
    //     age:60,
    //     powers: ['Super fuerza'],
    //     getNombre(){

    //         return this.name;

    //     }
    // }

    console.log(flash.getName())


})()



