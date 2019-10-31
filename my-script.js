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
function add(a, b) {
  return a + b;
}


/**
 * Write a function called `subtract` that returns the difference between two numbers
 */
function subtract(a, b) {
  return a - b;
}


/**
 * Write a function called `min` that returns the smaller of two numbers
 */
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
console.log(min(9, 0))
console.log(min(0, 9))




/**
 * Write a function called `max` that returns the larger of two numbers
 */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(9, 0))
console.log(max(0, 9))
/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}



/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */
function isOdd(number) {
  if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}



/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */
function factorial(number) {
  for (count = 1, answer = 1; count <= number; count++) {
    answer = answer * count;

  }
  return answer;
}
console.log(factorial(3))


/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but
 * only if they are odd. If the starting number is even, don't include it.
 */

function oddFactorial(number) {
  for (count = 1, answer = 1; count <= number; count++) {
    if (count % 2 == 0) {

    } else {
      answer = answer * count;
    }

  }
  return answer;
}
console.log(oddFactorial(5))

/**
 * Write a function that solves the Chessboard exercise from chapter two,
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Instead of printing each line using `console.log()`, build the grid using
 * a single string and return it at the end of the function
 */

function chessboard(size) {
  for (count = 0, chessboard = ""; count < size; count++) {
    for (counter = 0; counter < size; counter++) {
      if (count % 2 == 0) {
        if (counter % 2 == 0) {
          chessboard += " "

        } else {
          chessboard += "#"
        }

      } else {
        if (counter % 2 == 0) {
          chessboard += "#"

        } else {
          chessboard += " "

        }

      }
    }
    chessboard += "\n"
  }
  return chessboard
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