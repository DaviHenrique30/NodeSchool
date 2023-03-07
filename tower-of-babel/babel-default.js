var math = {}
math.PI = 3.141592;
var _sqrt = function (s, x, last) {
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
math.sqrt = function (s) {
    return _sqrt(s, s / 2.0, 0.0);
};
math.square = function (x) {
    return x * x;
};
export { math as default }
