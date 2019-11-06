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
  return (number1 + number2);
}
console.log(add(2, 2))
/**
 * Write a function called `subtract` that returns the difference between two numbers
 */
function subtract(number1, number2) {
  return (number1 - number2);
}
console.log(subtract(2, 2))

/**
 * Write a function called `min` that returns the smaller of two numbers
 */
function min(number1, number2) {
  return (Math.min(number1, number2));
}
console.log(min(2, 2))

/**
 * Write a function called `max` that returns the larger of two numbers
 */
function max(number1, number2) {
  return (Math.max(number1, number2));
}
console.log(max(2, 2))
/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */
function isEven(number) {
  if (number % 2 == 0) {
    return (true);
  } else {
    return (false);
  }
}
console.log(isEven(1));

/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */
function isOdd(number) {
  if (number % 2 == 0) {
    return (false);
  } else {
    return (true);
  }
}
console.log(isOdd(1));


/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */
function factorial(number) {
  let result = 1;
  for (let factors = 1; factors <= number; factors++) {
    result = (result * factors);
  }
  return (result);
}
console.log(factorial(4));
/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */
function oddFactorial(number) {
  let result = 1;
    for (let factors = 1; factors <= number; factors = factors + 2) {

      result = (result * factors);
    }
  return result;
};
console.log(oddFactorial(4));

/**
 * Write a function that solves the Chessboard exercise from chapter two,
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Instead of printing each line using `console.log()`, build the grid using
 * a single string and return it at the end of the function
 */
 function chessboard(number){
 let size = number;

 let board = "";

 for (let y = 0; y < size; y++) {
   for (let x = 0; x < size; x++) {
     if ((x + y) % 2 == 0) {
       board += " ";
     } else {
      board += "#";
     }
   }
   board += "\n";
 }
 return board;
}
 console.log(8);

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
