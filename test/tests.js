describe('new-date', function () {

  var newDate = require('new-date')
    , assert  = require('component-assert');

  it('should accept date objects', function () {
    var date = new Date();
    assert(newDate(date).getTime() === date.getTime());
  });

  // Taken from MDN: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/parse
  it('should accept date strings', function () {
    assert(newDate("Wed, 09 Aug 1995 00:00:00 GMT").getTime() === 807926400000);
    assert(newDate("Thu, 01 Jan 1970 00:00:00 GMT").getTime() === 0);
    assert(newDate("Thu, 01 Jan 1970 00:00:00 GMT-0400").getTime() === 14400000);
  });

  it('should accept milliseconds', function () {
    var millis = 1363288923637;
    assert(newDate(millis).getTime() === millis);
  });

  it('should accept seconds', function () {
    var seconds = 1363288923;
    assert(newDate(seconds).getTime() === seconds * 1000);
  });

});