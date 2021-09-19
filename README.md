# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @wavyadri/lotide`

**Require it:**

`const _ = require('@wavyadri/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArrayEqual()`: assert two arrays
- `assertEqual()`: assert two literals
- `assertObjectsEqual()`: assert two objects
- `countLetters()`: return occurance of each letter of a string
- `countOnly()`: count the occurance of a single item in an array
- `eqArrays()`: test if two arrays are equal or not
- `eqObjects()`: test if two objects are equal or not
- `findKey()`: return keys of an object
- `findKeyByValue()`: return the key corresponding to input value
- `flatten()`: return flattened nested array
- `head()`: return the first index element of an array
- `letterPositions()`: return position of specified letter in a string
- `map()`: implementation of JS map function
- `middle()`: return the most middle element in an odd array, and middle two elements of an even array
- `tail()`: return the array without first element
- `takeUntil()`: return an array with elements until a specified item
- `without()`: return a new array without specified element
