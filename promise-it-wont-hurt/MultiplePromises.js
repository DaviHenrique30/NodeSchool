function all(promise1, promise2) {
  return new Promise(function (fulfill, reject) {
    var counter = 0;
    var values = [];

    promise1.then(function (value) {
      counter++;
      values[0] = value;
      if (counter >= 2) {
        fulfill(values);
      }
    });

    promise2.then(function (value) {
      counter++;
      values[1] = value;
      if (counter >= 2) {
        fulfill(values);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(function (values) {
    console.log(values);
  });
