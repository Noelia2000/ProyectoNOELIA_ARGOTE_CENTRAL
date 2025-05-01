"use strict";
(() => {
    //never no es undefined
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    //el never significa que mi funcion no debe tener un punto final alcanzable- no debe terminar exitosamente
    error('Auxilio!');
})();
// never es una funion que va a terminar con un error
//# sourceMappingURL=never.js.map