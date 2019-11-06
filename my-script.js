/***********************************
 * Add your functions in this file
 *
 * You can test your functions by running `npm test`
 * in your terminal in this directory. It will watch
 * for changes and check for correctness.
 *
 * For an example, you get the first for free!
 */


/**
 * Write a function called `greeting` that returns the string `Hello, <name>!`
 * where <name> is passed to the function as an argument
 */
const greeting = (name) => {
  return `Hello, ${name}!`;
};


/**
 * Write a function called `add` that returns the sum of two numbers
 */
const add = (x,y) => x+y;

/**
 * Write a function called `subtract` that returns the difference between two numbers
 */

const subtract = (x, y) => x - y;
/**
 * Write a function called `min` that returns the smaller of two numbers
 */
const min = function (x,y) {
  if (x === y) {
    return null;
  } else if (x > y) {
    return y;
  } else {
    return x;
  }
}

/**
 * Write a function called `max` that returns the larger of two numbers
 */
const max = function (x,y) {
  if (x===y) {
    return null;
  } else if (x > y){
    return x;
  } else {
    return y;
  }
}
/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */
const isEven = function (n) {
  if (n % 2 === 0) {
    return true;
  } else if (n % 2 === 1) {
    return false;
  } else {
    return isEven(n + 2);
  }
}

/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */
const isOdd = function (n) {
  if (n % 2 === 1) {
    return true;
  } else if (n % 2 === 0) {
    return false;
  } else {
    return isOdd(n + 2);
  }
}

/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */
const factorial = function (n) {
  let total = 1;
  for (i=1; i<= n; i++){
    total*=i;
  } return total;
}


/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */
const oddFactorial = function (n) {
  let total = 1;
  for (i=1; i<= n; i++){
    if ( i % 2 === 1) {
    total*=i;
  } else if (i % 2 === 0) {
    total*=1;
  }
} return total;
}

/**
 * Write a function that solves the Chessboard exercise from chapter two,
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Instead of printing each line using `console.log()`, build the grid using
 * a single string and return it at the end of the function
 */
const chessboard = function (n) {
let board='';
for (let line=1; line<= n; line++){
  for (let character=1; character <= n; character++){
    if(line % 2 !==0){
      //odd Lines
      board += character % 2 !== 0 ? ' ' : '#';
    } else {
      //even Lines
      board += character % 2 !== 0 ? '#': ' ';
    }
  }
    board += '\n';
  }
  return board;
}

/*******************************************
 * DO NOT CHANGE ANYTHING BELOW THIS LINE!
 */
module.exports = {
  greeting: typeof greeting === 'function' ? greeting : null,
  add: typeof add === 'function' ? add : null,
  subtract: typeof subtract === 'function' ? subtract : null,
  min: typeof min === 'function' ? min : null,
  max: typeof max === 'function' ? max : null,
  isEven: typeof isEven === 'function' ? isEven : null,
  isOdd: typeof isOdd === 'function' ? isOdd : null,
  factorial: typeof factorial === 'function' ? factorial : null,
  oddFactorial: typeof oddFactorial === 'function' ? oddFactorial : null,
  chessboard: typeof chessboard === 'function' ? chessboard : null,
};

