//Declaring Variables
let fruit= 'mango';
let upperCaseFruit= 'MANGO';
let fifty= 50;
let hundred= 100;
let fruits= ['apple','mango','banana','melon','grapes'];

//Test for Equality and Inequality with Strings
console.log('Is fruit equal to mango?');
console.log(fruit == 'mango');

console.log('\n Is fruit equal to apple?');
console.log(fruit == 'apple');

//Test using Lower Case
console.log('\n Is fruit equal to mango after converting in lower case');
console.log(upperCaseFruit.toLowerCase() == 'mango');

console.log('\n Is fruit not equal to mango after converting in lower case');
console.log(upperCaseFruit.toLowerCase() != 'mango');

// Numerical Tests
//Equal to
console.log('\n Is fifty equal to hundred?');
console.log(fifty == hundred);

//Not Equal to
console.log('\n Is fifty not equal to hundred?');
console.log(fifty != hundred);

//Greater than
console.log('\n Is fifty is greater than thirty?');
console.log(fifty > 30);

//Less than
console.log('\n Is fifty is less than thirty?');
console.log(fifty < 30);

//Greater than or Equal to
console.log('\n Is fifty is greater than or equal to ten?');
console.log(fifty >= 10);

//Less than or Equal to
console.log('\n Is fifty less than r equal to ten?');
console.log(fifty <= 10);

//Test using '&' and '||' operators
//Using && operator
console.log('\n fifty is not equal to ten and fifty is greater than 10');
console.log(fifty != 10 && fifty > 10);

console.log('\n fifty is not equal to ten and fifty is greater than 100');
console.log(fifty != 10 && fifty > 100);

//Using || operator
console.log('\n fifty is not equal to ten or fifty is less than 100');
console.log(fifty != 10 || fifty < 100);

console.log('\n fifty is equal to ten or fifty is less than 100');
console.log(fifty == 10 || fifty < 100);

//Test whether an item is include in Array
//Include
console.log('\n Is banana include in my fruits array?');
console.log(fruits.includes('banana'));

//Not include
console.log('\n Is banana not include in my fruits array?');
console.log(!fruits.includes('banana'));






