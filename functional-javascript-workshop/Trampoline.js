function repeat(operation, num) {
  function _repeat(operation, num) {
    if (num <= 0) return;
    operation();
    return function() {
      return _repeat(operation, --num);
    };
  }

  return trampoline(_repeat.bind(null, operation, num));
}

function trampoline(fn) {
  while (fn && typeof fn === 'function') {
    fn = fn();
  }
  return fn;
}

module.exports = repeat;
