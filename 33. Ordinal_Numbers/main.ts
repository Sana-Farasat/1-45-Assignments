//Creating An Array
let numbers = [1,2,3,4,5,6,7,8,9];

//Using For Loop
//1st Version With Variable
for(let oneNumber of numbers){
    let ordinalNumber : string;
    if(oneNumber === 1){
        ordinalNumber='st'
    }else if(oneNumber === 2){
        ordinalNumber='nd'
    }else if(oneNumber === 3){
        ordinalNumber='rd'
    }else{
        ordinalNumber='th'
    }
    console.log(`${oneNumber}${ordinalNumber}`)
};

//2nd Version Without Variable
for(let oneNumber of numbers){
    if(oneNumber === 1){
        console.log(oneNumber+'st')
    }else if(oneNumber === 2){
        console.log(oneNumber+'nd')
    }else if(oneNumber === 3){
        console.log(oneNumber+'rd')
    }else{
        console.log(oneNumber+'th')
    }
};