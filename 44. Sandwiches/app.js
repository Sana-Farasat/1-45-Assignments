"use strict";
//Declaring A Function With A Rest Parameter That Accepts Items Arguements Representing Our Sandwich
function Make_Sandwich(...items) {
    console.log('\nMaking a sandwich with a following items:\n');
    items.forEach(single_item => console.log(`- ${single_item}`));
    console.log('\n Now enjoy sandwich!\n');
}
//Calling A Function 3 Times With Different Number Of Arguements
Make_Sandwich('Chicken', 'Egg', 'Mayonnaise');
Make_Sandwich('Bread', 'Cheese', 'Cucumber');
Make_Sandwich('Bread', 'Mayonnaise', 'Cheese', 'Chicken', 'Cucumber', 'Onion', 'Tomato');
