var http = require('q-io/http')

var jsonProm = http.read('http://localhost:1337').then(function (resposta) {
    console.log(JSON.parse(resposta))
}, console.error).done()