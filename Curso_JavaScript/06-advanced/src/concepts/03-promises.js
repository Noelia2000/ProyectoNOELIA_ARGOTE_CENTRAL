import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent =(element)=>{

    const renderHero=(hero)=>{
        element.innerHTML=hero.name;
    }
const renderTwoHeroes=(hero1,hero2)=>{
    element.innerHTML=`
    <h3> ${hero1.name}</h3>
    <h3> ${hero2.name}</h3>
    `;
}




    const renderError=(error)=>{
        element.innerHTML= `
        <h1>Error:</h1>
        <h3>${error}</h3>`
    }



    const id1='5d86371f9f80b591f499df32';
    const id2='5d86371f233c9f2425f16916';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1,hero2])=> renderTwoHeroes(hero1, hero2))
    .catch(renderError);




    //!FORMA2
    //let hero1;
    // findHero(id1)
    // .then (hero=>{
    //     hero1=hero;
    //     return findHero(id2);

    // }).then (hero2=>{
    //     renderTwoHeroes(hero1,hero2);
    // })
    // .catch (renderError);

//!FORMA1
    // findHero(id1)
    // .then((hero1)=>{

       

    // findHero(id2)
    // .then(hero2=>{
    //     renderTwoHeroes(hero1,hero2)

    // })

    // .catch (renderError);


    // })
    // .catch(renderError);


}
/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero=(id)=>{
return new Promise((resolver, reject)=>{

    const hero = heroes.find(hero=> hero.id=== id);

    if (hero){
        resolver(hero);
        return;
    }

    reject(`Hero with id ${id}not found`);
});

    



}