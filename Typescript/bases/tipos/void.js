"use strict";
(() => {
    //funcion tradicional
    function callBatman() {
        return;
    }
    //funcion de flecha
    //null no es lo mismo que void
    const callSuperman = () => {
    };
    const a = callBatman();
    //void significa que esta vacio
    // la letra(a) si mantenemos el cursor sobre la(a) sale void
    console.log(a); // si es ejecutado sale undefined
})();
