"use strict";
//Creating An Array
let userNames = ['Ali', 'Ahmed', 'Admin', 'Zeeshan', 'Hamza'];
//Clearing An Array
userNames = [];
if (userNames.length === 0) {
    console.log('Your array is empty, we need to find some users!');
}
//Using For Each Loop On Array
else {
    userNames.forEach(userName => {
        if (userName === 'Admin') {
            console.log(`Hello ${userName}, would you like to see a status report?`);
        }
        else {
            console.log(` Hello ${userName}! Thank you for logging in again.`);
        }
    });
}
;
