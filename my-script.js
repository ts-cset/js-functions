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
function add(a,x){
    return a + x;
}

/**
 * Write a function called `subtract` that returns the difference between two numbers
 */
function subtract(a,x){
      return a - x;

}

/**
 * Write a function called `min` that returns the smaller of two numbers
 */
 function min(a,x){
      return Math.min(a,x);
}

/**
 * Write a function called `max` that returns the larger of two numbers
 */
  function max(a,x) {
	return Math.max(a,x);
}
/**
 * Write a function called `isEven` that takes a single value and
 * returns `true` if it is even and `false` if it is odd
 */
        function isEven(a) {
        if( a % 2 == 0){
        return true;

} else{
   return false;


}

}

/**
 * Write a function called `isOdd` that takes a single value and
 * returns `false` if it is even and `true` if it is odd
 */
        function isOdd(a){
         if(a % 2 > 0 ){
		return true;
	} else if( a == 0) {
             return false;

	} else{
         return false;
}


}

/**
 * Write a function called `factorial` that takes a single integer and
 * returns the product of the integer and all the integers below it
 */




/**
 * Write a function called `oddFactorial` that takes a single integer and
 * returns the product of the integer and all the integers below it, but only if they are odd. If the starting number is odd, don't include it.
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
