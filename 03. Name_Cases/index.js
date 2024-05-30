var personName = "Fariha";
//Lower Case
console.log(personName.toLowerCase());
//Upper Case
console.log(personName.toUpperCase());
//TitleCase
console.log(personName.replace('/\b\w\g', function (char) { return (char.toUpperCase()); }));
