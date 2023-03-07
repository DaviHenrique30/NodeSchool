//Precisa ser instalado o módulo body-parser => npm install body-parser

var express = require('express')
var bodyparser = require('body-parser')
var app = express()

// Use the urlencoded middleware to parse form data
app.use(bodyparser.urlencoded({ extended: false }))

// Define the form processing route
app.post('/form', function(req, res) {
 console.log(req.body)
 res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])

