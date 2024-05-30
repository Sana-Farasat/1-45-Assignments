//Creating A Function To Print Each Magician Name From An Array
function show_magicians(magicians:string[]){
   magicians.forEach(name => console.log(name));
   }

//Making An Array With Magicians Name
let magician_name=['Ali','Hamza','Ahmed'];

//Calling A Function To Print Each MAgician Name
show_magicians(magician_name);
//Or
show_magicians(['ali','hamza','ahmed']);
