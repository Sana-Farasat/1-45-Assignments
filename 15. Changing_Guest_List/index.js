//Guest List
var guestList = ['Sadiya', 'Sameera', 'Komal'];
//Guest Who Can't Come
var guestWhoCannotCome = 'Sadiya';
console.log("".concat(guestWhoCannotCome, " cannot come due to have some personal meeting."));
//Added New Guest In Our List
guestList.splice(0, 1, 'Fariha');
//Printing Invitation To New Guest List
guestList.forEach(function (guest) { return console.log("".concat(guest, ", would you like to have dinner with me?")); });
