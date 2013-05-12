var type = require('type');


/**
 * Returns a new Javascript Date object, allowing a variety of extra input types
 * over the native one.
 *
 * @param {Date|String|Number} input
 */

module.exports = function newDate (input) {

  // Convert input from seconds to milliseconds.
  input = toMilliseconds(input);

  // By default, delegate to Date, which will return `Invalid Date`s if wrong.
  var date = new Date(input);

  // If we have a string that the Date constructor couldn't parse, convert it.
  if (isNaN(date.getTime()) && 'string' === type(input)) {
    var milliseconds = toMilliseconds(parseInt(input, 10));
    date = new Date(milliseconds);
  }

  return date;
};


/**
 * If the number passed in is seconds from the epoch, turn it into milliseconds.
 * Milliseconds would be greater than 31557600000 (December 31, 1970).
 *
 * @param seconds
 */

function toMilliseconds (seconds) {
  if ('number' === type(seconds) && seconds < 31557600000) return seconds * 1000;
  return seconds;
}