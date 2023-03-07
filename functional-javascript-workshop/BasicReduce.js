function countWords(inputWords) {
  const count = inputWords.reduce((previous, current) => {
    if(!previous[current]){
      previous[current] = 1;
    }else{
      previous[current] ++;
    }
    return previous
  }, {})
  return count
}

module.exports = countWords
