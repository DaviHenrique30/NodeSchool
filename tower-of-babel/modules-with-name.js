import * as math from './babel-modules.js';
var arg1 = process.argv[2];
var arg2 = process.argv[3];
var PI = math.PI;
var sqrt = math.sqrt;
var square = math.square;
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
