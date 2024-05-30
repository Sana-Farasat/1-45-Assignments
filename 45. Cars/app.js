//Declaring A Function To Create A Car Objects With Optional Options
function Create_Car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //Add Optional Options To The Car Objects
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Calling A Function To Create A Car Object
var My_Car = Create_Car('Toyota', 'Corolla', 'Color:Black', 'Sunroof:True', 'Year:2024');
//Printing Variable To Ensure All The Information Is Stored Correctly In The Car Object
console.log(My_Car);
