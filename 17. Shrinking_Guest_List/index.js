//Guest List
var guestList = ['Sadiya', 'Sameera', 'Komal'];
//Guest Who Can't Come
var guestWhoCannotCome = 'Sadiya';
console.log("".concat(guestWhoCannotCome, " cannot come due to have some personal meeting."));
//Added New Guest In Our List
guestList.splice(0, 1, 'Fariha');
//Printing Invitation To New Guest List
guestList.forEach(function (guest) { return console.log("".concat(guest, ", would you like to have dinner with me?")); });
//Printing Statement
console.log("Good News! We have found a bigger dinner table.");
//Adding a Guest at the Beginning of an Array
guestList.unshift('Sana');
//Adding a Guest in the Middle of an Array
var arrayLength = guestList.length;
console.log(arrayLength / 2);
guestList.splice(2, 0, 'Hina');
//Adding a Guest at the End of an Array
guestList.push('Areesha');
//Printing New Set of Array
guestList.forEach(function (guest) { return console.log("".concat(guest, ", would you like to dinner with me?")); });
//Printing New Message
console.log("Unfortunately! The bigger dinner table will not arrive on time that is why I can only invite two people for dinner");
//Removing Guest from the List
while (guestList.length > 2) {
    var remeoved_guest = guestList.pop();
    console.log("Extremely sorry ".concat(remeoved_guest, "! You are not invited to the dinner"));
}
;
//Sending Message to Two Remaining Guests
guestList.forEach(function (guest) { return console.log("Luckily ".concat(guest, " you are still invited to the dinner")); });
//Removing Last Two Guest from the List
guestList.pop();
guestList.pop();
//Showing an Empty Array
console.log(guestList);
