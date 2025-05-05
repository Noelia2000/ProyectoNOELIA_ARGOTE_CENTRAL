"use strict";
var Validtions;
(function (Validtions) {
    Validtions.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validtions.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };
})(Validtions || (Validtions = {}));
console.log(Validtions.validateText('Noelia'));
//# sourceMappingURL=main.js.map