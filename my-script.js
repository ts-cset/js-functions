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

 function add(a,b){
  add = a+b;
  return add;
}

/**
 * Write a function called `subtract` that returns the difference between two numbers
 */

 function subtract(a,b){
   subtract = a-b;
   return subtract;
 }

/**
 * Write a function called `min` that returns the smaller of two numbers
 */

 function min(a, b){
  min=Math.min(a, b);
  return min;
};

/**
 * Write a function called `max` that returns the larger of two numbers
 */

 function max(a, b){
  max=Math.max(a, b);
  return max;
};

/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */

 function isEven(a){
   if(a % 2 == 0){
     console.log("True");
   }
   else{
     console.log("False");
   }
 }


/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */

 function isOdd(a){
   if(isOdd % 2 != 0){
     console.log("True");
   }
   else{
     console.log("False");
   }
 }

/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */

 function factorial(a){
   if (a == 0){
     return 1;
   }
   else {
     return factorial(a-1)*a;
   }
 }

/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */

 function oddFactorial(a){
   if (a == 0 && a % 2 == 0){
     return 1;
   }
   else {
     return oddFactorial(a-1)*a;
   }
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
