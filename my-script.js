/***********************************
 * Add your functions in this file
 *
 * You can test your functions by running `npm test`
 * in your terminal in this directory. It will watch
 * for changes and check for correctness.
 *
 * For an example, you get the first for free!
 */

const greeting = (Carni) => {
  return `Hello, ${Carni}!`;
}

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
const add = function(x,y) {
  return x + y;
};


/**
 * Write a function called `subtract` that returns the difference between two numbers
 */
const subtract = function(x,y) {
  return x - y;
};


/**
 * Write a function called `min` that returns the smaller of two numbers
 */
const min = function(x,y) {
  return Math.min(x,y);
};
/**
 * Write a function called `max` that returns the larger of two numbers
 */
const max = function(x,y) {
  return Math.max(x,y);
};
/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */
 const isEven = function(x) {
   return x % 2 == 0;
 };
/**
*WHY IS THIS SO HARD?!?!?!?
*/


/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */
const isOdd = function(y) {
  return x % 2 == 1;

/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */

/*
*FORGET IT! I DID THE REST! IF I KEEP TRYING TO FIGURE
*THIS OUT, I'LL BE SPEAKING IN NUMBERS, LETTERS, AND
*SPECIAL CHARACTERS BY MORNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*IRL BASH COMMAND!!! I'M OUT!!!
 */ 

/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

/**
 * Write a function that solves the Chessboard exercise from chapter two,
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Instead of printing each line using `console.log()`, build the grid using
 * a single string and return it at the end of the function
 */


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

