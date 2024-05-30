let personName = "Fariha";

//Lower Case
console.log(personName.toLowerCase());

//Upper Case
console.log(personName.toUpperCase());

//TitleCase
console.log(personName.replace('/\b\w\g', char => (char.toUpperCase())));