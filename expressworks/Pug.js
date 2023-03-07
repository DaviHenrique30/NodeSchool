//Precisa instalar o módulo Pug antes: npm install pug

var express = require('express')
var app = express()

// Set the views directory
app.set('views', process.argv[3])

// Set the view engine
app.set('view engine', 'pug')

// Define the route for the home page
app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() })
})

// Start the server
app.listen(process.argv[2], () => {
  console.log(`Server listening on port ${process.argv[2]}`)
})
