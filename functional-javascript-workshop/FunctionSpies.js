function Spy(target, method) {
    var tracker = { count: 0 }
    var arg = target[method]

    target[method] = function () {
        tracker.count += 1;
        return arg.apply(this, arguments)
    }
    return tracker
}

module.exports = Spy
