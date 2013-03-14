var type = require('type');


module.exports = function newDate (date) {
  // Milliseconds would be greater than 31557600000 (December 31, 1970).
  if ('number' === type(date) && date < 31557600000) date = date * 1000;

  // By default, delegate to Date, which will return `Invalid Date`s if wrong.
  return new Date(date);
};