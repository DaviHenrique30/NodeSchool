const fs = require('fs');
const buff = fs.readFileSync(process.argv[2]);
const resultado = buff.toString().split('\n').length -1 ;
console.log(resultado);

