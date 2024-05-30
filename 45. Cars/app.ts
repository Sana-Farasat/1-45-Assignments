//Declaring A Function To Create A Car Objects With Optional Options
function Create_Car(manufacturer,model,...options){
    let car={
        manufacturer:manufacturer,
        model:model
    }

    //Add Optional Options To The Car Objects
    options.forEach(option =>{
        let[key,value]=option.split(":");
        car[key.trim()] = value.trim();
    })
    return car;
}

//Calling A Function To Create A Car Object
let My_Car=Create_Car('Toyota','Corolla','Color:Black','Sunroof:True','Year:2024')

//Printing Variable To Ensure All The Information Is Stored Correctly In The Car Object
console.log(My_Car);