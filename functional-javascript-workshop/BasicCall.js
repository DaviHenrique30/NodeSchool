function duckCount() {
  const arrSlice = Array.prototype.slice.call(arguments);
  const quackCount = arrSlice.reduce((acc, cur) => 'quack' in cur === true ? ++acc : acc, 0)
  return quackCount
}
module.exports = duckCount
