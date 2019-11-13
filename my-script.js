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
function add(number1, number2) {
  return number1 + number2;
}
console.log(add(10, 20));

/**
 * Write a function called `subtract` that returns the difference between two numbers
 */
function subtract(number1, number2) {
return number1 - number2;
}
console.log(subtract(30, 5));

/**
 * Write a function called `min` that returns the smaller of two numbers
 */
/*
function min(number1, number2) {
  return Math.min(number1, number2);
}
console.log(min(37, 17));
*/
const min = (one, two) => one < two ? one : two;

/**
 * Write a function called `max` that returns the larger of two numbers
 */
 /*
function max(number1, number2) {
  return Math.max(number1, number2);
}
console.log(max(250, 350));
*/
const max = (one, two) => one > two ? one : two;


/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */
 /*
function isEven(value) {
if (value % 2 === 0) {
  return true;
}
else if (value % 1 === 0) {
  return false;
}
}
console.log(isEven(12));
console.log(isEven(9));
*/
function isEven(val) {
return (val % 2 === 0) ? true : false;
}

/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */
 /*
function isOdd(value) {
  if (value % 2 === 0) {
    return false;
  }
  else if (value % 1 === 0) {
    return true;
  }
}
console.log(isOdd(20));
console.log(isOdd(25));
*/
const isOdd = val => !isEven(val);

/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */
 function factorial(integer) {
   for (counter = 1, product = 1; integer >= counter; counter++) {
     product *= counter;
   }
   return product;
 }
console.log(factorial(6));

/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */
 function oddFactorial(integer) {
   let product = 1;
   for (let counter = 1; integer >= counter; counter += 2) {
     product *= counter;
   }
   return product;
 }
console.log(oddFactorial(6));

/**
 * Write a function that solves the Chessboard exercise from chapter two,
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Instead of printing each line using `console.log()`, build the grid using
 * a single string and return it at the end of the function
 */
 function chessboard() {
   let result="", row = 6, column = 6;
   for (let board = 0; board < column; board++) {
     for (let counter = 0; counter < row; counter++) {
       if (board % 2 == 0 && counter % 2 == 0) {
         result += " ";
       }
       else if (board % 2 != 0 && counter % 2 != 0) {
         result += " ";
       }
       else {
         result += "#";
       }
     }
     result += "\n";
   }
   return result;
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
