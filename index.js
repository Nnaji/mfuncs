const total = require('./src/scripts/js/addfunc');
const diff = require('./src/scripts/js/subfunc');
let numArray = [1, 2, 3, 4, 5];
let [one, two, three, four, five] = [1, 2, 3, 4, 5];

console.log('the total of 1 + 2 = ', total.add(one, two));
console.log('the total of 3 + 4 = ', total.add(three, four));
console.log('the total of 1 + 2 + 3 + 4 + 5 = ', total.addn(...[one, two, three, four, five]));
console.log('the total of 1 + 2 + 3 + 4 + 5 = ', total.addn(one, two, three, four, five));

console.log(numArray);

console.log('the difference of 4 - 2: ', diff.sub(four, two));