

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

const soyUndefined=undefined;
const soyNull=null;
const soyFalso=false;

const a1=false && 'Hola Mundo' && 150;
const a2='Hola' && 'Mundo' && soyFalso && true; //false
const a3= soyFalso || 'Ya no soy falso'; //Ya no soy falso
const a4= soyFalso || soyUndefined || soyNull || 'Ya no soy falso'|| true; //Ya no soy falso
const a5= soyFalso || soyUndefined || regresaTrue || 'Ya no soy falso'|| true; //Ya no soy falso

console.log({a1,a2,a3,a4, a5 }); //Hola Mundo


if (regresaFalse()&& regresaTrue()&& (true|| false || true)){
    console.log('hacer algo '); 
}else{
    console.log('hacer otra cosa  '); }
