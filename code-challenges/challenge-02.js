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

/*
------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named addOne that, given an array of numbers, uses map to return a new array with each value simply incremented by 1.
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {
  return arr.map(a => a + 1);
};

/*
------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named addQuestion that, given an array of strings, uses map to return a new array containing each string followed by a question mark character.
------------------------------------------------------------------------------------------------ */

const addQuestion = (str) => {
  return str.map(s => s + '?');
}

/*
------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.

For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
------------------------------------------------------------------------------------------------ */

const forLoopTwoToThe = (int) => {
  for(let i = 0; i <= int.length; i++)
  return int.map( n => Math.pow(2, n));
}

module.exports = {raisedToTheThird, addOne, addQuestion, forLoopTwoToThe};
