// Add function take two arguments of a number type values and return a single number value of their sum
function add(numa, numb) {
    // this sounds like a good idea to be very strict  in type checking in javascript
    // I am going to comment it out for now and will comeback to it later in the functional programming path of this project.
    // Javascript doest not care about type and you will see one of the reasons.
    // if (typeof numa | numb !== 'number') {
    //     throw 'number type values required';
    // }
    return (numa + numb);
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

module.exports = { addn, add };