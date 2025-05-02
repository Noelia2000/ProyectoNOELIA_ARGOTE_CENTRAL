"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    const client = {
        name: 'Noelia',
        age: 24,
        adress: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        }
    };
    const client2 = {
        name: 'Melisa',
        age: 30,
        adress: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        }
    };
})();
//# sourceMappingURL=main.js.map