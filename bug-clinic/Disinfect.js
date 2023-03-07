var today = 'today';

console.log('date is', timestamp());
console.log('today is', today);

function timestamp() {
  today = new Date();
  return today;
}
