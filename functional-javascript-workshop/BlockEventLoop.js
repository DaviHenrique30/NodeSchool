function repeat(operation, num) {
  if (num <= 0) return;
  
  operation();
  
  // Release control of the event loop
  setImmediate(function() {
    repeat(operation, --num);
  });
}

module.exports = repeat;
