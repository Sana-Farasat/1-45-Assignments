//Creating An Array
let userNames = ['Ali','Ahmed','Admin','Zeeshan','Hamza'];

//Using For Each Loop On Array
userNames.forEach(userName => {
    if(userName === 'Admin'){
        console.log(`Hello ${userName}, would you like to see a status report?`)
    }else{
        console.log(` Hello ${userName}! Thank you for logging in again.`)
    }
  });

