"use strict";
(() => {
    // operador rest que son'...'
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join('')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'kent');
    console.log({ superman });
})();
