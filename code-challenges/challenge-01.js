'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {
  let incrementedArray = [];

  arr.forEach(number => {
    incrementedArray.push(number + 1);
  });

  return incrementedArray;
};

module.exports = { addOne };
