var inputs = process.argv.slice(2);  
var result = inputs
  .map(word => word[0])
  .reduce((prev, curr) => prev + curr);
console.log(result);
