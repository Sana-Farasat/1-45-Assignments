//Guest List
let guestList=['Sadiya','Sameera','Komal'];

//Guest Who Can't Come
let guestWhoCannotCome='Sadiya';

 console.log(`${guestWhoCannotCome} cannot come due to have some personal meeting.`);

 //Added New Guest In Our List
 guestList.splice(0,1,'Fariha');

//Printing Invitation To New Guest List
 guestList.forEach(guest => console.log(`${guest}, would you like to have dinner with me?`));

 //Printing Statement
 console.log("Good News! We have found a bigger dinner table.");

 //Adding a Guest at the Beginning of an Array
 guestList.unshift('Sana');

//Adding a Guest in the Middle of an Array
let arrayLength = guestList.length
console.log(arrayLength/2)
guestList.splice(2,0,'Hina');

//Adding a Guest at the End of an Array
guestList.push('Areesha');

//Printing New Set of Array
guestList.forEach(guest => console.log(`${guest}, would you like to dinner with me?`));