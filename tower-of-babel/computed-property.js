const evenOrOdd = +process.argv[2];
const obj = {
  [evenOrOdd % 2 === 0 ? "even" : "odd"]: evenOrOdd,
  [+process.argv[3] + evenOrOdd]: +process.argv[3] + evenOrOdd
};
console.log(obj);
