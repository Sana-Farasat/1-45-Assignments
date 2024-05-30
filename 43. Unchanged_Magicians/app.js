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
// let great_magicians=make_great(magician_name)
//Calling Function show_magicians That Show Modified List Of Magicians Names
//show_magicians(great_magicians)
//Making A Copy Of Original Array Through .slice() Function
let copy_magicians_name = magician_name.slice();
//Modifying The Copied Array To Include 'The Great' With Their Names
let copy_great_magicians = make_great(copy_magicians_name);
//Showing Both Arrays Original And Copied
console.log('\nOriginal Array:\n');
show_magicians(magician_name);
console.log('\nCopied Array:\n');
show_magicians(copy_great_magicians);
