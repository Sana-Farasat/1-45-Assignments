//Creating An Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using For Loop
//1st Version With Variable
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalNumber = void 0;
    if (oneNumber === 1) {
        ordinalNumber = 'st';
    }
    else if (oneNumber === 2) {
        ordinalNumber = 'nd';
    }
    else if (oneNumber === 3) {
        ordinalNumber = 'rd';
    }
    else {
        ordinalNumber = 'th';
    }
    console.log("".concat(oneNumber).concat(ordinalNumber));
}
;
//2nd Version Without Variable
for (var _a = 0, numbers_2 = numbers; _a < numbers_2.length; _a++) {
    var oneNumber = numbers_2[_a];
    if (oneNumber === 1) {
        console.log(oneNumber + 'st');
    }
    else if (oneNumber === 2) {
        console.log(oneNumber + 'nd');
    }
    else if (oneNumber === 3) {
        console.log(oneNumber + 'rd');
    }
    else {
        console.log(oneNumber + 'th');
    }
}
;
