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
function add(x,y) {
  return x + y;
}

/**
 * Write a function called `subtract` that returns the difference between two numbers
 */
function subtract(x,y) {
  return x - y;
}

/**
 * Write a function called `min` that returns the smaller of two numbers
 */
function min(x, y) {
  return Math.min(x,y);
}

/**
 * Write a function called `max` that returns the larger of two numbers
 */
function max(x, y) {
  return Math.max(x,y);
}
/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */
function isEven(x) {
if (x % 2 == 0) {
  return true;
}else (x % 2 != 0)
  return false;
}


/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */
function isOdd(x) {
if (x % 2 == 0) {
  return false;
}else (x % 2 != 0)
  return true;
}


/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */
const factorial = function(x) {
  let product = 1;

  for (; x > 0; x --) {
    product *= integer;
  }
  return product;
};

/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */
const oddFactorial = function(x)
  for (let )
};

/**
 * Write a function that solves the Chessboard exercise from chapter two,
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Instead of printing each line using `console.log()`, build the grid using
 * a single string and return it at the end of the function
 */
const chessboard = function(size) {
  let board = '';

  for (let count = 1; count <= 8; count++) {
    if (count % 2 !==0) {
    board = board + " # # # #" + '\n';
    } else {
    board = board + "# # # # " + '\n';
    }
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
