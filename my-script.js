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
let add = (x, y) => {
  return x + y;
}

/**
 * Write a function called `subtract` that returns the difference between two numbers
 */
let subtract = (x, y) => {
  return x - y;
}

/**
 * Write a function called `min` that returns the smaller of two numbers
 */
let min = (x, y) => {
  if (x > y){
    return y;
  }
  else{
    return x;
  }
}

/**
 * Write a function called `max` that returns the larger of two numbers
 */
let max = (x, y) => {
  if (x > y){
    return x;
  }
  else{
    return y;
  }
}
/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */
let isEven = (num) => {
  if (num % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}

/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */
let isOdd = (num) => {
  if (num % 2 != 0){
    return true;
  }
  else{
    return false;
  }
}

/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */
let factorial = (num) => {
  if (num == 1){
    return num;
  }
  else{
    return num * factorial(num - 1);
  }
}

/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */
 let oddFactorial = (num) => {
   if (num == 1){
     return num;
   }
   else if(num % 2 == 0){
     return oddFactorial(num - 1);
   }
   else if(num % 2 != 0){
     return num * oddFactorial(num - 1);
   }
 }

/**
 * Write a function that solves the Chessboard exercise from chapter two,
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Instead of printing each line using `console.log()`, build the grid using
 * a single string and return it at the end of the function
 */
let chessboard = (str) => {
  str = "";
  for (let counter = 0; counter < 6; counter++){
    for(let otherCounter = 0; otherCounter < 6; otherCounter++){
      if (otherCounter % 2 == 0 && counter % 2 == 0 || counter % 2 != 0 && otherCounter % 2 != 0){
        str += " ";
      }
      else{
        str += "#";
      }
    }
    str += "\n";
  }
  return str;
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
