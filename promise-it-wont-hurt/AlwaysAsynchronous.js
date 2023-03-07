const promise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE');
});
promise.then((value) => {
  console.log(value);
});
console.log('MAIN PROGRAM');
