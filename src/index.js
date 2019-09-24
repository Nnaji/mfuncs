// Min function takes a variable length of Arguments and return their min value

function min(...args) {
  nargs = args;
  let mvSoFar = nargs[0];
  // please not that I could have used a normal for-loop to achieve the same result.
  for (i of nargs) {
    if (i < mvSoFar) {
      mvSoFar = i;
    }
  }
  return mvSoFar;
}

// This Function take two arguments and returns their difference as a single value

function sub(a, b) {
  return a - b;
}

// Add function take two arguments of a number type values and return a single number value of their sum
function add(numa, numb) {
  // this sounds like a good idea to be very strict  in type checking in javascript
  // I am going to comment it out for now and will comeback to it later in the functional programming path of this project.
  // Javascript doest not care about type and you will see one of the reasons.
  // if (typeof numa | numb !== 'number') {
  //     throw 'number type values required';
  // }
  return numa + numb;
}

// Addn function takes a variable length of
function addn(...args) {
  let result = 0;
  nargs = args;
  for (i of nargs) {
    result = result + i;
  }
  return result;
}

// a better way to write the addn function is using functional style
// reusing the add function in conjunction with reduce javascript built-in function

// this addx function takes a list of numeric values and call reduce function to sum them up
function addx(arr) {
  return arr.reduce(add);
}

module.exports = {
  addn: addn,
  add: add,
  addx: addx,
  sub: sub,
  min: min,
};
