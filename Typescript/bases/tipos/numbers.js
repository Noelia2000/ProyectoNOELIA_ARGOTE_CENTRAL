"use strict";
//funcion anonima autoinvocada para ejecudar codigo de forma aisladada
(() => {
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A'); // Si nosotros  colocamos 55Acon una letra nos sale Nan
    // el NaN es considerado un numero en JavaScript
    //pero nos puede conllevar a otro tipo de errores 
    console.log({ avengers });
})();
//# sourceMappingURL=numbers.js.map