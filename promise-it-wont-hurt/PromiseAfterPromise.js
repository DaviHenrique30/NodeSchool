first().then(function(secretVal){
  return second(secretVal);
}).then(function(fulfilledVal){
  console.log(fulfilledVal);
});
