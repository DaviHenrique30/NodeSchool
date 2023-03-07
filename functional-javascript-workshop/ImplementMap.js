module.exports = function arrayMap(arr, fn) {
    var reduceResult = [];
    arr.reduce(function (memo, val, i, arr) {
        reduceResult.push(fn(val))
    }, null);
    return reduceResult
}
