var slice = Array.prototype.slice

function logger(namespace) {
    return function () {
        var arg = slice.call(arguments);
        console.log.apply(null, [namespace].concat(arg))
    }
}

module.exports = logger
