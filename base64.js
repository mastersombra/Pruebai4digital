const fs = require('fs');

let dataRegistroPeticion = fs.readFileSync('./registroPeticion.json');
let base64data = dataRegistroPeticion.toString('base64');

console.log(base64data + '\n\nSe convirtio el archivo json a base64\n');