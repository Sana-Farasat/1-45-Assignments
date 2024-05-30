//Guest List
let guestList=['Sadiya','Sameera','Komal'];

//Guest Who Can't Come
let guestWhoCannotCome='Sadiya';

 console.log(`${guestWhoCannotCome} cannot come due to have some personal meeting.`);

 //Added New Guest In Our List
 guestList.splice(0,1,'Fariha');

//Printing Invitation To New Guest List
 guestList.forEach(guest => console.log(`${guest}, would you like to have dinner with me?`));