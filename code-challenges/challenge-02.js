'use strict';

/* ------------------------------------------------------------------------------------------------

CHALLENGE 1 - Review

Write a function named raisedToTheThird that takes in an array of numbers and returns a new array of each of those numbers raised to the 3rd power (hint: look up Math.pow()). Use forEach to solve this problem.

------------------------------------------------------------------------------------------------ */

const raisedToTheThird = (arr) => {
  let newArr = [];

  arr.forEach(number => 
    newArr.push(Math.pow(number, 3)));
    return newArr;
};


module.exports = {raisedToTheThird};
