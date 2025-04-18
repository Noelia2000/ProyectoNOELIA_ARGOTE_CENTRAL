

const regresaTrue=()=>{
    console.log('Regresa true');
    return true;
}

const regresaFalse=()=>{
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion' );
console.log(true); //true
console.log(!true); //false
console.log(!false); //true


console.log(!regresaFalse()); //Regresa false, false 

console.warn('And'); 
console.log(true && true); //true
console.log(true && !false); //true


console.log('=========');
console.log( regresaFalse()&& regresaTrue()); //Regresa false, Regresa true, false
console.log( regresaTrue()&& regresaFalse()); //Regresa true, Regresa false, false


console.log('====&&=====');
 regresaFalse()&& regresaTrue(); //Regresa false, Regresa true, false
console.log('4 condiciones' ,true && true && true && false); //false

 console.warn('Or');
 console.log(true || false); 
 console.log(false || false);

 console.log(regresaTrue() || regresaFalse()); //Regresa true, Regresa false, true

console.log('4 condiciones' ,true || true || true || false); //false
console.warn('Asignaciones');