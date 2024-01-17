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

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.

Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.
------------------------------------------------------------------------------------------------ */

const allUpperCase = (str) => {
  let uppercaseStr = []

  str.forEach(s => {
    uppercaseStr.push(s.toUpperCase())
  });

  return uppercaseStr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function.

Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array.
------------------------------------------------------------------------------------------------ */

const greeting = (str) => {
  return str.toUpperCase() + "!";
};

const speaker = (arr, callback) => {
  let newArr = []

  arr.forEach(w => {
    newArr.push(callback(w));
  });
  
  return newArr;
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------ */

const addValues = (arr, val) => {
  arr.push(val);
};

const addNumbers = (num, arr, times, callback) => {
  for (let i = 0; i < times; i++) {
      callback(arr, num);
  }
  return arr;
};







module.exports = {addOne, addExclamation, allUpperCase, greeting, speaker, addValues, addNumbers};
