"use strict";
(() => {
    //para recibir dos tipos de datos (string| boolean)
    const fullName = (firstName, lastName) => {
        // el simbolo de interrogacion  le dice a TypeScript puede q venga un solo valor o dos 
        return `${firstName} ${lastName || 'no lastname'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map