
# new-date

  Component: creates a new Date, but accepts a few more input types than normal, like Unix timestamps.

## Installation

    $ component install segmentio/new-date

## API

### newDate(Date|String|Number)

  Returns a new Date object created from the input. The input can be:

  * Date objects
  * [date strings](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/parse)
  * millisecond numbers
  * second numbers
  * millisecond strings
  * second strings

```js
var newDate = require('new-date');

newDate(new Date);
newDate('Wed, 09 Aug 1995 00:00:00 GMT');
newDate(1363288923637);
newDate(1363288923);
newDate('1363288923637');
newDate('1363288923');
```

## License

  MIT
