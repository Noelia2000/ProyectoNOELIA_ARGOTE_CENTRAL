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
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melisa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map