function curryN(fn, n = fn.length) {
  return function curried(...args) {
    if (args.length >= n) {
      return fn(...args);
    } else {
      return function(...moreArgs) {
        return curried(...args, ...moreArgs);
      }
    }
  }
}

module.exports = curryN;
