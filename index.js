
var is = require('is');


/**
 * Returns a new Javascript Date object, allowing a variety of extra input types
 * over the native Date constructor.
 *
 * @param {Date|String|Number} val
 */

module.exports = function newDate (val) {
  if (is.number(val)) return new Date(toMs(val));
  if (is.date(val)) return new Date(val.getTime()); // construtor woulda floored

  // default to letting the Date constructor parse it
  var date = new Date(val);

  // couldn't parse, but we have a string, assume it was a second/milli string
  if (is.nan(date.getTime()) && is.string(val)) {
    var millis = toMs(parseInt(val, 10));
    date = new Date(millis);
  }

  return date;
};


/**
 * If the number passed val is seconds from the epoch, turn it into milliseconds.
 * Milliseconds would be greater than 31557600000 (December 31, 1970).
 *
 * @param {Number} num
 */

function toMs (num) {
  if (num < 31557600000) return num * 1000;
  return num;
}