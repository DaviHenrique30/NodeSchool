var avg = (...args) => {
  let sum = args.reduce((sum, n) => sum + n);
  return sum / args.length;
};

var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

console.log(avg(...args));
