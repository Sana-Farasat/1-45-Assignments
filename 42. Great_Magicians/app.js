"use strict";
//Creating A Function To Print Each Magician Name From An Array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//Creating Another Function
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//Making An Array With Magicians Name
let magician_name = ['Ali', 'Hamza', 'Ahmed'];
//Saving Function Arguement In A Variable
let great_magicians = make_great(magician_name);
//Calling Function show_magicians That Show Modified List Of Magicians Names
show_magicians(great_magicians);
