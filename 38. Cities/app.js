"use strict";
//Making A Function
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
//Calling A Function
describe_city('Karachi');
describe_city('Islamabad');
describe_city('Madina', 'Saudi Arabia');
