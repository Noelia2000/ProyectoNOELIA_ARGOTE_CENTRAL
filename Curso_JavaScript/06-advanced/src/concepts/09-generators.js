

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent =(element)=>{

const myGenerator = myFirstGeneratorFuncion();

console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());


}

function* myFirstGeneratorFuncion(){

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
    yield 'ya no pueden hacer nada';

}