import { getHeroeById } from "./bases/08-imp-exp";


// const promesa=new Promise((resolve, reject)=>{


//     setTimeout(()=>{
        //TAREA
        //Importen el 
        // const p1= getHeroeById(2);
        // console.log(heroe)
    //    resolve(p1);
    // reject(p1);
    // reject('no se pudo encontrar al heroe');

//     }, 2000)

// });

// promesa.then((heroe)=>{
//     console.log('heroe', heroe)
// })
// .catch(err=> console.warn(err));





const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve, reject)=>{


    setTimeout(()=>{
        //TAREA
        //Importen el 
        const p1= getHeroeById(id);
        if(p1){
            resolve(p1);
        }else{
            reject('No se pudo encontrar el heroe');
        }
        // console.log(heroe)
    //    resolve(p1);
    // reject(p1);
    // reject('no se pudo encontrar al heroe');

    }, 2000)

});

}

 getHeroeByIdAsync(1)
//  .then( heroe=> console.log('Heroe', heroe))
.then(console.log)
//  .catch(err=> console.warn(err))
.catch(console.warn)



































