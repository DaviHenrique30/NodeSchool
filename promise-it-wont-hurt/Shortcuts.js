Promise.resolve('Resolved promise')
  .then((value) => {
    console.log(value);
    throw new Error('Something went wrong');
  })
  .catch((err) => {
    console.log(err.message);
    return Promise.reject(err);
  })
  .then(() => {
    console.log('This should not be printed');
  })
  .catch((err) => {
    console.log(`Caught the error again: ${err.message}`);
  });
