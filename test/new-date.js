
describe('new-date', function () {

var newDate = require('new-date')
  , assert  = require('assert');

describe('dates', function () {
  it('new Date', function () {
    var date = new Date();
    assert(newDate(date).getTime() === date.getTime());
  });
});

describe('numbers', function () {
  it('1363288923637 (milliseconds)', function () {
    var millis = 1363288923637;
    var date = newDate(millis);
    assert(date.getTime() === millis);
  });

  it('1363288923 (seconds)', function () {
    var seconds = 1363288923;
    var date = newDate(seconds);
    assert(date.getTime() === seconds * 1000);
  });
});

describe('strings', function () {
  it('"string"', function () {
    var date = newDate('string');
    assert(isNaN(date.getTime()));
  });

  it('"Wed, 09 Aug 1995"', function () {
    var date = newDate("Wed, 09 Aug 1995");
    assert(date.getTime() === 807951600000);
  });

  it('"Wed, 09 Aug 1995 04:10:23 GMT"', function () {
    var date = newDate("Wed, 09 Aug 1995 04:10:23 GMT");
    assert(date.getTime() === 807941423000);
  });

  it('"2013-05-31" (MySQL)', function () {
    var date = newDate("2013-05-31");
    assert(date.getTime() === 1369958400000);
  });

  it('"2013-05-31 00:24:47" (MySQL)', function () {
    var date = newDate("2013-05-31 00:24:47");
    assert(date.getTime() === 1369985087000);
  });

  it('"2013-05-31T00:24:47" (ISO)', function () {
    var date = newDate("2013-05-31T00:24:47");
    assert(date.getTime() === 1369959887000);
  });

  it('"2013-09-04T01:06:46.983-0700" (ISO)', function () {
    var date = newDate("2013-09-04T01:06:46.983-0700");
    assert(date.getTime() === 1378282006983);
  });

  it('"2013-09-04T01:06:46.983Z" (ISO)', function () {
    var date = newDate("2013-09-04T01:06:46.983Z");
    assert(date.getTime() === 1378256806983);
  });

  it('"1363288923637" (milliseconds)', function () {
    var millis = '1363288923637';
    var date = newDate(millis);
    assert(date.getTime() === 1363288923637);
  });

  it('"1363288923" (seconds)', function () {
    var seconds = '1363288923';
    var date = newDate(seconds);
    assert(date.getTime() === 1363288923 * 1000);
  });
});

});