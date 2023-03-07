// instalar stackup module -> npm install stackup
var stack = require('stackup')
var domain = require('domain')
var readFile = require('fs').readFile

module.exports = scenario

function scenario(jsonPath, cb) {
    var d = domain.create()
    d.on('error', cb)
    d.run(function () {
        readFile(jsonPath, { encoding: 'utf-8' }, function (error, content) {
            cb(error, JSON.parse(content))
        })
    })
}
