//Declaring Variables
let current_users = ['Zain','Areeba','Osama','Zainab','Ali'];
let new_users = ['Maria','Areeba','Hafsa','Ali','Mehak'];

//Loop Through New Users To For Usernames Availability
new_users.forEach(new_one_user => {
    //Making A Condition For Username Already Exist And Save In Our Condition Variable
    let our_condition=current_users.some(current_one_user =>current_one_user.toLowerCase()===new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry! ${new_one_user} has already taken.`)
    }else{
        console.log(`This username ${new_one_user} is available.`)
    }
});