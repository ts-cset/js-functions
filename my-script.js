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
const add = (x, y) => {
  return x + y;
};

/**
 * Write a function called `subtract` that returns the difference between two numbers
 */
 const subtract = (x, y) => {
   return x - y;
 };

/**
 * Write a function called `min` that returns the smaller of two numbers
 */
 const min = (x, y) => {
   if (x < y) {
     return x;
   } else return y;
 };

/**
 * Write a function called `max` that returns the larger of two numbers
 */

 const max = (x, y) => {
   if (x > y) {
     return x;
   } else return y;
 };

/*
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */
 const isEven = (x) => {
   if (x == 0){
    return true;
 }
   if (x == 1){
    return false;
   }
   else if (x > 0){
   return isEven(x - 2);
}
   else if (x < 0){
     return isEven(x + 2)
   }
 };

/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */
 const isOdd = (x) => {
   if (x == 0){
     return false;
 }
   if (x == 1){
     return true;
   }
   else if (x > 0){
     return isOdd(x - 2);
 }
   else if (x < 0){
     return isOdd(x + 2)
   }
 };

/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */
 const factorial = (x) => {

 if (x > 0){
   return x * factorial(x - 1);
 }
 else if (x == 0){
   return 1;
 }

};

/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */
 const oddFactorial = (x) => {
  if (x % 2 == 0){
    return oddFactorial(x - 1);
  }

  else if (x > 1){
    return x * oddFactorial(x - 2);
  }

  else if (x == 1){
    return 1;
  }

 };


/**
 * Write a function that solves the Chessboard exercise from chapter two,
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Instead of printing each line using `console.log()`, build the grid using
 * a single string and return it at the end of the function
 */
 const chessboard = (x) => {

  let char = "";
  for(let y = 0; y < x; y++){
    for(let c = 0; c < x; c++){

      if (y % 2 == 0 && c % 2 == 0 || y % 2 != 0 && c % 2 != 0){
        char = char + " ";
      }
      else{
        char = char + "#";
      }
    }
    char = char + "\n";
  }
return char;
 };


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
