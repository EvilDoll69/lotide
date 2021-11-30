# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @evildoll69/lotide`

**Require it:**

`const _ = require('@evildoll69/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: takes an array and return the first item from the array 
* `function2(tail)`: takes an array and return it without a first two items  
* `function3(middle)`: takes an array and if there are two or less item, function returns an empty arry, it the number of item in the array odd it returns the middle item, it the number of items in the array is even, the function returns two middle items
* `function1(eqArrays)`: compares two arrays and returns true/false 
* `function1(assertArraysEqual)`: takes two arrays and using an "eqArrays" function returns if the assertion has passed or failed 
* `function1(assertEqual)`: takes two arguments and checks if they are equal, returns passed or failed 

