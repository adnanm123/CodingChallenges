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

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

const addExclamation = (arr) => {
  let newStringArray = [];

  arr.forEach(stringArray => {
    newStringArray.push(stringArray + '!');
  });

  return newStringArray;
};

module.exports = {addOne, addExclamation };
