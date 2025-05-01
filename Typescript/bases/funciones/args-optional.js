"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastname'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map