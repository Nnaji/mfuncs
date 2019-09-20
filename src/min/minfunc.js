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

module.exports = min;
