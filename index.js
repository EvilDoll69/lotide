const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require(`./eqArrays`);
const assertArraysEqual = require(`./assertArraysEqual`);
const assertEqual = require(`./assertEqual`); 
const without = require(`./without`);
const takeUnit = require(`./takeUntil`);
const map = require(`./map`);
const letterPositions = require(`./letterPositions`);
const findKeyByValue = require(`./findKeyByValue`);
const findKey = require(`./findKey`);
const eqObjects = require(`./eqObjects`);
const countOnly = require(`./countOnly`);
const countLetters = require(`./countLetters`);
const assertObjectsEqual = require(`./assertObjectsEqual`);


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual, 
  without: without,
  takeUnit: takeUnit,
  map: map,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
};