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

function add(x, y) {
  return x + y
}
console.log(add(2, 3))

/**
 * Write a function called `subtract` that returns the difference between two numbers
 */

function subtract(x, y) {
  return x - y
}
console.log(subtract(5, 3))

/**
 * Write a function called `min` that returns the smaller of two numbers
 */

var min = function (x, y) {
  return (x <= y) ? x : y;
};
console.log(min(5, 10));

/**
 * Write a function called `max` that returns the larger of two numbers
 */
var max = function (x, y) {
  return (x >= y) ? x : y;
};
console.log(max(5, 10));

/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */

function isEven(x) {
  if (x % 2 === 0) return true;
  else return false;
}
console.log(isEven(4));

/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */

function isOdd(x) {
  if (x % 2 === 0) return false;
  else return true;
}
console.log(isOdd(5));

/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(5));

/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */

function oddFactorial(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * oddFactorial(x - 2);
  }
}
console.log(oddFactorial(5));

/**
 * Write a function that solves the Chessboard exercise from chapter two,
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Instead of printing each line using `console.log()`, build the grid using
 * a single string and return it at the end of the function
 */

function chessBoard(x, gridSize) {
  gridSize = gridSize || 8;
  x = x || "#";
  let pattern = "";
  for (let i = 0; i < gridSize / 2; i++)
    pattern += x + " ";

  for (let i = 0; i < gridSize; i++) {

    if (i % 2 === 0) {
      console.log(pattern);
    } else {
      console.log(" " + pattern)
    }
  }
}
chessBoard('#', 8);

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