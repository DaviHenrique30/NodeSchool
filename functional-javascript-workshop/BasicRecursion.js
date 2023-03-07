function reduce(arr, fn, initial) {
  return (function reduceOnce(index, previous){
    if(index >= arr.length){
      return previous;
    }
    return reduceOnce(index + 1, fn(previous, arr[index], index, arr));
  }(0, initial));
}
module.exports = reduce
