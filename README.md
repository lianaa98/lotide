# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lianakan/lotide`

**Require it:**

`const _ = require('@lianakan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `countLetters(sentence)`: returns an object which counts the frequency of the occurance of each letter
* `countOnly(allItems, itemsToCount)`: counts the frequency of itemsToCount in the array allItems
* `eqArray(firstArr, secondArr)`: compares both arrays and returns true/false
* `eqObjects(object1, object2)`: compares both objects and returns true/false
* `findKey(object, callback)`: uses the callback function, loops through array and returns the key if the callback is true
* `findKeyByValue(obj, val)`: returns the key of val in an object obj
* `flatten(array)`: combines nested array into the array
* `head(array)`: returns the first value of an array
* `letterPositions(sentence)`: returns an object with the indexes of each letter in sentence
* `map(array, callback)`: clone of .map()
* `middle(array)`: returns the middle value(s) of an array
* `tail(array)`: returns an array without its head
* `takeUntil(array, callback)`: returns the sliced array until callback function is truthy
* `without(source, itemsToRemove)`: returns array without itemsToRemove