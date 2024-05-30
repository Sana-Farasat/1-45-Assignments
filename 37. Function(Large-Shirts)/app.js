"use strict";
//Making A Function
function make_shirt(size = 'Large', printmessage = 'I Love Typescript') {
    console.log(`Creating a ${size} size with ${printmessage} prints on shirt.`);
}
//Calling Function With By Default Values
make_shirt();
//Calling Function Now With Medium Size And By Default Message
make_shirt('Medium');
//Calling Function Now With Small Size And Different Message
make_shirt('Small', 'I Love Python');
