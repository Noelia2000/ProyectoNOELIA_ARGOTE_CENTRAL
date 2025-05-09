import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 


    test('getHeroById debe de retornar un heroe por Id', () => { 

        const id= 1;
        const hero = getHeroeById(id);
        


        expect (hero).toEqual({id:1, name:'Batman', owner:'DC'});

        console.log(hero)
     });

     test('getHeroById debe de retornar undefined si no existe Id', () => { 

        const id= 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy(); 

        console.log(hero)


        // expect (hero).toEqual({id:1, name:'Batman', owner:'DC'})

     });
     //!TAREA
     //debe de retornar  un arreglo con los heroes de DC
     //length===3 ---> evaluar de 3 elementos
     //evaluar el toEqual al arreglo filtrado a esos 3 heroes

     test('getHeroesByOwner', () => {

        const owner='DC';
        const ownerDC=getHeroesByOwner(owner);

        expect(ownerDC).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));


     });


     test('getHeroesByOwner', () => {

        const owner='DC';
        const ownerDC=getHeroesByOwner(owner);

        expect(ownerDC).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));


     });

     test('getHeroesByOwner', () => {

        const owner='Marvel';
        const ownerMarvel=getHeroesByOwner(owner);

        expect(ownerMarvel).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));


     });



     //debe de retornar un arreglo con los heroes de marvel
     //length === 2





     
     
     
     


 });