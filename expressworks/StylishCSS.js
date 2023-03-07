var express = require('express')
var stylus = require('stylus')
var path = require('path')
var app = express()
var stylesheetsPath = path.join('https://github.com/stylus/stylus', process.argv[3])
app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3]))
app.get('/', function(req, res) {
  res.sendFile(path.join(stylesheetsPath, 'index.html'))
})
app.listen(process.argv[2], function() {
  console.log(`Server listening on port ${process.argv[2]}`)
})

