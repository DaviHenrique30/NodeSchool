const q = require('q');
const qio = require('q-io/http');

qio.read('http://localhost:7000')
  .then(function (userId) {
    return qio.read(`http://localhost:7001/${userId}`);
  })
  .then(function (userJson) {
    console.log(JSON.parse(userJson));
  })
  .catch(function (error) {
    console.error(error.message);
  })
  .done();
